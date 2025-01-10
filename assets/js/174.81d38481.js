(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{408:function(e,t,r){"use strict";r.r(t);var a=r(14),c=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-cli-plugin-typescript-readme"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-cli-plugin-typescript-readme"}},[e._v("#")]),e._v(" @vue/cli-plugin-typescript README")]),e._v(" "),t("p",[e._v("翻译 @vue/cli-plugin-typescript README， "),t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-typescript/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("原 README"),t("OutboundLink")],1)]),e._v(" "),t("blockquote",[t("p",[e._v("vue-cli 的 typescript 插件")])]),e._v(" "),t("p",[e._v("使用 TypeScript + "),t("code",[e._v("ts-loader")]),e._v(" + "),t("a",{attrs:{href:"https://github.com/Realytics/fork-ts-checker-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork-ts-checker-webpack-plugin"),t("OutboundLink")],1),e._v(" 进行更快的非线程类型检查。")]),e._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),t("p",[e._v("Typescript 能够使用 "),t("code",[e._v("tsconfig.json")]),e._v(" 配置。")]),e._v(" "),t("p",[e._v("自从 "),t("code",[e._v("3.0.0-rc.6")]),e._v(" 之后，"),t("code",[e._v("typescript")]),e._v(" 现在是这个插件的同级依赖，所以你可以通过更新你的项目中 "),t("code",[e._v("package.json")]),e._v(" 来使用特定的版本的 TypeScript。")]),e._v(" "),t("p",[e._v("这个插件可以和 "),t("code",[e._v("@vue/cli-plugin-babel")]),e._v(" 一起使用。当使用 Babel 时，这个插件将输出 ES2015，将其他工作委托给 Babel 来做 -- 针对目标浏览器自动 polyfill。")]),e._v(" "),t("h2",{attrs:{id:"命令注入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令注入"}},[e._v("#")]),e._v(" 命令注入")]),e._v(" "),t("p",[e._v("如果创建项目时选择使用 "),t("a",{attrs:{href:"https://palantir.github.io/tslint/",target:"_blank",rel:"noopener noreferrer"}},[e._v("TSLint"),t("OutboundLink")],1),e._v("，"),t("code",[e._v("vue-cli-service lint")]),e._v(" 将被注入。")]),e._v(" "),t("h2",{attrs:{id:"缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[e._v("#")]),e._v(" 缓存")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/webpack-contrib/cache-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("cache-loader"),t("OutboundLink")],1),e._v(" 是默认启用的，缓存放在 "),t("code",[e._v("<projectRoot>/node_modules/.cache/ts-loader")]),e._v("。")]),e._v(" "),t("h2",{attrs:{id:"并行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并行"}},[e._v("#")]),e._v(" 并行")]),e._v(" "),t("p",[e._v("当机器 CPU 核心超过1个时，"),t("a",{attrs:{href:"https://github.com/webpack-contrib/thread-loader",target:"_blank",rel:"noopener noreferrer"}},[e._v("thread-loader"),t("OutboundLink")],1),e._v(" 是默认启用的。它能够通过在 "),t("code",[e._v("vue.config.js")]),e._v(" 中的 "),t("code",[e._v("parallel: false")]),e._v(" 设置来关闭。")]),e._v(" "),t("h2",{attrs:{id:"在已经创建的项目中安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在已经创建的项目中安装"}},[e._v("#")]),e._v(" 在已经创建的项目中安装")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("vue "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" typescript\n")])])]),t("h2",{attrs:{id:"注入到-webpack-chain-的规则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注入到-webpack-chain-的规则"}},[e._v("#")]),e._v(" 注入到 webpack-chain 的规则")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("config.rule('ts')")])]),e._v(" "),t("li",[t("code",[e._v("config.rule('ts').use('ts-loader')")])]),e._v(" "),t("li",[t("code",[e._v("config.rule('ts').use('babel-loader')")]),e._v(" (当和 "),t("code",[e._v("@vue/cli-plugin-babel")]),e._v(" 一起使用时)")]),e._v(" "),t("li",[t("code",[e._v("config.rule('ts').use('cache-loader')")])]),e._v(" "),t("li",[t("code",[e._v("config.plugin('fork-ts-checker')")])])])])}),[],!1,null,null,null);t.default=c.exports}}]);