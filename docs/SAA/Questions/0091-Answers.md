## Q91
**Answer:** A

Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC. It should be option A.

https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html

------
B. Creating an S3 in a private subnet restricts direct internet access to the bucket but does not provide a direct and secure connection between the EC2and the S3. The application would still need to traverse the internet to access the S3 API.

C. Creating an S3 in the same Region as the EC2 does not inherently prevent traffic from traversing the internet.

D. Configuring a NAT gateway allows outbound internet connectivity for resources in private subnets, but it does not provide a direct and secure connection to the S3 service. The traffic from the EC2 to the S3 API would still traverse the internet.

The most suitable solution is to configure an S3 gateway endpoint (option A). It provides a secure and private connection between the VPC and the S3 service without requiring the traffic to traverse the internet. With an S3 gateway endpoint, the EC2 can access the S3 API directly within the VPC, meeting the security requirement of preventing traffic from traveling across the internet.

## Q92
**Answer:** AC

A: VPC S3 gateway for direct connection (no public internet) to access S3
C: Bucket policy to secure access and only allow the VPC application tier to access it

B: Opens up to public
D: Not secure to copy credentials
E: NAT instance (obsolete now) is not useful for limiting resource access, it's for subnet connections

## Q93
**Answer:** B

Aura MySQL is very fast in comparison to RDS for creating a clone of DB, you can create a even clone of a clone while you still work on your own clone, this will allow the dev team continue working during cloning step.
https://aws.amazon.com/blogs/aws/amazon-aurora-fast-database-cloning/


## Q94
**Answer:** C

A. Configuring EMR and an Aurora DB cluster for this use case would introduce unnecessary complexity and operational overhead. EMR is typically used for processing large datasets and running big data frameworks like Apache Spark or Hadoop.

B. While using S3 event notifications and SQS for decoupling is a good approach, using EC2 to process the data would introduce operational overhead in terms of managing and scaling the EC2.

D. Using EventBridge and Kinesis Data Streams for this use case would introduce additional complexity and operational overhead compared to the other options. EventBridge and Kinesis are typically used for real-time streaming and processing of large volumes of data.

In summary, option C is the recommended solution as it provides a serverless and scalable approach for processing uploaded files using S3 event notifications, SQS, and Lambda. It offers low operational overhead, automatic scaling, and efficient handling of varying demand. Storing the resulting JSON file in DynamoDB aligns with the requirement of saving the data for later analysis.


## Q95
**Answer:** D

A. In a Multi-AZ deployment, a standby replica of the database is created in a different AZ for high availability and automatic failover purposes. However, serving read requests from the primary AZ alone would not effectively separate read and write traffic. Both read and write traffic would still be directed to the primary database instance, which might not fully optimize performance.

B. The secondary instance in a Multi-AZ deployment is intended for failover and backup purposes, not for actively serving read traffic. It operates in a standby mode and is not optimized for handling read queries efficiently.

C. Configuring the read replicas with half of the compute and storage resources as the source database might not be optimal. It's generally recommended to configure the read replicas with the same compute and storage resources as the source database to ensure they can handle the read workload effectively.

D. Configuring the read replicas with the same compute and storage resources as the source database ensures that they can handle the read workload efficiently and provide the required performance boost.

## Q96
**Answer:** C

Ans C - must be in us-east-1 region and CIDR address is in allowable range (/24)

----
The first rule allows users with the specified IP CIDR to terminate instances, and the second rule specifies that the region must be us-east-1 for the termination process to be allowed, hence C is the correct answer.

## Q97
**Answer:** D

A. EFS does not provide native integration with AD for access control. While you can configure EFS to work with AD, it requires additional setup and is not as straightforward as using a dedicated Windows file system like FSx for Windows File Server.

B. It may introduce additional complexity for this use case. Creating an SMB file share using AWS Storage Gateway would require maintaining the gateway and managing the synchronization between on-premises and AWS storage.

C. S3 does not natively provide the SMB file protocol required for MS SharePoint and Windows shared file storage. While it is possible to mount an S3 as a volume using 3rd-party tools or configurations, it is not the recommended.

D. FSx for Windows File Server is a fully managed, highly available file storage service that is compatible with MSWindows shared file storage requirements. It provides native integration with AD, allowing for seamless access control and authentication using existing AD user accounts.

## Q98
**Answer:** C

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html

this is important part:
Immediately after a message is received, it remains in the queue. To prevent other consumers from processing the message again, Amazon SQS sets a visibility timeout, a period of time during which Amazon SQS prevents other consumers from receiving and processing the message. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours.

## Q99
**Answer:** D

Answer is D.
Lustre in the question is only available as FSx
https://aws.amazon.com/fsx/lustre/

## Q100
**Answer:** D

Correct Answer is C: EBS is not highly available.

----
EBS volumes are not Multi-AZ. EBS io2 types are multi-attach within the same AZ. EFS is multi-AZ