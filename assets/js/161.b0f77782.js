(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{393:function(t,e,a){"use strict";a.r(e);var r=a(14),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"jquery实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jquery实践"}},[t._v("#")]),t._v(" jQuery实践")]),t._v(" "),e("h2",{attrs:{id:"input的change事件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input的change事件"}},[t._v("#")]),t._v(" input的change事件")]),t._v(" "),e("p",[t._v("有个这样的一个需求，表格中有许多要输入的input，input有长度的控制，和数字控制。")]),t._v(" "),e("p",[t._v("开始想到的做法是用jQuery valudate，一个表单验证插件，后台考虑到表格中所有的input都要进行控制，而jQuery validate需要绑定id，或者每个input加上相应的类来控制，就会变得非常麻烦，所以就想到用each或者map遍历table中的每个input，这样就可以统一的加上长度和数字控制。")]),t._v(" "),e("p",[t._v("还有一个问题就是数字的验证，原先就是验证下是不是number类型，后来考虑到可能会有负数、小数出现，所以就想到了正则表达式，Google一下，"),e("a",{attrs:{href:"https://blog.csdn.net/fwj380891124/article/details/9017619",target:"_blank",rel:"noopener noreferrer"}},[t._v("正则实数"),e("OutboundLink")],1),t._v("。")]),t._v(" "),e("p",[t._v("那么什么时候触发事件去判断是否符合实数要求呢，参考jQuery validate，觉得可以将事件触发绑定到input的change事件中。")]),t._v(" "),e("h2",{attrs:{id:"实践出真知"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实践出真知"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://jsfiddle.net/59afa0hL/3/",target:"_blank",rel:"noopener noreferrer"}},[t._v("实践出真知"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"http://blog.csdn.net/fwj380891124/article/details/9017619",target:"_blank",rel:"noopener noreferrer"}},[t._v("js常用正则"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=n.exports}}]);