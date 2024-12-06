## Elastic Load Balancing

Elastic Load Balancing (ELB) supports four types of load balancers. You can select the appropriate load balancer based on your application needs. If you need to load balance HTTP requests, we recommend you use the Application Load Balancer (ALB). For network/transport protocols (layer4 – TCP, UDP) load balancing, and for extreme performance/low latency applications we recommend using Network Load Balancer. If your application is built within the Amazon Elastic Compute Cloud (Amazon EC2) Classic network, you should use Classic Load Balancer. If you need to deploy and run third-party virtual appliances, you can use Gateway Load Balancer.

ELB includes:
- Application Load Balancer (ALB)
- Network Load Balancer (NLB)
- Classic Load Balancer (CLB)
- Gateway Load Balancer (GLB)

[Elastic Load Balancing 常见问题](https://aws.amazon.com/elasticloadbalancing/faqs/?nc=sn&loc=5)
