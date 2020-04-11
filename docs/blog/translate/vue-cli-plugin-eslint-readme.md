# @vue/cli-plugin-eslint

> vue-cli 的 eslint 插件

## 注入命令

- **`vue-cli-service lint`**

  ```
  Usage: vue-cli-service lint [options] [...files]

  Options:

    --format [formatter] 指定 格式化工具（默认： codeframe）
    --no-fix             不修复错误
    --max-errors         指定使构建失败的最多错误数（默认：0）
    --max-warnings       指定使构建失败的最多警告数（默认：无限大，表示警告不会影响构建）
  ```


  lint 并且修复文件。如果没有指定特定文件，它 lint `src` 和 `test` 目录下的所有文件。

  Other [ESLint CLI options](https://eslint.org/docs/user-guide/command-line-interface#options) are also supported.

  其他的 [ESLint CLI 选项](https://eslint.org/docs/user-guide/command-line-interface#options) 也是支持的。

## 配置

ESLint 可以通过 `.eslintrc` 或者 `package.json` 中的 `eslintConfig` 字段配置。

默认情况下，在开发中 `eslint-loader` 的 Lint-on-save 是生效的。它能够通过 `vue.config.js` 文件中的 `lintOnSave` 选项禁止：

```js
module.exports = {
  lintOnSave: false
}
```

当设置为 `true` 时，`eslint-loader` 将把触发的 lint 错误作为警告。默认情况下，警告仅仅在命令行输出日志，不会使编译失败。

如果想将 lint 错误展示在浏览器浮层上，，你可以使用 `lintOnSave: 'error'`。这将强制 `eslint-loader` 总是触发错误。这也意味着 lint 错误将不会使编译失败。

或者，你可以配置浮层同时展示警告和错误：

```js
// vue.config.js
module.exports = {
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  }
}
```

当 `lintOnSave` 的值是 true 时，`eslint-loader` 将同时在开发和生产环境应用。如果你想生产环境构建时禁止 `eslint-loader`，你可以使用下面的配置：

```js
// vue.config.js
module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production'
}
```

## 在已有项目中安装

``` sh
vue add eslint
```

## 注入的 webpack 规则

- `config.module.rule('eslint')`
- `config.module.rule('eslint').use('eslint-loader')`
