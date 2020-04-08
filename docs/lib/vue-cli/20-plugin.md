# plugin 插件

**组件化：**

台式电脑可以分为三部分，显示器、主机、键鼠，主机，内部再次拆分为主板、电源、硬盘、内存条等等部分。每一个部分是自闭和的整体，我理解这就是一种组件化的方式。

**插件化：**

主板上有很多[PCI](https://zh.wikipedia.org/wiki/%E5%A4%96%E8%AE%BE%E7%BB%84%E4%BB%B6%E4%BA%92%E8%BF%9E%E6%A0%87%E5%87%86)，这些插槽可以查很多东西，来丰富电脑的功能，比如：网卡、声卡、电视卡、硬盘控制器等等许多东西，那么你说没有拆件电脑能够启动吗，当然只不过有些功能不能实现，比如上网、听音与。插件化就是这种道理，通过丰富的插件简化Vue开发，是你专注于业务逻辑，同时通过官方插件构建的项目也是最佳实践。当然也支持自定义插件，按照统一的插件开发方式写出的插件就能够适配所有 Vue/cli 创建的项目。


## 插件组成

首先我们头脑中需要有一个插件的整体概念，由哪些部分组成：
```bash
.
├── README.md
├── generator.js  # generator（可选）
├── index.js      # service 插件
├── package.json
├── prompts.js    # prompt 文件（可选）
└── ui.js         # Vue UI 集成（可选）
```

## 安装并执行插件

`vue add [plugin]`，这个命令我们已经在[前面](https://llccing.github.io/FrontEnd/lib/vue-cli/04-cli-add.html)讲过了。

插件包函几部分中，`generator` 和 `prompts` 是在 `vue add` 命令执行的时候执行的。

`service` 插件的执行时机则是在运行 `vue-cli-service xxx` 命令时，如 `vue-cli-service serve`，得出这个结论可以看下 `@vue/cli-service/lib/Service.js` 的 `init` 方法：
```js
    // apply plugins.
    // this.plugins 就是当前项目中的全部 Vue CLI 插件
    this.plugins.forEach(({ id, apply }) => {
      if (this.pluginsToSkip.has(id)) return
      // apply 方法就是 插件中 Service 默认导出的函数
      apply(new PluginAPI(id, this), this.projectOptions)
    })
```

至于为什么 `vue-cli-service serve` 最终会走到上面的 `init` 方法，我们在之前在 [探索 vue inspect](https://llccing.github.io/FrontEnd/lib/vue-cli/06-cli-inspect.html) 时提到过的。

## 插件列表

**官方插件**

- @vue/cli-plugin-vuex
- @vue/cli-plugin-router
- @vue/cli-plugin-typescript
- @vue/cli-plugin-eslint
- @vue/cli-plugin-babel
- @vue/cli-plugin-pwa
- @vue/cli-plugin-unit-jest
- @vue/cli-plugin-unit-mocha
- @vue/cli-plugin-e2e-cypress
- @vue/cli-plugin-e2e-nightwatch

## TODO

* [x] 翻译 [plugin-dev](https://cli.vuejs.org/dev-guide/plugin-dev.html) 文档
* [x] @vue/cli-plugin-vuex
* [x] @vue/cli-plugin-router
* [x] @vue/cli-plugin-babel
* [ ] @vue/cli-plugin-typescript
* [ ] @vue/cli-plugin-eslint
* [ ] @vue/cli-plugin-pwa

使用Markdown语法来写 todo list 还有个小插曲：[不展示 todo list的原因见此](https://github.com/vuejs/vuepress/issues/986)

## 插件开发

插件开发部分的文档可以见我[翻译的内容](https://llccing.github.io/FrontEnd/blog/translate/vue-cli-plugin-dev.html)，相信会对你有所帮助。


## webpack loader

- [vue-loader](https://github.com/vuejs/vue-loader) Vue.js 对应 webpack loader
- [babel-loader](https://github.com/babel/babel-loader) 就是那个很厉害的工具对应的 webpack 插件
- [thread-loader](https://github.com/webpack-contrib/thread-loader) 在一个工作池中运行接下来的 loader
- [cache-loader](https://github.com/webpack-contrib/cache-loader) 在磁盘中缓存接下来的 loader