## Q71

**Answer:** B 

A - DynamoDB global tables provides multi-Region, and multi-active database, but it not valid "in case of data corruption". In this case, you need a backup. This solutions isn't valid.
**B** - Point in Time Recovery is designed as a continuous backup juts to recover it fast. It covers perfectly the RPO, and probably the RTO. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html
C - A daily export will not cover the RPO of 15min.
D - DynamoDB is serverless... so what are these EBS snapshots taken from???

## Q72

**Answer:** D

The best solution to reduce data transfer costs for an application frequently accessing S3 buckets in the same region is option D - Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.

The key points:
- S3 gateway endpoints allow private connections between VPCs and S3 without going over the public internet.
- This avoids data transfer fees for traffic between the VPC and S3 within the same region.
- An endpoint policy controls access to specific S3 buckets.

## Q73

**Answer:** CD

C because from on-prem network to bastion through internet (using on-prem resource's public IP),
D because bastion and ec2 is in same VPC, meaning bastion can communicate to EC2 via it's private IP address

## Q74

**Answer:** AC

Web Server Rules: Inbound traffic from 443 (HTTPS) Source 0.0.0.0/0 - Allows inbound HTTPS access from any IPv4 address
Database Rules : 1433 (MS SQL)The default port to access a Microsoft SQL Server database, for example, on an Amazon RDS instance


https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html

## Q75

**Answer:** A

The catch phrase is "scale up when communication failures are detected" Scaling should not be based on communication failures, that'll be crying over spilled milk ! or rather too late. So D is wrong.

----------
Ans A - keep it simple: API Gateway + Lambda + SQS
D won't work: it relies upon a failure detected - by then its too late)


## Q76

**Answer:** B

DMS is for databases and here refers to “JSON files”. Public internet is not reliable. So best option is B.

## Q77

**Answer:** C

(A) - You don't need to deploy an EC2 instance to host an API - Operational overhead
(B) - Same as A
(**C**) - Is the answer
(D) - AWS Glue gets data from S3, not from API GW. AWS Glue could do ETL by itself, so don't need lambda. Non sense. https://aws.amazon.com/glue/

===>
I don''t understand is why we should use Lambda in between to transform data. To me, Kinesis data firehose is enough as it is an extract, transform, and load (ETL) service.

===>
It is because they assume that Kinesis Data Firehose built-in transformations are not enough. So you have to use specific lambda transformation. Please refer to this link : https://aws.amazon.com/kinesis/data-firehose/#:~:text=Amazon%20Kinesis%20Data%20Firehose%20is,data%20stores%2C%20and%20analytics%20services.

## Q78

**Answer:** B

Agreed with option B is the right one. AWS backup retention goes from 1 day to 100 years (or even indefinitely, if you do not enter a retention period), so will meet the requirements.

## Q79

**Answer:** A 

On-demand mode is a good option if any of the following are true:
- You create new tables with unknown workloads.
- You have unpredictable application traffic.
- You prefer the ease of paying for only what you use.

## Q80

**Answer:** B

Share the existing KMS key with the MSP external account because it has already been used to encrypt the AMI snapshot.

https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html