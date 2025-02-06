## 11
A/B, guess A. A is correct.

## 12
C => A

By creating a CloudFront distribution that has both the S3 bucket and the ALB as origins, the company can reduce latency for both the static and dynamic data. The CloudFront distribution acts as a content delivery network (CDN), caching the data closer to the users and reducing the latency. The company can then configure Route 53 to route traffic to the CloudFront distribution, providing improved performance for the web application.

## 13
A/B, guess A. A is correct. Use  AWS Secrets Manager to store password of database.

## 14
C

## 15
guess A => C

I would recommend option C: Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.

AWS Network Firewall is a managed firewall service that provides filtering for both inbound and outbound network traffic. It allows you to create rules for traffic inspection and filtering, which can help protect your production VPC.

Option A: Amazon GuardDuty is a threat detection service, not a traffic inspection or filtering service.

Option B: Traffic Mirroring is a feature that allows you to replicate and send a copy of network traffic from a VPC to another VPC or on-premises location. It is not a service that performs traffic inspection or filtering.

Option D: AWS Firewall Manager is a security management service that helps you to centrally configure and manage firewalls across your accounts. It is not a service that performs traffic inspection or filtering.


## 16
D => B

Keywords:
- Data lake on AWS.
- Consists of data in Amazon S3 and Amazon RDS for PostgreSQL.
- The company needs a reporting solution that provides data VISUALIZATION and includes ALL the data sources within the data lake.

A - Incorrect: Amazon QuickSight only support users(standard version) and groups (enterprise version). users and groups only exists without QuickSight. QuickSight don't support IAM. We use users and groups to view the QuickSight dashboard
B - Correct: as explained in answer A and QuickSight is used to created dashboard from S3, RDS, Redshift, Aurora, Athena, OpenSearch, Timestream
C - Incorrect: This way don't support visulization and don't mention how to process RDS data
D - Incorrect: This way don't support visulization and don't mention how to combine data RDS and S3

## 17
A

## 18
AB

## 19
A => D

Keywords:Third-party virtual firewall appliance from AWS Marketplace in an inspection VPC -> only Gateway Load Balancer support it

A: Incorrect - Network Load Balancer don't support to route traffic to third-party virtual firewall appliance.
B: Incorrect - Application Load Balancer don't support to route traffic to third-party virtual firewall appliance.
C: Incorrect - Transit Gateway is use as connect center to connect all VPC, Direct Connect Gateway and VPN Connection. Routes Tables in Trasit Gateway only limit which VPC can talk to other VPCs.
D: Correct - Gateway Load Balancer support route traffic to third-party virtual firewall appliance in layer 3 that make it different from ALB and NLB.


## 20
D


## Result

60% correct

## Analysis, the wrong part
- 