
## Q1
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


## Q2
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

## Q3
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

## Q4
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

## Q5
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

## Q6
A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.
Which solution will meet these requirements?

A. Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.
B. Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.
C. Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.
D. Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.

Chinese Version:
一个公司使用 NFS 在本地网络附加存储中存储大型视频文件。每个视频文件的大小从 1 MB 到 500 GB 不等。总存储容量为 70 TB，不再增长。公司决定将视频文件迁移到 Amazon S3。公司必须尽快迁移视频文件，同时使用最少的网络带宽。
哪种解决方案将满足这些要求？

A. 创建一个 S3 存储桶。创建一个具有写入 S3 存储桶权限的 IAM 角色。使用 AWS CLI 将所有文件本地复制到 S3 存储桶。
B. 创建一个 AWS Snowball Edge 作业。在本地接收一个 Snowball Edge 设备。使用 Snowball Edge 客户端将数据传输到设备。返回设备，以便 AWS 可以导入数据到 Amazon S3。
C. 在本地部署一个 S3 文件网关。创建一个公共服务端点以连接到 S3 文件网关。创建一个 S3 存储桶。在 S3 文件网关上创建一个新的 NFS 文件共享。将新文件共享指向 S3 存储桶。将数据从现有的 NFS 文件共享传输到 S3 文件网关。
D. 在本地网络和 AWS 之间设置 AWS Direct Connect 连接。在本地部署一个 S3 文件网关。创建一个公共虚拟接口（VIF）以连接到 S3 文件网关。创建一个 S3 存储桶。在 S3 文件网关上创建一个新的 NFS 文件共享。将新文件共享指向 S3 存储桶。将数据从现有的 NFS 文件共享传输到 S3 文件网关。

## Q7
A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.
Which solution meets these requirements?

A. Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.
B. Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.
C. Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.
D. Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues.

Chinese Version:
一个公司有一个应用程序，用于接收传入消息。几十个其他应用程序和微服务随后快速消费这些消息。消息数量波动很大，有时会突然增加到每秒 100,000 条。公司希望解耦解决方案并提高可扩展性。
哪种解决方案满足这些要求？

A. 将消息持久化到 Amazon Kinesis Data Analytics。配置消费者应用程序读取和处理消息。
B. 在 Amazon EC2 实例的 Auto Scaling 组中部署摄取应用程序，根据 CPU 指标扩展 EC2 实例的数量。
C. 将消息写入具有单个分片的 Amazon Kinesis Data Streams。使用 AWS Lambda 函数预处理消息，并将它们存储在 Amazon DynamoDB 中。配置消费者应用程序从 DynamoDB 读取以处理消息。
D. 将消息发布到具有多个 Amazon Simple Queue Service (Amazon SQS) 订阅的 Amazon Simple Notification Service (Amazon SNS) 主题。配置消费者应用程序从队列处理消息。

## Q8
A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.
How should a solutions architect design the architecture to meet these requirements?

A. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.
B. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.
C. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.
D. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.

Chinese Version:
一个公司正在将分布式应用程序迁移到 AWS。该应用程序处理可变工作负载。遗留平台由一个主服务器组成，该主服务器协调多个计算节点上的作业。公司希望使用最大化可恢复性和可扩展性的解决方案来现代化应用程序。
解决方案架构师应如何设计架构以满足这些要求？

A. 将 Amazon Simple Queue Service (Amazon SQS) 队列配置为作业的目的地。使用 Amazon EC2 实例实现计算节点，这些实例在 Auto Scaling 组中管理。配置 EC2 Auto Scaling 以使用计划扩展。
B. 将 Amazon Simple Queue Service (Amazon SQS) 队列配置为作业的目的地。使用 Amazon EC2 实例实现计算节点，这些实例在 Auto Scaling 组中管理。根据队列的大小配置 EC2 Auto Scaling。
C. 使用 Amazon EC2 实例实现主服务器和计算节点，这些实例在 Auto Scaling 组中管理。将 AWS CloudTrail 配置为作业的目的地。根据主服务器上的负载配置 EC2 Auto Scaling。
D. 使用 Amazon EC2 实例实现主服务器和计算节点，这些实例在 Auto Scaling 组中管理。将 Amazon EventBridge (Amazon CloudWatch Events) 配置为作业的目的地。根据计算节点的负载配置 EC2 Auto Scaling。

## Q9
A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.
The total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.
Which solution will meet these requirements?

A. Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.
B. Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.
C. Create an Amazon FSx for Windows File Server file system to extend the company's storage space.
D. Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.

Chinese Version:
一个公司在其数据中心运行 SMB 文件服务器。文件服务器存储大型文件，这些文件在创建后几天内频繁访问。7 天后，文件很少被访问。
总数据大小在增加，接近公司的总存储容量。解决方案架构师必须在不丢失对最近访问文件的低延迟访问的情况下增加公司的可用存储空间。解决方案架构师还必须提供文件生命周期管理，以避免未来的存储问题。
哪种解决方案将满足这些要求？

A. 使用 AWS DataSync 将 7 天前的数据从 SMB 文件服务器复制到 AWS。
B. 创建一个 Amazon S3 File Gateway 以扩展公司的存储空间。创建一个 S3 生命周期策略，将数据转换为 S3 Glacier Deep Archive 7 天后。
C. 创建一个 Amazon FSx for Windows File Server 文件系统以扩展公司的存储空间。
D. 在每个用户的计算机上安装一个实用程序以访问 Amazon S3。创建一个 S3 生命周期策略，将数据转换为 S3 Glacier Flexible Retrieval 7 天后。

## Q10

A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.
Which solution will meet these requirements?

A. Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.
B. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.
C. Use an API Gateway authorizer to block any requests while the application processes an order.
D. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.

Chinese Version:
一个公司正在 AWS 上构建一个电子商务网络应用程序。应用程序将有关新订单的信息发送到 Amazon API Gateway REST API 以进行处理。公司希望确保订单按接收顺序处理。
哪种解决方案将满足这些要求？

A. 使用 API Gateway 集成在应用程序收到订单时发布消息到 Amazon Simple Notification Service (Amazon SNS) 主题。订阅 AWS Lambda 函数以执行处理。
B. 使用 API Gateway 集成在应用程序收到订单时发送消息到 Amazon Simple Queue Service (Amazon SQS) FIFO 队列。配置 SQS FIFO 队列以调用 AWS Lambda 函数进行处理。
C. 使用 API Gateway 授权器阻止任何请求，直到应用程序处理订单。
D. 使用 API Gateway 集成在应用程序收到订单时发送消息到 Amazon Simple Queue Service (Amazon SQS) 标准队列。配置 SQS 标准队列以调用 AWS Lambda 函数进行处理。

