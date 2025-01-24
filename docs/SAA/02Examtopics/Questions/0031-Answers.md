## Q31
**Answer:** A

AWS Config provides a set of pre-built or customizable rules that can be used to check the configuration and compliance of AWS resources. By
creating a custom rule or using the built-in rule for tagging, you can define the required tags for EC2, RDS DB and Redshift clusters. AWS Config
continuously monitors the resources and generates configuration change events or evaluation results. 

By leveraging AWS Config, the solution can automatically detect any resources that do not comply with the defined tagging requirements. This
approach eliminates the need for manual checks or periodic code execution, reducing operational overhead. Additionally, AWS Config provides
the ability to automatically remediate non-compliant resources by triggering Lambda or sending notifications, further streamlining the
configuration management process. 

Option B (using Cost Explorer) primarily focuses on cost analysis and does not provide direct enforcement of proper tagging. Option C and D
(writing API calls and running them manually or through scheduled Lambda) require more manual effort and maintenance compared to using AWS Config rules.

## Q32
**Answer:** B

Good answer is B: client-side JavaScript. the website is static, so it must be S3.

## Q33
**Answer:** C

I would go for C. The tricky phrase is "near-real-time solution", pointing to Firehouse, but it can't send data to DynamoDB, so it leaves us with C as best option. 

----
Q: What is a destination in Firehose?

A destination is the data store where your data will be delivered. Firehose currently supports Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Splunk, Datadog, NewRelic, Dynatrace, Sumo Logic, LogicMonitor, MongoDB, and HTTP End Point as destinations.

-----
A: DynamoDB streams are logs, not fit for real-time sharing.
B: S3 is not document database, it's BLOB
D: S3 and files are not database
C: Kinesis + Lambda + DynamoDB is high performance, low latency scalable solution.

## Q34
**Answer:** B

CloudTrail - Track user activity and API call history.
Config - Assess, audits, and evaluates the configuration and relationships of tag resources.

Therefore, the answer is B

## Q35
**Answer:** D

A: GuardDuty is not for this, mostly for account monitoring for suspicious activity
B: Inspector is for OS vulnerabilities
C: Shield with R53 is not going to protect against DDoS
D: Shield Advanced is build for DDoS protection

--------
Prevent large scale DDOS attack = AWS Shield Advanced

## Q36
**Answer:** B

it is all about multi-region key.
AWS KMS supports multi-Region keys, which are AWS KMS keys in different AWS Regions that can be used interchangeably – as though you had the same key in multiple Regions. Each set of related multi-Region keys has the same key material and key ID, so you can encrypt data in one AWS Region and decrypt it in a different AWS Region without re-encrypting or making a cross-Region call to AWS KMS.
You can use multi-Region keys with client-side encryption libraries such as S3 client-side encryption
https://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html


## Q37
**Answer:** B

How can Session Manager benefit my organization?
Ans: No open inbound ports and no need to manage bastion hosts or SSH keys
https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html

-----------
Option A provides direct access to the terminal interface of each instance, but it may not be practical for administration purposes and can be cumbersome to manage, especially for multiple instances.

Option C adds operational overhead and introduces additional infrastructure that needs to be managed, monitored, and secured. It also requires SSH key management and maintenance.

Option D is complex and may not be necessary for remote administration. It also requires administrators to connect from their local on-premises machines, which adds complexity and potential security risks.

Therefore, option B is the recommended solution as it provides secure, auditable, and repeatable remote access using IAM roles and AWS Systems Manager Session Manager, with minimal operational overhead.

## Q38
**Answer:** C

Option A (replicating the S3 bucket to all AWS Regions) can be costly and complex, requiring replication of data across multiple Regions and managing synchronization. It may not provide a significant latency improvement compared to the CloudFront solution.

Option B (provisioning accelerators in AWS Global Accelerator) can be more expensive as it adds an extra layer of infrastructure (accelerators) and requires associating IP addresses with the S3 bucket. CloudFront already includes global edge locations and provides similar acceleration capabilities.

Option D (enabling S3 Transfer Acceleration) can help improve upload speed to the S3 bucket but may not have a significant impact on reducing latency for website visitors.

Therefore, option C is the most cost-effective solution as it leverages CloudFront's caching and global distribution capabilities to decrease latency and improve website performance.

## Q39
**Answer:** A

A: Made for high levels of I/O opps for consistent, predictable performance.
B: Can improve performance of insert opps, but it's a storage performance rather than processing power problem
C: for moderate CPU usage
D: for scale read-only replicas and doesn't improve performance of insert opps on the primary DB instance

## Q40
**Answer:** A

Definitely A, it's the most operationally efficient compared to D, which requires a lot of code and infrastructure to maintain. A is mostly managed (firehose is fully managed and S3 lifecycles are also managed)

