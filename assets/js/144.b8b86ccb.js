(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{382:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"amazon-vpc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#amazon-vpc"}},[e._v("#")]),e._v(" Amazon VPC")]),e._v(" "),t("p",[e._v("Amazon VPC lets you provision a logically isolated section of the Amazon Web Services (AWS) cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address ranges, creation of subnets, and configuration of route tables and network gateways. You can also create a hardware Virtual Private Network (VPN) connection between your corporate datacenter and your VPC and leverage the AWS cloud as an extension of your corporate datacenter.")]),e._v(" "),t("p",[e._v("You can easily customize the network configuration for your Amazon VPC. For example, you can create a public-facing subnet for your web servers that have access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access. You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.")]),e._v(" "),t("h3",{attrs:{id:"vpc-traffic-mirroring"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpc-traffic-mirroring"}},[e._v("#")]),e._v(" VPC Traffic Mirroring")]),e._v(" "),t("p",[e._v("Amazon VPC traffic mirroring makes it easy for customers to replicate network traffic to and from an Amazon EC2 instance and forward it to out-of-band security and monitoring appliances for use-cases such as content inspection, threat monitoring, and troubleshooting. These appliances can be deployed on an individual EC2 instance or a fleet of instances behind a Network Load Balancer (NLB) with User Datagram Protocol (UDP) listener.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://aws.amazon.com/vpc/faqs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon VPC FAQs"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"gateway-endpoints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gateway-endpoints"}},[e._v("#")]),e._v(" Gateway Endpoints")]),e._v(" "),t("p",[e._v("Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html")]),e._v(" "),t("h4",{attrs:{id:"endpoints-for-s3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-for-s3"}},[e._v("#")]),e._v(" Endpoints for S3")]),e._v(" "),t("p",[e._v("You can access Amazon S3 from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to Amazon S3.")]),e._v(" "),t("p",[e._v("There is no additional charge for using gateway endpoints.")]),e._v(" "),t("p",[e._v("Amazon S3 supports both gateway endpoints and interface endpoints. With a gateway endpoint, you can access Amazon S3 from your VPC, without requiring an internet gateway or NAT device for your VPC, and with no additional cost. However, gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway. For those scenarios, you must use an interface endpoint, which is available for an additional cost.")]),e._v(" "),t("h4",{attrs:{id:"endpoints-for-dynamodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#endpoints-for-dynamodb"}},[e._v("#")]),e._v(" Endpoints for DynamoDB")]),e._v(" "),t("p",[e._v("You can access Amazon DynamoDB from your VPC using gateway VPC endpoints. After you create the gateway endpoint, you can add it as a target in your route table for traffic destined from your VPC to DynamoDB.")]),e._v(" "),t("p",[e._v("There is no additional charge for using gateway endpoints.")]),e._v(" "),t("p",[e._v("DynamoDB supports both gateway endpoints and interface endpoints. With a gateway endpoint, you can access DynamoDB from your VPC, without requiring an internet gateway or NAT device for your VPC, and with no additional cost. However, gateway endpoints do not allow access from on-premises networks, from peered VPCs in other AWS Regions, or through a transit gateway. For those scenarios, you must use an interface endpoint, which is available for an additional cost.")]),e._v(" "),t("h3",{attrs:{id:"nat-gateways"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nat-gateways"}},[e._v("#")]),e._v(" NAT Gateways")]),e._v(" "),t("p",[e._v("A NAT gateway is a Network Address Translation (NAT) service. You can use a NAT gateway so that instances in a private subnet can connect to services outside your VPC but external services cannot initiate a connection with those instances.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html")]),e._v(" "),t("p",[e._v("what is the difference between NAT Gateway and NAT Instance? https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-comparison.html")]),e._v(" "),t("p",[e._v("NAT instance is like EC2, no HA, Cheaper and tough to scale.")]),e._v(" "),t("p",[e._v("NAT gateway is HA plus scalable, hence costly. It’s a managed AWS service. You can’t SSH to NAT gateway and it’s very stable. Never seen any trouble in last 4-5 years")]),e._v(" "),t("h3",{attrs:{id:"vpc-nacls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpc-nacls"}},[e._v("#")]),e._v(" VPC NACLs")]),e._v(" "),t("p",[e._v("A network access control list (ACL) allows or denies specific inbound or outbound traffic at the subnet level. You can use the default network ACL for your VPC, or you can create a custom network ACL for your VPC with rules that are similar to the rules for your security groups in order to add an additional layer of security to your VPC.")]),e._v(" "),t("p",[e._v("There is no additional charge for using network ACLs.")]),e._v(" "),t("p",[e._v("The following diagram shows a VPC with two subnets. Each subnet has a network ACL. When traffic enters the VPC (for example, from a peered VPC, VPN connection, or the internet), the router sends the traffic to its destination. Network ACL A determines which traffic destined for subnet 1 is allowed to enter subnet 1, and which traffic destined for a location outside subnet 1 is allowed to leave subnet 1. Similarly, network ACL B determines which traffic is allowed to enter and leave subnet 2.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html")]),e._v(" "),t("h4",{attrs:{id:"the-difference-between-nacl-and-security-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-difference-between-nacl-and-security-group"}},[e._v("#")]),e._v(" The difference between NACL and Security Group")]),e._v(" "),t("p",[e._v("the Security Group do not support deny rules.")]),e._v(" "),t("h4",{attrs:{id:"and-why-security-group-don-t-support-deny-rules"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#and-why-security-group-don-t-support-deny-rules"}},[e._v("#")]),e._v(" and why Security Group don't support deny rules?")]),e._v(" "),t("p",[e._v('There is no "reason" other than "because that\'s how it was designed."')]),e._v(" "),t("p",[e._v("Security groups deny everything by default, and traffic matching any rule allows that traffic to pass, so there is no need for rule precedence as there would be for a mix of allow/deny. This in turn is means a simpler interface and likely a simpler and more lightweight implementation, though the actual reason may not be related to that but may simply be that NACL already provides this feature.")]),e._v(" "),t("p",[e._v("https://stackoverflow.com/questions/61675211/why-there-is-no-concept-of-deny-in-security-groups")]),e._v(" "),t("h3",{attrs:{id:"vpc-peering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vpc-peering"}},[e._v("#")]),e._v(" VPC peering")]),e._v(" "),t("p",[e._v("A virtual private cloud (VPC) is a virtual network dedicated to your AWS account. It is logically isolated from other virtual networks in the AWS Cloud. You can launch AWS resources, such as Amazon EC2 instances, into your VPC.")]),e._v(" "),t("p",[e._v("A VPC peering connection is a networking connection between two VPCs that enables you to route traffic between them using private IPv4 addresses or IPv6 addresses. Instances in either VPC can communicate with each other as if they are within the same network. You can create a VPC peering connection between your own VPCs, or with a VPC in another AWS account. The VPCs can be in different Regions (also known as an inter-Region VPC peering connection).")]),e._v(" "),t("p",[e._v("AWS uses the existing infrastructure of a VPC to create a VPC peering connection; it is neither a gateway nor a VPN connection, and does not rely on a separate piece of physical hardware. There is no single point of failure for communication or a bandwidth bottleneck.")]),e._v(" "),t("p",[e._v("A VPC peering connection helps you to facilitate the transfer of data. For example, if you have more than one AWS account, you can peer the VPCs across those accounts to create a file sharing network. You can also use a VPC peering connection to allow other VPCs to access resources you have in one of your VPCs.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/peering/what-is-vpc-peering.html")])])}),[],!1,null,null,null);t.default=o.exports}}]);