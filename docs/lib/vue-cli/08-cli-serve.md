# vue serve [entry]

> serve a .js or .vue file in development mode with zero config

在开发模式下零配置的调试一个 .js 或者 .vue 文件

## 调试配置
```js
{
  // 使用 IntelliSense 了解相关属性。 
  // 悬停以查看现有属性的描述。
  // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "启动程序",
      "skipFiles": [
        "<node_internals>/**"
      ],
      "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
      // 对应着在 test 目录下新建了 App.vue 文件
      "args": ["serve", "packages/test/App.vue"]
    }
  ]
}
```

## 源码探索

### 命令注册

```js
program
  .command('serve [entry]')
  .description('serve a .js or .vue file in development mode with zero config')
  .option('-o, --open', 'Open browser')
  .option('-c, --copy', 'Copy local url to clipboard')
  .option('-p, --port <port>', 'Port used by the server (default: 8080 or next available port)')
  .action((entry, cmd) => {
    // 载入了 @vue/cli-service-global 这个包，并调用 serve 方法
    loadCommand('serve', '@vue/cli-service-global').serve(entry, cleanArgs(cmd))
  })
```

### @vue/cli-service-global

`serve` 方法就两行，加载入口，然后实例化服务，执行 `run('serve', args)` 方法
```js
exports.serve = (_entry, args) => {
  const entry = resolveEntry(_entry, 'serve')
  createService(entry).run('serve', args)
}
```

看下创建服务的代码
```js
function createService (entry, asLib) {
  // 实例化 Service
  return new Service(context, {
    projectOptions: {
      compiler: true,
      lintOnSave: 'default'
    },
    plugins: [
      babelPlugin,
      eslintPlugin,
      globalConfigPlugin(context, entry, asLib)
    ]
  })
}
```
被实例化的 `Serice` 是 `const Service = require('@vue/cli-service')` 引入进来的，所以后面最终做事的还是 `@vue/cli-servcie` 类， `@vue/cli-service` 的分析在 [vue inspect](https://llccing.github.io/FrontEnd/lib/vue-cli/06-cli-inspect.html) 中已经提到了，不赘述。


### @vue/cli-service/lib/commands/serve.js

我们这里着重看下 `serve` 命令回调函数中的逻辑，
```js
    const url = require('url')
    const { chalk } = require('@vue/cli-shared-utils')
    // 这里载入了 webpack
    const webpack = require('webpack')
    // 这里载入了 webpack-dev-server
    const WebpackDevServer = require('webpack-dev-server')
    // 这个portfinder 解决了多个项目需要手动修改 port 的痛点
    const portfinder = require('portfinder')
    const prepareURLs = require('../util/prepareURLs')
    const prepareProxy = require('../util/prepareProxy')
    const launchEditorMiddleware = require('launch-editor-middleware')
    const validateWebpackConfig = require('../util/validateWebpackConfig')
    const isAbsoluteUrl = require('../util/isAbsoluteUrl')

    // 这里设置了webpack入口
    const entry = args._[0]
    if (entry) {
      webpackConfig.entry = {
        app: api.resolve(entry)
      }
    }
    // 这里通过 portfinder 获取了可用端口
    const port = await portfinder.getPortPromise()
    
    // 这里创建了 webpack 实例
    const compiler = webpack(webpackConfig)

    // 实例创建了 WebpackDevServer 实例
    const server = new WebpackDevServer(compiler, Object.assign({
      logLevel: 'silent',
      clientLogLevel: 'silent',
      historyApiFallback: {
        disableDotRule: true,
        rewrites: genHistoryApiFallbackRewrites(options.publicPath, options.pages)
      },
      contentBase: api.resolve('public'),
      watchContentBase: !isProduction,
      hot: !isProduction,
      injectClient: false,
      compress: isProduction,
      publicPath: options.publicPath,
      overlay: isProduction // TODO disable this
        ? false
        : { warnings: false, errors: true }
    }, projectDevServerOptions, {
      https: useHttps,
      proxy: proxySettings,
      // eslint-disable-next-line no-shadow
      before (app, server) {
        // launch editor support.
        // this works with vue-devtools & @vue/cli-overlay
        app.use('/__open-in-editor', launchEditorMiddleware(() => console.log(
          `To specify an editor, specify the EDITOR env variable or ` +
          `add "editor" field to your Vue project config.\n`
        )))
        // allow other plugins to register middlewares, e.g. PWA
        api.service.devServerConfigFns.forEach(fn => fn(app, server))
        // apply in project middlewares
        projectDevServerOptions.before && projectDevServerOptions.before(app, server)
      },
      // avoid opening browser
      open: false
    }))


    // todo 这里的这段代码在 webpack 相关阅读完成后再回头看
    compiler.hooks.done.tap('vue-cli-service serve', stats => {
```


## 小插曲
调试的过程中报这个错误，官方已经将该问题[修复了](https://github.com/vuejs/vue-cli/commit/69f6805211f451147ac0d737d5b591bf2c02d8ac)

```js
Module build failed (from ./node_modules/eslint-loader/index.js):
Error: BaseConfig:
	Configuration for rule "no-debugger" is invalid:
	Severity should be one of the following: 0 = off, 1 = warn, 2 = error (you passed '"process.env.NODE_ENV === "production" ? "error" : "off""').

    at validateRuleOptions (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:138:19)
    at /Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:193:9
    at Array.forEach (<anonymous>)
    at validateRules (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:190:30)
    at validateConfigArray (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/shared/config-validator.js:337:9)
    at CascadingConfigArrayFactory._finalizeConfigArray (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:417:13)
    at CascadingConfigArrayFactory.getConfigArrayForFile (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cascading-config-array-factory.js:271:21)
    at CLIEngine.isPathIgnored (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cli-engine.js:951:18)
    at CLIEngine.executeOnText (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint/lib/cli-engine/cli-engine.js:868:38)
    at lint (/Users/didi/Documents/project/llccing-demo/vue-cli/node_modules/eslint-loader/index.js:278:17)
output.js:103

output.js:103
You may use special comments to disable some warnings.
output.js:103
Use // eslint-disable-next-line to ignore the next line.
output.js:103
Use /* eslint-disable */ to ignore all warnings in a file.
```