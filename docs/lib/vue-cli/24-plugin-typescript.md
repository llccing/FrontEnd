# @vue/cli-plugin-typescirpt

对于这个插件的基本内容，可以看下我[翻译的 README](https://llccing.github.io/FrontEnd/blog/translate/vue-cli-plugin-typescript-readme.html) ，相信这样你应该对这个插件有个基本的了解了。

## Service

Service 的内容大部分和 `@vue/cli-plugin-babel` 的内容重复，不赘述，几个不一样的地方：

```js
// 这里判断如果不是多页应用，则进行以下处理
if (!projectOptions.pages) {
  config.entry('app')
    .clear()
    .add('./src/main.ts')
}
```
这里的 projectOptions 是[项目默认配置](https://github.com/llccing-demo/vue-cli/blob/e9fd9a716cb0ad856e842f76d3d69e5ff29ae9c0/packages/@vue/cli-service/lib/options.js#L81) + `vue.config.js` 两部分内容合并起来的。

**执行时机**，不知道你会不会有这样的疑问，那么这个 Service 插件到底是什么时候执行的呢。其实我们[前面也提到过](https://llccing.github.io/FrontEnd/lib/vue-cli/20-plugin.html#安装并执行插件)，比如我们调试项目时，会执行 `yarn serve` 那么其实是执行了 `vue-cli-service serve`，所以在这个时机，如果我们安装 `@vue/cli-plugin-typescript` 插件，那么它的 Service 部分则会执行。


还有个之前没有碰到的写法是，这里注册了新的命令：
```js
// 判断如果没有安装 eslint 插件
if (!api.hasPlugin('eslint')) {
  // 注册 lint 命令
  api.registerCommand('lint', {
    description: 'lint source files with TSLint',
    usage: 'vue-cli-service lint [options] [...files]',
    options: {
      '--format [formatter]': 'specify formatter (default: codeFrame)',
      '--no-fix': 'do not fix errors',
      '--formatters-dir [dir]': 'formatter directory',
      '--rules-dir [dir]': 'rules directory'
    }
  }, args => {
    return require('./lib/tslint')(args, api)
  })
}
```

我们看到 lint 命令的处理逻辑在 `./lib/tslint`：

```js
// 可以看到这里用到了 tslint
const tslint = require('tslint')
const ts = require('typescript')
...

// 这里其实有新的发现，vue-template-compiler原来能够解析 vue 文件的部分内容
const vueCompiler = require('vue-template-compiler')
const { script } = vueCompiler.parseComponent(content, { pad: 'line' })

```

[vue-template-compiler](https://github.com/vuejs/vue/tree/dev/packages/vue-template-compiler) 这个就是 Vue 中的代码了。

## Prompts

这里我们先看下 `Prompts`，为啥呢，因为 `Generator` 中的配置信息部分就来自 `Prompts`：

```js
// these prompts are used if the plugin is late-installed into an existing
// project and invoked by `vue invoke`.

// 如果这个插件使用 `vue invoke`命令，后安装到一个已经存在的项目中时，这些对话才会被使用。
const prompts = module.exports = [
  {
    // 是否使用 classComponent
    name: `classComponent`,
    type: `confirm`,
    message: `Use class-style component syntax?`,
    default: true
  },
  {
    name: `useTsWithBabel`,
    type: `confirm`,
    message: 'Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?'
  },
  {
    name: `lint`,
    type: `confirm`,
    message: `Use TSLint?`
  },
  {
    name: `lintOn`,
    type: `checkbox`,
    when: answers => answers.lint,
    message: `Pick lint features:`,
    choices: [
      {
        name: 'Lint on save',
        value: 'save',
        checked: true
      },
      {
        name: 'Lint and fix on commit' + (hasGit() ? '' : chalk.red(' (requires Git)')),
        value: 'commit'
      }
    ]
  },
  {
    // 将 js 转换为 ts
    name: `convertJsToTs`,
    type: `confirm`,
    message: `Convert all .js files to .ts?`,
    default: true
  },
  {
    name: `allowJs`,
    type: `confirm`,
    message: `Allow .js files to be compiled?`,
    default: false
  }
]
```

默认的 typescript 对话[在这里](https://github.com/llccing-demo/vue-cli/blob/82dbbeb07a02a7212d9f9c0019f49436ba77dc70/packages/@vue/cli/lib/promptModules/typescript.js#L1)

## Generator

了解了 `Prompts` 后，再看 `Generator` 就会清晰一些，基本的内容和前面一致，不赘述，看下新的东西：

```js
// 这里将插件自身的 `package.json` 文件引入了
const pluginDevDeps = require('../package.json').devDependencies

module.exports = (api, {
  classComponent,
  tsLint,
  lintOn = [],
  convertJsToTs,
  allowJs
}, _, invoking) => {
  ...
  api.extendPackage({
    devDependencies: {
      // 这里使用插件的 typescript 版本来作为安装依赖的版本
      // 达到了维护一致性的目的
      // 不用同时分别维护插件 `package.json` 的版本和此处的版本
      typescript: pluginDevDeps.typescript
    }
  })

  ...
  // 在创建完成后 执行 lint 修复文件
  api.onCreateComplete(() => {
    return require('../lib/tslint')({}, api, true)
  })

  ...
  // 这里执行转换
  require('./convert')(api, { tsLint, convertJsToTs })
}
```

这里看下 `onCreateComplete` 方法：

```js
  /**
   * push 一个当文件被写入磁盘之后才会调用的回调函数。
   *
   * @param {function} cb
   */
  onCreateComplete (cb) {
    this.afterInvoke(cb)
  }

  afterInvoke (cb) {
    this.generator.afterInvokeCbs.push(cb)
  }
```
所以 `onCreateComplete` 其实是 push 了一个回调函数，待之后执行。

然后再看下 `require('./convert')` 这里的 `convert` 函数：

```js
api.postProcessFiles(files => {
    if (convertJsToTs) {
      // 删除所有有同名 ts 文件的js文件，然后简单的将其他 js 文件重命名为 ts 文件
      ...
    } else {
      // rename only main file to main.ts
      // 仅仅重命名 main.js 为 main.ts
      const tsFile = api.entryFile.replace(jsRE, '.ts')
      let content = files[api.entryFile]
      if (tsLint) {
        // 这个函数的逻辑在下面解析
        content = convertLintFlags(content)
      }
      files[tsFile] = content
      delete files[api.entryFile]
    }
  })
```

然后了解下 `api.postProcessFiles` 方法：

```js
  /**
   * push 一个文件中间件 -- 它将在所有普通文件中间件执行后再执行
   *
   * @param {FileMiddleware} cb
   */
  postProcessFiles (cb) {
    this.generator.postProcessFilesCbs.push(cb)
  }
```

`convertLintFlags` 这个方法我们也看下：
```js
module.exports = function convertLintFlags (file) {
  return file
    // 主要是将 eslint 的规则，转成 tslint 的规则
    .replace(/\/\*\s?eslint-(enable|disable)([^*]+)?\*\//g, (_, $1, $2) => {
      if ($2) $2 = $2.trim()
      return `/* tslint:${$1}${$2 ? `:${$2}` : ``} */`
    })
    .replace(/\/\/\s?eslint-disable-(next-)?line(.+)?/g, (_, $1, $2) => {
      if ($2) $2 = $2.trim()
      return `// tslint:disable-${$1 || ''}line${$2 ? `:${$2}` : ``}`
    })
}
```

同时 `Generator` 中也有模板，模板的写法大量使用了 [yaml-front-matter](https://github.com/dworthen/js-yaml-front-matter) 从字符串或者文件中解析 [YAML](https://www.ruanyifeng.com/blog/2016/07/yaml.html) 来进行继承和替换。

## Migrator

Migrator 中的逻辑很简单：

```js
module.exports = api => {
  // 这个升级的迁移方式，暂时来看升级一下 typescirpt 依赖的版本就可以了。
  api.extendPackage(
    {
      devDependencies: {
        typescript: require('../package.json').devDependencies.typescript
      }
    },
    { warnIncompatibleVersions: false }
  )
}
```
