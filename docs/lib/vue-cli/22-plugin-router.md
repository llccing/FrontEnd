# @vue/cli-plugin-router

这个插件同 `@vue/cli-plugin-vuex` 也是从 `@vue/cli@4.x` 开始有的，目的也是规范化 router 的使用，同时添加更完美的默认配置。

## 源码探索

### Service 部分

同 `@vue/cli-plugin-vuex` 一致，因为是必须项，所以也是导出空函数
```js
module.exports = (api, options = {}) => {}
```

### Generator 部分

```js
module.exports = (api, options = {}) => {
  // 增加入口
  api.injectImports(api.entryFile, `import router from './router'`)
  // 增加 router 选项
  api.injectRootOptions(api.entryFile, `router`)

  // 扩展依赖
  api.extendPackage({
    dependencies: {
      'vue-router': '^3.1.5'
    }
  })

  // 渲染模板
  api.render('./template', {
    historyMode: options.historyMode,
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript'),
    hasTypeScript: api.hasPlugin('typescript')
  })

  if (api.invoking) {
    if (api.hasPlugin('typescript')) {
      /* eslint-disable-next-line node/no-extraneous-require */
      const convertFiles = require('@vue/cli-plugin-typescript/generator/convert')
      convertFiles(api)
    }
  }
}

```

前面的部分和 `@vue/cli-plugin-vuex` 是一致的，这里有区别的地方是，render 方法传了参数：

```js
api.render('./template', {
    historyMode: options.historyMode,
    doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript'),
    hasTypeScript: api.hasPlugin('typescript')
  })
```

```js
// additionalData 这个参数就是上面传入的
render (source, additionalData = {}, ejsOptions = {}) {
    ...
    this._injectFileMiddleware(async (files) => {
      // 传入 _resolveData 方法中
      const data = this._resolveData(additionalData)
      for (const rawPath of _files) {
          ...
          // 处理文件时，作为参数传入
          const content = renderFile(sourcePath, data, ejsOptions)
          ...
        }
    ...
```

`render` 方法的第二个参数传入到了 `_resolveData` 方法中：

```js
/**
   * 渲染模板时解析数据
   *
   * @private
   */
  _resolveData (additionalData) {
    return Object.assign({
      options: this.options,
      rootOptions: this.rootOptions,
      plugins: this.pluginsData
    }, additionalData)
  }

  /**
   * 所以最终返回的对象结构如下
    {
      options: {},
      rootOptions: {},
      plugins: {},
      historyMode: '',
      doesCompile: '',
      hasTypeScript: ''
    }
   */
```

然后我们看下 `renderFile` 方法：

```js
function renderFile (name, data, ejsOptions) {
  ...
  const template = fs.readFileSync(name, 'utf-8')

  // custom template inheritance via yaml front matter.
  // ---
  // extend: 'source-file'
  // replace: !!js/regexp /some-regex/
  // OR
  // replace:
  //   - !!js/regexp /foo/
  //   - !!js/regexp /bar/
  // ---
  // https://github.com/dworthen/js-yaml-front-matter
  const yaml = require('yaml-front-matter')
  const parsed = yaml.loadFront(template)
  // content 就是文件内容
  const content = parsed.__content
  let finalTemplate = content.trim() + `\n`
  
  ...

  // data 最终传到 ejs 的 render 方法中
  return ejs.render(finalTemplate, data, ejsOptions)
```

`ejs.redner()` 这个方法的第一个参数，是模板，第二个参数是传入模板中的变量，第三个则是ejs模板的配置项。所以我们的 `data` 会模板渲染的时候使用到，那么我们看下模板中是如何使用的：

`@vue/cli-plugin-router/generator/template/src/App.vue`，首先看这个模板文件：
```js
---
extend: '@vue/cli-service/generator/template/src/App.vue'
replace:
  - !!js/regexp /<template>[^]*?<\/template>/
  - !!js/regexp /\n<script>[^]*?<\/script>\n/
  - !!js/regexp /  margin-top[^]*?<\/style>/
---
```

上面这段是 yaml 语法，首先它继承了 `@vue/cli-service/generator/template/src/App.vue` 文件（这个是原始的模板），然后替换了3部分内容：

- 首先是模板部分：
```js
<%# REPLACE %>
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<%# END_REPLACE %>
```

然后 script 脚本，替换为空：
```js
<%# REPLACE %>
<%# END_REPLACE %>
```

最后是样式部分
```js

<%# REPLACE %>
// 这里的括号是为了承接继承的内容
}

// 这里可以看到是用到 data 中的 rootOptions 属性
<%_ if (rootOptions.cssPreprocessor !== 'stylus') { _%>
...
<%# END_REPLACE %>
```

`@vue/cli-plugin-router/generator/template/src/router/index.js` 这个文件中用到了通过插件传入过来的参数：`hasTypeScript`、`doesCompile`、`historyMode`：

区分 Typescript，使用不同的导入方式
```js
<%_ if (hasTypeScript) { _%>
import VueRouter, { RouteConfig } from 'vue-router'
<%_ } else { _%>
import VueRouter from 'vue-router'
<%_ } _%>
```

通过 doescCompile，来区分是否需要编译
```js
    <%_ if (doesCompile) { _%>
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    <%_ } else { _%>
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
    <%_ } _%>
```

通过 `historyMode` 控制路由模式
```js
const router = new VueRouter({
  <%_ if (historyMode) { _%>
  mode: 'history',
  base: process.env.BASE_URL,
  <%_ } _%>
  routes
})
```

### Prompts 部分

对话这里只有一个问题，就是路由类型。这个问题的答案在 `historyMode: options.historyMode,` 这里就用到了。

```js
module.exports = [
  {
    name: 'historyMode',
    type: 'confirm',
    message: `Use history mode for router? ${chalk.yellow(`(Requires proper server setup for index fallback in production)`)}`,
    description: `By using the HTML5 History API, the URLs don't need the '#' character anymore.`
  }
]
```

这里我们看下上面的 `prompts` 是如何被执行的，我们添加插件是通过 `vue add @vue/cli-plugin-router` 的方式，然后会执行到 `@vue/cli/lib/invoke.js` 中的 `invoke` 方法，我们看下 invoke 方法中处理 prompts 的逻辑：

```js
...
  } else if (!Object.keys(pluginOptions).length) {
    // 这里就载入了我们定义在插件中的 对话
    let pluginPrompts = loadModule(`${id}/prompts`, context)
    if (pluginPrompts) {
      if (typeof pluginPrompts === 'function') {
        pluginPrompts = pluginPrompts(pkg)
      }
      if (typeof pluginPrompts.getPrompts === 'function') {
        pluginPrompts = pluginPrompts.getPrompts(pkg)
      }
      // 因为我们的插件中返回的是数组，所有就直接执行了（开始对话）
      pluginOptions = await inquirer.prompt(pluginPrompts)
    }
  }
```
