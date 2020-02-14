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

### 外部依赖

- commander // tj大神的node命令行工具，用于获取参数、设置默认值
- slash // 修改资源路径，保证 Unix 和 Windows 返回路径一致
- minimist // 命令行参数解析器
- didyoumean // 一个简单的，经过优化的 js 库 和 node.js 模块，能够将人的个性化输入和各种可能性进行匹配
- debug // 带有命名空间的日志输出工具，能够彩色打印，支持浏览器和node.js，使用的时候，需要设置以下代码 debug.enabled = true

### 内部依赖

#### @vue/cli-shared-utils

- chalk 为命令行字符串添加样式
- execa 改善了 node.js 原来的 Child Process 进程，执行脚本命令
- semver 语义化版本，同时能够进行版本的比较
- lru-catch 高速缓存对象，用于删除最近最少使用的项目

## 源码探索

首先从 `/bin/vue.js` 开始，这一部分一共做了以下几个事：

1. 检测当前的node版本是否符合期望的版本