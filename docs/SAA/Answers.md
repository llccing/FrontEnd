### Q1
**Answer:** A

S3 Transfer Acceleration is the best solution cz it's faster , good for high speed, Transfer Acceleration is designed to optimize transfer speeds from
across the world into S3 buckets.

### Q2
**Answer:** C

Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL. With a few actions in the AWS Management Console, you can point Athena at your data stored in Amazon S3 and begin using standard SQL to run ad-hoc queries and get results in seconds.

### Q3
**Answer:** B

the condition key aws:PrincipalOrgID can prevent the members who don't belong to your organization to access the resourc

### Q4
**Answer:** A

Keywords:
- EC2 in VPC
- EC2 instance needs to access the S3 bucket without connectivity to the internet

A: Correct - Gateway VPC endpoint can connect to S3 bucket privately without additional cost
B: Incorrect - You can set up interface VPC endpoint for CloudWatch Logs for private network from EC2 to CloudWatch. But from CloudWatch to S3 bucket: Log data can take up to 12 hours to become available for export and the requirement only need EC2 to S3
C: Incorrect - Create an instance profile just grant access but not help EC2 connect to S3 privately
D: Incorrect - API Gateway like the proxy which receive network from out site and it forward request to AWS Lambda, Amazon EC2, Elastic Load Balancing products such as Application Load Balancers or Classic Load Balancers, Amazon DynamoDB, Amazon Kinesis, or any publicly available HTTPS-based endpoint. But not S3

### Q5
**Answer:** C

Ebs doesnt support cross az only reside in one Az but Efs does, that why it's c.
Chinese Version:
EBS 不支持跨可用区，只能在一个可用区中使用，而 EFS 支持跨可用区，可以在多个可用区中使用。这就是为什么选择 C 选项。
