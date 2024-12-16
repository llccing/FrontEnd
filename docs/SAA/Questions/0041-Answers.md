## Q41
**Answer:** B

This question just screams AppFlow (SaaS integration)
https://aws.amazon.com/appflow/

configuring Auto-Scaling also takes time when compared to AppFlow,
in AWS's words "in just a few clicks"
Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between 
Software-as-a-Service (SaaS) applications like Salesforce, SAP, Zendesk, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks

## Q42
**Answer:** C 

Deploying a gateway VPC endpoint for Amazon S3 is the most cost-effective way for the company to avoid Regional data transfer charges. A gateway VPC endpoint is a network gateway that allows communication between instances in a VPC and a service, such as Amazon S3, without requiring an Internet gateway or a NAT device. Data transfer between the VPC and the service through a gateway VPC endpoint is free of charge, while data transfer between the VPC and the Internet through an Internet gateway or NAT device is subject to data transfer charges. By using a gateway VPC endpoint, the company can reduce its data transfer costs by eliminating the need to transfer data through the NAT gateway to access Amazon S3. This option would provide the required connectivity to Amazon S3 and minimize data transfer charges.

## Q43
**Answer:** B

A: VPN also goes through the internet and uses the bandwidth
C: daily Snowball transfer is not really a long-term solution when it comes to cost and efficiency
D: S3 limits don't change anything here

----------------
Option B (correct). Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.

AWS Direct Connect is a network service that allows you to establish a dedicated network connection from your on-premises data center to AWS. This connection bypasses the public Internet and can provide more reliable, lower-latency communication between your on-premises application and Amazon S3. By directing backup traffic through the AWS Direct Connect connection, you can minimize the impact on your internet bandwidth and ensure timely backups to S3.

## Q44
**Answer:** AB

The correct solution is AB, as you can see here:

https://aws.amazon.com/it/premiumsupport/knowledge-center/s3-audit-deleted-missing-objects/

It states the following:

To prevent or mitigate future accidental deletions, consider the following features:

Enable versioning to keep historical versions of an object.
Enable Cross-Region Replication of objects.
Enable MFA delete to require multi-factor authentication (MFA) when deleting an object version.

## Q45
**Answer:** BE

Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic: This will decouple the data ingestion process and ensure that messages are not lost if the Lambda function fails to process them immediately

Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue: This ensures that the Lambda function can process the messages from the SQS queue, providing a reliable way to handle data ingestion even if there are network issues.

## Q46
**Answer:** B

Amazon Macie is a data security and data privacy service that uses machine learning (ML) and pattern matching to discover and protect your sensitive data.

## Q47
**Answer:** D

Reserved instances are for long term so on-demand will be the right choice - Answer D

Confirmed! Reserved instances require a fixed one-year or three-year commitment. See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html#capacity-reservations-differences

-----------

***CORRECT***
Option D. Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.

An On-Demand Capacity Reservation is a type of Amazon EC2 reservation that enables you to create and manage reserved capacity on Amazon EC2. With an On-Demand Capacity Reservation, you can specify the Region and Availability Zones where you want to reserve capacity, and the number of EC2 instances you want to reserve. This allows you to guarantee capacity in specific Availability Zones in a specific Region.

***WRONG***
Option A, purchasing Reserved Instances that specify the Region needed, would not guarantee capacity in specific Availability Zones.
Option B, creating an On-Demand Capacity Reservation that specifies the Region needed, would not guarantee capacity in specific Availability Zones.
Option C, purchasing Reserved Instances that specify the Region and three Availability Zones needed, would not guarantee capacity in specific Availability Zones as Reserved Instances do not provide capacity reservations.
