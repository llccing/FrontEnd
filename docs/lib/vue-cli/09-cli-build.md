# vue build [entry]

> build a .js or .vue file in production mode with zero config

在生产模式下零配置的构建一个 .js 或者 .vue 文件

## 源码探索

### 命令注册

```js
program
  .command('build [entry]')
  .description('build a .js or .vue file in production mode with zero config')
  .option('-t, --target <target>', 'Build target (app | lib | wc | wc-async, default: app)')
  .option('-n, --name <name>', 'name for lib or web-component mode (default: entry filename)')
  .option('-d, --dest <dir>', 'output directory (default: dist)')
  .action((entry, cmd) => {
    // 载入 @vue/cli-service-global，执行 build 方法
    loadCommand('build', '@vue/cli-service-global').build(entry, cleanArgs(cmd))
  })
```


### @vue/cli-service-global

`build` 方法的逻辑很简单，解析入口，创建 `Service` 实例再执行 `run` 方法。
```js
exports.build = (_entry, args) => {
  const entry = resolveEntry(_entry, 'build')
  const asLib = args.target && args.target !== 'app'
  if (asLib) {
    args.entry = entry
  }
  return createService(entry, asLib).run('build', args)
}
```

### @vue/cli-service/lib/commands/build/index.js

`Service` 实例的 `run` 方法传入 `build` 参数，执行的是 `build` 命令。

命令注册

```js
api.registerCommand('build', {
    description: 'build for production',
    usage: 'vue-cli-service build [options] [entry|pattern]',
    // 这里可以看到有非常多的选项
    options: {
      '--mode': `specify env mode (default: production)`,
      '--dest': `specify output directory (default: ${options.outputDir})`,
      ...
    }
  }, () => {
    // 这里主要是处理了默认配置，然后会走到 build 函数
    await build(Object.assign({}, args, {
      modernBuild: false,
      keepAlive: true
    }), api, options)
  } 
)
```

我们看下 `build` 函数
```js
// 这里载入了 webpack 配置
webpackConfig = require('./resolveAppConfig')(api, args, options)

// report 选项用到了 webpack-bundle-analyzer 插件，便于查看项目的资源依赖及大小
if (args.report || args['report-json']) {
  const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
  modifyConfig(webpackConfig, config => {
    const bundleName = args.target !== 'app'
      ? config.output.filename.replace(/\.js$/, '-')
      : isLegacyBuild ? 'legacy-' : ''
    config.plugins.push(new BundleAnalyzerPlugin({
      logLevel: 'warn',
      openAnalyzer: false,
      analyzerMode: args.report ? 'static' : 'disabled',
      reportFilename: `${bundleName}report.html`,
      statsFilename: `${bundleName}report.json`,
      generateStatsFile: !!args['report-json']
    }))
  })
}

// 这里执行了webpack的构建
webpack(webpackConfig, (err, stats) => {
```