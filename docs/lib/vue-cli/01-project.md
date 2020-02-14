# 项目整体结构

整个项目是通过 lerna 来管理，使用固定模式，所有包使用相同的版本。

## 目录结构

```js
|-- packages
|-- |-- @vue // 命令、插件集合
|-- |-- |-- cli // 全局命令注册
|-- |-- |-- cli-init
|-- |-- |-- cli-overlay
|-- |-- |-- cli-service
|-- |-- |-- cli-service-global
|-- |-- |-- cli-shared-utils
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