## Q131

**Answer:** D

I want to restrict access to my Amazon Simple Storage Service (Amazon S3) bucket so that objects can be accessed only through my Amazon CloudFront distribution. How can I do that?
Create a CloudFront origin access identity (OAI)
https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/

---------------
To meet the requirements of serving files through CloudFront while restricting direct access to the S3 bucket URL, the recommended approach is to use an origin access identity (OAI). By creating an OAI and assigning it to the CloudFront distribution, you can control access to the S3 bucket.
This setup ensures that the files stored in the S3 bucket are only accessible through CloudFront and not directly through the S3 bucket URL. Requests made directly to the S3 URL will be blocked.


Option A suggests writing individual policies for each S3 bucket, which can be cumbersome and difficult to manage, especially if there are multiple buckets involved.

Option B suggests creating an IAM user and assigning it to CloudFront, but this does not address restricting direct access to the S3 bucket URL.

Option C suggests writing an S3 bucket policy with CloudFront distribution ID as the Principal, but this alone does not provide the necessary restrictions to prevent direct access to the S3 bucket URL.

## Q132

**Answer:** A

Historical reports = Static content = S3

## Q133

**Answer:** 
Amazon RDS Custom for Oracle is the best choice because it allows access to the underlying OS, provides an easier path for upgrades, minimizes operational overhead, and supports setting up cross-region read replicas for a DR solution.

---------
It should be C:

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-custom.html
and
https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-custom-oracle.html

## Q134

**Answer:** C

SSE-KMS vs SSE-S3 - The last seems to have less overhead (as the keys are automatically generated by S3 and applied on data at upload, and don't require further actions. KMS provides more flexibility, but in turn involves a different service, which finally is more "complex" than just managing one (S3). So A and B are excluded. If you are in doubt, you are having 2 buckets in A and B, while just keeping one in C and D.
https://s3browser.com/server-side-encryption-types.aspx
Decide between C and D is deciding on Athena or RDS. RDS is a relational db, and we have documents on S3, which is the use case for Athena. Athena is also serverless, which eliminates the need of controlling the underlying infrastructure and capacity. So C is the answer.
https://aws.amazon.com/athena/

## Q135

**Answer:** D

**AWS PrivateLink provides private connectivity between VPCs, AWS services, and your on-premises networks, without exposing your traffic to the public internet**. AWS PrivateLink makes it easy to connect services across different accounts and VPCs to significantly simplify your network architecture.
Interface **VPC endpoints**, powered by AWS PrivateLink, connect you to services hosted by AWS Partners and supported solutions available in AWS Marketplace.
https://aws.amazon.com/privatelink/

---------------------------
the provider is also in AWS, so we can use PrivateLink to connect to it.

## Q136

**Answer:** AC

AWS Database Migration Service (AWS DMS) helps you migrate databases to AWS quickly and securely. The source database remains fully operational during the migration, minimizing downtime to applications that rely on the database.
... With AWS Database Migration Service, you can also continuously replicate data with low latency from any supported source to any supported target.
https://aws.amazon.com/dms/


## Q137

**Answer:** B

Use a group email address for the management account's root user
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_best-practices_mgmt-acct.html#best-practices_mgmt-acct_email-address

----------------
the only answer with sense is "B", because "A" is not exclusive, "C" is exactly the case the want to avoid, and "D" just don't make sense

## Q138

**Answer:** B

Migrating to Amazon MQ reduces the overhead on the queue management. C and D are dismissed.
Deciding between A and B means deciding to go for an AutoScaling group for EC2 or an RDS for Postgress (both multi- AZ). The RDS option has less operational impact, as provide as a service the tools and software required. Consider for instance, the effort to add an additional node like a read replica, to the DB.
https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/active-standby-broker-deployment.html
https://aws.amazon.com/rds/postgresql/


## Q139

**Answer:** D

S3 replication can use to copy files in different buckets so we don't need lambda.
S3 events can't be sent directly to sagemaker so we have to utilise eventbridge who supports many targets including sagemaker.

----------
In the case of S3 event notification only one destination type can be specified for each event notification.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/notification-how-to-event-types-and-destinations.html#supported-notification-destinations

## Q140

**Answer:** AC

EC2 instance Savings Plan saves 72% while Compute Savings Plans saves 66%. But according to link, it says "Compute Savings Plans provide the most flexibility and help to reduce your costs by up to 66%. These plans automatically apply to EC2 instance usage regardless of instance family, size, AZ, region, OS or tenancy, and also apply to Fargate and Lambda usage." EC2 instance Savings Plans are not applied to Fargate or Lambda

Ans A, C -
A: Spot obvious for unpredictable, 'don't care' usage
C: Not so obvious... but its more than just EC2 - its about Compute power using Fargate, Lambda, API call processing so it has to be C (as opposed to E)

-------------
Using Spot Instances for the data ingestion layer will provide the most cost-effective option for sporadic and unpredictable workloads, as Spot Instances offer significant cost savings compared to On-Demand Instances (Option A).

Purchasing a 1-year Compute Savings Plan for the front end and API layer will provide cost savings for predictable utilization over the course of a year (Option C).

Option B is less cost-effective as it suggests using On-Demand Instances for the data ingestion layer, which does not take advantage of cost-saving opportunities.

Option D suggests purchasing 1-year All Upfront Reserved instances for the data ingestion layer, which may not be optimal for sporadic and unpredictable workloads.

Option E suggests purchasing a 1-year EC2 instance Savings Plan for the front end and API layer, but Compute Savings Plans are typically more suitable for predictable workloads.