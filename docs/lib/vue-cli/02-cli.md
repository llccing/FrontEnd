# @vue/cli

## 作用

注册全局命令，具体哪些命令呢，如下：

- `vue create <app-name>`
- `vue add <plugin> [plugin]`
- `vue invoke <plugin> [pluginOptions] `
- `vue inspect [path...]`
- `vue serve [entry]`
- `vue build [entry]`
- `vue ui`
- `vue init <template> <app-name>  `
- `vue config [value]`
- `vue outdated`
- `vue updrade [plugin-name]  `
- `vue migrate [plugin-name]`
- `vue info`，打印当前系统环境信息，依赖 envinfo
- `vue <command>`，捕获不存在的命令，输出帮助信息
- `vue --help`

Vue ClI 的文档开始就告诉我们全局安装脚手架，执行了 `npm install -g @vue/cli` 或者 `yarn global add @vue/cli` 这个命令，那么为什么安装之后我们能够使用 `vue xxx` 呢，主要原因是在 `package.json` 文件中的 `bin: {vue: 'bin/vue.js'}` 这段代码的配置，当然也可以从[阮老师的文章](https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)中找到说明。

## 目录结构

```js
|-- bin/vue.js
|-- lib
|-- |-- create
|-- |-- Creator
|-- |-- options
|-- __tests__ // 正经的项目，测试还是不能少的
|-- package.json
```

## 项目依赖

- [commander](https://github.com/tj/commander.js) tj大神的node命令行工具，用于获取参数、设置默认值
- [slash](https://github.com/sindresorhus/slash) 修改资源路径，保证 Unix 和 Windows 返回路径一致
- [minimist](https://github.com/substack/minimist) 命令行参数解析器
- [didyoumean](https://github.com/dcporter/didyoumean.js) 一个简单的，经过优化的 js 库 和 node.js 模块，能够将人的个性化输入和各种可能性进行匹配
- [debug](https://github.com/visionmedia/debug) 带有命名空间的日志输出工具，能够彩色打印，支持浏览器和node.js，使用的时候，需要设置以下代码 debug.enabled = true
- [resolve](https://github.com/browserify/resolve) 实现 node.js require.resolve() 算法。
- [dotenv](https://github.com/motdotla/dotenv) 载入项目根目录的环境变量
- [request](https://github.com/request/request)、[request-promise-native](https://github.com/request/request-promise-native) 这个两个库已经弃用了；`@vue/cli-share-utils/lib/request.js` 中有用到 `request-promise-native`，这个以后可以对应升级
- [chalk](https://github.com/chalk/chalk) 为命令行字符串添加样式
- [execa](https://github.com/sindresorhus/execa) 改善了 node.js 原来的 Child Process 进程，执行脚本命令
- [semver](https://github.com/npm/node-semver) 语义化版本，同时能够进行版本的比较
- [lru-catch](https://github.com/isaacs/node-lru-cache) 高速缓存对象，用于删除最近最少使用的项目

## 有意思的点

1. `vue craete .`

[出处](https://github.com/vuejs/vue-cli/blob/2531d10086b0e1740cf83a6be7094bba112b6f68/packages/@vue/cli/lib/create.js#L16)

适用情况：先从gitlab上拉下一个项目，然后再使用 vue create 创建同名项目

2. `JSON.stringify(pkg, null, 2)`

[出处](https://github.com/vuejs/vue-cli/blob/773f8a47e9acd58abbd3a3821a906be550b4c010/packages/@vue/cli/lib/Creator.js#L159)

能够格式化字符串，并且有缩进，且这个缩进能够在嵌套的结构中提现

效果如下，
```js
JSON.stringify({a: 123123, b: 'adfasdf', c: {d: 'this is dddd'}}, null , 2)

// 输出如下 
"{
  "a": 123123,
  "b": "adfasdf",
  "c": {
    "d": "this is dddd"
  }
}"

```