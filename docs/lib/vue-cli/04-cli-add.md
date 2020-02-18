# vue add <plugin> [pluginOptions]

上一节，我们完成了 `vue create <app-name>` 命令的探索，接下来我们看 `vue add <plugin> [pluginOptions]` 命令。

## 源码探索

add 命令的注册从下面的代码开始
```js
program
  .command('add <plugin> [pluginOptions]')
  .description('install a plugin and invoke its generator in an already created project')
  .option('--registry <url>', 'Use specified npm registry when installing dependencies (only for npm)')
  // 这个表示未定的选项，也能够被解析。这样就给自定义插件提供了自由发挥的空间
  // https://github.com/tj/commander.js/blob/master/tests/command.allowUnknownOptions.test.js
  .allowUnknownOption()
  .action((plugin) => {
    // vue add pluginX -a 123 -bc
    const args = minimist(process.argv.slice(3))
    // { _: [ 'pluginX' ], a: 123, b: true, c: true }
    console.log(args)
    // pluginX
    console.log(plugin)
    require('../lib/add')(plugin, minimist(process.argv.slice(3)))
  })
```
可以看到，add 命令需要一个 `<plugin>` 参数，插件的配置 `[pluginOptions]` 是可选项。这里我们 debug 一下，在 action 的回调中打印下参数的结构。通过图中的注释，可以看见参数都已经被解析成功了。

### @vue/cli/lib/add.js

#### 整体结构


```js
// add 命令的最后是调用这个js文件，传入两个参数，一个是 plugin 名字，字符串类型，一个是 `{ _: [ 'pluginX' ], a: 123, b: true, c: true }` 这个结构的参数对象。
async function add(pluginName, options= {}, context = process.cwd()) {
  ......
}

// 这里是 add.js 文件的返回，其他的 js 文件的结构也是类似，可以看到这里都进行了异常处理。
module.exports = (...args) => {
  return add(...args).catch(err => {
    error(err)
    if (!process.env.VUE_CLI_TEST) {
      process.exit(1)
    }
  })
}
```

#### 逐个捋一下

```js
  if (!(await confirmIfGitDirty(context))) {
    return
  }
```
add 函数开始的时候会判断当前项目是否是干净的 git 工作区，这么做的目的其实是避免意外导致用户的代码丢失。

```js
  // for `vue add` command in 3.x projects
  const servicePkg = loadModule('@vue/cli-service/package.json',  context)
  if (servicePkg && semver.satisfies(servicePkg.version, '3.x')) {
    ......
  }
```
这段代码的逻辑主要是针对 @vue/cli 4.0之后增加了 router 和 vuex 插件，但是 3.x 并没有这个插件，所以这里做了处理，相当于 polyfill。

```js
  const pm = new PackageManager({ context })
  const cliVersion = require('../package.json').version
  if (isOfficialPlugin(packageName) && semver.prerelease(cliVersion)) {
    await pm.add(`${packageName}@^${cliVersion}`)
  } else {
    await pm.add(packageName)
  }
```
这里初始化了 PackageManager 实例，来自 `@vue/cli/lib/util/ProjectPackageManager.js`。构造函数的逻辑比较简单，就是确定了够包管理工具，`add()` 方法的作用是安装依赖。

```js

  // 这里会载入 plugin 对应的 generator.js 或 generator/index.js 的路径
  const generatorPath = resolveModule(`${packageName}/generator`, context)
  // 如果对应的 generator 存在则执行 invoke 方法
  if (generatorPath) {
    invoke(pluginName, options, context)
  } else {
    log(`Plugin ${packageName} does not have a generator to invoke`)
  }
```

#### @vue/cli/lib/invoke.js

`invoke()` 方法提供 3 个参数：pluginName（插件名字），options（配置项），context（路径）。主要的逻辑如下

1. 判断如果当前项目目录 git 工作区是否有修改单未提交的内容，有则暂停。
2. 载入当前项目目录的 package.json 文件，通过循环判断当前插件是否在依赖列表中，不存在则报错。
3. 载入插件的 generator，执行 generator 方法，完成依赖的安装。


## 留有疑问

[https://github.com/cnpm/binary-mirror-config](https://github.com/cnpm/binary-mirror-config) 这个库是干啥的？

## 有啥感想
慢慢了解这个项目，发现它拆分做的很彻底，拆的足够的细，才能做到逻辑复用。

还有就是大量了使用了 Class 的方式，好处是足够集中，相关的问题都在某个 Class 的中。