(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{361:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"travis-ci"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#travis-ci"}},[t._v("#")]),t._v(" Travis CI")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("编码只是软件开发的一小部分，更多的时间往往花在构件和测试。\n")])])]),s("p",[t._v("Travis只支持GitHub，不支持其他代码托管服务。")]),t._v(" "),s("p",[t._v("没有Travis CI的情况下，每次写完需要执行下列操作。")]),t._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确保脚本抛出遇到的错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成静态文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入生成的文件夹")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" docs/.vuepress/dist\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果是发布到自定义域名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# echo 'www.example.com' > CNAME")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'deploy'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#git push -f git@github.com:<llccing>/<llccing>.github.io.git master")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果发布到 https://<USERNAME>.github.io/<REPO>")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" git@github.com:llccing/FrontEnd.git master:gh-pages\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" -\n")])])]),s("p",[t._v("当然sh文件应该是可以自动执行的，我现在还没找到正确的方式。哈哈。")]),t._v(" "),s("p",[t._v("所以呢，就找个别的方式，Travis ci是个很省力的方式，配置好之后，每次在master分支push到远端，会触发Travis ci自动构建，这样省去了很多事。")]),t._v(" "),s("h2",{attrs:{id:"参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://peterhpchen.github.io/tarvis-ci,/vuepress,/github-page/2019/02/20/publish-vuepress-by-travis.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress travis ci 介绍"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Travis CI简介"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://itnext.io/publish-a-vuepress-site-on-github-pages-with-travis-82036243bf36",target:"_blank",rel:"noopener noreferrer"}},[t._v("vuepress travis-ci"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://shazi.info/%E7%94%A8-vuepress-github-pages-%E5%8F%96%E4%BB%A3%E5%B0%8F%E6%B0%A3%E9%AC%BC%E7%9A%84-gitbook-%E5%90%A7/",target:"_blank",rel:"noopener noreferrer"}},[t._v("从Gitbook 到 vuepress"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);