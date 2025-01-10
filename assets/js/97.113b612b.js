(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{329:function(a,e,t){"use strict";t.r(e);var o=t(14),l=Object(o.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"elastic-load-balancing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#elastic-load-balancing"}},[a._v("#")]),a._v(" Elastic Load Balancing")]),a._v(" "),e("p",[a._v("Elastic Load Balancing (ELB) supports four types of load balancers. You can select the appropriate load balancer based on your application needs. If you need to load balance HTTP requests, we recommend you use the Application Load Balancer (ALB). For network/transport protocols (layer4 – TCP, UDP) load balancing, and for extreme performance/low latency applications we recommend using Network Load Balancer. If your application is built within the Amazon Elastic Compute Cloud (Amazon EC2) Classic network, you should use Classic Load Balancer. If you need to deploy and run third-party virtual appliances, you can use Gateway Load Balancer.")]),a._v(" "),e("p",[a._v("ELB includes:")]),a._v(" "),e("ul",[e("li",[a._v("Application Load Balancer (ALB)")]),a._v(" "),e("li",[a._v("Network Load Balancer (NLB)")]),a._v(" "),e("li",[a._v("Classic Load Balancer (CLB)")]),a._v(" "),e("li",[a._v("Gateway Load Balancer (GLB)")])]),a._v(" "),e("p",[e("a",{attrs:{href:"https://aws.amazon.com/elasticloadbalancing/faqs/?nc=sn&loc=5",target:"_blank",rel:"noopener noreferrer"}},[a._v("Elastic Load Balancing 常见问题"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"gateway-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gateway-load-balancer"}},[a._v("#")]),a._v(" Gateway Load Balancer")]),a._v(" "),e("h4",{attrs:{id:"when-should-i-use-gateway-load-balancer-as-opposed-to-network-load-balancer-or-application-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-should-i-use-gateway-load-balancer-as-opposed-to-network-load-balancer-or-application-load-balancer"}},[a._v("#")]),a._v(" When should I use Gateway Load Balancer, as opposed to Network Load Balancer or Application Load Balancer?")]),a._v(" "),e("p",[a._v("You should use Gateway Load Balancer when deploying inline virtual appliances where network traffic is not destined for the Gateway Load Balancer itself. Gateway Load Balancer transparently passes all Layer 3 traffic through third-party virtual appliances, and is invisible to the source and destination of the traffic.")]),a._v(" "),e("p",[a._v("您应该在部署网络流量目标不为网关负载均衡器本身的内联虚拟设备时使用网关负载均衡器。网关负载均衡器可以通过第三方虚拟设备以透明方式传递第 3 层的所有流量，并且对流量源和目的地不可见。")]),a._v(" "),e("h4",{attrs:{id:"why-gateway-load-balancer-is-invisible-to-the-source-and-destination-of-the-traffic"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#why-gateway-load-balancer-is-invisible-to-the-source-and-destination-of-the-traffic"}},[a._v("#")]),a._v(" why Gateway Load Balancer is invisible to the source and destination of the traffic?")]),a._v(" "),e("p",[a._v("网关负载均衡器（GWLBe）能够以透明方式传递第 3 层流量，使得流量对源和目的地不可见，主要通过以下机制实现：")]),a._v(" "),e("ol",[e("li",[e("p",[e("strong",[a._v("网络地址转换（NAT）")]),a._v("：")]),a._v(" "),e("ul",[e("li",[a._v("GWLBe使用网络地址转换，允许流量在不改变源和目的地IP地址的情况下通过。这使得负载均衡器的存在对通信双方透明。")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("中继模式")]),a._v("：")]),a._v(" "),e("ul",[e("li",[a._v("GWLBe可以在中继模式下工作，不修改数据包的IP头部信息。这意味着数据包在经过负载均衡器时保持不变，源和目的地无法察觉其存在。")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("直接服务器返回（DSR）")]),a._v("：")]),a._v(" "),e("ul",[e("li",[a._v("这种机制允许响应流量直接返回给请求者，而不经过负载均衡器，进一步减少了其可见性。")])])]),a._v(" "),e("li",[e("p",[e("strong",[a._v("透明代理")]),a._v("：")]),a._v(" "),e("ul",[e("li",[a._v("GWLBe充当透明代理，将流量转发到后端虚拟设备，而不改变数据包的可见部分。")])])])]),a._v(" "),e("p",[a._v("这些技术结合使用，使得网关负载均衡器可以在不干扰正常通信的情况下处理和转发流量，同时保持其对源和目的地的透明性。")]),a._v(" "),e("h3",{attrs:{id:"nlb-network-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nlb-network-load-balancer"}},[a._v("#")]),a._v(" NLB Network Load Balancer")]),a._v(" "),e("p",[a._v("NLB 是 AWS 提供的一种高性能、低延迟的负载均衡服务，专门用于处理 TCP、UDP 和 TLS 流量。NLB 支持高吞吐量和低延迟，适用于需要快速响应的应用程序，如游戏、视频流和实时通信。NLB 通过在多个可用区之间分配流量，提供高可用性和容错能力。")]),a._v(" "),e("p",[a._v("NLB 的主要特点包括：")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("高性能")]),a._v("：NLB 能够处理大量并发连接，支持高吞吐量。")]),a._v(" "),e("li",[e("strong",[a._v("低延迟")]),a._v("：NLB 通过在多个可用区之间分配流量，确保请求能够快速响应。")]),a._v(" "),e("li",[e("strong",[a._v("高可用性")]),a._v("：NLB 支持在多个可用区之间自动故障转移，确保服务持续可用。")]),a._v(" "),e("li",[e("strong",[a._v("可扩展性")]),a._v("：NLB 可以无缝扩展以处理不断增长的流量。")])]),a._v(" "),e("p",[a._v("NLB 适用于需要高性能和低延迟的应用程序，如游戏、视频流和实时通信。")]),a._v(" "),e("h3",{attrs:{id:"alb-application-load-balancer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alb-application-load-balancer"}},[a._v("#")]),a._v(" ALB Application Load Balancer")]),a._v(" "),e("ul",[e("li",[a._v("https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html")]),a._v(" "),e("li",[a._v("https://repost.aws/knowledge-center/elb-redirect-http-to-https-using-alb")])]),a._v(" "),e("h2",{attrs:{id:"tips-from-questions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips-from-questions"}},[a._v("#")]),a._v(" tips from Questions")]),a._v(" "),e("ol",[e("li",[a._v("ALB. Q70, Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.")])])])}),[],!1,null,null,null);e.default=l.exports}}]);