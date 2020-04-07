# @vue/cli-plugin-babel

babel 用来做语法转换

## Service

```js
module.exports = (api, options) => {
  // 如果是 生产环境 并且 开启了 parallel（并行打包）则为 true
  const useThreads = process.env.NODE_ENV === 'production' && !!options.parallel
  const cliServicePath = path.dirname(require.resolve('@vue/cli-service'))
  // 载入需要额外使用 babel-loader 进行转化的目录
  const transpileDepRegex = genTranspileDepRegex(options.transpileDependencies)

  // try to load the project babel config;
  // if the default preset is used,
  // there will be a VUE_CLI_TRANSPILE_BABEL_RUNTIME env var set.
  // the `filename` field is required
  // in case there're filename-related options like `ignore` in the user config
  babel.loadPartialConfigSync({ filename: api.resolve('src/main.js') })

  api.chainWebpack(webpackConfig => {
    webpackConfig.resolveLoader.modules.prepend(path.join(__dirname, 'node_modules'))

    const jsRule = webpackConfig.module
      .rule('js')
        .test(/\.m?jsx?$/)
        .exclude
          .add(filepath => {
            // 总是转译 vue 文件中的 js 文件
            if (/\.vue\.jsx?$/.test(filepath)) {
              return false
            }
            // 排除了 cli-service 中的动态入口
            if (filepath.startsWith(cliServicePath)) {
              return true
            }

            // 仅仅当 @vue/babel-preset-app 预设使用时，引入 @babel/runtime
            if (
              process.env.VUE_CLI_TRANSPILE_BABEL_RUNTIME &&
              filepath.includes(path.join('@babel', 'runtime'))
            ) {
              return false
            }

            // check if this is something the user explicitly wants to transpile
            // 查看用户配置的需要转译的文件不能排除
            if (transpileDepRegex && transpileDepRegex.test(filepath)) {
              return false
            }
            // 不转译 node_modules 下的文件
            return /node_modules/.test(filepath)
          })
          .end()
        .use('cache-loader')
          .loader(require.resolve('cache-loader'))
          // api.genCacheConfig 这个方法我们看下
          .options(api.genCacheConfig('babel-loader', {
            '@babel/core': require('@babel/core/package.json').version,
            '@vue/babel-preset-app': require('@vue/babel-preset-app/package.json').version,
            'babel-loader': require('babel-loader/package.json').version,
            modern: !!process.env.VUE_CLI_MODERN_BUILD,
            browserslist: api.service.pkg.browserslist
          }, [
            'babel.config.js',
            '.browserslistrc'
          ]))
          .end()
    // 如果使用并行处理，则使用 thread-loader      
    if (useThreads) {
      const threadLoaderConfig = jsRule
        .use('thread-loader')
          .loader(require.resolve('thread-loader'))

      if (typeof options.parallel === 'number') {
        threadLoaderConfig.options({ workers: options.parallel })
      }
    }

    // 重点，应用babel-loader
    jsRule
      .use('babel-loader')
        .loader(require.resolve('babel-loader'))
  })
}
```

`@vue/cli-service/lib/PluginAPI.js`，我们看下 `genCacheConfig` 方法：
```js
  /**
   * 通过大量的变量生成一个缓存标志
   */
  // 根据前面的调用 id = babel-laoder
  // partialIdentifier = { '@babel/core': 'x.x.x', '@vue/babel-preset-app': 'x.x.x', 'babel-loader': 'x.x.x' }
  // configFiles = ['babel.config.js', '.browserslistrc']
  genCacheConfig (id, partialIdentifier, configFiles = []) {
    const fs = require('fs')
    // 这里可以看到 缓存目录是 项目的 node_modules/.cache/
    const cacheDirectory = this.resolve(`node_modules/.cache/${id}`)

    // 这是所有版本相关的变量集合
    const variables = {
      partialIdentifier,
      'cli-service': require('../package.json').version,
      'cache-loader': require('cache-loader/package.json').version,
      env: process.env.NODE_ENV,
      test: !!process.env.VUE_CLI_TEST,
      config: [
        fmtFunc(this.service.projectOptions.chainWebpack),
        fmtFunc(this.service.projectOptions.configureWebpack)
      ]
    }

    // 所有的配置文件
    if (!Array.isArray(configFiles)) {
      configFiles = [configFiles]
    }
    configFiles = configFiles.concat([
      'package-lock.json',
      'yarn.lock',
      'pnpm-lock.yaml'
    ])

    // 将配置文件也添加到 variables 变量上，保证唯一
    variables.configFiles = configFiles.map(file => {
      const content = readConfig(file)
      return content && content.replace(/\r\n?/g, '\n')
    })

    // 这里使用了 hash-sum 哈希生成器来生成唯一标志
    const cacheIdentifier = hash(variables)
    // 返回的对象，则是 cache-loader 需要的配置
    return { cacheDirectory, cacheIdentifier }
```

## Generator

```js
module.exports = api => {
  // 你很可能希望覆盖整个配置以确保他没有冲突的正常工作，例如，对于一个使用了 Jest 但是没有使用 Babel 的项目。
  // 它对于使用自己的特殊 babel 配置而没有使用 Babel 插件已有的配置很少见。
  delete api.generator.files['babel.config.js']


  // 这里修改 package.json 文件中的 babel 配置项；增加了 core.js@3 的依赖。
  api.extendPackage({
    babel: {
      // 我们看到 presets 来自 @vue/cli-plugin-babel/preset
      presets: ['@vue/cli-plugin-babel/preset']
    },
    dependencies: {
      'core-js': '^3.6.4'
    }
  })
}
```
这里我们就再看下 `@vue/cli-plugin-babel/preset`：
```js
module.exports = require('@vue/babel-preset-app')
```

这里就一句引用，内容来自 `@vue/babel-preset-app`：
```js
module.exports = (context, options = {}) => {
  ...
  return {
    sourceType: 'unambiguous',
    overrides: [{
      exclude: [/@babel[\/|\\\\]runtime/, /core-js/],
      presets,
      plugins
    }, {
      // there are some untranspiled code in @babel/runtime
      // https://github.com/babel/babel/issues/9903
      include: [/@babel[\/|\\\\]runtime/],
      presets: [
        [require('@babel/preset-env'), {
          useBuiltIns,
          corejs: useBuiltIns ? 3 : false
        }]
      ]
    }]
  }
}
```
`@vue/babel-preset-app` 经过处理之后导出的 presets 最终赋值给了 `package.json` 文件中 `babel.presets` 选项，至于其中的细节，我们将其放在 Babel 的后续分析中。

这里有一点需要注意的地方，虽然我们这里看到 `babel.presets` 的配置应该在 `package.json` 文件中，那么为啥有的项目并不是这样呢，这里要看下这个 prompt：

[useConfigFiles](https://github.com/llccing-demo/vue-cli/blob/773f8a47e9acd58abbd3a3821a906be550b4c010/packages/@vue/cli/lib/Creator.js#L421)

```js
{
  name: 'useConfigFiles',
  when: isManualMode,
  type: 'list',
  //  Babel, ESLint 等等这些配置文件放在哪里？
  message: 'Where do you prefer placing config for Babel, ESLint, etc.?',
  choices: [
    {
      // 放在专用的配置文件中
      name: 'In dedicated config files',
      value: 'files'
    },
    {
      // 放在 package.json 中
      name: 'In package.json',
      value: 'pkg'
    }
  ]
}
```

这个 prompt 的结果决定了配置文件放的位置，如果你这里的 `useConfigFiles` 选择 `In dedicated config files`，那么 再看[这里](https://github.com/llccing-demo/vue-cli/blob/773f8a47e9acd58abbd3a3821a906be550b4c010/packages/@vue/cli/lib/Creator.js#L195)，在 Creator 的 create 方法中：

```js
await generator.generate({
  extractConfigFiles: preset.useConfigFiles
})
```
这里将用户的选择传入了 `generator.generate` 方法：
```js
...
// extract configs from package.json into dedicated files.
this.extractConfigFiles(extractConfigFiles, checkExisting)
```

这里我们看下 `extractConfigFiles` 方法的主要逻辑：
```js
  extractConfigFiles (extractAll, checkExisting) {
    ...
    // 这里定义了一个提取方法
    const extract = key => {
      if (
        configTransforms[key] &&
        this.pkg[key] &&
        // do not extract if the field exists in original package.json
        // 如果 字段 存在于原始的 package.json 文件中，则不提取
        !this.originalPkg[key]
      ) {
        const value = this.pkg[key]
        const configTransform = configTransforms[key]
        const res = configTransform.transform(
          value,
          checkExisting,
          this.files,
          this.context
        )
        const { content, filename } = res
        // 因为操作的都是虚拟文件树，所以这里相当于创建单独的配置文件
        this.files[filename] = ensureEOL(content)
        // 这里删除提取的字段
        delete this.pkg[key]
      }
    }
    if (extractAll) {
      // 这里会循环 package.json 下的每一个字段，看是否需要提取
      for (const key in this.pkg) {
        extract(key)
      }
    }
  }
```

## migrator

这个工具主要是为了更加方便的升级，在前面讲 `vue upgrade` 命令时我们已经提到了[他是如何被调用](https://llccing.github.io/FrontEnd/lib/vue-cli/14-cli-upgrade.html)的。

我们来看下 `@vue/cli-plugin-babel` 的 migrator 的内部逻辑：

```js
module.exports = api => {
  // 这句话是个深坑，来，我们往里跳!
  api.transformScript(
    'babel.config.js',
    require('../codemods/usePluginPreset')
  )

  // 这里判断若是从 3.x 的版本升级，则增加 `core.js` 的依赖项
  if (api.fromVersion('^3')) {
    api.extendPackage(
      {
        dependencies: {
          'core-js': '^3.6.4'
        }
      },
      { warnIncompatibleVersions: false }
    )

    // TODO: implement a codemod to migrate polyfills
    // 这里是作者留下的待实现的内容，可以看到是计划在增加 migrator 增加自动化迁移
    api.exitLog(`core-js has been upgraded from v2 to v3.
If you have any custom polyfills defined in ${chalk.yellow('babel.config.js')}, please be aware their names may have been changed.
For more complete changelog, see https://github.com/zloirock/core-js/blob/master/CHANGELOG.md#300---20190319`)
  }
}
```

`api.transformScript` 这个方法是 `MigratorAPI` 继承自 `GeneratorAPI`，这里我们看下逻辑：

```js
/**
   * 针对 script 脚本 或者 .vue 文件中 script 部分执行 codemod
   * @param {string} file the path to the file to transform
   * @param {Codemod} codemod the codemod module to run
   * @param {object} options additional options for the codemod
   */
  transformScript (file, codemod, options) {
    this._injectFileMiddleware(files => {
      // 这里调用了 runCodemod 方法
      files[file] = runCodemod(
        codemod,
        { path: this.resolve(file), source: files[file] },
        options
      )
    })
  }
```


顺藤摸瓜我们再看下 `runCodemod` 方法：

```js
// 这里因引入了两个重要插件
const adapt = require('vue-jscodeshift-adapter')
let jscodeshift = require('jscodeshift')

module.exports = function runCodemod (transformModule, fileInfo, options = {}) {
  ...

  if (parser) {
    jscodeshift = jscodeshift.withParser(parser)
  }

  return adapt(transform)(fileInfo, api, options)
}
```

这里是借助了 [jscodeshift](https://github.com/facebook/jscodeshift) 来处理js文件内容。

我们看下 `require('../codemods/usePluginPreset')` 这里是如何处理js文件的：

```js
  // 这里都是在进行内容的替换
  root
    .find(j.Literal, { value: '@vue/app' })
    .replaceWith(j.stringLiteral('@vue/cli-plugin-babel/preset'))
  root
    .find(j.Literal, { value: '@vue/babel-preset-app' })
    .replaceWith(j.stringLiteral('@vue/cli-plugin-babel/preset'))
```
可以看到主要是替换某些关键词，这里的具体的语法我们暂时不深究，只需知道他是做了内容替换即可。

至此，`@vue/cli-plugin-babel`的解析也就结束了。
