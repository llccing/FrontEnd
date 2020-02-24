# vue inspect [path...]

这个命令是将webpack的配置打印出来，`inspect` 这个单词的意思是“检查、检验”。


## 源码探索

```js
program
  .command('inspect [paths...]')
  // 通过 vue-cli-service 检查项目中的 webpack 配置
  .description('inspect the webpack config in a project with vue-cli-service')
  // 这里对应 webpack 的 mode
  .option('--mode <mode>')
  .option('--rule <ruleName>', 'inspect a specific module rule')
  .option('--plugin <pluginName>', 'inspect a specific plugin')
  .option('--rules', 'list all module rule names')
  .option('--plugins', 'list all plugin names')
  .option('-v --verbose', 'Show full function definitions in output')
  .action((paths, cmd) => {
    require('../lib/inspect')(paths, cleanArgs(cmd))
  })
```

### 参数解析

- **--mode <mode>**，打印测试或者正式环境下的 webpack 配置，例如：`vue inspect --mode development` 或者 `vue inspect --mode production`。
- **--rule <ruleName>**，打印某个模块的规则，例如：`vue inspect --rule stylus`。
- **--plugin <pluginName>**，打印某个插件的配置，例如：`vue inspect --plugin transform-modules`。
- **--rules**，打印所有的规则的名字列表
- **--plugins**，打印所有插件的名字列表
- **-v --verbose**，展示全部的配置

```js
servicePath = resolve.sync('@vue/cli-service', { basedir: cwd })
const binPath = path.resolve(servicePath, '../../bin/vue-cli-service.js')
if (fs.existsSync(binPath)) {
    execa('node', [
      binPath,
      'inspect',
      ...(args.mode ? ['--mode', args.mode] : []),
      ...(args.rule ? ['--rule', args.rule] : []),
      ...(args.plugin ? ['--plugin', args.plugin] : []),
      ...(args.rules ? ['--rules'] : []),
      ...(args.plugins ? ['--plugins'] : []),
      ...(args.verbose ? ['--verbose'] : []),
      ...paths
    ], { cwd, stdio: 'inherit' })
  }
```
从上面可以看到，其实这个inspect命令主要是用到了 `@vue/cli-service` 的命令，然后参数都传了过去。


### `@vue/cli-service/bin/vue-cli-service.js`

顺藤摸瓜我们看下这个文件的内容，首先载入 `../lib/Service` 这个类，然后实例化，并且执行 `service` 实例的 `run()` 方法。
```js
const Service = require('../lib/Service')
const service = new Service(process.env.VUE_CLI_CONTEXT || process.cwd())

const rawArgv = process.argv.slice(2)
const args = require('minimist')(rawArgv, {
  boolean: [
    // build
    'modern',
    'report',
    'report-json',
    'inline-vue',
    'watch',
    // serve
    'open',
    'copy',
    'https',
    // inspect
    'verbose'
  ]
})
const command = args._[0]

service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})
```

再看下 `Service` 类的构造函数