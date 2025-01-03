(window.webpackJsonp=window.webpackJsonp||[]).push([[240],{463:function(t,s,a){"use strict";a.r(s);var e=a(14),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"深入响应式原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#深入响应式原理"}},[t._v("#")]),t._v(" 深入响应式原理")]),t._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("input v"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("model"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"message"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("message")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("修改message的值，DOM就会改变，究竟如何做到的呢。")]),t._v(" "),s("h2",{attrs:{id:"响应式对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#响应式对象"}},[t._v("#")]),t._v(" 响应式对象")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Vue.js不兼容IE8及以下。\n")])])]),s("h3",{attrs:{id:"object-defineproperty"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-defineproperty"}},[t._v("#")]),t._v(" Object.defineProperty")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj 要在其上定义属性的对象")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prop 定义或修改属性的名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// descriptor 将被定义或修改的属性描述符")]),t._v("\nObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" descriptor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("code",[t._v("descriptor")]),t._v("是比较核心的，有很多可选值。其中"),s("code",[t._v("get")]),t._v("、"),s("code",[t._v("set")]),t._v("是我们最关心的，\nget是给obj一个属性提供的getter方法，当我们访问属性时就会触发getter方法，\nset是給obj一个属性提供的setter方法，当我们对该属性做修改的时候就会触发setter方法。")]),t._v(" "),s("p",[t._v("一个对象拥有了``getter"),s("code",[t._v("、")]),t._v("setter````，我们可以简单地把这个对象称为响应式对象。")]),t._v(" "),s("h3",{attrs:{id:"initstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#initstate"}},[t._v("#")]),t._v(" initState")])])}),[],!1,null,null,null);s.default=r.exports}}]);