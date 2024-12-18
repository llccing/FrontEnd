## Elastic Load Balancing

Elastic Load Balancing (ELB) supports four types of load balancers. You can select the appropriate load balancer based on your application needs. If you need to load balance HTTP requests, we recommend you use the Application Load Balancer (ALB). For network/transport protocols (layer4 – TCP, UDP) load balancing, and for extreme performance/low latency applications we recommend using Network Load Balancer. If your application is built within the Amazon Elastic Compute Cloud (Amazon EC2) Classic network, you should use Classic Load Balancer. If you need to deploy and run third-party virtual appliances, you can use Gateway Load Balancer.

ELB includes:
- Application Load Balancer (ALB)
- Network Load Balancer (NLB)
- Classic Load Balancer (CLB)
- Gateway Load Balancer (GLB)

[Elastic Load Balancing 常见问题](https://aws.amazon.com/elasticloadbalancing/faqs/?nc=sn&loc=5)

### Gateway Load Balancer

#### When should I use Gateway Load Balancer, as opposed to Network Load Balancer or Application Load Balancer?

You should use Gateway Load Balancer when deploying inline virtual appliances where network traffic is not destined for the Gateway Load Balancer itself. Gateway Load Balancer transparently passes all Layer 3 traffic through third-party virtual appliances, and is invisible to the source and destination of the traffic.

您应该在部署网络流量目标不为网关负载均衡器本身的内联虚拟设备时使用网关负载均衡器。网关负载均衡器可以通过第三方虚拟设备以透明方式传递第 3 层的所有流量，并且对流量源和目的地不可见。

#### why Gateway Load Balancer is invisible to the source and destination of the traffic?

网关负载均衡器（GWLBe）能够以透明方式传递第 3 层流量，使得流量对源和目的地不可见，主要通过以下机制实现：

1. **网络地址转换（NAT）**：
   - GWLBe使用网络地址转换，允许流量在不改变源和目的地IP地址的情况下通过。这使得负载均衡器的存在对通信双方透明。

2. **中继模式**：
   - GWLBe可以在中继模式下工作，不修改数据包的IP头部信息。这意味着数据包在经过负载均衡器时保持不变，源和目的地无法察觉其存在。

3. **直接服务器返回（DSR）**：
   - 这种机制允许响应流量直接返回给请求者，而不经过负载均衡器，进一步减少了其可见性。

4. **透明代理**：
   - GWLBe充当透明代理，将流量转发到后端虚拟设备，而不改变数据包的可见部分。

这些技术结合使用，使得网关负载均衡器可以在不干扰正常通信的情况下处理和转发流量，同时保持其对源和目的地的透明性。


### NLB Network Load Balancer

NLB 是 AWS 提供的一种高性能、低延迟的负载均衡服务，专门用于处理 TCP、UDP 和 TLS 流量。NLB 支持高吞吐量和低延迟，适用于需要快速响应的应用程序，如游戏、视频流和实时通信。NLB 通过在多个可用区之间分配流量，提供高可用性和容错能力。

NLB 的主要特点包括：

- **高性能**：NLB 能够处理大量并发连接，支持高吞吐量。
- **低延迟**：NLB 通过在多个可用区之间分配流量，确保请求能够快速响应。
- **高可用性**：NLB 支持在多个可用区之间自动故障转移，确保服务持续可用。
- **可扩展性**：NLB 可以无缝扩展以处理不断增长的流量。

NLB 适用于需要高性能和低延迟的应用程序，如游戏、视频流和实时通信。

### ALB Application Load Balancer

- https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html
- https://repost.aws/knowledge-center/elb-redirect-http-to-https-using-alb


## tips from Questions
1. ALB. Q70, Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.

