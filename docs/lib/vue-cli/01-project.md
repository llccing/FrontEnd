# 项目整体结构

整个项目是通过 lerna 来管理，使用固定模式，所有包使用相同的版本。

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