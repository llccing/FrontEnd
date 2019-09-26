# Ant Design

    要说为啥要学习React，可能是因为难以抗拒Ant Design的美。

根据Ant Design的文档，先尝试quick start，发现没有配置webpack等构件工具的情况下难以运行起来。所以从推荐的umi/dva/antd开始

## umi/dva/antd

### [umi](https://umijs.org/zh/)

    可插拔的企业级React应用框架。

**特点**
- 插件化，生命周期都是插件化的，内部实现也是大量插件组成，如pwa、按需加载，一键切换preact、一键兼容IE9等，都是通过插件实现。
- 开箱即用，无需再次安装react、preact、webpack、react-router、babel、jest等。
- 约定式路由，类似nuxt，无需维护冗余路由，支持权限，动态路由、嵌套路由等。

**started**
```
# 安装
$ yarn global add umi # 或者 npm install -g umi

# 新建应用
$ mkdir myapp && cd myapp

# 新建页面
$ umi generate page index

# 本地开发
$ umi dev

# 构建上线
$ umi build
```
**资料**

完成用户管理的CURD
[https://github.com/sorrycc/blog/issues/62](https://github.com/sorrycc/blog/issues/62)


### dva

    React and redux based, lightweight and elm-sytle framework.
    基于React和redux，轻量级、elm-style类型的框架。

    Elm is a programming language that compiles to JavaScript. It is known for its friendly error messages, helping you find issues quickly and refactor large projects with confidence. Elm is also very fast and very small when compared with React, Angular, Ember, etc.

**特点**
- 易学易用，6个api，对redux用户友好，配合umi使用后0 API。
- elm概念，通过reducers、effects、subscriptions组织model，简化redux和redux-saga引入的概念。
- 插件机制，比如dva-loading可以自动处理loading状态，不用一遍遍写showLoading和hideLoading。




**资料**

dva.js说明文档
[https://dvajs.com/guide/#%E7%89%B9%E6%80%A7](https://dvajs.com/guide/#%E7%89%B9%E6%80%A7)

**what is dva**
dva = React-Router + Redux + Redux-saga