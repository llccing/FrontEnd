(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{417:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_2020年关于-vue-3-你需要知道的事"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2020年关于-vue-3-你需要知道的事"}},[t._v("#")]),t._v(" 2020年关于 Vue 3 你需要知道的事")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://medium.com/swlh/what-you-need-to-know-about-vue3-in-2020-b36a2feb5dad",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://medium.com/swlh/what-you-need-to-know-about-vue3-in-2020-b36a2feb5dad"),s("OutboundLink")],1),t._v(" 原文链接")])]),t._v(" "),s("p",[t._v("现在 VueJS 是最热的框架之一，它在2019的周下载量翻了一倍。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/2048/0*GZppDplldb75ajvg.png",alt:"下载量对比"}})]),t._v(" "),s("p",[t._v("2020年Vue3发布时，它将更加流行。")]),t._v(" "),s("p",[t._v("现在Vue团队的重点在使它能够适合所有开发者，新版本将更强大、更有效率。同时有很多的内部优化将让我们用的更爽。")]),t._v(" "),s("p",[t._v("Vue3也给开发者更多的控制方法（如果你想要），它让我们能够使用直接暴露的Vue响应式API准确控制我们项目，编写自定义编译和渲染方法。")]),t._v(" "),s("p",[t._v("下面是一些重大变化，来自尤雨溪的几次演讲和RFC（request for comments）"),s("a",{attrs:{href:"https://github.com/vuejs/rfcs",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github 仓库"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"vue3-使用基于proxy的观察者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3-使用基于proxy的观察者"}},[t._v("#")]),t._v(" Vue3 使用基于Proxy的观察者")]),t._v(" "),s("p",[t._v("响应式是VueJS的核心，它需要数据有依赖，观察、更新数据来反应任何变化。")]),t._v(" "),s("p",[t._v("Vue2使用 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object.defineProperty"),s("OutboundLink")],1),t._v(" 去创建getters 和 setters 实现响应式。")]),t._v(" "),s("p",[t._v("使用 Object.defineProperty 这里有两个主要的问题，事实上，他们足够了，甚至在"),s("a",{attrs:{href:"https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("中也提到了")]),t._v(" "),s("ol",[s("li",[t._v("响应式属性不能够动态添加、删除")]),t._v(" "),s("li",[t._v("这里有两个关于动态数组的问题\n"),s("ul",[s("li",[t._v("通过下标设置元素不是响应式的")]),t._v(" "),s("li",[t._v("修改数组长度是非响应式的")])])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过下标设置数组元素 - 非响应式")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("itemOfItem"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newVal\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改数组长度 - 非响应式")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("items"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" newLength\n")])])]),s("h2",{attrs:{id:"为什么使用基于proxy的观察者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么使用基于proxy的观察者"}},[t._v("#")]),t._v(" 为什么使用基于Proxy的观察者")]),t._v(" "),s("p",[t._v("Vue3的解决方案是基于 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"}},[t._v("Proxy"),s("OutboundLink")],1),t._v(" 的观察者，避免了原来的功能限制。")]),t._v(" "),s("p",[t._v("老版本和新版本的关键区别，Vue2中Object.defineProperty改变原始数据但是Proxy没有。它使用虚拟化的目标数据，设置不同的处理方法来监听数据的getters和setters。")]),t._v(" "),s("p",[t._v("这个新的方式意味着响应式属性能够在不使用"),s("a",{attrs:{href:"https://vuejs.org/v2/api/#Vue-set",target:"_blank",rel:"noopener noreferrer"}},[t._v("vm.$set"),s("OutboundLink")],1),t._v("的情况下添加、删除属性。它也消除了Vue2中关于数组的无效极端情况。")]),t._v(" "),s("p",[t._v("根据尤雨溪在 "),s("a",{attrs:{href:"https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Medium Post"),s("OutboundLink")],1),t._v("的最好的总结，基于Proxy的观察者能够支持一下方面：")]),t._v(" "),s("ul",[s("li",[t._v("监测属性的添加、删除")]),t._v(" "),s("li",[t._v("监测数组下标和长度的变化")]),t._v(" "),s("li",[t._v("支持 Map、Set、WeakMap、WeakSet")])]),t._v(" "),s("p",[t._v("在"),s("a",{attrs:{href:"https://www.vuemastery.com/courses/advanced-components/evan-you-on-proxies/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VueMaster"),s("OutboundLink")],1),t._v("有一份关于如何实现基于Proxy的观察者的很棒的总结。")]),t._v(" "),s("h2",{attrs:{id:"介绍下-composition-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍下-composition-api"}},[t._v("#")]),t._v(" 介绍下 Composition API")]),t._v(" "),s("p",[t._v("在Vue3中这是迄今为止最著名的变化，它能够帮助我们组织、重用代码。")]),t._v(" "),s("p",[t._v("现在如果你在工作中使用Vue，你应该应该用过 "),s("strong",[t._v("Options Api")]),t._v("，Options API通过：data、computed、methods等等属性来组织我们的代码。")]),t._v(" "),s("p",[t._v("这是一个非常直观的系统，吸引了成千上万的人尝试VueJS，但是它让维护一个巨大的组件非常困难。针对一个功能的代码被分散到几个地方，每个地方相隔数百行。")]),t._v(" "),s("p",[s("strong",[t._v("可维护性、可读性变成了主要的问题")])]),t._v(" "),s("p",[t._v("让我们看下 Composition API 是如何工作的。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" reactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computed "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue composition api 暴露vue的核心响应式能力")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("groceries")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("groceriesLeft")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" groceries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGrocery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groceries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteGrocery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groceries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      addGrocery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      deleteGrocery\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("strong",[t._v("让我们逐步分解发生了什么")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" reactive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" computed "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n")])])]),s("p",[t._v("Vue Composition API暴露了Vue中的很多核心能力，比如响应式、组件方法，所以我们来引入他们。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n")])])]),s("p",[s("a",{attrs:{href:"https://vue-composition-api-rfc.netlify.com/#api-introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("setup方法"),s("OutboundLink")],1),t._v("是Vue3中最大的变化之一，本质上，它能够让我们确定将哪些传递给模板，无论返回什么都可以在模板中访问。")]),t._v(" "),s("p",[t._v("我们能够设置响应式数据、生命周期钩子、计算属性、定义方法，返回任何我们想要的东西。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("input")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("groceries")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("groceriesLeft")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("computed")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" groceries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("通过将所有数据包装在响应式方法里，内部所有的都变成了响应式的。这个状态模式来自 "),s("a",{attrs:{href:"https://vue-composition-api-rfc.netlify.com/#api-introduction",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composition API 文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("一个值得注意的是我们声明 groceriesLeft 变量的方式，你能看到，它是一个计算属性，并且定义在setup方法中。不再有分开声明的计算属性了。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addGrocery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groceries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteGrocery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("index")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("groceries"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这是典型的函数，唯一独特的事我们需要通过状态对象访问所有定义在状态对象中的响应式数据。但是这不是Vue3特有的，它就是普通JavaScript对象。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  addGrocery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  deleteGrocery\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("最后，我们想要在setup方法返回这些函数，这让属性和方法能够在模板中被访问。谢天谢地，模板还和原来一样，没啥变化。")]),t._v(" "),s("p",[t._v("第一次听说这些时，有很多反对声音，因为人们不想被迫重新考虑他们的开发策略。然而我们听说这将是纯净的添加，人们仍然可以没有任何问题的使用Options API。")]),t._v(" "),s("p",[t._v("如果你想上手实践一下，你可以在你的项目中使用 "),s("a",{attrs:{href:"https://learnvue.co/2019/12/a-first-look-at-vue3-a-vue-composition-api-tutorial/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Composition API"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"你可以在vue中使用suspense"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你可以在vue中使用suspense"}},[t._v("#")]),t._v(" 你可以在Vue中使用Suspense")]),t._v(" "),s("p",[t._v("Suspense是"),s("a",{attrs:{href:"https://reactjs.org/docs/concurrent-mode-suspense.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React的功能"),s("OutboundLink")],1),t._v("，现在Vue3中也能使用。它能让你在页面准备好且页面载入完成后，在你的组件中展示后备内容。")]),t._v(" "),s("p",[t._v("当你在setup方法中异步载入内容是很有用的。看一下Vue-Next仓库，看起来setup是一个异步方法并且返回Promise。这个Promise能够被Suspense组件捕获，渲染后备内容直到它返回。")]),t._v(" "),s("p",[t._v("Suspense能够用来：")]),t._v(" "),s("ul",[s("li",[t._v("创建loading页面")]),t._v(" "),s("li",[t._v("等待 API 回调")]),t._v(" "),s("li",[t._v("几乎任何类型的数据请求或者异步的setup方法")])]),t._v(" "),s("p",[t._v("这可能实现起来很简单，你要做的全部就是将你的代码包裹在Suspense组件中，定义你的主要内容和后备内容。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Suspense")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Suspended-component")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("#fallback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Fallback Content\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("Suspense")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果你想了解更多关于Suspense的内容，或者你想使用它，查看"),s("a",{attrs:{href:"https://vueschool.io/articles/vuejs-tutorials/suspense-new-feature-in-vue-3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VueSchool 文章"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"vue3中的片段-fragments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3中的片段-fragments"}},[t._v("#")]),t._v(" Vue3中的片段(Fragments)")]),t._v(" "),s("p",[t._v("片段(Fragments)是没有根元素的组件。Vue2中，每一个组件必须有且仅能有一个根元素。")]),t._v(" "),s("p",[t._v("这可能让人头疼。")]),t._v(" "),s("p",[t._v("在一些用例中，使一个组件返回几个子元素是很简单的事情。例如，让我们用React举个例子，表格结构有一个叫Column的自定义组件。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("tr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Columns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("tr"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("table"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("为了是编译的HTML有效，Columns组件需要返回"),s("code",[t._v("<td>")]),t._v("元素。但是目前，作为Vue的组件需要一个单独的根元素。")]),t._v(" "),s("p",[t._v("Columns组件的模板可能像这样，这会引起问题。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("World"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("这个时候片段(Fragments)就派上用场了，它允许你返回多个元素从而让上面的问题能够很简单的解决。")]),t._v(" "),s("p",[t._v("在Vue3中片段(Fragments)组件可能像下面这样。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Fragment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("td"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("td"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("td"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("td"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Fragment"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("然后，因为这将返回两个"),s("code",[t._v("<td>")]),t._v("元素，所以表格将显示正常。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Hello"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("World"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("完美！")]),t._v(" "),s("p",[t._v("现在，有一个非官方的"),s("a",{attrs:{href:"https://github.com/y-nk/vue-fragment",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 片段(Fragments)组件库"),s("OutboundLink")],1),t._v("，它使用内部指令获取了组件的所有子元素然后移动到合适的位置。")]),t._v(" "),s("h2",{attrs:{id:"对了-还有-portals"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对了-还有-portals"}},[t._v("#")]),t._v(" 对了，还有 Portals")]),t._v(" "),s("p",[t._v("Portals 是"),s("a",{attrs:{href:"https://reactjs.org/docs/portals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("React原生包含"),s("OutboundLink")],1),t._v("的另一个功能，现在计划在Vue3中实现。")]),t._v(" "),s("p",[t._v("Portals 允许你跨组件传递内容，这意味着你能够在当前组件的作用域之外编辑内容。")]),t._v(" "),s("p",[t._v("当你在向popup、sidebar或者其他类似组件发送内容时这是非常有帮助的。")]),t._v(" "),s("p",[t._v("和片段(Fragments)一样，也有一个"),s("a",{attrs:{href:"https://github.com/LinusBorg/portal-vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("非官方的Vue版本 Portal 库"),s("OutboundLink")],1),t._v("，它在Vue2中带来了这个功能。根据 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-next repo"),s("OutboundLink")],1),t._v("，Portals将包含在Vue3中。")]),t._v(" "),s("p",[t._v("这是一个来自 protal-vue 文档中的举例的代码截图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/1418/0*QwKa95vy_br7QOUJ.png",alt:"code about Portals"}})]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        下面的内容渲染在PortalVue实现的右侧红色的容器中\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Portal to"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"right-baisc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("p "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"red"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n          这是左侧绿色容器的内容。\n          最酷的是，他能够跨组件，所以你能够向任何地方传递内容。\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("p"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Portal"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("template"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("Vue3中Portals的语法和使用方式现在任然不明确，但是应该会和这个相似。")]),t._v(" "),s("h2",{attrs:{id:"vue3优化了渲染"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue3优化了渲染"}},[t._v("#")]),t._v(" Vue3优化了渲染")]),t._v(" "),s("p",[t._v("Vue3中很大一块工作就是使它更快、更有效率。实际上，根据"),s("a",{attrs:{href:"https://www.youtube.com/watch?v=WLpLYhnGqPA&feature=emb_title",target:"_blank",rel:"noopener noreferrer"}},[t._v("尤雨溪在多伦多VueConf上的演讲"),s("OutboundLink")],1),t._v("，内部测试表明模板样式在Vue3中比Vue2速度提升了120%。")]),t._v(" "),s("p",[t._v("有两个关键的优化帮助提升了Vue3的渲染速度：")]),t._v(" "),s("ol",[s("li",[t._v("块级树的优化")]),t._v(" "),s("li",[t._v("静态树的缓存(Hoisting, ^_^ 翻译成啥呢……)")])]),t._v(" "),s("p",[t._v("让我们详细说说上面的两点。")]),t._v(" "),s("h3",{attrs:{id:"块级树优化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#块级树优化"}},[t._v("#")]),t._v(" 块级树优化")]),t._v(" "),s("p",[t._v("使用虚拟DOM渲染有一个自然的瓶颈，因为每个组件要跟踪自己的依赖。")]),t._v(" "),s("p",[t._v("观察这些依赖非常慢，因为它递归的检查整个元素树去监测变化。")]),t._v(" "),s("p",[t._v("Vue团队注意到在组件中的一件事，一个节点结构中大多数是静态的。如果一个某个部分实际上是动态的（因为v-if或者v-for指令），那么它内部的许多内容时静态的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/2048/0*N-UgJRDhC5c6qvZp.png",alt:"block tree optimizations"}})]),t._v(" "),s("p",[t._v("由此，Vue3将模板划分为静态和动态部分。现在渲染器知道哪些节点是动态的，它不会浪费时间去检查静态节点的变化。")]),t._v(" "),s("p",[t._v("这真的减少了大量需要去被动观察的元素的数量。")]),t._v(" "),s("p",[t._v("结合所有的节点去创建一个块级树，或者一个模板根据指令（v-if/v-for）划分为节点块。")]),t._v(" "),s("p",[t._v("在块级树中，每个节点有以下：")]),t._v(" "),s("ul",[s("li",[t._v("一个静态节点结构")]),t._v(" "),s("li",[t._v("静态内容不需要被观察")]),t._v(" "),s("li",[t._v("动态节点能够被存储在平级数组中")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/2048/0*tgwHaVdtEBDaCkc-.png",alt:"it's a block tree"}})]),t._v(" "),s("p",[t._v("这消除了需要去递归的检查每个元素的需求，大大改善了运行时。")]),t._v(" "),s("h3",{attrs:{id:"静态树缓存-hoisting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态树缓存-hoisting"}},[t._v("#")]),t._v(" 静态树缓存(Hoisting)")]),t._v(" "),s("p",[t._v("静态树提升并不是新提出的（Vue2中已经存在），Vue3有更多颠覆性（aggressive ^_^）技术去提升项目速度。正如名字说表达，静态书提升不会重新渲染没有任何依赖的静态节点。相反，它会重用相同节点。")]),t._v(" "),s("p",[t._v("这极大的减少了虚拟DOM的工作，同时节省了大量项目开销，主要是垃圾收集方面。")]),t._v(" "),s("p",[t._v("在Vue3中，静态缓存更有颠覆性，以便尽可能高效的工作。")]),t._v(" "),s("h2",{attrs:{id:"typescript支持"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript支持"}},[t._v("#")]),t._v(" Typescript支持")]),t._v(" "),s("p",[t._v("另一个变化是，Vue的代码库使用Typescript重新写了一遍。再次重申，一个主要的问题是强制用户学习Typescript将提高Vue3的上手门槛。")]),t._v(" "),s("p",[t._v("所以Vue团队让他对我们来说很简单，如果你想要Typescript，使用他。如果你不想要，仍然可以使用JavaScript。两种都可以。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/1536/0*STCYeCVImtxjkR7x",alt:"Typscript vs Javascript"}})]),t._v(" "),s("p",[t._v("如果你像我一样，你可能会问“为什么用Typescript”。")]),t._v(" "),s("p",[t._v("先不说其他，Typescript允许你给变量添加类型信息。这能够极大的帮助你维护一个长期运行的项目。")]),t._v(" "),s("p",[t._v("再者，当你工作的IDE支持Typescript，在开发过程中能够自动补全和展示类型信息。")]),t._v(" "),s("p",[t._v("这都有你决定，事实上使用Typescript写Vue库开发者将受益，即使他们继续使用JavaScript。")]),t._v(" "),s("p",[t._v("自从新的Vue代码库使用Typescript，即使你使用JavaScript，自动补全、类型信息和最终文档都能够从IDE中得到。这将节省你多次访问Vue文档的时间。")]),t._v(" "),s("h2",{attrs:{id:"它非常轻量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#它非常轻量"}},[t._v("#")]),t._v(" 它非常轻量")]),t._v(" "),s("p",[t._v("现在，VueJS已经非常小（gzip后20Kb），但是Vue团队面临一个问题，无论用户是否使用，新功能将增加构建包的大小。")]),t._v(" "),s("p",[t._v("为了修复这个问题，Vue3将更加模块化。当然这将增加你在开发时import的次数，这确保了你的项目中没有不使用的库。")]),t._v(" "),s("p",[t._v("多亏了Tree shaking（消除非重要代码），Vue3中减少的代码大概有gzip后10Kb。当然，许多库将被重新引入，但是没关系，我们并不会被强迫使用所有东西。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://miro.medium.com/max/456/0*Rtg6p9OSDOd2DA-L",alt:"vue3 modular"}})]),t._v(" "),s("p",[t._v("实际上，开发者不用为他们从不使用的功能付出代价。")]),t._v(" "),s("h2",{attrs:{id:"一些关于开始学习vue3的资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一些关于开始学习vue3的资源"}},[t._v("#")]),t._v(" 一些关于开始学习Vue3的资源")]),t._v(" "),s("p",[t._v("老实说，我认为Vue核心团队在听取社区反馈上和通过官方文章提供不断的更新一些学习Vue3的最佳地方这点做的很棒。")]),t._v(" "),s("p",[t._v("在写这篇文章时，我花了大量时间在"),s("a",{attrs:{href:"https://github.com/vuejs/rfcs",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC"),s("OutboundLink")],1),t._v("（Request For comment）和 "),s("a",{attrs:{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue-next"),s("OutboundLink")],1),t._v("（官方Vue3）仓库。")]),t._v(" "),s("h3",{attrs:{id:"其他资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他资源"}},[t._v("#")]),t._v(" 其他资源")]),t._v(" "),s("ul",[s("li",[s("p",[s("a",{attrs:{href:"https://www.vuemastery.com/courses/vue-3-essentials/why-the-composition-api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Mastery —— Vue 3 Essentials "),s("OutboundLink")],1),t._v(" —— 这是一个很棒的课程介绍了Vue3的一些关键功能，例如 Composition API")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"http://vuejsdevelopers.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://vuejsdevelopers.com/"),s("OutboundLink")],1),t._v(" —— 我最喜欢的一个VueJS社区，有许多很棒的教程")])]),t._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=WLpLYhnGqPA",target:"_blank",rel:"noopener noreferrer"}},[t._v("“Vue 3.0 的设计原则”"),s("OutboundLink")],1),t._v(" —— 这个演讲中，作者尤雨溪讨论了许多"),s("a",{attrs:{href:"https://learnvue.co/2019/12/how-vue3-is-designed-for-both-hobby-devs-and-large-projects/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue 3.0 的设计选项"),s("OutboundLink")],1),t._v("。讲的很棒。")])])]),t._v(" "),s("h2",{attrs:{id:"你准备好了吗"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#你准备好了吗"}},[t._v("#")]),t._v(" 你准备好了吗？？")]),t._v(" "),s("p",[t._v("如果你有Vue开发经验，很明显，Vue3将要到来的更新将使它更可用、更强大。")]),t._v(" "),s("p",[t._v("从渲染优化到帮助开发者写更可读、可维护的代码，Vue3似乎要改善Vue2在体验上的很多痛点。")]),t._v(" "),s("p",[t._v("希望这篇文章很好地解释Vue3的变化和如何工作。在Vue3官方推出之后，我将一定会更新这篇文章。")]),t._v(" "),s("h2",{attrs:{id:"感谢阅读"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#感谢阅读"}},[t._v("#")]),t._v(" 感谢阅读")]),t._v(" "),s("p",[t._v("感谢你阅读到这里，翻译的不好的地方，还请指点。希望我的内容能让你受用，再次感谢。"),s("a",{attrs:{href:"https://llccing.github.io/FrontEnd/",target:"_blank",rel:"noopener noreferrer"}},[t._v("by llccing 千里"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);