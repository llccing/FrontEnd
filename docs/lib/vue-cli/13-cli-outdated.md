# vue outdated

> '(experimental) check for outdated vue cli service / plugins'

上面是代码中的功能描述原文，我理解这个是说：实验性的功能，用来检查 服务(@vue/cli-service) 或者 插件(官方插件@vue/cli-plugin-* 自定义插件vue-cli-plugin-*) 是否过期

## 调试配置

```js
{
  "program": "${workspaceFolder}/packages/@vue/cli/bin/vue",
  "args": [
    "outdated"
  ]
}
```
上面的这个调试配置是能够正常执行的，但是有一点缺憾的是，我现在还没有发现如何能能够在某个项目中执行 `vue outdated` 命令，然后能够在当前的 vue-cli 项目中打断点的方式。

所以其中的某些代码逻辑就不能实际执行到，当然这个对我们查看代码会有影响，但是没那么大。

## 源码探索

### 命令注册
```js
program
  .command('outdated')
  .description('(experimental) check for outdated vue cli service / plugins')
  .option('--next', 'Also check for alpha / beta / rc versions when upgrading')
  .action((cmd) => {
    require('../lib/outdated')(cleanArgs(cmd))
  })
```

### 主要逻辑
`@vue/cli/lib/outdated.js` 这个文件中也很清晰，加载 `./Upgrader` 类，实例化，调用 `checkForUpdates` 方法。

```js
const Upgrader = require('./Upgrader')

async function outdated (options, context = process.cwd()) {
  const upgrader = new Upgrader(context)
  return upgrader.checkForUpdates(options.next)
}
```

首先 `Upgrader` 实例化时，构造函数中初始了两个属性，并且又实例化了 PackageManager 类。
```js
this.pkg = getPkg(this.context)
this.pm = new PackageManager({ context })
```

这个 PackageManager 类我们可以通过他的方法来大致了解他的作用
```js
class PackageManager {
  async runCommand (command, args) {...}
  async install () {
    ...
    return await this.runCommand('install')
  }
  async add () {
    ...
    return await this.runCommand('add', [packageName, ...args])
  }
  async remove (packageName) {
    return await this.runCommand('remove', [packageName])
  }
  async upgrade (packageName) {
    ...
    return await this.runCommand('add', [packageName])
  }
}
```
主要是针对依赖包的处理，安装、添加、移除、升级，版本比较等。


下面看下这个方法，因为要做版本比较，所以需要有比较的源 -- 也就是最新版本。`getRemoteVersion` 这个方法是用来获取远程版本的
```js
async getRemoteVersion (packageName, versionRange = 'latest') {
  const metadata = await this.getMetadata(packageName)
  if (Object.keys(metadata['dist-tags']).includes(versionRange)) {
    // 这里判断如果版本匹配，则和就直接返回版本号
    return metadata['dist-tags'][versionRange]
  }
  const versions = Array.isArray(metadata.versions) ? metadata.versions : Object.keys(metadata.versions)
  // 然后这里返回所有匹配的版本中，最大的版本。
  return semver.maxSatisfying(versions, versionRange)
}
```

其中的 `this.getMetadata(packageName)` 这个方法的内容可以看下，
```js
const url = `${registry.replace(/\/$/g, '')}/${packageName}`
try {
  // 请求url，url类似这样 http://npm.intra.xiaojukeji.com/@vue/cli
  metadata = (await request.get(url, { headers })).body
  metadataCache.set(metadataKey, metadata)
  return metadata
} catch (e) {
  error(`Failed to get response from ${url}`)
  throw e
}
```

我通过curl的方式模仿request请求，`curl http://npm.intra.xiaojukeji.com/@vue/cli` 拿到的返回结果如下
```js
"_id" : "@vue/cli",
"_rev" : "45453609",
"name" : "@vue/cli",
"description" : "Command line interface for rapid Vue.js development",
"dist-tags" : {
  "next" : "4.1.0",
  "latest" : "4.2.3"
},
"versions" : {
  "4.1.1" : {
    "name" : "@vue/cli",
    "description" : "Command line interface for rapid Vue.js development",
    "version" : "4.1.1",
    "author" : {
      "name" : "Evan You"
    },
  },
  "4.1.2": {},
  ...
}
```

接下来再看 `checkForUpdates` 方法，首先是获取当前项目依赖中的 `if (name !== '@vue/cli-service' && !isPlugin(name))` 主要是找服务和插件，其中 isPlugin 这个方法尤其值得好好品一下：
```js
const pluginRE = /^(@vue\/|vue-|@[\w-]+(\.)?[\w-]+\/vue-)cli-plugin-/
exports.isPlugin = id => pluginRE.test(id)
```
看到这个正则我只能空叹：“厉害！”，当然我们大致可以理解是匹配了名字来判断是否为插件。

获取到需要过期的插件后，通过控制台输出，从而提示用户进行升级。