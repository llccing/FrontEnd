# Q81
**Answer:** C

decoupled = SQS
Launch template = AMI
Launch configuration = EC2

------------
This design follows the best practices for loosely coupled and scalable architecture. By using SQS, the jobs are durably stored in the queue, ensuring they are not lost. The processor application is stateless, which aligns with the design requirement. The AMI allows for consistent deployment of the application. The launch template and ASG facilitate the dynamic scaling of the application based on the number of items in the SQS, ensuring parallel processing of jobs.

Options A and D suggest using SNS, which is a publish/subscribe messaging service and may not provide the durability required for job storage.

Option B suggests using network usage as a scaling metric, which may not be directly related to the number of jobs to be processed. The number of items in the SQS provides a more accurate metric for scaling based on the workload.


## Q82
**Answer:** B

B
AWS Config has a managed rule
named acm-certificate-expiration-check
to check for expiring certificates
(configurable number of days)

https://repost.aws/knowledge-center/acm-certificate-expiration


## Q83
**Answer:** C

The key reasons are:

CloudFront can cache static content close to European users using edge locations, improving site performance.
The custom origin feature allows seamlessly integrating the CloudFront CDN with existing on-premises servers.
No changes are needed to the site backend or servers. CloudFront just acts as a globally distributed cache.
This can be set up very quickly, meeting the launch deadline.
Other options like migrating to EC2 or S3 would require more time and changes. CloudFront is an easier lift.
Route 53 geoproximity routing alone would not improve performance much without a CDN.

## Q84
**Answer:** B

Option B, would indeed be the most cost-effective solution. Reserved Instances provide cost savings for instances that run consistently, such as the production environment in this case, while On-Demand Instances offer flexibility and are suitable for instances with variable usage patterns like the development and test environments. This combination ensures cost optimization based on the specific requirements and usage patterns described in the question.

## Q85
**Answer:** A

You can use S3 Object Lock to store objects using a write-once-read-many (WORM) model. Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely. You can use S3 Object Lock to meet regulatory requirements that require WORM storage, or add an extra layer of protection against object changes and deletion.
Versioning is required and automatically activated as Object Lock is enabled.
https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html

## Q86
**Answer:** A

Secrets Manager enables you to replace hardcoded credentials in your code, including passwords, with an API call to Secrets Manager to retrieve the secret programmatically. This helps ensure the secret can't be compromised by someone examining your code, because the secret no longer exists in the code. Also, you can configure Secrets Manager to automatically rotate the secret for you according to a specified schedule. This enables you to replace long-term secrets with short-term ones, significantly reducing the risk of compromise.
https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html

------
B. SSM OpsCenter is primarily used for managing and resolving operational issues. It is not designed to securely store and manage credentials like AWS Secrets Manager.

C. Storing credentials in an S3 bucket may provide some level of security, but it lacks the additional features and security controls offered by AWS Secrets Manager.

D. While using KMS for encryption is a good practice, managing credentials directly on the web server file system can introduce complexities and potential security risks. It can be challenging to securely manage and rotate credentials across multiple web servers, especially when considering scalability and automation.

In summary, option A is the recommended solution as it leverages AWS Secrets Manager, which is purpose-built for securely storing and managing secrets, and provides the necessary IAM permissions to allow the web servers to access the credentials securely.

## Q87
**Answer:** D

Ans D - as excellently explained by SaurabhTiwari1 (9 mth ago) "The original question was about handling a situation where the database is unavailable due to an upgrade, not a failover situation. During a database upgrade, the database instance is not available, and RDS Proxy would not be able to connect to a new database instance because there isn’t one."

In this specific scenario, using Amazon SQS as described in option D provides a buffer for the incoming data during the period when the database is unavailable. This ensures that no data is lost, and it can be written to the database once the upgrade is complete.

## Q88
**Answer:** A

"Typically, you configure buckets to be Requester Pays buckets when you want to share data but not incur charges associated with others accessing the data. For example, you might use Requester Pays buckets when making available large datasets, such as zip code directories, reference data, geospatial information, or web crawling data."
https://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html

------------
Option A. When you use S3 Cross-Region Replication (CRR), you will incur data transfer costs. These costs include a fee for transferring data between regions, which is approximately $0.02 per GB.

------------
Why Not the Other Options?
B. S3 Cross-Region Replication:
Cross-Region Replication (CRR) copies data between S3 buckets in different AWS Regions but incurs data transfer costs for replication, which does not minimize costs for the survey company.
It is also unnecessary if the marketing firm can directly access the bucket.
C. Cross-Account Access:
Granting cross-account access allows the marketing firm to read data directly, but the data transfer costs would still be borne by the survey company, which contradicts the goal of minimizing the company’s costs.
D. S3 Intelligent-Tiering:
S3 Intelligent-Tiering optimizes storage costs for infrequently accessed data but does not address the need to minimize data transfer costs during sharing. Syncing the bucket to the marketing firm’s bucket would also incur transfer costs.

## Q89
**Answer:** A

Same as Question #44

-----------
Enable the versioning to ensure restoration in case of accidental deletion and MFA Delete for double verification before deletion.

## Q90
**Answer:** B

Just read from read replica.
A: This will make it HA but won't solve any problems
C: We want an AWS solution not change the development team's ways of working
D: Elasticache is cache of read queries when data doesn't change. It's useless for finding new data.

