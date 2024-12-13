## Q21
**Answer:** D

The solution that will meet these requirements with the least operational overhead is D: Use an Amazon S3 bucket to host the website's static content, deploy an Amazon CloudFront distribution, set the S3 bucket as the origin, and use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.

Using Amazon S3 to host static content and Amazon CloudFront to distribute the content can provide high performance and scale for websites with millions of requests each hour. Amazon API Gateway and AWS Lambda can be used to build scalable and highly available backend APIs to support the website, and Amazon DynamoDB can be used to store the data. This solution requires minimal operational overhead as it leverages fully managed services that automatically scale to meet demand.

---------------------
Option A is incorrect because using multiple S3 buckets to host the full website would not provide the required performance and scale for millions of requests each hour with millisecond latency.

Option B is incorrect because deploying the full website on EC2 instances and using an Application Load Balancer (ALB) and an RDS database would require more operational overhead to maintain and scale the infrastructure.

Option C is incorrect because while deploying the application in containers and hosting them on Amazon Elastic Kubernetes Service (EKS) can provide high performance and scale, it would require more operational overhead to maintain and scale the infrastructure compared to using fully managed services like S3 and CloudFront.

## Q22
**Answer:** B

The storage option that meets these requirements is B: S3 Intelligent-Tiering.

Amazon S3 Intelligent Tiering is a storage class that automatically moves data to the most cost-effective storage tier based on access patterns. It can store objects in two access tiers: the frequent access tier and the infrequent access tier. The frequent access tier is optimized for frequently accessed objects and is charged at the same rate as S3 Standard. The infrequent access tier is optimized for objects that are not accessed frequently and are charged at a lower rate than S3 Standard.

S3 Intelligent Tiering is a good choice for storing media files that are accessed frequently and infrequently in an unpredictable pattern because it automatically moves data to the most cost-effective storage tier based on access patterns, minimizing storage and retrieval costs. It is also resilient to the loss of an Availability Zone because it stores objects in multiple Availability Zones within a region.

Option A, S3 Standard, is not a good choice because it does not offer the cost optimization of S3 Intelligent-Tiering.

Option C, S3 Standard-Infrequent Access (S3 Standard-IA), is not a good choice because it is optimized for infrequently accessed objects and does not offer the cost optimization of S3 Intelligent-Tiering.

Option D, S3 One Zone-Infrequent Access (S3 One Zone-IA), is not a good choice because it is not resilient to the loss of an Availability Zone. It stores objects in a single Availability Zone, making it less durable than other storage classes.

## Q23
**Answer:** B

The storage solution that will meet these requirements most cost-effectively is B: Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.

Amazon S3 Glacier Deep Archive is a secure, durable, and extremely low-cost Amazon S3 storage class for long-term retention of data that is rarely accessed and for which retrieval times of several hours are acceptable. It is the lowest-cost storage option in Amazon S3, making it a cost-effective choice for storing backup files that are not accessed after 1 month.

You can use an S3 Lifecycle configuration to automatically transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month. This will minimize the storage costs for the backup files that are not accessed frequently.

Option A, configuring S3 Intelligent-Tiering to automatically migrate objects, is not a good choice because it is not designed for long-term storage and does not offer the cost benefits of S3 Glacier Deep Archive.

Option C, transitioning objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month, is not a good choice because it is not the lowest-cost storage option and would not provide the cost benefits of S3 Glacier Deep Archive.

Option D, transitioning objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month, is not a good choice because it is not the lowest-cost storage option and would not provide the cost benefits of S3 Glacier Deep Archive.

## Q24
**Answer:** B

The solution that will meet these requirements with the least operational overhead is B: Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.

Cost Explorer's granular filtering feature allows you to filter and analyze EC2 costs based on instance types, regions, and other attributes. This feature provides detailed cost analysis and can help identify the root cause of vertical scaling.

Option A, using AWS Budgets to create a budget report and compare EC2 costs based on instance types, is not a good choice because it does not provide the granular filtering feature required for an in-depth analysis.

Option C, using graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months, is not a good choice because it does not provide the granular filtering feature required for an in-depth analysis.

Option D, using AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket, is not a good choice because it requires more operational overhead to set up and maintain.

https://aws.amazon.com/aws-cost-management/pricing/

## Q25
**Answer:** D

A - refactoring can be a solution, BUT requires a LOT of effort - not the answer
B - DynamoDB is NoSQL and Aurora is SQL, so it requires a DB migration... again a LOT of effort, so no the answer
C and D are similar in structure, but...
C uses SNS, which would notify the 2nd Lambda function... provoking the same bottleneck... not the solution
D uses SQS, so the 2nd lambda function can go to the queue when responsive to keep with the DB load process.
Usually the app decoupling helps with the performance improvement by distributing load. In this case, the bottleneck is solved by uses queues... so D is the answer.

## Q26
**Answer:** A

The solution that will accomplish this goal is A: Turn on AWS Config with the appropriate rules.

AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. You can use AWS Config to monitor and record changes to the configuration of your Amazon S3 buckets. By turning on AWS Config and enabling the appropriate rules, you can ensure that your S3 buckets do not have unauthorized configuration changes.

AWS Trusted Advisor (Option B) is a service that provides best practice recommendations for your AWS resources, but it does not monitor or record changes to the configuration of your S3 buckets.

Amazon Inspector (Option C) is a service that helps you assess the security and compliance of your applications. While it can be used to assess the security of your S3 buckets, it does not monitor or record changes to the configuration of your S3 buckets.

Amazon S3 server access logging (Option D) enables you to log requests made to your S3 bucket. While it can help you identify changes to your S3 bucket, it does not monitor or record changes to the configuration of your S3 bucket.

## Q27
**Answer:** A

Answere A : https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch-dashboard-sharing.html

Share a single dashboard and designate specific email addresses of the people who can view the dashboard. Each of these users creates their own password that they must enter to view the dashboard.

## Q28
**Answer:** B

Tricky question!!! forget one-way or two-way. In this scenario, AWS applications (Amazon Chime, Amazon Connect, Amazon QuickSight, AWS Single Sign-On, Amazon WorkDocs, Amazon WorkMail, Amazon WorkSpaces, AWS Client VPN, AWS Management Console, and AWS Transfer Family) need to be able to look up objects from the on-premises domain in order for them to function. This tells you that authentication needs to flow both ways. This scenario requires a two-way trust between the on-premises and AWS Managed Microsoft AD domains.
It is a requirement of the application
Scenario 2: https://aws.amazon.com/es/blogs/security/everything-you-wanted-to-know-about-trusts-with-aws-managed-microsoft-ad/

AWS IAM Identity Center requires a two-way trust so that it has permissions to read user and group information from your domain to synchronize user and group metadata. IAM Identity Center uses this metadata when assigning access to permission sets or applications. User and group metadata is also used by applications for collaboration, like when you share a dashboard with another user or group. The trust from AWS Directory Service for Microsoft Active Directory to your domain permits IAM Identity Center to trust your domain for authentication. The trust in the opposite direction grants AWS permissions to read user and group metadata.

## Q29
**Answer:** A

agree with A,
Global Accelerator has automatic failover and is perfect for this scenario with VoIP
https://aws.amazon.com/global-accelerator/faqs/

----------------
CloudFront uses Edge Locations to cache content while Global Accelerator uses Edge Locations to find an optimal pathway to the nearest regional endpoint. CloudFront is designed to handle HTTP protocol meanwhile Global Accelerator is best used for both HTTP and non-HTTP protocols such as TCP and UDP. so i think A is a better answer

## Q30
**Answer:** C

C - Create a manual Snapshot of DB and shift to S3- Standard and Restore form Manual Snapshot when required.

Not A - By stopping the DB although you are not paying for DB hours you are still paying for Provisioned IOPs , the storage for Stopped DB is more than Snapshot of underlying EBS vol. and Automated Back ups .
Not D - Is possible but not MOST cost effective, no need to run the RDS when not needed.

----------
Answer C, you still pay for storage when an RDS database is stopped

