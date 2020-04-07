# Vue CLI 源码探索

整个项目是通过 lerna 来管理，使用固定模式，所有包使用相同的版本。

[https://github.com/llccing-demo/vue-cli](https://github.com/llccing-demo/vue-cli) 这里是fork项目，与文章中的代码相呼应。

## 目录结构

```js
|-- packages
|-- |-- @vue // 命令、插件集合
|-- |-- |-- cli // 全局命令注册
|-- |-- |-- cli-init
|-- |-- |-- cli-overlay
|-- |-- |-- cli-service // vue-cli-service serve/build/inspect/help 命令的核心
|-- |-- |-- cli-service-global // 壳，核心内容在 ../cli-service
|-- |-- |-- cli-shared-utils // 封装的各种工具函数
|-- |-- |-- cli-test-utils
|-- |-- |-- babel-preset-app
|-- |-- |-- cli-ui
|-- |-- |-- cli-ui-addon-webpack
|-- |-- |-- cli-ui-addon-widgets
|-- |-- |-- cli-plugin-babel
|-- |-- |-- cli-plugin-e2e-cypress
|-- |-- |-- cli-plugin-e2e-nightwatch
|-- |-- |-- cli-plugin-eslint
|-- |-- |-- cli-plugin-pwd
|-- |-- |-- cli-plugin-typescript
|-- |-- |-- cli-plugin-unit-jest
|-- |-- |-- cli-plugin-unit-mocha
|-- |-- |-- cli-plugin-vuex
|-- |-- |-- cli-plugin-router
|-- |-- test // 给开发的同学测试
|-- |-- vue-cli-version-marker // 用来更加快速的获取 @vue/cli 的最新版本
|-- script // 脚本目录
|-- docs // 文档当然用自家的 VuePress
|-- lerna.json // 通过 lerna 来管理包
|-- yarn.lock // 通过 yarn 来管理依赖
|-- .circleci // 通过 circleCI 测试、构建项目
```

## 调试

只有代码能够调试，我们才能够逐步跟踪代码执行，掌握脉络。

[文档](https://github.com/vuejs/vue-cli/blob/dev/.github/CONTRIBUTING.md)中有说明如何参与开发，这和能够进行调试的原理是一致的，做如下调整，重要的是先卸载全局安装的 `@vue/cli` 和 `vue-cli` 因为你可能是 CLI2 版本的，然后进入到 `packages/@vue/cli` 目录，执行 `yarn link` 即可。

```js
# install dependencies
yarn

# link `vue` executable
# if you have the old vue-cli installed globally, you may
# need to uninstall it first.
cd packages/@vue/cli
yarn link

# create test projects in /packages/test
cd -
cd packages/test
vue create test-app
cd test-app
yarn serve
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
- [envinfo](https://github.com/tabrindle/envinfo) 为了调试和提 issue，针对当前的开发环境生成一个报告
- [leven](https://github.com/sindresorhus/leven) 测量两个不同的字符串的差别，实现莱温斯坦距离算法最快的js实现，没有之一...
- [ora](https://github.com/sindresorhus/ora) 优雅的终端旋转器
- [portfinder](https://github.com/http-party/node-portfinder) 在当前机器找到空闲端口号的小工具，解决了项目启动端口号冲突的痛点
- [@hapi/joi](https://github.com/hapijs/hapi) 参数校验 'Build powerful, scalable applications, with minimal overhead and full out-of-the-box functionality'
- [Inquirer](https://github.com/SBoudrias/Inquirer.js) 命令行的通用交互界面集合
- [memfs](https://github.com/streamich/memfs) 内存型文件系统，在这里的用处主要是运行jest测试的时候使用
- [deepmerge](https://github.com/TehShrike/deepmerge) 对象的深度（递归）合并
- [yaml-front-matter](https://github.com/dworthen/js-yaml-front-matter) 从字符串或者文件中解析 [YAML](https://www.ruanyifeng.com/blog/2016/07/yaml.html) 或者 json
- [ejs](https://github.com/mde/ejs) 嵌入式的 JavaScript 模板引擎
- [hash-sum](https://github.com/bevacqua/hash-sum) 快速独特的哈希生成器
- [vue-jscodeshift-adapter](https://github.com/psalaets/vue-jscodeshift-adapter) 在 Vue 单文件组件中执行 jscodeshift
- [jscodeshift](https://github.com/facebook/jscodeshift) A JavaScript codemod toolkit。两个介绍：[jscodeshift 简易教程](https://github.com/whxaxes/blog/issues/10)、[代码重构利器-jscodeshift](https://imweb.io/topic/57b13b4f93d9938132cc8dfd)
