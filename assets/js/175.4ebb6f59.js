(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{425:function(t,e,a){"use strict";a.r(e);var i=a(14),r=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"gzip"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gzip"}},[t._v("#")]),t._v(" gzip")]),t._v(" "),e("p",[e("strong",[t._v("gzip")]),t._v("是一种文件格式，也是用来压缩、解压文件的应用程序。这个程序是Jean-loup Gailly和Mark Adler创建的，它被用来替代早期Unix系统上的压缩工具，并且计划给GNU（GNU's Not Unix）用，“gzip”中的“g”就是来自GNU。")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#工作原理"}},[t._v("工作原理")])]),e("li",[e("a",{attrs:{href:"#参考"}},[t._v("参考")])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"工作原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#工作原理"}},[t._v("#")]),t._v(" 工作原理")]),t._v(" "),e("ol",[e("li",[t._v("client请求url，并在request header中设置属性accept-encoding: gzip，告知server，我支持gzip，你可以给我传gzip压缩的内容。")]),t._v(" "),e("li",[t._v("server收到请求后，判断client是否支持gzip， 如果支持则向client传送压缩过的内容，并且设置response的首部content-encoding为gzip（这里要说明一下，gzip压缩在nginx server需要手动开启）。")]),t._v(" "),e("li",[t._v("浏览器收到压缩内容后，对于使用gzip压缩的资源进行解压操作。")])]),t._v(" "),e("p",[t._v("nginx开启压缩选项，将“#”注释去掉即可。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\t # gzip_vary on;\n\t # gzip_proxied any;\n\t # gzip_comp_level 6;\n\t # gzip_buffers 16 8k;\n\t # gzip_http_version 1.1;\n\t # gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/java    script;\n")])])]),t._v(" "),e("h2",{attrs:{id:"参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/24764131",target:"_blank",rel:"noopener noreferrer"}},[t._v("你真的了解gzip吗"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://zh.wikipedia.org/wiki/Gzip",target:"_blank",rel:"noopener noreferrer"}},[t._v("gzip"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);