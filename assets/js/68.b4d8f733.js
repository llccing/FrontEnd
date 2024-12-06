(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{351:function(t,a,r){"use strict";r.r(a);var e=r(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"实例存储"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例存储"}},[t._v("#")]),t._v(" 实例存储")]),t._v(" "),a("p",[t._v("实例存储为您的 EC2 实例提供临时块级存储。此存储由已物理附加到主机的磁盘提供。实例存储非常适合临时存储频繁更改的信息，例如缓冲区、缓存、Scratch 数据和其他临时内容。它还可用于存储您在一组实例中复制的临时数据，例如负载均衡的 Web 服务器池。")]),t._v(" "),a("p",[t._v("实例存储由一个或多个显示为块储存设备的实例存储卷组成。实例存储的大小以及可用设备的数量因实例类型和实例大小而异。例如，并非每种实例类型都提供实例存储卷。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/InstanceStorage.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon EC2 实例存储"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"数据持久性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据持久性"}},[t._v("#")]),t._v(" 数据持久性")]),t._v(" "),a("p",[t._v("只有在实例启动时才会附加实例存储卷。无法在启动实例后附加实例存储卷。您无法将实例存储卷与一个实例分离并将该卷附加到另一个实例。")]),t._v(" "),a("p",[t._v("实例存储卷仅在其连接的实例的生命周期内存在。您无法将实例存储卷的生命周期配置为在其关联实例的生命周期之后保留。")]),t._v(" "),a("p",[t._v("即使实例重启，实例存储卷上的数据仍会保留。但是，如果实例停止、休眠或终止，则数据不会保留。当实例停止、休眠或终止后，实例存储卷的每个块都会通过加密方式删除。")]),t._v(" "),a("p",[t._v("因此，切勿依赖实例存储卷来存储珍贵且需要长期保存的数据。如果您需要在实例的生命周期之后保留存储在实例存储卷上的数据，需要手动将该数据复制到更持久的存储中，例如 Amazon EBS 卷、Amazon S3 存储桶或 Amazon EFS 文件系统。")])])}),[],!1,null,null,null);a.default=n.exports}}]);