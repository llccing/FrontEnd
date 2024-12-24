## Q111

**Answer:** D

Answer is D as the "HIGHEST available" and less "operational complex"
The "Amazon RDS for MySQL with Multi-AZ enabled" option excludes A and B
The "Auto Scaling group" is more available and reduces operational complexity in case of incidents (as remediation it is automated) than just adding one more instance. This excludes C.

C and D to choose from based on
D over C since is configured

## Q112

**Answer:** A

less operational overhead means A: Fargate (no EC2), move the containers on ECS, autoscaling for growth and ALB to balance consumption.
B - requires configure EC2
C - requires add code (developpers)
D - seems like the most complex approach, like re-architecting the app to take advantage of an HPC platform.

## Q113

**Answer:** C

A. Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue. - No BW available for DataSync, so "asap" will be weeks/months (?)
B. Order an AWS Snowcone device to move the data. Deploy the transformation application to the device. - Snowcone will just store 14TB (SSD configuration).
**C**. Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue. - SnowBall can store 80TB (ok), takes around 1 week to move the device (faster than A), and AWS Glue allows to do ETL jobs. This is the answer.
D. Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application. - Same as C, but the ETL job requires the deployment/configuration/maintenance of an EC2 instance, while Glue is serverless. This means D has more operational overhead than C.

## Q114

**Answer:** C
Solution C offloads the photo processing to Lambda. Storing the photos in S3 ensures scalability and durability, while keeping the metadata in DynamoDB allows for efficient querying of the associated information.

Option A does not provide an appropriate solution for storing the photos, as DynamoDB is not suitable for storing large binary data like images.

Option B is more focused on real-time streaming data processing and is not the ideal service for processing and storing photos and metadata in this use case.

Option D involves manual scaling and management of EC2 instances, which is less flexible and more labor-intensive compared to the serverless nature of Lambda. It may not efficiently handle the varying number of concurrent users and can introduce higher operational overhead.

In conclusion, option C provides the best solution for scaling the application to meet the needs of the growing user base by leveraging the scalability and durability of Lambda, S3, and DynamoDB.

## Q115

**Answer:** C
Option A (creating a NAT gateway) would not meet the requirement since it still involves sending traffic to S3 over the internet. NAT gateway is used for outbound internet connectivity from private subnets, but it doesn't provide a private route for accessing S3.

Option B (configuring security groups) focuses on controlling outbound traffic using security groups. While it can restrict outbound traffic, it doesn't provide a private route for accessing S3.

Option D (setting up Direct Connect) involves establishing a dedicated private network connection between the on-premises environment and AWS. While it offers private connectivity, it is more suitable for hybrid scenarios and not necessary for achieving private access to S3 within the VPC.

In summary, option C provides a straightforward solution by moving the EC2 instances to private subnets, creating a VPC endpoint for S3, and linking the endpoint to the route table for private subnets. This ensures that file transfer traffic between the EC2 instances and S3 remains within the private network without going over the internet.

## Q116

**Answer:** AD
agree with A and D

static website -> obviously S3, and S3 is super scalable
CDN -> CloudFront obviously as well, and with HTTPS security is enhanced.

B does not make sense because you are not replacing the CDN with anything,
E works too but takes too much effort and compared to S3, S3 still wins in term of scalability. plus why use EC2 when you are only hosting static website

## Q117 

**Answer:** A

answer is A
https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html

> You can configure a CloudWatch Logs log group to stream data it receives to your Amazon OpenSearch Service cluster in NEAR REAL-TIME through a CloudWatch Logs subscription

least overhead compared to kinesis

## Q118

**Answer:** D
the cost of S3<EFS<EBS

----
D. S3 is more cost effective than all and can handle all objects like Block, File or Text.

## Q119

**Answer:** B

B

Using AWS WAF has several benefits. Additional protection against web attacks using criteria that you specify. You can define criteria using characteristics of web requests such as the following:
Presence of SQL code that is likely to be malicious (known as SQL injection).
Presence of a script that is likely to be malicious (known as cross-site scripting).

AWS Firewall Manager simplifies your administration and maintenance tasks across multiple accounts and resources for a variety of protections.

https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html

## Q120

**Answer:** B

B is the correct one for seld manage DNS
If need to use Route53, ALB (layar 7 ) needs to be used as end points for 2 reginal x 3 EC2s, if it the case answer would be the option 4

