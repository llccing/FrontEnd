(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{424:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"组件的重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的重写"}},[t._v("#")]),t._v(" 组件的重写")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("现在开发后台管理系统，你不用个组件库都不好意思跟人打招呼。\n")])])]),a("p",[t._v("做了很多后台管理系统，并且一直和UI、测试同学，针对组件库的事甩锅给组件的开发者。")]),t._v(" "),a("p",[a("strong",[t._v("甩")])]),t._v(" "),a("p",[t._v("UI：“这个按钮太大了，改小一点。”")]),t._v(" "),a("p",[t._v("怼回去；“这个是组件内部写死的，不好改。”")]),t._v(" "),a("p",[a("strong",[t._v("再甩")])]),t._v(" "),a("p",[t._v("测试：“这有个bug！”")]),t._v(" "),a("p",[t._v("怼回去：“这个组件有bug，等他升级了，我们更新下依赖就行。”")]),t._v(" "),a("p",[t._v("事情的进展\n虽然通过上面的沟通可以暂时将问题压下去，但是这毕竟不是一个好的解决问题的方式。所以还是需要去解决。\n针对样式问题，组件库的官方其实会给出一个解决解决方案。")]),t._v(" "),a("h2",{attrs:{id:"iview组件库的样式覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iview组件库的样式覆盖"}},[t._v("#")]),t._v(" iview组件库的样式覆盖")]),t._v(" "),a("p",[t._v("环境："),a("strong",[t._v("vue@2.6.6 iview@3.2.2")])]),t._v(" "),a("p",[t._v("error")]),t._v(" "),a("p",[t._v("解决\n"),a("a",{attrs:{href:"https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less"),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://cli.vuejs.org/zh/config/#css-loaderoptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cli.vuejs.org/zh/config/#css-loaderoptions"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("使用vue.config.js修改lessloader的配置，才可以顺利覆盖less文件。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("module.exports = {\n  css: {\n    loaderOptions: {\n      less: {\n        // 这里的选项会传递给 less-loader\n        javascriptEnabled: true\n      }\n    }\n  }\n}\n\n")])])]),a("p",[t._v("我们只要修改less变量的值，就能够达到修改样式的目的，如下是部分变量，"),a("a",{attrs:{href:"https://github.com/iview/iview/blob/master/src/styles/custom.less",target:"_blank",rel:"noopener noreferrer"}},[t._v("全部变量在这里"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-less extra-class"},[a("pre",{pre:!0,attrs:{class:"language-less"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prefix")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@css-prefix             "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" ivu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@css-prefix-iconfont    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" ivu"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Color")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@primary-color          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n...\n")])])]),a("p",[t._v("完整代码在下方")]),t._v(" "),a("h2",{attrs:{id:"element-ui组件库的样式覆盖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-ui组件库的样式覆盖"}},[t._v("#")]),t._v(" element-ui组件库的样式覆盖")]),t._v(" "),a("p",[t._v("创建vue项目时记得选择scss就可以")]),t._v(" "),a("p",[t._v("做如下修改")]),t._v(" "),a("div",{staticClass:"language-SCSS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 改变主题色变量 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-primary")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" teal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--button-font-size")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--border-radius-base")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--border-radius-small")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 改变 icon 字体路径变量，必需 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--font-path")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~element-ui/lib/theme-chalk/fonts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~element-ui/packages/theme-chalk/src/index"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("覆盖变量可以参考 "),a("a",{attrs:{href:"https://github.com/ElemeFE/element/blob/master/packages/theme-chalk/src/common/var.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("element 项目中定义的变量"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-SCSS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Element Chalk Variables */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Colors\n-------------------------- */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-white")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-black")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000 "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-primary")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #409EFF "),a("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n...\n")])])]),a("p",[t._v("从修改上来看还是element-ui是个正经的组件库。")]),t._v(" "),a("h2",{attrs:{id:"iview的组件逻辑调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iview的组件逻辑调整"}},[t._v("#")]),t._v(" iview的组件逻辑调整")]),t._v(" "),a("p",[t._v("这个idea不是我，来自华为云的开发！感谢！")]),t._v(" "),a("p",[t._v("show you code!")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// template将iview源码的中的Table.vue的template复制过来就可以。")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当然如果你想自定义那么也可以做更改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iview'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mixins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'do what you want to do in mounted!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("完整代码在下方")]),t._v(" "),a("h2",{attrs:{id:"element-ui的组件逻辑调整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#element-ui的组件逻辑调整"}},[t._v("#")]),t._v(" element-ui的组件逻辑调整")]),t._v(" "),a("p",[t._v("修改的方式和iview的组件类似，不过element-ui中，el-table-column暂时没有做修改。")]),t._v(" "),a("h2",{attrs:{id:"源码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://github.com/llccing/FrontEnd/tree/master/demo/component-style-override-element",target:"_blank",rel:"noopener noreferrer"}},[t._v("component-style-override-element"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/llccing/FrontEnd/tree/master/demo/component-style-override-iview",target:"_blank",rel:"noopener noreferrer"}},[t._v("component-style-override-iview"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);