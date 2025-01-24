(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{388:function(s,a,t){"use strict";t.r(a);var r=t(14),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"查询基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询基础"}},[s._v("#")]),s._v(" 查询基础")]),s._v(" "),a("h2",{attrs:{id:"select"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[s._v("#")]),s._v(" SELECT")]),s._v(" "),a("h3",{attrs:{id:"全部列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全部列"}},[s._v("#")]),s._v(" 全部列")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"as-别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#as-别名"}},[s._v("#")]),s._v(" AS 别名")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" \nproduct_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'商品别名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \nproduct_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'商品名字'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \npurchase_price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'进货单价'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"常数查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常数查询"}},[s._v("#")]),s._v(" 常数查询")]),s._v(" "),a("ul",[a("li",[s._v("常数查询")])]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'商品'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" STRING"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2020-02-24'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" product_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("ul",[a("li",[s._v("DISTINCT, 合并重复值")])]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" purchase_price "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n")])])]),a("h3",{attrs:{id:"where-限定条件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-限定条件"}},[s._v("#")]),s._v(" where，限定条件")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" product_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'运动T恤'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h3",{attrs:{id:"注释方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释方式"}},[s._v("#")]),s._v(" 注释方式")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*SELECT * FROM `Product` \nWHERE product_type = '运动T恤' */")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token identifier"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- WHERE product_type = '运动T恤'")]),s._v("\n")])])]),a("h2",{attrs:{id:"算术运算符、比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#算术运算符、比较运算符"}},[s._v("#")]),s._v(" 算术运算符、比较运算符")]),s._v(" "),a("h3",{attrs:{id:""}},[a("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")]),s._v(" "),a("code",[s._v("+")]),s._v("/"),a("code",[s._v("-")]),s._v("/"),a("code",[s._v("*")]),s._v("/"),a("code",[s._v("/")])]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sale_price_x2'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" Product\n")])])]),a("p",[a("strong",[s._v("注意")]),s._v("，NULL 参与运算时，返回结果都是 NULL。")]),s._v(" "),a("h3",{attrs:{id:"比较运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[s._v("#")]),s._v(" 比较运算符")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'sale_price_x2'")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Product \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 这里的 不等于的写法非常有意思")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" sale_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("\n")])])]),a("ul",[a("li",[s._v("NULL 值判断不等于时需要注意")])]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" purchase_price \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Product \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" sale_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v("\n")])])]),a("p",[s._v("这里 purchase_price 为 NULL 的情况没有查出来，因为 NULL 时并不能确定是不是 <> 500，所以不包含 NULL 的值。")]),s._v(" "),a("p",[s._v("当然如果想查询出 NULL，可以用 "),a("code",[s._v("IS NULL")]),s._v(" 的方式。")]),s._v(" "),a("div",{staticClass:"language-SQL extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" sale_price"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" purchase_price \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Product \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" purchase_price "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("IS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("NULL")]),s._v("\n")])])]),a("h2",{attrs:{id:"逻辑运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[s._v("#")]),s._v(" 逻辑运算符")]),s._v(" "),a("ul",[a("li",[s._v("NOT/AND/OR")]),s._v(" "),a("li",[s._v("通过括号强化处理，提高 OR 优先级")])])])}),[],!1,null,null,null);a.default=e.exports}}]);