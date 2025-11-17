## Q171

**Answer:** B

Option B. Though D is also possible B is more scalable as Lambda will autoscale to meet the dynamic load.

---
Ans B - I was going for option D... but then I saw bullrem's response (1 year, 9 mth ago):
"Option D is similar to option B in that it uses Amazon API Gateway to handle the API requests, but it also includes an EC2 instance to perform the tax computations. However, using an EC2 instance in this way is less scalable and less elastic than using AWS Lambda to perform the computations."

## Q172

**Answer:** C

CCCCCCCCC
Field-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data—and have the credentials to decrypt it—are able to do so.

## Q173

**Answer:** B

B. Cloud front is best for content delivery. Global Accelerator is best for non-HTTP (TCP/UDP) cases and supports HTTP cases as well but with static IP (elastic IP) or anycast IP address only.

## Q174

**Answer:** B

B. auto scaling groups can not span multi region

## Q175

**Answer:** B

Many applications, including those built on modern serverless architectures, can have a large number of open connections to the database server and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability.
https://aws.amazon.com/id/rds/proxy/

## Q176

**Answer:** A

VPC endpoints for service in private subnets
https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html

## Q177

**Answer:** B

Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache that can reduce latency and increase throughput for many types of database workloads. DAX is available for Amazon DynamoDB and Amazon ElastiCache for Redis.

https://aws.amazon.com/dynamodb/dax/

## Q178

**Answer:** A

Using AWS Backup to copy EC2 and RDS backups to the separate Region is the solution that meets the requirements with the least operational overhead. AWS Backup simplifies the backup process and automates the copying of backups to another Region, reducing the manual effort and operational complexity involved in managing separate backup processes for EC2 instances and RDS databases.

Option B is incorrect because Amazon Data Lifecycle Manager (Amazon DLM) is not designed for directly copying RDS backups to a separate region.

Option C is incorrect because creating Amazon Machine Images (AMIs) and read replicas adds complexity and operational overhead compared to a dedicated backup solution.

Option D is incorrect because using Amazon EBS snapshots, RDS snapshots, and S3 Cross-Region Replication (CRR) involves multiple manual steps and additional configuration, increasing complexity.

## Q179

**Answer:** A

Agree with A, IAM role is for services (EC2 for example)
IAM policy is more for users and groups

----
A all day. Don't even need to read the other answers.
You can't attach a policy to EC2. You have to attach a role.

## Q180

**Answer:** BC

Shield - Load Balancer, CF, Route53
AWF - CF, ALB, API Gateway

----
Shield - Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53.

WAF - Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync
