## Q151

**Answer:** AC

A. By using Control Tower, the company can enforce data residency guardrails and restrict internet access for VPCs and denies access to all Regions except the required ap-northeast-3 Region.

C. With Organizations, the company can configure SCPs to prevent VPCs from gaining internet access. By denying access to all Regions except ap-northeast-3, the company ensures that VPCs can only be deployed in the specified Region.

Option B is incorrect because using rules in AWS WAF alone does not address the requirement of denying access to all AWS Regions except ap-northeast-3.

Option D is incorrect because configuring outbound rules in network ACLs and IAM policies for users can help restrict traffic and access, but it does not enforce the company's requirement of denying access to all Regions except ap-northeast-3.

Option E is incorrect because using AWS Config and managed rules can help detect and alert for specific resources and configurations, but it does not directly enforce the restriction of internet access or deny access to specific Regions.

--------
agree with A and C
https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps_examples_vpc.html#example_vpc_2


## Q152

**Answer:** A

D.
You need to use AWS Systems Manager State Manager, not Systems Manager Session Manager.

------
Agree with study_aws1 comment.
Lambda and event bridge solution is the correct answer.
The option A was only possible if it had mentioned System manager state manager


## Q153

**Answer:** D

Answer D
Why Optoin D ?
The Question talks about downloads are infrequent older than 90 days which means files less than 90 days are accessed frequently. Standard-Infrequent Access (S3 Standard-IA) needs a minimum 30 days if accessed before, it costs more.
So to access the files frequently you need a S3 Standard . After 90 days you can move it to Standard-Infrequent Access (S3 Standard-IA) as its going to be less frequently accessed

## Q154

**Answer:** B

The key is "No users can have the ability to modify or delete any files" and compliance mode supports that.
I remember it this way: ( governance is like government, they set the rules but they can allow some people to break it :D )

## Q155

**Answer:** C

The reasons are:

Amazon CloudFront is a content delivery network (CDN) that caches content at edge locations around the world.
Connecting the S3 buckets containing the media files to CloudFront will cache the content at global edge locations.
This provides fast reliable access to users everywhere by serving content from the nearest edge location.
CloudFront integrates tightly with S3 for secure, durable storage.
Global Accelerator improves availability and performance for TCP/UDP traffic, not HTTP-based content delivery.
DataSync and SQS are not technologies for a global CDN like CloudFront.

## Q156

**Answer:** AE

A is a given due to Athena and QuickSight option.
Between C and E, the AWS Lake Formation is a more managed solution so it should have less operational overhead that writing Custom AWS Lambda.
AE should be preferred over AC.


------------
AWS Lake Formation and Glue provide automated data lake creation with minimal coding. Glue crawlers identify sources and ETL jobs load to S3.
Athena allows ad-hoc queries directly on S3 data with no infrastructure to manage.
QuickSight provides easy cloud BI for dashboards.
Options C and D require significant custom coding for ETL and queries.
Redshift and OpenSearch would require additional setup and management overhead.


## Q157

**Answer:** DE

I tend to agree D and E...

A - Manual task that can be automated, so why make life difficult?
B - The maximum retention period is 35 days, so would not help
C - The maximum retention period is 35 days, so would not help
D - Only option that deals with logs, so makes sense
E - Partially manual but only option that achieves the 5 year goal

## Q158

**Answer:** A

website = http = cloudfront, if it is UDP, then global accelerator

--------------
Ans A - CloudFront delivers video on demand or live streaming video using any HTTP origin

## Q159

**Answer:** AC


