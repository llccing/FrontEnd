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

/**
 * args = {
 *  _: ["inspect"],
 *  copey: false,
 *  https: false
 *  ....等9个属性，都为 false
 * }
 * command = "inspect"
 * rawArgv = ["inspect"]
 */
service.run(command, args, rawArgv).catch(err => {
  error(err)
  process.exit(1)
})
```


### Service

再看下 `Service` 类的构造函数，捋一下代码主要做了几个事

1. 通过package.json生成pkg对象
2. 取得所有的plugin
3. 得到项目的模式

这里是说下，取得插件，通过 `this.plugins = this.resolvePlugins(plugins, useBuiltIn)` 这行代码实现。

然后 `resolvePlugins` 方法中先取得内部插件，包含 `serve`,`build`,`inspect`,`help` 这4个命令，对应每个文件都会返回一个函数和一个对象，这个函数我们前面提到过，且所有插件都会返回这个函数，`module.exports = (api, options) => {}`，这里的 `api` 参数表示的是 `PluginAPI` 实例， `options` 表示项目配置，会将项目的默认配置 `@vue/cli-service/lib/options` 和用户项目根目录中的配置合并`/vue.config.js`。一个对象是 `module.exports.defaultModes = { serve: 'development'| 'production' }`，告知该插件的使用场景。

```js
  const idToPlugin = id => ({
    id: id.replace(/^.\//, 'built-in:'),
    apply: require(id)
  })

  let plugins

  const builtInPlugins = [
    './commands/serve',
    './commands/build',
    './commands/inspect',
    './commands/help',
    // config plugins are order sensitive
    // config 中的配置，主要是 webpack 的配置。
    './config/base',
    './config/css',
    './config/prod',
    './config/app'
  ].map(idToPlugin)
```

resolvePlugins 最后返回的 `plugins` 我们打印一下：
```js
Array(8) [
  {id: "built-in:commands/serve", apply: (api, options) => { … }}, 
  {id: "built-in:commands/build", apply: (api, options) => { … }}, {id: "built-in:commands/inspect", apply: (api, options) => { … }}
  {id: "built-in:config/app", apply: (api, options) => { … }}
  ...
  ]
```
这里因为这里没有其他的 `vuePlugin` 所以 plugin的个数就是默认初始化的8个插件。

下面这个reduce执行后，会返回一个对象 `{ serve: 'development'| 'production' }` （todo， 这里有个疑问，这会根据每个插件的模式进行覆盖，那么最后一个插件的模式决定所有模式吗？）

```js
    // resolve the default mode to use for each command
    // this is provided by plugins as module.exports.defaultModes
    // so we can get the information without actually applying the plugin.
    // 在不需要插件执行(apply)的情况下，通过 `module.exports.defaultModes` 配置，载入每个命令的默认模式。
    this.modes = this.plugins.reduce((modes, { apply: { defaultModes }}) => {
      return Object.assign(modes, defaultModes)
    }, {})
```
所以最后得到的 `modes` 的结构是这样的，展示每个插件的执行模式
```js
{
  serve: "development", 
  build: "production", 
  inspect: "development"
}
```

接下来看 `Service` 类的 `run` 方法接收3个参数，根据前面的内容，这个三个参数为：`"inspect"`，`{ _: ["inspect"], copey: false, https: false ....等9个属性，都为 false }`，`["inspect"]`。

`run` 函数中首先执行的是 `init` 方法载入环境变量，用户配置和执行插件方法。
这里因为我们是在 vue-cli 项目中，所以 环境变量和用户配置（vue.config.js）都是空的。但是会载入默认的配置，这个配置包函webpack配置。

接下来这段代码就是执行插件的apply（就是插件的默认导出方法）方法，将默认的项目配置传入 apply方法中，同时api是指 PluginAPI。
```js
// apply plugins.
this.plugins.forEach(({ id, apply }) => {
  if (this.pluginsToSkip.has(id)) return
  apply(new PluginAPI(id, this), this.projectOptions)
})
```

同时我们通过 `@vue/cli-service/lib/commands/serve.js` 可以看到，插件的默认导出函数中的逻辑也很清晰，调用了 registerCommand方法，传入了3个参数：命令名字、配置、回调函数

```js
api.registerCommand('serve', {
  description: 'start development server',
  ...
}, async function serve (args) {
  ...
})
```

registerCommand 函数的逻辑在这个 `@vue/cli-service/lib/PluginAPI.js` 文件中也能够清晰看见，其中这个 `this.service` 就是指 Service 实例。
```js
registerCommand (name, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts
    opts = null
  }
  // 注意这里fn，后面用到了。
  this.service.commands[name] = { fn, opts: opts || {}}
}
```

我们再回来看 `init` 方法，最后就是载入项目的webpack配置。

再次回到 `run` 方法中，
```js
// 在一切都初始化之后，检验下本次传入的命令是否存在
let command = this.commands[name]
if (!command && name) {
  error(`command "${name}" does not exist.`)
  process.exit(1)
}

if (!command || args.help || args.h) {
  command = this.commands.help
} else {
  args._.shift() // 移除命令本身
  rawArgv.shift()
}

// 这里是新的开始了，从command中取得fn，这个fn就是 `@vue/cli-service/lib/commands/inspect.js` 在这个插件的默认导出函数中执行 api.registerCommand 函数传入的第三个参数
const { fn } = command
return fn(args, rawArgv)
```

所以，我们接下里看下 `fn` 的逻辑
```js
args => {
  // 取得 全部的 webpack 配置
  const config = api.resolveWebpackConfig()
  // 取得上一步传来的参数
  const { _: paths, verbose } = args
  // 通过判断来参数是否为true，返回对应的信息
  if (args.rule) {
    res = config.module.rules.find(r => r.__ruleNames[0] === args.rule)
  } else if (args.plugin) {
    res = config.plugins.find(p => p.__pluginName === argplugin)
  }
  ...
  // 如果以上都没匹配到，那么则返回默认的全部 webpack 配置
  else {
    res = config
  }
}
```

至此， `vue inspect` 命令执行结束。