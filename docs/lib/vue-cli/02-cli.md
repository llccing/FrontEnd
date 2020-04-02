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