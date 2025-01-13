## Amazon Route 53

Amazon Route 53 提供高度可用且可扩展的域名系统 (DNS)、域名注册和运行状况检查 Web 服务。设计用于为开发人员和企业提供一种非常可靠且经济高效的方式，把名称（如 example.com）转换为计算机用于互相连接的数字 IP 地址（如 192.0.2.1），从而将最终用户路由到 Internet 应用程序。您可以将 DNS 与运行状况检查服务组合使用，路由流量到运行正常的终端节点，或者独立监控终端节点和/或对其提供警报。您还可以购买和管理域名（例如 example.com），并自动为域配置 DNS 设置。Route 53 高效地将用户请求连接到 AWS 中运行的基础设施，例如 Amazon EC2 实例、Elastic Load Balancing 负载均衡器或 Amazon S3 存储桶，还可以将用户转接到 AWS 外部的基础设施。

[Amazon Route 53 常见问题](https://aws.amazon.com/cn/route53/faqs/)

### Routing Policies

- Simple routing policy – Use for a single resource that performs a given function for your domain, for example, a web server that serves content for the example.com website. You can use simple routing to create records in a private hosted zone.

- Failover routing policy – Use when you want to configure active-passive failover. You can use failover routing to create records in a private hosted zone.

- Geolocation routing policy – Use when you want to route traffic based on the location of your users. You can use geolocation routing to create records in a private hosted zone.

- Geoproximity routing policy – Use when you want to route traffic based on the location of your resources and, optionally, shift traffic from resources in one location to resources in another location. You can use geoproximity routing to create records in a private hosted zone.

- Latency routing policy – Use when you have resources in multiple AWS Regions and you want to route traffic to the Region that provides the best latency. You can use latency routing to create records in a private hosted zone.

- IP-based routing policy – Use when you want to route traffic based on the location of your users, and have the IP addresses that the traffic originates from.

- Multivalue answer routing policy – Use when you want Route 53 to respond to DNS queries with up to eight healthy records selected at random. You can use multivalue answer routing to create records in a private hosted zone.

- Weighted routing policy – Use to route traffic to multiple resources in proportions that you specify. You can use weighted routing to create records in a private hosted zone.


### What is the difference between an alias record and a CNAME record?

The primary differences between an alias record and a CNAME record are as follows:

1. **Root Domain Support**:
   - **Alias Record**: Can be used at the root domain level (e.g., example.com) to point to AWS resources like CloudFront distributions, S3 buckets, or Elastic Load Balancers.
   - **CNAME Record**: Cannot be used at the root domain level; it can only be used for subdomains (e.g., www.example.com).

2. **Performance**:
   - **Alias Record**: Resolved by Route 53 without additional DNS lookups, which can improve performance and reduce latency.
   - **CNAME Record**: Requires an additional DNS lookup, which can introduce slight delays.

3. **Integration with AWS**:
   - **Alias Record**: Specifically designed to work seamlessly with AWS services, automatically updating when AWS resource endpoints change.
   - **CNAME Record**: Standard DNS record without specific integration benefits for AWS services.

4. **Cost**:
   - **Alias Record**: No charge for DNS queries when routing traffic to AWS resources.
   - **CNAME Record**: Standard DNS query charges apply.

5. **Routing Policies**:
   - **Alias Record**: Can be used with Route 53’s advanced routing policies like weighted, latency-based, or geolocation routing.
   - **CNAME Record**: Limited to basic DNS functionality without advanced routing options.

These differences make alias records particularly useful for AWS environments where integration and performance are key considerations.

