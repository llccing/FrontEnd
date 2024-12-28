(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{443:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vue-cli-plugin-eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-plugin-eslint"}},[t._v("#")]),t._v(" @vue/cli-plugin-eslint")]),t._v(" "),s("blockquote",[s("p",[t._v("vue-cli 的 eslint 插件")])]),t._v(" "),s("h2",{attrs:{id:"注入命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注入命令"}},[t._v("#")]),t._v(" 注入命令")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[s("code",[t._v("vue-cli-service lint")])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Usage: vue-cli-service lint [options] [...files]\n\nOptions:\n\n  --format [formatter] 指定 格式化工具（默认： codeframe）\n  --no-fix             不修复错误\n  --max-errors         指定使构建失败的最多错误数（默认：0）\n  --max-warnings       指定使构建失败的最多警告数（默认：无限大，表示警告不会影响构建）\n")])])]),s("p",[t._v("lint 并且修复文件。如果没有指定特定文件，它 lint "),s("code",[t._v("src")]),t._v(" 和 "),s("code",[t._v("test")]),t._v(" 目录下的所有文件。")]),t._v(" "),s("p",[t._v("Other "),s("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint CLI options"),s("OutboundLink")],1),t._v(" are also supported.")]),t._v(" "),s("p",[t._v("其他的 "),s("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#options",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESLint CLI 选项"),s("OutboundLink")],1),t._v(" 也是支持的。")])])]),t._v(" "),s("h2",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("ESLint 可以通过 "),s("code",[t._v(".eslintrc")]),t._v(" 或者 "),s("code",[t._v("package.json")]),t._v(" 中的 "),s("code",[t._v("eslintConfig")]),t._v(" 字段配置。")]),t._v(" "),s("p",[t._v("默认情况下，在开发中 "),s("code",[t._v("eslint-loader")]),t._v(" 的 Lint-on-save 是生效的。它能够通过 "),s("code",[t._v("vue.config.js")]),t._v(" 文件中的 "),s("code",[t._v("lintOnSave")]),t._v(" 选项禁止：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lintOnSave")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当设置为 "),s("code",[t._v("true")]),t._v(" 时，"),s("code",[t._v("eslint-loader")]),t._v(" 将把触发的 lint 错误作为警告。默认情况下，警告仅仅在命令行输出日志，不会使编译失败。")]),t._v(" "),s("p",[t._v("如果想将 lint 错误展示在浏览器浮层上，，你可以使用 "),s("code",[t._v("lintOnSave: 'error'")]),t._v("。这将强制 "),s("code",[t._v("eslint-loader")]),t._v(" 总是触发错误。这也意味着 lint 错误将不会使编译失败。")]),t._v(" "),s("p",[t._v("或者，你可以配置浮层同时展示警告和错误：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("devServer")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("overlay")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("warnings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("errors")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("当 "),s("code",[t._v("lintOnSave")]),t._v(" 的值是 true 时，"),s("code",[t._v("eslint-loader")]),t._v(" 将同时在开发和生产环境应用。如果你想生产环境构建时禁止 "),s("code",[t._v("eslint-loader")]),t._v("，你可以使用下面的配置：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// vue.config.js")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lintOnSave")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'production'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"在已有项目中安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在已有项目中安装"}},[t._v("#")]),t._v(" 在已有项目中安装")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("vue "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" eslint\n")])])]),s("h2",{attrs:{id:"注入的-webpack-规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注入的-webpack-规则"}},[t._v("#")]),t._v(" 注入的 webpack 规则")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("config.module.rule('eslint')")])]),t._v(" "),s("li",[s("code",[t._v("config.module.rule('eslint').use('eslint-loader')")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);