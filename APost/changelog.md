# vue-cli2 to vue-cli3

## why

### 新原因：

- vue-cli3 已经升级到 webpack4，性能优化、构建速度提升。
- 将 webpack 的复杂配置隐藏到依赖中，减少复杂配置。
- eslint 配置，cli3 中加入了 Airbnb 等规则，这次构建使用了 Airbnb 的规则，使代码更加规范，同时会提升 js 的编写能力。
- 引入了 test，但是这个还是根据项目情况，酌情使用。

### 历史遗留问题：

- IdcUI 项目建立初期, eslint手动去除了，后期发现代码混乱、不可控，所以恰逢 cli3 升级这个契机，可以矫正之前的问题。
- IdcUI 项目建立初期，引入了bootstrap 和 angle.css, 但是后期发现 angle.css 使用的较少，但是 angle.css，这个 css 库是 bootstrap+angle自己的部分内容，所以是没有必要的，并且占用空间较大、样式反复覆盖，影响页面加载，这次会删除。

## 迁移过程

1. 本地安装 vue-cli3，创建项目 IdcUI-cli3，创建时选择 vuex、vue-router、Airbnb lint 等等。
2. 将 IdcUI 的文件，复制一份到 IdcUI-cli3 中，整理下 package.json 中的依赖，暂时项目依赖还是用原来的，暂时不升级、否则可能会死人、后期脚手架稳定后再考虑升级项目依赖（比如 iview3.0）
3. 调整 eslint 规则，虽然 Airbnb 大部分规则是合适的，但是少部分还是可以去掉的。
4. 调整 IDE 的配置，VS Code 的配置。
5. 调整静态资源的路径。
6. 根据eslint规则，修改业务代码。

## 迁移问题解决

### eslint 规则

package.json下的eslintConfig
```
"eslintConfig": {
    "root": true,
    "env": {
      "node": true
    },
    "extends": [
      "plugin:vue/essential",
      "@vue/airbnb"
    ],
    "rules": {
      "max-len": "off",
      "vue/no-parsing-error": [
        2,
        {
          "x-invalid-end-tag": false
        }
      ],
      "no-param-reassign": [
        "error",
        {
          "props": false
        }
      ],
      "consistent-return": "off"
    },
    "parserOptions": {
      "parser": "babel-eslint"
    }
  },
```

暂时去掉git hook，待将所有问题修改完，再次开启。
```
"gitHooks": {
    "pre-commit": "lint-staged"
  },

```

初期修复时，可以使用
```
// 指定目录，非常方便
npm run lint src/views/index/

```

### VS Code 配置
```
{
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all",
  "prettier.arrowParens": "always",
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.formatOnType": true,

  "prettier.tabWidth": 2,
  "prettier.printWidth": 100,
  "editor.detectIndentation": true,
  "vetur.validation.template": false,
}

```



## eslint问题汇总
1. (array-callback-return)
[forEach/map](https://www.zhihu.com/question/24927450)

