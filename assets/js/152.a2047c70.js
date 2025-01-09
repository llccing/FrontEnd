(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{382:function(e,t,r){"use strict";r.r(t);var a=r(14),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"表单验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表单验证"}},[e._v("#")]),e._v(" 表单验证")]),e._v(" "),t("h2",{attrs:{id:"q-个验证表单功能的任务-内容不多-仅需要验证用户名、邮箱、密码等。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q-个验证表单功能的任务-内容不多-仅需要验证用户名、邮箱、密码等。"}},[e._v("#")]),e._v(" Q: 个验证表单功能的任务，内容不多，仅需要验证用户名、邮箱、密码等。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo1"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("缺点：")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("多人协作时，会覆盖。")])]),e._v(" "),t("li",[t("p",[e._v("创建了全局变量影响性能。")])])]),e._v(" "),t("h2",{attrs:{id:"用对象收编变量demo2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用对象收编变量demo2"}},[e._v("#")]),e._v(" 用对象收编变量"),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo2"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"对象的另一种形式demo3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象的另一种形式demo3"}},[e._v("#")]),e._v(" 对象的另一种形式"),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo3"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("优点：避免了全局变量，一旦出现覆盖现象，会全部覆盖。")]),e._v(" "),t("p",[e._v("问题：当别人想用你的方法时，不能复制一份，或者说别人不能通过new的方式继承这些方法。")]),e._v(" "),t("h2",{attrs:{id:"使用返回对象的形式demo4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用返回对象的形式demo4"}},[e._v("#")]),e._v(" 使用返回对象的形式"),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/6/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo4"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    var a = checkObject();\n    a.checkPassword();\n")])])]),t("h2",{attrs:{id:"使用类的形式-demo5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用类的形式-demo5"}},[e._v("#")]),e._v(" 使用类的形式 "),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/5/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo5"),t("OutboundLink")],1)]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("    // 此处要通过new关键字来创建对象，因为使用的是类的形式。会改变this的指向到a\n    var a = new checkObject();\n    a.checkPassword();\n")])])]),t("blockquote",[t("p",[e._v("写成类的形式之后，每个人在new之后都会有独有一套方法，但是这样做也会带来性能问题，需要改变一下。")])]),e._v(" "),t("h2",{attrs:{id:"将公共方法放在原型上-demo6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#将公共方法放在原型上-demo6"}},[e._v("#")]),e._v(" 将公共方法放在原型上 "),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/7/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo6"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这样通过new关键字创建的对象所拥有的方法就是一个了,因为他们要依赖prototype原型依次寻找,而找到的方法都是同一个,都绑定在checkObject对象类的原型上。")]),e._v(" "),t("h2",{attrs:{id:"demo7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo7"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/8/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo7"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("在写法上也可以采用这种将对象赋值到对象原型的方式，不过这种方法和上面的方法不能混用， 否则使用为对象的原型对象赋值新对象时，将会覆盖掉之前对prototype对象赋值的新方法。")]),e._v(" "),t("h2",{attrs:{id:"链式调用demo8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式调用demo8"}},[e._v("#")]),e._v(" 链式调用"),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/9/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo8"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"函数的祖先-demo9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数的祖先-demo9"}},[e._v("#")]),e._v(" 函数的祖先 "),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/11/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo9"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("通过给Function对象的原型加入checkEmail方法，即可在所有函数中调用该方法，因为Function是所有函数的祖先。")]),e._v(" "),t("p",[e._v("但是这样添加会污染全局变量，会对其他人的开发造成影响，所以不推荐这种方式。")]),e._v(" "),t("h2",{attrs:{id:"demo10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#demo10"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/12/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo10"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("这样做就不会污染全局变量。")]),e._v(" "),t("h2",{attrs:{id:"改链式添加方法、链式调用demo11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改链式添加方法、链式调用demo11"}},[e._v("#")]),e._v(" 改链式添加方法、链式调用"),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/13/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo11"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"使用类式调用-new-demo12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用类式调用-new-demo12"}},[e._v("#")]),e._v(" 使用类式调用（new）"),t("a",{attrs:{href:"https://jsfiddle.net/t7pb27sk/14/",target:"_blank",rel:"noopener noreferrer"}},[e._v("demo12"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("注意在调用时要通过new的方式，实例化对象")])])}),[],!1,null,null,null);t.default=s.exports}}]);