(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{340:function(a,t,e){"use strict";e.r(t);var r=e(14),s=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"egg-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#egg-init"}},[a._v("#")]),a._v(" egg init")]),a._v(" "),t("h2",{attrs:{id:"初始化模板"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化模板"}},[a._v("#")]),a._v(" 初始化模板")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" npm init egg --type=simple\n")])])]),t("p",[a._v("yarn init 不好使。")]),a._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" mysql")]),a._v(" "),t("p",[a._v("之前曾经在本地创建过mysql的环境，但是很久不用也就没有启动了，但是这次无论如何也不能成功启动起来。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("那么怎么搞呢\n")])])]),t("h3",{attrs:{id:"使用docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用docker"}},[a._v("#")]),a._v(" 使用docker")]),a._v(" "),t("p",[a._v("文档一不能成功启动mysql")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/35272017",target:"_blank",rel:"noopener noreferrer"}},[a._v("操作文档一"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.im/post/5c8e25bdf265da67e43e8271",target:"_blank",rel:"noopener noreferrer"}},[a._v("操作文档二"),t("OutboundLink")],1)])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo docker run --rm -d -e MYSQL_ROOT_PASSWORD=926443 \\\n      -v helloworld:/var/lib/mysql \\\n      --name mysql\\\n      -p 23333:3306 mysql\n\n")])])]),t("p",[a._v("一个参数都不能少")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mysql -uroot -p926443 -h 127.0.0.1 -P23333\n")])])]),t("p",[a._v("mysql 8.0 修改")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ALTER USER root IDENTIFIED WITH mysql_native_password BY '926443';\n")])])]),t("p",[t("a",{attrs:{href:"https://stackoverflow.com/questions/49948350/phpmyadmin-on-mysql-8-0",target:"_blank",rel:"noopener noreferrer"}},[a._v("解决文档"),t("OutboundLink")],1)]),a._v(" "),t("h4",{attrs:{id:"phpmyadmin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phpmyadmin"}},[a._v("#")]),a._v(" phpMyAdmin")]),a._v(" "),t("p",[a._v("拉镜像")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker pull phpmyadmin/phpmyadmin\n")])])]),t("p",[a._v("启动它，但是要先启动mysql。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("docker run -d \\\n    --name myadmin \\\n    --link mysql:db \\\n    -p 8080:80 \\\n    phpmyadmin/phpmyadmin\n\n")])])]),t("p",[t("a",{attrs:{href:"https://xu3352.github.io/docker/2017/12/27/install-phpmyadmin-with-docker",target:"_blank",rel:"noopener noreferrer"}},[a._v("文档一"),t("OutboundLink")],1),a._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/l6807718/article/details/51179507",target:"_blank",rel:"noopener noreferrer"}},[a._v("文档二"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);