## Questions

### Q1
A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.
The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.
Which solution meets these requirements?

A. Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.
B. Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.
C. Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.
D. Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.

Chinese Version:
一个公司需要能够快速地将全球各地站点收集的数据聚合到一个 Amazon S3 存储桶中。解决方案必须将操作复杂性降到最低。
解决方案架构师应如何满足这些要求？

A. 在目标 S3 存储桶上启用 S3 Transfer Acceleration。使用分段上传直接将站点数据上传到目标 S3 存储桶。
B. 将每个站点的数据上传到距离最近的 Region 中的 S3 存储桶。使用 S3 Cross-Region Replication 将对象复制到目标 S3 存储桶。然后从源 S3 存储桶中删除数据。
C. 每天调度 AWS Snowball Edge Storage Optimized 设备作业，将每个站点的数据传输到距离最近的 Region。使用 S3 Cross-Region Replication 将对象复制到目标 S3 存储桶。
D. 将每个站点的数据上传到距离最近的 Region 中的 Amazon EC2 实例。将数据存储在 Amazon Elastic Block Store (Amazon EBS) 卷中。定期拍摄 EBS 快照，并将其复制到包含目标 S3 存储桶的 Region。在那个 Region 中恢复 EBS 卷。


### Q2
A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.
What should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?

A. Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.
B. Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.
C. Use Amazon Athena directly with Amazon S3 to run the queries as needed.
D. Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.

Chinese Version:
一个公司需要能够分析其专有应用程序的日志文件。日志文件以 JSON 格式存储在 Amazon S3 存储桶中。查询将简单且按需运行。解决方案架构师需要以最少的操作开销执行分析。
解决方案架构师应如何满足这些要求？

A. 使用 Amazon Redshift 将所有内容加载到一个位置，并按需运行 SQL 查询。
B. 使用 Amazon CloudWatch Logs 存储日志。从 Amazon CloudWatch 控制台按需运行 SQL 查询。
C. 使用 Amazon Athena 直接与 Amazon S3 配合使用，按需运行查询。
D. 使用 AWS Glue 来目录化日志。使用 Amazon EMR 上的临时 Apache Spark 集群按需运行 SQL 查询。

### Q3
A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.
Which solution meets these requirements with the LEAST amount of operational overhead?

A. Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.
B. Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.
C. Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.
D. Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.

Chinese Version:
一个公司使用 AWS Organizations 管理多个 AWS 账户，以用于不同的部门。管理账户有一个包含项目报告的 Amazon S3 存储桶。公司希望仅限组织内的用户访问此 S3 存储桶。
哪种解决方案在操作开销方面最不繁琐？

A. 将 aws PrincipalOrgID 全局条件键添加到 S3 存储桶策略中，并引用组织 ID。
B. 为每个部门创建一个组织单位 (OU)。将 aws:PrincipalOrgPaths 全局条件键添加到 S3 存储桶策略中。
C. 使用 AWS CloudTrail 监控 CreateAccount、InviteAccountToOrganization、LeaveOrganization 和 RemoveAccountFromOrganization 事件。根据需要更新 S3 存储桶策略。
D. 为需要访问 S3 存储桶的用户添加标签。将 aws:PrincipalTag 全局条件键添加到 S3 存储桶策略中。

### Q4
An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.
Which solution will provide private network connectivity to Amazon S3?

A. Create a gateway VPC endpoint to the S3 bucket.
B. Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.
C. Create an instance profile on Amazon EC2 to allow S3 access.
D. Create an Amazon API Gateway API with a private link to access the S3 endpoint.

Chinese Version:
一个应用程序在 Amazon EC2 实例中运行，该实例在一个 VPC 中。应用程序处理存储在 Amazon S3 存储桶中的日志。EC2 实例需要在不连接到互联网的情况下访问 S3 存储桶。
哪种解决方案将提供对 Amazon S3 的私有网络连接？

A. 创建一个到 S3 存储桶的网关 VPC 端点。
B. 将日志流式传输到 Amazon CloudWatch Logs。将日志导出到 S3 存储桶。
C. 在 Amazon EC2 上创建一个实例配置文件，以允许 S3 访问。
D. 创建一个带有私有链接的 Amazon API Gateway API，以访问 S3 端点。

### Q5
A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.
What should a solutions architect propose to ensure users see all of their documents at once?

A. Copy the data so both EBS volumes contain all the documents
B. Configure the Application Load Balancer to direct a user to the server with the documents
C. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS
D. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server

Chinese Version:
一个公司使用单个 Amazon EC2 实例在 AWS 上托管一个网络应用程序，该实例将用户上传的文档存储在 Amazon EBS 卷中。为了提高可扩展性和可用性，公司复制了架构，并在另一个可用区中创建了第二个 EC2 实例和 EBS 卷，将两者都放置在 Application Load Balancer 后面。完成此更改后，用户报告说，每次刷新网站时，他们只能看到一组文档或另一组文档，但从未同时看到所有文档。
解决方案架构师应提出什么建议以确保用户一次看到所有文档？

A. 复制数据，使两个 EBS 卷都包含所有文档
B. 配置 Application Load Balancer，将用户定向到包含文档的实例
C. 将两个 EBS 卷中的数据复制到 Amazon EFS。修改应用程序以将新文档保存到 Amazon EFS
D. 配置 Application Load Balancer，将请求发送到两个服务器。从正确的服务器返回每个文档

