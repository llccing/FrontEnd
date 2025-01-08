## Amazon VPC

Amazon VPC lets you provision a logically isolated section of the Amazon Web Services (AWS) cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address ranges, creation of subnets, and configuration of route tables and network gateways. You can also create a hardware Virtual Private Network (VPN) connection between your corporate datacenter and your VPC and leverage the AWS cloud as an extension of your corporate datacenter.

You can easily customize the network configuration for your Amazon VPC. For example, you can create a public-facing subnet for your web servers that have access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access. You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.

### VPC Traffic Mirroring

Amazon VPC traffic mirroring makes it easy for customers to replicate network traffic to and from an Amazon EC2 instance and forward it to out-of-band security and monitoring appliances for use-cases such as content inspection, threat monitoring, and troubleshooting. These appliances can be deployed on an individual EC2 instance or a fleet of instances behind a Network Load Balancer (NLB) with User Datagram Protocol (UDP) listener.

[Amazon VPC FAQs](https://aws.amazon.com/vpc/faqs/)

### Gateway Endpoints

Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.

https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html


### NAT Gateways

A NAT gateway is a Network Address Translation (NAT) service. You can use a NAT gateway so that instances in a private subnet can connect to services outside your VPC but external services cannot initiate a connection with those instances.

https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html


what is the difference between NAT Gateway and NAT Instance? https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html

NAT instance is like EC2, no HA, Cheaper and tough to scale.

NAT gateway is HA plus scalable, hence costly. It’s a managed AWS service. You can’t SSH to NAT gateway and it’s very stable. Never seen any trouble in last 4-5 years

