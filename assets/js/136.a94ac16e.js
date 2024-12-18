(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{421:function(t,l,e){"use strict";e.r(l);var a=e(14),n=Object(a.a)({},(function(){var t=this,l=t._self._c;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"inline-block"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#inline-block"}},[t._v("#")]),t._v(" inline-block")]),t._v(" "),l("blockquote",[l("p",[t._v("“-”表示前缀，意思是block具备inline的性质，让块级元素在一行内显示的性质。")])]),t._v(" "),l("h2",{attrs:{id:"需要留意的点"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#需要留意的点"}},[t._v("#")]),t._v(" 需要留意的点")]),t._v(" "),l("ol",[l("li",[t._v("能够设置宽高")]),t._v(" "),l("li",[t._v("inline-block各个元素，高度不同时，以文本基线对齐，通过vertical-align:top;实现顶部对齐")])]),t._v(" "),l("h2",{attrs:{id:"float与display-inline-block-对比"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#float与display-inline-block-对比"}},[t._v("#")]),t._v(" float与display: inline-block 对比")]),t._v(" "),l("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"float vs inline-block",src:"https://codepen.io/llccing/embed/dyypmZJ?height=265&theme-id=0&default-tab=html,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\n  See the Pen "),l("a",{attrs:{href:"https://codepen.io/llccing/pen/dyypmZJ"}},[t._v("float vs inline-block")]),t._v(" by llccing\n  ("),l("a",{attrs:{href:"https://codepen.io/llccing"}},[t._v("@llccing")]),t._v(") on "),l("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")]),t._v(" "),l("h3",{attrs:{id:"共性"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#共性"}},[t._v("#")]),t._v(" 共性：")]),t._v(" "),l("p",[t._v("实现元素再一行展示，同时可以自由设置元素大小。")]),t._v(" "),l("h3",{attrs:{id:"区别"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[t._v("#")]),t._v(" 区别：")]),t._v(" "),l("ul",[l("li",[t._v("使用float时，要有一个元素包裹float元素，来避免接下来的元素仅仅靠近他。 inline-block 就没有这个问题。")]),t._v(" "),l("li",[t._v("inline-block会有空白符，设置margin-left: -4px;可以解除。")]),t._v(" "),l("li",[t._v("inline-block水平排列一行，即使高度不同也会高度最大的元素高度为行高，即使高度小的元素周围留空，也不会有第二个元素补位。可以设置默认的垂直对齐基线。inline-block元素仍然再文档流中占据位置。")]),t._v(" "),l("li",[t._v("float元素脱离当前文档流，呈环绕状排列，如遇上行有空白并且当前元素能够挤进去，这个元素会补位。默认顶部对齐。")])]),t._v(" "),l("h3",{attrs:{id:"使用场景"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[t._v("#")]),t._v(" 使用场景")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("inline-block，当我们需要设置某些元素再一行展示，并且排列方向一致的情况下，尽可能使用inline-block。因为inline-block的元素仍然再文档流中占据位置，减少了程序对DOM的更改操作，因为DOM每次更改，浏览器就会重绘DOM树，增加性能消耗，同时也不用因为float而清除浮动。")])]),t._v(" "),l("li",[l("p",[t._v("float，inline-block作为首选，但是仍有float使用的场景，比如两个元素，一个左排列，一个右排列。这时只能用float实现。浏览器的解析顺序是逐行解析，当设置两个元素右浮动时，代码顺序在前的元素会被先解析。")])])]),t._v(" "),l("h2",{attrs:{id:"参考"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/31856017",target:"_blank",rel:"noopener noreferrer"}},[t._v("display:inline-block一些注意点"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://github.com/mynane/web-problem/issues/3",target:"_blank",rel:"noopener noreferrer"}},[t._v("float 与 display: inline-block 区别"),l("OutboundLink")],1)]),t._v(" "),l("li",[l("a",{attrs:{href:"https://www.jianshu.com/p/05c48bf43b1a",target:"_blank",rel:"noopener noreferrer"}},[t._v("inline-block 与 float的共性与区别"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);l.default=n.exports}}]);