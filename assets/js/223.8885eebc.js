(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{508:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#评论"}},[t._v("#")]),t._v(" 评论")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("没有评论的blog，不是一个好的blog。\n")])])]),a("p",[t._v("当然vuepress是用来做产品使用文档的，而不是blog，所以自身就没有评论交互的基因在，但是这个可以改，已经有人提issue反馈这个问题了。")]),t._v(" "),a("h2",{attrs:{id:"问题-解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-解决"}},[t._v("#")]),t._v(" 问题/解决")]),t._v(" "),a("p",[t._v("首页本不应该有评论，结果因为我们在layout组件最下方加了Valine组件，所以所有的页面都会有，\n然后看了一下其中一个哥们的源码，发现能够读到 "),a("code",[t._v("$page.frontmatter")]),t._v("这个属性，正好首页中有个的配置中有"),a("code",[t._v("home=true")]),t._v("，所以加上这个判断就解决了这个问题。")]),t._v(" "),a("p",[t._v("附源码：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Valine v"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!$page.frontmatter.home"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Valine"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("Valine，一个新的评论，看着不错，可以试试\n"),a("a",{attrs:{href:"https://segmentfault.com/a/1190000016144076",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://segmentfault.com/a/1190000016144076"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("gitment，但是感觉不是很理想，需要登录阻挡了大部分人\n"),a("a",{attrs:{href:"https://hughfenghen.github.io/fe/vuepress-gitment.html#%E6%B3%A8%E5%86%8C-oauth-application",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hughfenghen.github.io/fe/vuepress-gitment.html#%E6%B3%A8%E5%86%8C-oauth-application"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);