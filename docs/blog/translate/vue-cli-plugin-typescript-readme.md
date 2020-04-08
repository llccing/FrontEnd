# @vue/cli-plugin-typescript README

翻译 @vue/cli-plugin-typescript README， [原 README](https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-typescript/README.md)

> vue-cli 的 typescript 插件

使用 TypeScript + `ts-loader` + [fork-ts-checker-webpack-plugin](https://github.com/Realytics/fork-ts-checker-webpack-plugin) 进行更快的非线程类型检查。

## 配置

Typescript 能够使用 `tsconfig.json` 配置。

自从 `3.0.0-rc.6` 之后，`typescript` 现在是这个插件的同级依赖，所以你可以通过更新你的项目中 `package.json` 来使用特定的版本的 TypeScript。

这个插件可以和 `@vue/cli-plugin-babel` 一起使用。当使用 Babel 时，这个插件将输出 ES2015，将其他工作委托给 Babel 来做 -- 针对目标浏览器自动 polyfill。

## 命令注入

如果创建项目时选择使用 [TSLint](https://palantir.github.io/tslint/)，`vue-cli-service lint` 将被注入。

## 缓存

[cache-loader](https://github.com/webpack-contrib/cache-loader) 是默认启用的，缓存放在 `<projectRoot>/node_modules/.cache/ts-loader`。

## 并行

当机器 CPU 核心超过1个时，[thread-loader](https://github.com/webpack-contrib/thread-loader) 是默认启用的。它能够通过在 `vue.config.js` 中的 `parallel: false` 设置来关闭。

## 在已经创建的项目中安装

``` sh
vue add typescript
```

## 注入到 webpack-chain 的规则

- `config.rule('ts')`
- `config.rule('ts').use('ts-loader')`
- `config.rule('ts').use('babel-loader')` (当和 `@vue/cli-plugin-babel` 一起使用时)
- `config.rule('ts').use('cache-loader')`
- `config.plugin('fork-ts-checker')`
