# vue create <app-name>

首先我们看第一个命令，`vue create <app-name>`，用来创建项目的命令。

### `@vue/cli/bin/vue.js`

首先从 `/bin/vue.js` 开始，这一部分一共做了以下几个事：

1. 检测当前的node版本是否符合期望的版本，这里提一下这句 `process.version`，[`process`](http://nodejs.cn/api/process.html#process_process) 是全局变量，它提供当前 node.js 进程的信息并对其进行控制。因为他是全局变量，所以不需要 `require()` 也可以使用。

`process` 打印的部分内容如下
```js
{
  version: 'v12.13.0',
  versions: {
    node: '12.13.0',
    v8: '7.7.299.13-node.12',
    uv: '1.32.0',
    zlib: '1.2.11',
    brotli: '1.0.7',
    ares: '1.15.0',
    modules: '72',
    nghttp2: '1.39.2',
    napi: '5',
    llhttp: '1.1.4',
    http_parser: '2.8.0',
    openssl: '1.1.1d',
    cldr: '35.1',
    icu: '64.2',
    tz: '2019a',
    unicode: '12.1'
  },
  arch: 'x64',
  platform: 'darwin',
  release: {
    name: 'node',
    lts: 'Erbium',
    sourceUrl: 'https://nodejs.org/download/release/v12.13.0/node-v12.13.0.tar.gz',
    headersUrl: 'https://nodejs.org/download/release/v12.13.0/node-v12.13.0-headers.tar.gz'
  },
  ......
}
```
可以看到这里面的信息丰富。

2. 通过 commander 注册命令，第一个是 `vue create <app-name>` 命令，<app-name> 表示传入的参数名。

```js
program
  .command('create <app-name>')
  .description('create a new project powered by vue-cli-service')
  .option('-p, --preset <presetName>', 'Skip prompts and use saved or remote preset')
  .option('-d, --default', 'Skip prompts and use default preset')
  ......
  .action((name, cmd) => {
    const options = cleanArgs(cmd)
    if (minimist(process.argv.slice(3))._.length > 1) {
      console.log(chalk.yellow('\n Info: You provided more than one argument. The first one will be used as the app\'s name, the rest are ignored.'))
    }
    // --git makes commander to default git to true
    if (process.argv.includes('-g') || process.argv.includes('--git')) {
      options.forceGit = true
    }
    require('../lib/create')(name, options)
  })
```

`const options = cleanArgs(cmd)` 这一行中 cleanArgs() 方法的作用是解析传递给 `vue create xxx` 命令的参数，cmd的格式如下，
```js
Command {
  commands: [],
  options: [
    Option {
      flags: '-p, --preset <presetName>',
      required: true,
      optional: false,
      bool: true,
      short: '-p',
      long: '--preset',
      description: 'Skip prompts and use saved or remote preset'
    },
    ......
}
```

而当我们给 vue create 命令传递参数时，例如 `vue create test-app -p 23123 -f` 那么结构会变成如下

```js
Command {
  commands: [],
  options: [
    Option {
      flags: '-p, --preset <presetName>',
      required: true,
      optional: false,
      bool: true,
      short: '-p',
      long: '--preset',
      description: 'Skip prompts and use saved or remote preset'
    },
    ......
  // 设置的参数会变成 Command 对象的属性
  git: true,
  preset: '23123',
  force: true
```

下面这段代码是调用了 `/lib/create.js`并且将 name 和 options 传了过去。 `create.js` 的文件内容比较少，下面这段代码，说的是如果项目名字是 `"."` 那么就会直接在当前文件夹下生成内容，这个特点解决了先在 gitlab 上创建好项目，然后再在本地生成的项目内容的需求。
```js
const inCurrent = projectName === '.'
const name = inCurrent ? path.relative('../', cwd) : projectName
```

### `@vue/cli/lib/create.js`

在 `create.js` 中校验了项目项目名字是否正确，通过插件 [validate-npm-package-name](https://github.com/npm/validate-npm-package-name) 来做，如果名字是 "."，则会通过提示来确认是否直接在当前目录创建，如果当前目录有内容则会提示是否覆盖，接下来调用 `Creator` 对象，传入 项目名字（`name`）、目标目录（`targetDir`）、和`getPromptModules()` 方法的返回值，这个方法返回 `@vue/cli/lib/promptModules` 下的所有的需要提示的内容。


看下 `getPromptModules` 方法，这个方法返回一个数组，数组中每个元素的内容通过下文提到的 `@vue/cli/lib/promptModules/babel.js` 文件可以返现，每个元素都是函数。
```js
exports.getPromptModules = () => {
  return [
    'babel',
    'typescript',
    'pwa',
    'router',
    'vuex',
    'cssPreprocessors',
    'linter',
    'unit',
    'e2e'
  ].map(file => require(`../promptModules/${file}`))
}
```

我们找一个 `@vue/cli/lib/promptModules` 目录下的文件看下，`@vue/cli/lib/promptModules/babel.js`
```js
module.exports = cli => {
  cli.injectFeature({
    name: 'Babel',
    value: 'babel',
    short: 'Babel',
    description: 'Transpile modern JavaScript to older versions (for compatibility)',
    link: 'https://babeljs.io/',
    checked: true
  })

  cli.onPromptComplete((answers, options) => {
    if (answers.features.includes('ts')) {
      if (!answers.useTsWithBabel) {
        return
      }
    } else if (!answers.features.includes('babel')) {
      return
    }
    options.plugins['@vue/cli-plugin-babel'] = {}
  })
}
```
首先他返回一个函数，这个函数的参数有 `injectFeature` 和 `onPromptComplete` 两个方法。

通过 `@vue/cli/lib/Creator.js` 的构造函数中的 `const promptAPI = new PromptModuleAPI(this) promptModules.forEach(m => m(promptAPI))` 这两行可以知道 `@vue/cli/lib/promptModules/babel.js` 中的参数 cli 其实是 `PromptModuleAPI` 的实例，而 `PromptModuleAPI` 这个类的内容如下
```js
module.exports = class PromptModuleAPI {
  constructor (creator) {
    this.creator = creator
  }

  injectFeature (feature) {
    this.creator.featurePrompt.choices.push(feature)
  }

  injectPrompt (prompt) {
    this.creator.injectedPrompts.push(prompt)
  }

  injectOptionForPrompt (name, option) {
    this.creator.injectedPrompts.find(f => {
      return f.name === name
    }).choices.push(option)
  }

  onPromptComplete (cb) {
    this.creator.promptCompleteCbs.push(cb)
  }
}
```
这样我们就明白了 `@vue/cli/lib/promptModules/babel.js` 中参数 cli 为啥能够直接调用 `injectFeature` 和 `onPromptComplete` 方法了。`injectFeature` 的作用是将功能特性注册到 Creator 实例中，而 `onPromptComplete` 则是注册了回调函数。

### `@vue/cli/lib/Creator.js`

在 `@vue/cli/lib/create.js` 的最后是 `const creator = new Creator(name, targetDir, getPromptModules())` 和 `await creator.create(options)` 实例化 Creator 对象，然后调用它的 create 方法将 optoins 传过去。

下面来看下实例化的过程，代码如下
```js
constructor (name, context, promptModules) {
    super()

    // name就是项目名字
    this.name = name
    // context 表示项目路径
    this.context = process.env.VUE_CLI_CONTEXT = context
    const { presetPrompt, featurePrompt } = this.resolveIntroPrompts()
    this.presetPrompt = presetPrompt
    this.featurePrompt = featurePrompt
    this.outroPrompts = this.resolveOutroPrompts()
    this.injectedPrompts = []
    this.promptCompleteCbs = []
    this.afterInvokeCbs = []
    this.afterAnyInvokeCbs = []

    this.run = this.run.bind(this)

    const promptAPI = new PromptModuleAPI(this)
    promptModules.forEach(m => m(promptAPI))
  }
```

`resolveIntroPrompts()`  这个方法的作用是初始化预设的提示和功能的提示，预设提示就是载入 `.vuerc` 文件中的预设配置如果你曾经存过预设那么则会有内容，类似下面这样的内容

```js
{
  "useTaobaoRegistry": false,
  "latestVersion": "4.2.2",
  "lastChecked": 1581493828978,
  "packageManager": "yarn",
  "presets": {
    "llccing-default": {
      "useConfigFiles": true,
      "plugins": {
        "@vue/cli-plugin-babel": {},
        "@vue/cli-plugin-router": {
          "historyMode": false
        },
        "@vue/cli-plugin-eslint": {
          "config": "base",
          "lintOn": [
            "save"
          ]
        }
      },
      "cssPreprocessor": "stylus"
    }
  }
}
```
和默认的预设混合，而功能的提示则暂时为空。接下来是执行 `resolveOutroPrompts()` 方法，这个方法的主要是初始化一些其他问题，例如：配置文件是否拆开，是否保存当前预设，然后判断下你是否有除了 `npm` 之外的，如 `yarn`、`Pnpm`如果有的话，则选择通过哪种方式安装依赖。

接下来有这样一行，`this.run = this.run.bind(this)`（这里温习下 bind 函数的作用：`bind()` 返回一个新函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用），因为Creator 是 Class 的写法，并且 run 函数中使用了 `this.context` 的写法，所以这里需要用 bind 函数改变 run 函数中 this 指向。

```js
const promptAPI = new PromptModuleAPI(this)
promptModules.forEach(m => m(promptAPI))
```
这两行前文已经提到，forEach 的循环执行完成，则将 `promptModules` 目录下的函数都执行了一遍，执行的时候会把功能、提示和回调函数都作为元素 push 到 Creator 类的属性中。

#### create 函数

从 `@vue/cli/lib/create.js` 文件的最后一行调用 `await creator.create(options)` 传入到 Creator.js 中的 create方法的参数只有一个，就是 `{ git: true, preset: '23123', force: true }` 这样的结构。

Creator.js 的 `create(cliOptions, preset=null)`，cliOptions 参数就是我们从 create.js 中传过来的，接下来的逻辑如下
```js
      if (cliOptions.preset) {
        // 如果有 preset 预设就通过 resolvePreset 函数载入
        // vue create foo --preset bar
        // resolvePreset 函数支持载入本地预设、json格式的本地预设、以及远程预设3种
        preset = await this.resolvePreset(cliOptions.preset, cliOptions.clone)
      } else if (cliOptions.default) {
        // 没有预设则使用默认预设
        // vue create foo --default
        preset = defaults.presets.default
      } else if (cliOptions.inlinePreset) {
        // 当然他还支持内联预设
        // vue create foo --inlinePreset {...}
        try {
          preset = JSON.parse(cliOptions.inlinePreset)
        } catch (e) {
          error(`CLI inline preset is not valid JSON: ${cliOptions.inlinePreset}`)
          exit(1)
        }
      } else {
        preset = await this.promptAndResolvePreset()
      }
```

1. 然后直接注册了核心服务 `@vue/cli-service`；确定项目包管理器；向外派发了事件 `this.emit('creation', { event: 'creating' })`（TODO，暂记一下，后期看哪里监听了该事件）；生成 package.json 文件

2. 初始化 git，派发事件 `this.emit('creation', { event: 'git-init' })`

3. 安装插件，派发事件 `this.emit('creation', { evnet: 'plugins-install' })`

4. 执行生成器，派发事件 `this.emit('creation', { event: 'invoking-generators' })`，通过 `resolvePlugins()` 载入插件，并且根据插件的提示通过命令行提问。实例化 `Generator`，并且调用它的 `generate` 方法。

5. `Generator` 在构造和函数中收集过滤了项目中插件的名字，接着在 `initPlugins` 方法中循环遍历所有的插件，每次循环都会生成 `GeneratorAPI` 实例，然后载入插件中的 `Generator.js` 或者 `Generator/index.js`，如果存在 `hooks` 方法则执行它，将 `cb` push 到 Generator 实例的 `afterAnyInvokeCbs` 属性中，接下来遍历 `plugins`，它的类型是个数组，我们从 Creator.js 的 create 方法中这一行 `const plugins = await this.resolvePlugins(preset.plugins)`，然后看 `resolvePlugins` 方法
```js
  // { id: options } => [{ id, apply, options }]
  async resolvePlugins (rawPlugins) {
    // ensure cli-service is invoked first
    rawPlugins = sortObject(rawPlugins, ['@vue/cli-service'], true)
    const plugins = []
    for (const id of Object.keys(rawPlugins)) {
      const apply = loadModule(`${id}/generator`, this.context) || (() => {})
      let options = rawPlugins[id] || {}
      if (options.prompts) {
        const prompts = loadModule(`${id}/prompts`, this.context)
        if (prompts) {
          log()
          log(`${chalk.cyan(options._isPreset ? `Preset options:` : id)}`)
          options = await inquirer.prompt(prompts)
        }
      }
      plugins.push({ id, apply, options })
    }
    return plugins
  }
```
从这个方法中可以看到，每个 apply 函数其实是插件的 index.js 中返回的默认函数。

然后 plugins 的循环中再次在每次循环中生成 GeneratorAPI 实例，作为 apply 方法的第一个参数出传入（所以我们这里可以知道，插件中的 cli 参数，其实是 GeneratorAPI 的实例），apply方法执行的过程中做了哪些事呢。比如 extendPackage（写入依赖）、render（初始化渲染函数）、injectImports（注入导入的资源）等等，但是重要的一点是，这些都只是初始化操作，实际的内容还没有开始写入。

然后是 `generate` 函数执行，上面的初始化工作做完后。`await this.resolveFiles()` 这个函数做的是将插件初始化时收集的各种文件的处理数组进行执行，然后将返回的内容收集到files字段。最后调用 `writeFileTree()` 函数将之前的文件都写入。这样 `Generator` 的 `generate` 函数就执行完成了。

6. 接下来派发 `this.emit('creation', { event: 'deps-intall' })` 事件，进行依赖的安装。完成安装后，派发 `this.emit('creation', { event: 'completion-hooks' })` 事件，然后将收集的钩子都执行完成。

7. 生成 `README.md` 文件，进行 git 的 add、commit操作。
8. 派发 `this.emit('creation', { event: 'done' })` 事件，执行完成。

