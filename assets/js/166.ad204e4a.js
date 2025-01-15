(window.webpackJsonp=window.webpackJsonp||[]).push([[166],{404:function(e,r,n){"use strict";n.r(r);var a=n(14),t=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"lerna"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#lerna"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/lerna/lerna",target:"_blank",rel:"noopener noreferrer"}},[e._v("lerna"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("一个管理有多个包的JavaScript项目的工具。")])]),e._v(" "),r("p",[e._v("主要是从 "),r("a",{attrs:{href:"https://github.com/vuejs/vue-next",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-next"),r("OutboundLink")],1),e._v(" 项目了解到这个工具，并且发现 "),r("a",{attrs:{href:"https://github.com/vuejs/vuepress",target:"_blank",rel:"noopener noreferrer"}},[e._v("vuepress"),r("OutboundLink")],1),e._v(" 这个项目1.0版本也采用了这个方式。工具能够被使用，肯定有他的优秀的地方，恰巧我也有个场景能够用到这个工具，于是就搞起。")]),e._v(" "),r("p",[e._v("事先说明，我这个算是为了用而用，所以和lerna的原本目的可能有所偏离，但是为了熟悉这个工具，还是可以搞一下的。")]),e._v(" "),r("h2",{attrs:{id:"开始"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开始"}},[e._v("#")]),e._v(" 开始")]),e._v(" "),r("p",[e._v("先阅读2个文章，了解一下能够简答使用。")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://juejin.im/post/5ced1609e51d455d850d3a6c",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lerna中文教程"),r("OutboundLink")],1),e._v(" - 跟着教程先试试，能用再理解。")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://dev.to/anonimoconiglio/what-is-a-mono-repository-and-why-you-should-try-lerna-57lm",target:"_blank",rel:"noopener noreferrer"}},[e._v("what-is-a-mono-repository-and-why-you-should-try-lerna"),r("OutboundLink")],1),e._v(" - what is Lerna and why it's worth to try?")])]),e._v(" "),r("h2",{attrs:{id:"我的使用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#我的使用"}},[e._v("#")]),e._v(" 我的使用")]),e._v(" "),r("h3",{attrs:{id:"vue-repo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#vue-repo"}},[e._v("#")]),e._v(" "),r("a",{attrs:{href:"https://github.com/llccing-demo/vue-repo",target:"_blank",rel:"noopener noreferrer"}},[e._v("vue-repo"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("开始的时候，vue-repo 中的demo项目时散落在 "),r("a",{attrs:{href:"https://github.com/llccing-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("llccing-demo"),r("OutboundLink")],1),e._v(" 下，有些凌乱，所以通过按库的类型做了区分，vue-repo 主要是vue方面的demo，包括vue、nuxt等等。")]),e._v(" "),r("p",[e._v("当然后后来针对react也创建了一个react-repo。")]),e._v(" "),r("p",[e._v("接下来要做的事情，可以把公共依赖提到跟目录，不用没个项目都添加同样的依赖。")]),e._v(" "),r("h4",{attrs:{id:"有一个坑卡了比较久-这里记一下"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有一个坑卡了比较久-这里记一下"}},[e._v("#")]),e._v(" 有一个坑卡了比较久，这里记一下")]),e._v(" "),r("p",[e._v("lerna初始化后，需要commit，保证工作区是clean状态再import其他repo。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Error: Command failed: git rev-parse HEAD\nlerna ERR! fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.\nlerna ERR! Use '--' to separate paths from revisions, like this:\nlerna ERR! 'git <command> [<revision>...] -- [<file>...]'\nlerna ERR! \nlerna ERR! HEAD\nlerna ERR! \nlerna ERR! at makeError (/usr/local/lib/node_modules/lerna/node_modules/execa/index.js:174:9)\nlerna ERR! at Function.module.exports.sync (/usr/local/lib/node_modules/lerna/node_modules/execa/index.js:338:15)\nlerna ERR! at Object.execSync (/usr/local/lib/node_modules/lerna/node_modules/@lerna/child-process/index.js:22:16)\nlerna ERR! at ImportCommand.getCurrentSHA (/usr/local/lib/node_modules/lerna/node_modules/@lerna/import/index.js:129:34)\nlerna ERR! at ImportCommand.initialize (/usr/local/lib/node_modules/lerna/node_modules/@lerna/import/index.js:98:31)\nlerna ERR! at Promise.resolve.then (/usr/local/lib/node_modules/lerna/node_modules/@lerna/command/index.js:266:24)\nlerna ERR! at <anonymous>\nlerna ERR! lerna Command failed: git rev-parse HEAD\nlerna ERR! lerna fatal: ambiguous argument 'HEAD': unknown revision or path not in the working tree.\nlerna ERR! lerna Use '--' to separate paths from revisions, like this:\nlerna ERR! lerna 'git <command> [<revision>...] -- [<file>...]'\nlerna ERR! lerna \nlerna ERR! lerna HEAD\n")])])]),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/rongfengliang/p/10168891.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.cnblogs.com/rongfengliang/p/10168891.html"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"别人怎么用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#别人怎么用"}},[e._v("#")]),e._v(" 别人怎么用")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://juejin.im/post/5a989fb451882555731b88c2",target:"_blank",rel:"noopener noreferrer"}},[e._v("管理前端packages的最佳实践"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://medium.com/the-andela-way/using-lerna-to-manage-js-monorepos-b7b8611f2ff3",target:"_blank",rel:"noopener noreferrer"}},[e._v("frontEnd-and-backEnd"),r("OutboundLink")],1),e._v(" - 对于全栈项目的处理，提取公共依赖。")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);