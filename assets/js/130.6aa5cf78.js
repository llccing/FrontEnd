(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{342:function(e,o,t){"use strict";t.r(o);var r=t(14),a=Object(r.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h2",{attrs:{id:"amazon-route-53"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#amazon-route-53"}},[e._v("#")]),e._v(" Amazon Route 53")]),e._v(" "),o("p",[e._v("Amazon Route 53 提供高度可用且可扩展的域名系统 (DNS)、域名注册和运行状况检查 Web 服务。设计用于为开发人员和企业提供一种非常可靠且经济高效的方式，把名称（如 example.com）转换为计算机用于互相连接的数字 IP 地址（如 192.0.2.1），从而将最终用户路由到 Internet 应用程序。您可以将 DNS 与运行状况检查服务组合使用，路由流量到运行正常的终端节点，或者独立监控终端节点和/或对其提供警报。您还可以购买和管理域名（例如 example.com），并自动为域配置 DNS 设置。Route 53 高效地将用户请求连接到 AWS 中运行的基础设施，例如 Amazon EC2 实例、Elastic Load Balancing 负载均衡器或 Amazon S3 存储桶，还可以将用户转接到 AWS 外部的基础设施。")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://aws.amazon.com/cn/route53/faqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon Route 53 常见问题"),o("OutboundLink")],1)]),e._v(" "),o("h3",{attrs:{id:"routing-policies"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#routing-policies"}},[e._v("#")]),e._v(" Routing Policies")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Simple routing policy – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website. You can use simple routing to create records in a private hosted zone.")])]),e._v(" "),o("li",[o("p",[e._v("Failover routing policy – Use when you want to configure active-passive failover. You can use failover routing to create records in a private hosted zone.")])]),e._v(" "),o("li",[o("p",[e._v("Geolocation routing policy – Use when you want to route traffic based on the location of your users. You can use geolocation routing to create records in a private hosted zone.")])]),e._v(" "),o("li",[o("p",[e._v("Geoproximity routing policy – Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another location. You can use geoproximity routing to create records in a private hosted zone.")])]),e._v(" "),o("li",[o("p",[e._v("Latency routing policy – Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency. You can use latency routing to create records in a private hosted zone.")])]),e._v(" "),o("li",[o("p",[e._v("IP-based routing policy – Use when you want to route traffic based on the location of your users, and have the IP addresses that the traffic originates from.")])]),e._v(" "),o("li",[o("p",[e._v("Multivalue answer routing policy – Use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random. You can use multivalue answer routing to create records in a private hosted zone.")])]),e._v(" "),o("li",[o("p",[e._v("Weighted routing policy – Use to route traffic to multiple resources in proportions that you specify. You can use weighted routing to create records in a private hosted zone.")])])]),e._v(" "),o("h3",{attrs:{id:"what-is-the-difference-between-an-alias-record-and-a-cname-record"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-difference-between-an-alias-record-and-a-cname-record"}},[e._v("#")]),e._v(" What is the difference between an alias record and a CNAME record?")]),e._v(" "),o("p",[e._v("The primary differences between an alias record and a CNAME record are as follows:")]),e._v(" "),o("ol",[o("li",[o("p",[o("strong",[e._v("Root Domain Support")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Alias Record")]),e._v(": Can be used at the root domain level (e.g., example.com) to point to AWS resources like CloudFront distributions, S3 buckets, or Elastic Load Balancers.")]),e._v(" "),o("li",[o("strong",[e._v("CNAME Record")]),e._v(": Cannot be used at the root domain level; it can only be used for subdomains (e.g., www.example.com).")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Performance")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Alias Record")]),e._v(": Resolved by Route 53 without additional DNS lookups, which can improve performance and reduce latency.")]),e._v(" "),o("li",[o("strong",[e._v("CNAME Record")]),e._v(": Requires an additional DNS lookup, which can introduce slight delays.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Integration with AWS")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Alias Record")]),e._v(": Specifically designed to work seamlessly with AWS services, automatically updating when AWS resource endpoints change.")]),e._v(" "),o("li",[o("strong",[e._v("CNAME Record")]),e._v(": Standard DNS record without specific integration benefits for AWS services.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Cost")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Alias Record")]),e._v(": No charge for DNS queries when routing traffic to AWS resources.")]),e._v(" "),o("li",[o("strong",[e._v("CNAME Record")]),e._v(": Standard DNS query charges apply.")])])]),e._v(" "),o("li",[o("p",[o("strong",[e._v("Routing Policies")]),e._v(":")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Alias Record")]),e._v(": Can be used with Route 53’s advanced routing policies like weighted, latency-based, or geolocation routing.")]),e._v(" "),o("li",[o("strong",[e._v("CNAME Record")]),e._v(": Limited to basic DNS functionality without advanced routing options.")])])])]),e._v(" "),o("p",[e._v("These differences make alias records particularly useful for AWS environments where integration and performance are key considerations.")])])}),[],!1,null,null,null);o.default=a.exports}}]);