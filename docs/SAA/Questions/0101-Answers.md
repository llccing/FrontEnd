## Q101
**Answer:** A

The correct answer is option A.

To enable Internet access for the private subnets, the solutions architect should create three NAT gateways, one for each public subnet in each Availability Zone (AZ). NAT gateways allow private instances to initiate outbound traffic to the Internet but do not allow inbound traffic from the Internet to reach the private instances.

The solutions architect should then create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ. This will allow instances in the private subnets to access the Internet through the NAT gateways in the public subnets.

## Q102

**Answer:** B and E

E is correct
https://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/

## Q103

**Answer:** A

This is the purpose of bookmarks: "AWS Glue tracks data that has already been processed during a previous run of an ETL job by persisting state information from the job run. This persisted state information is called a job bookmark. Job bookmarks help AWS Glue maintain state information and prevent the reprocessing of old data."
https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html


## Q104

**Answer:** AC

I think it is AC, reason is they require a solution that is highly available. AWS Shield can handle the DDoS attacks. To make the solution HA you can use cloud front. AC seems to be the best answer imo.


## Q105

**Answer:** D

Best way to check it... The question is taken from the example shown here in the documentation:
https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-use-resource-based.html#eb-lambda-permissions

## Q106

**Answer:** D

SSE-KMS provides a secure and efficient way to encrypt data at rest in S3. SSE-KMS uses KMS to manage the encryption keys securely. With SSE-KMS, encryption keys can be automatically rotated using KMS key rotation feature, which simplifies the key management process and ensures compliance with the requirement to rotate keys every year.

Additionally, SSE-KMS provides built-in audit logging for encryption key usage through CloudTrail, which captures API calls related to the management and usage of KMS keys. This meets the requirement for logging key usage for auditing purposes.

Option A (SSE-C) requires customers to provide their own encryption keys, but it does not provide key rotation or built-in logging of key usage.
Option B (SSE-S3) uses Amazon S3 managed keys for encryption, which simplifies key management but does not provide key rotation or detailed key usage logging.
Option C (SSE-KMS with manual rotation) uses AWS KMS keys but requires manual rotation, which is less operationally efficient than the automatic key rotation available with option D.


## Q107

**Answer:** D

I dont understand why you will vote B?
how are you going to store data with just lambda?
> Which action meets these requirements for storing and retrieving location data

In this use case there will obviously be a ton of data and you want to get real-time location data of the bicycles, and to analyze all these info kinesis is the one that makes most sense here.

## Q108

**Answer:** D

The correct answer is **D**: Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.

### Reasoning:

- **RDS Event Notifications**: While RDS event notifications can alert you to changes in the database instance status, they do not directly notify you of specific data changes within tables. Thus, using RDS event notifications alone is not sufficient for capturing when a specific record, such as an automobile listing, is updated or deleted.

- **SNS and SQS**: By using SNS to fan out messages to multiple SQS queues, you can effectively distribute the information to multiple targets. Each target can have its own SQS queue, allowing for independent processing. This setup is scalable and decouples the message distribution from the processing logic.

- **AWS Lambda Functions**: These can be triggered by messages in the SQS queues to perform specific actions required by each target system, such as updating or removing listings.

### Why Not A or B:

- **Direct Lambda Trigger on RDS**: AWS Lambda cannot be directly triggered by changes in RDS databases without additional services like DMS or Aurora with Kinesis. Therefore, options A and B, which suggest directly triggering Lambda on database updates, are not feasible.

### Why Not C:

- **RDS Event Notification to SQS/SNS**: While this option uses RDS event notifications, it suggests sending them to an SQS queue first, which is not as efficient for fanning out to multiple systems compared to using SNS directly for fanning out.

Thus, option D provides a more scalable and decoupled solution using SNS for fanning out messages to multiple SQS queues and Lambda functions for processing.

------------
key point: Even though lambda is integrated with RDS, it is not best practices for multiple consumers.
SNS + SQS Fan-Out should be chosen
https://aws.amazon.com/getting-started/hands-on/send-fanout-event-notifications/?nc1=h_ls

## Q109

**Answer:** D

A - No as "specific users can delete"
B - No as "nonspecific amount of time"
C - No as "prevent the data from being change"
D - The answer: "The Object Lock legal hold operation enables you to place a legal hold on an object version. Like setting a retention period, a legal hold prevents an object version from being overwritten or deleted. However, a legal hold doesn't have an associated retention period and remains in effect until removed." https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-legal-hold.html

## Q110

**Answer:** C and D

CD is the more appropriate solution bec. when the user uploads the images, it will directly uploaded to the S3 while if BD, when the user uploads the images, it will first go to the web server then to the S3 bucket and This can cause a slow upload process since the web server is processing the download from the user, then upload to the s3 bucket.

