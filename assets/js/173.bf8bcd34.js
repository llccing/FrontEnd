(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{416:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组件的重写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件的重写"}},[t._v("#")]),t._v(" 组件的重写")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("现在开发后台管理系统，你不用个组件库都不好意思跟人打招呼。\n")])])]),s("p",[t._v("做了很多后台管理系统，并且一直和UI、测试同学，针对组件库的事甩锅给组件的开发者。")]),t._v(" "),s("p",[s("strong",[t._v("甩")])]),t._v(" "),s("p",[t._v("UI：“这个按钮太大了，改小一点。”")]),t._v(" "),s("p",[t._v("怼回去；“这个是组件内部写死的，不好改。”")]),t._v(" "),s("p",[s("strong",[t._v("再甩")])]),t._v(" "),s("p",[t._v("测试：“这有个bug！”")]),t._v(" "),s("p",[t._v("怼回去：“这个组件有bug，等他升级了，我们更新下依赖就行。”")]),t._v(" "),s("p",[t._v("事情的进展\n虽然通过上面的沟通可以暂时将问题压下去，但是这毕竟不是一个好的解决问题的方式。所以还是需要去解决。\n针对样式问题，组件库的官方其实会给出一个解决解决方案。")]),t._v(" "),s("h2",{attrs:{id:"iview组件库的样式覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iview组件库的样式覆盖"}},[t._v("#")]),t._v(" iview组件库的样式覆盖")]),t._v(" "),s("p",[t._v("环境："),s("strong",[t._v("vue@2.6.6 iview@3.2.2")])]),t._v(" "),s("p",[t._v("error")]),t._v(" "),s("p",[t._v("解决\n"),s("a",{attrs:{href:"https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://stackoverflow.com/questions/46729091/enable-inline-javascript-in-less"),s("OutboundLink")],1),t._v(" "),s("a",{attrs:{href:"https://cli.vuejs.org/zh/config/#css-loaderoptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cli.vuejs.org/zh/config/#css-loaderoptions"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("使用vue.config.js修改lessloader的配置，才可以顺利覆盖less文件。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("module.exports = {\n  css: {\n    loaderOptions: {\n      less: {\n        // 这里的选项会传递给 less-loader\n        javascriptEnabled: true\n      }\n    }\n  }\n}\n\n")])])]),s("p",[t._v("我们只要修改less变量的值，就能够达到修改样式的目的，如下是部分变量，"),s("a",{attrs:{href:"https://github.com/iview/iview/blob/master/src/styles/custom.less",target:"_blank",rel:"noopener noreferrer"}},[t._v("全部变量在这里"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Prefix")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@css-prefix             "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" ivu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@css-prefix-iconfont    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" ivu"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("icon"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Color")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("@primary-color          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")])]),t._v(" #2d8cf0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n...\n")])])]),s("p",[t._v("完整代码在下方")]),t._v(" "),s("h2",{attrs:{id:"element-ui组件库的样式覆盖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui组件库的样式覆盖"}},[t._v("#")]),t._v(" element-ui组件库的样式覆盖")]),t._v(" "),s("p",[t._v("创建vue项目时记得选择scss就可以")]),t._v(" "),s("p",[t._v("做如下修改")]),t._v(" "),s("div",{staticClass:"language-SCSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 改变主题色变量 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-primary")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" teal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--button-font-size")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 16px "),s("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--border-radius-base")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px "),s("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--border-radius-small")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0px "),s("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 改变 icon 字体路径变量，必需 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--font-path")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~element-ui/lib/theme-chalk/fonts'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~element-ui/packages/theme-chalk/src/index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("覆盖变量可以参考 "),s("a",{attrs:{href:"https://github.com/ElemeFE/element/blob/master/packages/theme-chalk/src/common/var.scss",target:"_blank",rel:"noopener noreferrer"}},[t._v("element 项目中定义的变量"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-SCSS extra-class"},[s("pre",{pre:!0,attrs:{class:"language-scss"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Element Chalk Variables */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Colors\n-------------------------- */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-white")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff "),s("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-black")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000 "),s("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$--color-primary")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #409EFF "),s("span",{pre:!0,attrs:{class:"token statement keyword"}},[t._v("!default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n...\n")])])]),s("p",[t._v("从修改上来看还是element-ui是个正经的组件库。")]),t._v(" "),s("h2",{attrs:{id:"iview的组件逻辑调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iview的组件逻辑调整"}},[t._v("#")]),t._v(" iview的组件逻辑调整")]),t._v(" "),s("p",[t._v("这个idea不是我，来自华为云的开发！感谢！")]),t._v(" "),s("p",[t._v("show you code!")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// template将iview源码的中的Table.vue的template复制过来就可以。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当然如果你想自定义那么也可以做更改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iview'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mixins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Table"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mounted")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'do what you want to do in mounted!'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("完整代码在下方")]),t._v(" "),s("h2",{attrs:{id:"element-ui的组件逻辑调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#element-ui的组件逻辑调整"}},[t._v("#")]),t._v(" element-ui的组件逻辑调整")]),t._v(" "),s("p",[t._v("修改的方式和iview的组件类似，不过element-ui中，el-table-column暂时没有做修改。")]),t._v(" "),s("h2",{attrs:{id:"源码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码"}},[t._v("#")]),t._v(" 源码")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/llccing/FrontEnd/tree/master/demo/component-style-override-element",target:"_blank",rel:"noopener noreferrer"}},[t._v("component-style-override-element"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/llccing/FrontEnd/tree/master/demo/component-style-override-iview",target:"_blank",rel:"noopener noreferrer"}},[t._v("component-style-override-iview"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);