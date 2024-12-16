(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{372:function(s,t,a){"use strict";a.r(t);var r=a(14),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"聚合查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询"}},[s._v("#")]),s._v(" 聚合查询")]),s._v(" "),t("p",[s._v("五个常用的聚合函数")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("COUNT")])]),s._v(" "),t("li",[t("p",[s._v("SUM")])]),s._v(" "),t("li",[t("p",[s._v("AVG")])]),s._v(" "),t("li",[t("p",[s._v("MAX")])]),s._v(" "),t("li",[t("p",[s._v("MIN")])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("计算行数")])])])]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 结果是 7")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("purchase_price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 结果是 6")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 如果 COUNT 的参数是列名，会把列值为 NULL 的情况排除，计算 NULL 之外的数据行。")]),s._v("\n")])])]),t("ul",[t("li",[t("strong",[s._v("使用聚合函数删除重复值")])])]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DISTINCT")]),s._v(" product_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("注意，在聚合函数的参数中使用 DISTINCT，可以删除重复数据。")]),s._v(" "),t("h2",{attrs:{id:"对表分组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对表分组"}},[s._v("#")]),s._v(" 对表分组")]),s._v(" "),t("ul",[t("li",[s._v("计算各个种类商品的个数")])]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" product_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[t("strong",[s._v("聚合键")]),s._v("、"),t("strong",[s._v("分组列")]),s._v("，指的都是 GROUP BY 后面跟的参数。")]),s._v(" "),t("p",[t("strong",[s._v("注意")]),s._v("，书写顺序：")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n")])])]),t("h3",{attrs:{id:"聚合键中的-null"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#聚合键中的-null"}},[s._v("#")]),s._v(" 聚合键中的 NULL")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" purchase_price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("Product"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" purchase_price\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- purchase_price 字段中有NULL的情况，会展示出字段值为不确定的一行")]),s._v("\n")])])]),t("p",[t("strong",[s._v("GROUP BY 和 WHERE 并用时 SELECT 语句的执行顺序")])]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n")])])]),t("h3",{attrs:{id:"聚合函数和-group-by-子句有关的常见错误"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数和-group-by-子句有关的常见错误"}},[s._v("#")]),s._v(" 聚合函数和 GROUP BY 子句有关的常见错误")]),s._v(" "),t("h4",{attrs:{id:"_1、在-select-子句中书写了多余的列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、在-select-子句中书写了多余的列"}},[s._v("#")]),s._v(" 1、在 SELECT 子句中书写了多余的列")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" purchase_price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Product \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" product_type\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 这个语法仅仅 MySQL 自己支持，其他 DBMS 都不支持。")]),s._v("\n")])])]),t("p",[s._v("可以做如下修改，正确写法如下：")]),s._v(" "),t("div",{staticClass:"language-SQL extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" product_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" purchase_price"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("COUNT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" Product \n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" product_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" purchase_price\n")])])]),t("p",[t("strong",[s._v("使用聚合函数时，SELECT子句中仅仅能存在3种元素")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("常数")]),s._v(" "),t("li",[s._v("聚合函数")]),s._v(" "),t("li",[s._v("GROUP BY 子句中指定的列名（也就是聚合键）")])]),s._v(" "),t("h4",{attrs:{id:"_1、在-gruop-by-子句中写了列的别名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、在-gruop-by-子句中写了列的别名"}},[s._v("#")]),s._v(" 1、在 GRUOP BY 子句中写了列的别名")])])}),[],!1,null,null,null);t.default=e.exports}}]);