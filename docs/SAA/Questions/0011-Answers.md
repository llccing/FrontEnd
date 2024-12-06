## Q11
**Answer:** A

Option A: Using AWS Secrets Manager and enabling automatic rotation is the recommended solution for minimizing the operational overhead of credential management. AWS Secrets Manager provides a secure and centralized service for storing and managing secrets, such as database credentials. By leveraging Secrets Manager, the application can retrieve the database credentials programmatically at runtime, eliminating the need to store them locally in a file. Enabling automatic rotation ensures that the database credentials are regularly rotated without manual intervention, enhancing security and compliance.

Option B, using AWS Systems Manager Parameter Store and turning on automatic rotation, would not be suitable for storing secrets, such as database credentials, as it is intended for storing system parameters.

Option C, creating an S3 bucket to store objects that are encrypted with an AWS KMS encryption key and migrating the credential file to the S3 bucket, would not provide automatic rotation of the secrets.

Option D, creating an encrypted EBS volume and migrating the credential file to the new EBS volume, would not provide automatic rotation of the secrets.

## Q12
**Answer:** A

Keywords:
- The web application has static data and dynamic data. Static data in an Amazon S3 bucket.
- Improve performance and reduce latency for the static data and dynamic data.
- The company is using its own domain name registered with Amazon Route 53.
A: Correct - CloudFront has the Edge location and the cache for dynamic and static
B: Incorrect - AWS Global Accelerator don't have cache function, so static file need to be load directly from S3 every time.
- Beside that we configure CloudFront -> ALB, Accelerator -> S3, Route 53 -> CloudFront. It means that all the traffic go to CloudFront only, Acclerator don't have any traffic.
C: Incorrect - Global Accelerator can configure CloudFront as the endpoint.
D: Incorrect - We already have domain name. Why will we use new domain name? Will we change to new domain name? How everyone know you new domain name?

## Q13
**Answer:** A

Keywords:
- rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions
- LEAST operational overhead

A: Correct - AWS Secrets Manager supports
- Encrypt credential for RDS, DocumentDb, Redshift, other DBs and key/value secret.
- multi-region replication.
- Remote base on schedule
B: Incorrect - Secure string parameter only apply for Parameter Store. All the data in AWS Secrets Manager is encrypted
C: Incorrect - don't mention about replicate S3 across region.
D: Incorrect - So many steps compare to answer A =))

## Q14
**Answer:** C

Option C, using Amazon Aurora with a Multi-AZ deployment and configuring Aurora Auto Scaling with Aurora Replicas, would be the best solution to meet the requirements.

Aurora is a fully managed, MySQL-compatible relational database that is designed for high performance and high availability. Aurora Multi-AZ deployments automatically maintain a synchronous standby replica in a different Availability Zone to provide high availability. Additionally, Aurora Auto Scaling allows you to automatically scale the number of Aurora Replicas in response to read workloads, allowing you to meet the demand of unpredictable read workloads while maintaining high availability. This would provide an automated solution for scaling the database to meet the demand of the application while maintaining high availability.

