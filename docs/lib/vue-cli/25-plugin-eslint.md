# @vue/cli-plugin-eslint

对于这个插件的基本内容，可以看下我[翻译的 README](https://llccing.github.io/FrontEnd/blog/translate/vue-cli-plugin-eslint-readme.html) ，相信这样你应该对这个插件有个基本的了解了。

## Service

Service 服务中主要是增加 webpack 的配置和 注册了 `lint` 命令：

```js
module.exports = (api, options) => {
  if (options.lintOnSave) {
    const extensions = require('./eslintOptions').extensions(api)
    // 这里使用 loadModule 方法，允许用户自定义 ESLint 依赖版本。
    const { resolveModule, loadModule } = require('@vue/cli-shared-utils')
    const cwd = api.getCwd()
    const eslintPkg =
      // 这里在下文分析下
      loadModule('eslint/package.json', cwd, true) ||
      loadModule('eslint/package.json', __dirname, true)

    // eslint-loader 在 eslint 配置改变时不会破会缓存，所以我们需要手动地生成一个缓存标志将配置考虑在内。
    const { cacheIdentifier } = api.genCacheConfig(
      'eslint-loader',
      {
        'eslint-loader': require('eslint-loader/package.json').version,
        eslint: eslintPkg.version
      },
      [
        '.eslintrc.js',
        '.eslintrc.yaml',
        '.eslintrc.yml',
        '.eslintrc.json',
        '.eslintrc',
        'package.json'
      ]
    )
    ...
    // 接下来是 webpack 的配置部分，暂时省略。
  }

  // 这里注册了新的命令 `vue-cli-service lint`
  api.registerCommand(
    'lint',
    {
      description: 'lint and fix source files',
      usage: 'vue-cli-service lint [options] [...files]',
      options: {
        '--format [formatter]': 'specify formatter (default: codeframe)',
        '--no-fix': 'do not fix errors or warnings',
        '--no-fix-warnings': 'fix errors, but do not fix warnings',
        '--max-errors [limit]':
          'specify number of errors to make build failed (default: 0)',
        '--max-warnings [limit]':
          'specify number of warnings to make build failed (default: Infinity)'
      },
      details:
        'For more options, see https://eslint.org/docs/user-guide/command-line-interface#options'
    },
    args => {
      require('./lint')(args, api)
    }
  )
```

这里看下如果实现了 eslint 自定义和预置同时存在的：
```js
const cwd = api.getCwd()
const eslintPkg = 
  loadModule('eslint/package.json', cwd, true) ||
  loadModule('eslint/package.json', __dirname, true)
```

再看下 `api.getCwd()` [这个方法](https://github.com/llccing-demo/vue-cli/blob/d11ecc2151b3e05a6d5cc0e57ad2452909b71d3a/packages/@vue/cli-service/lib/PluginAPI.js#L45)：
```js
 /**
   * 当前工作目录（其实也就是项目目录，因为 Service 脚本执行是在项目根目录）
   */
  getCwd () {
    return this.service.context
  }
```

loadModule 的区别主要是第二个参数不同，这里有个关于 [__dirname 和 process.cwd() 区别](https://stackoverflow.com/questions/9874382/whats-the-difference-between-process-cwd-vs-dirname)的文档可以看下，所以这里会先在 项目目录下找用户定义的 ESLint 如果没有找到的情况下，再在 "源代码所在目录" -- 也就是 `@vue/cli-plugin-eslint` 这个插件中的 eslint。


```js
const { cacheIdentifier } = api.genCacheConfig(
  ...
```
缓存标志的生成和我们在 [`@vue/cli-plugin-babel`](https://llccing.github.io/FrontEnd/lib/vue-cli/23-plugin-babel.html#service) 的 Service 部分生成标志用的同一个方法。

关于命令注册，它是引用了 `lint.js`，
```js
...
require('./lint')(args, api)
```

再看先 `lint.js` 中部分内容：
```js
  // 这里可以看到，还是兼容前面提到用户自定义 eslint 的原则
  const { CLIEngine } = loadModule('eslint', cwd, true) || require('eslint')
  ...
  // 这里进行了 eslint 的初始化
  const engine = new CLIEngine(config)
  ...
  // 这里应该是进行了 lint 操作
  const report = engine.executeOnFiles(files)
  ...
  // 控制自动修复的逻辑
  if (config.fix) {
    CLIEngine.outputFixes(report)
  }
```

到此，主要的 Service 逻辑我们就过了一遍。

## Pormpts

```js
module.exports = [
  {
    name: 'config',
    type: 'list',
    message: `Pick an ESLint config:`,
    choices: [
      {
        name: 'Error prevention only',
        value: 'base',
        short: 'Basic'
      },
      ...
  },
  {
    name: 'lintOn',
    type: 'checkbox',
    message: 'Pick additional lint features:',
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
  }
```

对话一共两个，第一个是选择一种 ESLint 配置，第二个是选择 lint 的执行时机，默认是在文件保存的时候执行 lint。

## Generator

直接看代码：

```js
// 这里的 config、lintOn 参数，其实就是 对话中的两个问题
module.exports = (api, { config, lintOn = [] }, _, invoking) => {
  // 这里载入了默认的 eslint 配置
  const eslintConfig = require('../eslintOptions').config(api, config)
  // 这里的依赖是根据 config 选项决定的，不同的 eslint 规则对应不同的依赖
  const devDependencies = require('../eslintDeps').getDeps(api, config)

  const pkg = {
    scripts: {
      lint: 'vue-cli-service lint'
    },
    eslintConfig,
    devDependencies
  }

  ...

  // lint & fix after create to ensure files adhere to chosen config
  // for older versions that do not support the `hooks` feature
  // lint 和 修复了 vue-cli 老版本不支持 `hooks` 功能
  try {
    // 这里的这个写法，对于我们自己做版本处理相关，也很有用
    api.assertCliVersion('^4.0.0-beta.0')
  } catch (e) {
    if (config && config !== 'base') {
      api.onCreateComplete(() => {
        require('../lint')({ silent: true }, api)
      })
    }
  }
```

## Migrator

这里来看下 eslint 插件升级的逻辑：

```js
module.exports = async (api) => {
  // 首先获取项目的 package.json 文件
  const pkg = require(api.resolve('package.json'))
  
  // 取得本地 eslint 版本
  let localESLintRange = pkg.devDependencies.eslint

  // 如果项目是通过 Vue CLI 3.0 或者更早版本构建的，ESLint 依赖（ESLint v4）将在 @vue/cli-plugin-eslint 插件内部；
  // 在 Vue CLI v4 中他应该被提取到项目依赖中
  // 这里判断如果项目当前 Vue CLI 是3.x版本，并且项目没有单独安装 ESLint 时
  if (api.fromVersion('^3') && !localESLintRange) {
    localESLintRange = '^4.19.1'
    // 这里 针对你从 增加了相应的依赖
    api.extendPackage({
      devDependencies: {
        eslint: localESLintRange,
        'babel-eslint': '^8.2.5',
        'eslint-plugin-vue': '^4.5.0'
      }
    })
  }

  // 这里获得 eslint 的主版本号
  const localESLintMajor = semver.major(
    semver.maxSatisfying(
      ['4.99.0', '5.99.0', '6.99.0'],
      localESLintRange
    )
  )

  // 如果 主版本 已经是 6，说明是最新的，则直接返回
  if (localESLintMajor === 6) {
    return
  }

  // 如果 主版本 不是 6，则进行对话
  const { confirmUpgrade } = await inquirer.prompt([{
    name: 'confirmUpgrade',
    type: 'confirm',
    message:
    `Your current ESLint version is v${localESLintMajor}.\n` +
    `The lastest major version is v6.\n` +
    `Do you want to upgrade? (May contain breaking changes)\n`
  }])

  // 如果用户的答案是 true
  if (confirmUpgrade) {
    const { getDeps } = require('../eslintDeps')

    const newDeps = getDeps(api)
    // 这里根据用户已经选择 eslint 规则来设置
    if (pkg.devDependencies['@vue/eslint-config-airbnb']) {
      Object.assign(newDeps, getDeps(api, 'airbnb'))
    }
    if (pkg.devDependencies['@vue/eslint-config-standard']) {
      Object.assign(newDeps, getDeps(api, 'standard'))
    }
    if (pkg.devDependencies['@vue/eslint-config-prettier']) {
      Object.assign(newDeps, getDeps(api, 'prettier'))
    }

    api.extendPackage({ devDependencies: newDeps }, { warnIncompatibleVersions: false })

    ...
  }
}
```
