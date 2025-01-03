(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{481:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q1"}},[e._v("#")]),e._v(" Q1")]),e._v(" "),t("p",[e._v("A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection.\nThe company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity.\nWhich solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket.\nB. Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket.\nC. Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket.\nD. Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司需要能够快速地将全球各地站点收集的数据聚合到一个 Amazon S3 存储桶中。解决方案必须将操作复杂性降到最低。\n解决方案架构师应如何满足这些要求？")]),e._v(" "),t("p",[e._v("A. 在目标 S3 存储桶上启用 S3 Transfer Acceleration。使用分段上传直接将站点数据上传到目标 S3 存储桶。\nB. 将每个站点的数据上传到距离最近的 Region 中的 S3 存储桶。使用 S3 Cross-Region Replication 将对象复制到目标 S3 存储桶。然后从源 S3 存储桶中删除数据。\nC. 每天调度 AWS Snowball Edge Storage Optimized 设备作业，将每个站点的数据传输到距离最近的 Region。使用 S3 Cross-Region Replication 将对象复制到目标 S3 存储桶。\nD. 将每个站点的数据上传到距离最近的 Region 中的 Amazon EC2 实例。将数据存储在 Amazon Elastic Block Store (Amazon EBS) 卷中。定期拍摄 EBS 快照，并将其复制到包含目标 S3 存储桶的 Region。在那个 Region 中恢复 EBS 卷。")]),e._v(" "),t("h2",{attrs:{id:"q2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q2"}},[e._v("#")]),e._v(" Q2")]),e._v(" "),t("p",[e._v("A company needs the ability to analyze the log files of its proprietary application. The logs are stored in JSON format in an Amazon S3 bucket. Queries will be simple and will run on-demand. A solutions architect needs to perform the analysis with minimal changes to the existing architecture.\nWhat should the solutions architect do to meet these requirements with the LEAST amount of operational overhead?")]),e._v(" "),t("p",[e._v("A. Use Amazon Redshift to load all the content into one place and run the SQL queries as needed.\nB. Use Amazon CloudWatch Logs to store the logs. Run SQL queries as needed from the Amazon CloudWatch console.\nC. Use Amazon Athena directly with Amazon S3 to run the queries as needed.\nD. Use AWS Glue to catalog the logs. Use a transient Apache Spark cluster on Amazon EMR to run the SQL queries as needed.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司需要能够分析其专有应用程序的日志文件。日志文件以 JSON 格式存储在 Amazon S3 存储桶中。查询将简单且按需运行。解决方案架构师需要以最少的操作开销执行分析。\n解决方案架构师应如何满足这些要求？")]),e._v(" "),t("p",[e._v("A. 使用 Amazon Redshift 将所有内容加载到一个位置，并按需运行 SQL 查询。\nB. 使用 Amazon CloudWatch Logs 存储日志。从 Amazon CloudWatch 控制台按需运行 SQL 查询。\nC. 使用 Amazon Athena 直接与 Amazon S3 配合使用，按需运行查询。\nD. 使用 AWS Glue 来目录化日志。使用 Amazon EMR 上的临时 Apache Spark 集群按需运行 SQL 查询。")]),e._v(" "),t("h2",{attrs:{id:"q3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q3"}},[e._v("#")]),e._v(" Q3")]),e._v(" "),t("p",[e._v("A company uses AWS Organizations to manage multiple AWS accounts for different departments. The management account has an Amazon S3 bucket that contains project reports. The company wants to limit access to this S3 bucket to only users of accounts within the organization in AWS Organizations.\nWhich solution meets these requirements with the LEAST amount of operational overhead?")]),e._v(" "),t("p",[e._v("A. Add the aws PrincipalOrgID global condition key with a reference to the organization ID to the S3 bucket policy.\nB. Create an organizational unit (OU) for each department. Add the aws:PrincipalOrgPaths global condition key to the S3 bucket policy.\nC. Use AWS CloudTrail to monitor the CreateAccount, InviteAccountToOrganization, LeaveOrganization, and RemoveAccountFromOrganization events. Update the S3 bucket policy accordingly.\nD. Tag each user that needs access to the S3 bucket. Add the aws:PrincipalTag global condition key to the S3 bucket policy.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司使用 AWS Organizations 管理多个 AWS 账户，以用于不同的部门。管理账户有一个包含项目报告的 Amazon S3 存储桶。公司希望仅限组织内的用户访问此 S3 存储桶。\n哪种解决方案在操作开销方面最不繁琐？")]),e._v(" "),t("p",[e._v("A. 将 aws PrincipalOrgID 全局条件键添加到 S3 存储桶策略中，并引用组织 ID。\nB. 为每个部门创建一个组织单位 (OU)。将 aws:PrincipalOrgPaths 全局条件键添加到 S3 存储桶策略中。\nC. 使用 AWS CloudTrail 监控 CreateAccount、InviteAccountToOrganization、LeaveOrganization 和 RemoveAccountFromOrganization 事件。根据需要更新 S3 存储桶策略。\nD. 为需要访问 S3 存储桶的用户添加标签。将 aws:PrincipalTag 全局条件键添加到 S3 存储桶策略中。")]),e._v(" "),t("h2",{attrs:{id:"q4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q4"}},[e._v("#")]),e._v(" Q4")]),e._v(" "),t("p",[e._v("An application runs on an Amazon EC2 instance in a VPC. The application processes logs that are stored in an Amazon S3 bucket. The EC2 instance needs to access the S3 bucket without connectivity to the internet.\nWhich solution will provide private network connectivity to Amazon S3?")]),e._v(" "),t("p",[e._v("A. Create a gateway VPC endpoint to the S3 bucket.\nB. Stream the logs to Amazon CloudWatch Logs. Export the logs to the S3 bucket.\nC. Create an instance profile on Amazon EC2 to allow S3 access.\nD. Create an Amazon API Gateway API with a private link to access the S3 endpoint.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个应用程序在 Amazon EC2 实例中运行，该实例在一个 VPC 中。应用程序处理存储在 Amazon S3 存储桶中的日志。EC2 实例需要在不连接到互联网的情况下访问 S3 存储桶。\n哪种解决方案将提供对 Amazon S3 的私有网络连接？")]),e._v(" "),t("p",[e._v("A. 创建一个到 S3 存储桶的网关 VPC 端点。\nB. 将日志流式传输到 Amazon CloudWatch Logs。将日志导出到 S3 存储桶。\nC. 在 Amazon EC2 上创建一个实例配置文件，以允许 S3 访问。\nD. 创建一个带有私有链接的 Amazon API Gateway API，以访问 S3 端点。")]),e._v(" "),t("h2",{attrs:{id:"q5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q5"}},[e._v("#")]),e._v(" Q5")]),e._v(" "),t("p",[e._v("A company is hosting a web application on AWS using a single Amazon EC2 instance that stores user-uploaded documents in an Amazon EBS volume. For better scalability and availability, the company duplicated the architecture and created a second EC2 instance and EBS volume in another Availability Zone, placing both behind an Application Load Balancer. After completing this change, users reported that, each time they refreshed the website, they could see one subset of their documents or the other, but never all of the documents at the same time.\nWhat should a solutions architect propose to ensure users see all of their documents at once?")]),e._v(" "),t("p",[e._v("A. Copy the data so both EBS volumes contain all the documents\nB. Configure the Application Load Balancer to direct a user to the server with the documents\nC. Copy the data from both EBS volumes to Amazon EFS. Modify the application to save new documents to Amazon EFS\nD. Configure the Application Load Balancer to send the request to both servers. Return each document from the correct server")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司使用单个 Amazon EC2 实例在 AWS 上托管一个网络应用程序，该实例将用户上传的文档存储在 Amazon EBS 卷中。为了提高可扩展性和可用性，公司复制了架构，并在另一个可用区中创建了第二个 EC2 实例和 EBS 卷，将两者都放置在 Application Load Balancer 后面。完成此更改后，用户报告说，每次刷新网站时，他们只能看到一组文档或另一组文档，但从未同时看到所有文档。\n解决方案架构师应提出什么建议以确保用户一次看到所有文档？")]),e._v(" "),t("p",[e._v("A. 复制数据，使两个 EBS 卷都包含所有文档\nB. 配置 Application Load Balancer，将用户定向到包含文档的实例\nC. 将两个 EBS 卷中的数据复制到 Amazon EFS。修改应用程序以将新文档保存到 Amazon EFS\nD. 配置 Application Load Balancer，将请求发送到两个服务器。从正确的服务器返回每个文档")]),e._v(" "),t("h2",{attrs:{id:"q6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q6"}},[e._v("#")]),e._v(" Q6")]),e._v(" "),t("p",[e._v("A company uses NFS to store large video files in on-premises network attached storage. Each video file ranges in size from 1 MB to 500 GB. The total storage is 70 TB and is no longer growing. The company decides to migrate the video files to Amazon S3. The company must migrate the video files as soon as possible while using the least possible network bandwidth.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Create an S3 bucket. Create an IAM role that has permissions to write to the S3 bucket. Use the AWS CLI to copy all files locally to the S3 bucket.\nB. Create an AWS Snowball Edge job. Receive a Snowball Edge device on premises. Use the Snowball Edge client to transfer data to the device. Return the device so that AWS can import the data into Amazon S3.\nC. Deploy an S3 File Gateway on premises. Create a public service endpoint to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.\nD. Set up an AWS Direct Connect connection between the on-premises network and AWS. Deploy an S3 File Gateway on premises. Create a public virtual interface (VIF) to connect to the S3 File Gateway. Create an S3 bucket. Create a new NFS file share on the S3 File Gateway. Point the new file share to the S3 bucket. Transfer the data from the existing NFS file share to the S3 File Gateway.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司使用 NFS 在本地网络附加存储中存储大型视频文件。每个视频文件的大小从 1 MB 到 500 GB 不等。总存储容量为 70 TB，不再增长。公司决定将视频文件迁移到 Amazon S3。公司必须尽快迁移视频文件，同时使用最少的网络带宽。\n哪种解决方案将满足这些要求？")]),e._v(" "),t("p",[e._v("A. 创建一个 S3 存储桶。创建一个具有写入 S3 存储桶权限的 IAM 角色。使用 AWS CLI 将所有文件本地复制到 S3 存储桶。\nB. 创建一个 AWS Snowball Edge 作业。在本地接收一个 Snowball Edge 设备。使用 Snowball Edge 客户端将数据传输到设备。返回设备，以便 AWS 可以导入数据到 Amazon S3。\nC. 在本地部署一个 S3 文件网关。创建一个公共服务端点以连接到 S3 文件网关。创建一个 S3 存储桶。在 S3 文件网关上创建一个新的 NFS 文件共享。将新文件共享指向 S3 存储桶。将数据从现有的 NFS 文件共享传输到 S3 文件网关。\nD. 在本地网络和 AWS 之间设置 AWS Direct Connect 连接。在本地部署一个 S3 文件网关。创建一个公共虚拟接口（VIF）以连接到 S3 文件网关。创建一个 S3 存储桶。在 S3 文件网关上创建一个新的 NFS 文件共享。将新文件共享指向 S3 存储桶。将数据从现有的 NFS 文件共享传输到 S3 文件网关。")]),e._v(" "),t("h2",{attrs:{id:"q7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q7"}},[e._v("#")]),e._v(" Q7")]),e._v(" "),t("p",[e._v("A company has an application that ingests incoming messages. Dozens of other applications and microservices then quickly consume these messages. The number of messages varies drastically and sometimes increases suddenly to 100,000 each second. The company wants to decouple the solution and increase scalability.\nWhich solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Persist the messages to Amazon Kinesis Data Analytics. Configure the consumer applications to read and process the messages.\nB. Deploy the ingestion application on Amazon EC2 instances in an Auto Scaling group to scale the number of EC2 instances based on CPU metrics.\nC. Write the messages to Amazon Kinesis Data Streams with a single shard. Use an AWS Lambda function to preprocess messages and store them in Amazon DynamoDB. Configure the consumer applications to read from DynamoDB to process the messages.\nD. Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司有一个应用程序，用于接收传入消息。几十个其他应用程序和微服务随后快速消费这些消息。消息数量波动很大，有时会突然增加到每秒 100,000 条。公司希望解耦解决方案并提高可扩展性。\n哪种解决方案满足这些要求？")]),e._v(" "),t("p",[e._v("A. 将消息持久化到 Amazon Kinesis Data Analytics。配置消费者应用程序读取和处理消息。\nB. 在 Amazon EC2 实例的 Auto Scaling 组中部署摄取应用程序，根据 CPU 指标扩展 EC2 实例的数量。\nC. 将消息写入具有单个分片的 Amazon Kinesis Data Streams。使用 AWS Lambda 函数预处理消息，并将它们存储在 Amazon DynamoDB 中。配置消费者应用程序从 DynamoDB 读取以处理消息。\nD. 将消息发布到具有多个 Amazon Simple Queue Service (Amazon SQS) 订阅的 Amazon Simple Notification Service (Amazon SNS) 主题。配置消费者应用程序从队列处理消息。")]),e._v(" "),t("h2",{attrs:{id:"q8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q8"}},[e._v("#")]),e._v(" Q8")]),e._v(" "),t("p",[e._v("A company is migrating a distributed application to AWS. The application serves variable workloads. The legacy platform consists of a primary server that coordinates jobs across multiple compute nodes. The company wants to modernize the application with a solution that maximizes resiliency and scalability.\nHow should a solutions architect design the architecture to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling to use scheduled scaling.\nB. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a destination for the jobs. Implement the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure EC2 Auto Scaling based on the size of the queue.\nC. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure AWS CloudTrail as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the primary server.\nD. Implement the primary server and the compute nodes with Amazon EC2 instances that are managed in an Auto Scaling group. Configure Amazon EventBridge (Amazon CloudWatch Events) as a destination for the jobs. Configure EC2 Auto Scaling based on the load on the compute nodes.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司正在将分布式应用程序迁移到 AWS。该应用程序处理可变工作负载。遗留平台由一个主服务器组成，该主服务器协调多个计算节点上的作业。公司希望使用最大化可恢复性和可扩展性的解决方案来现代化应用程序。\n解决方案架构师应如何设计架构以满足这些要求？")]),e._v(" "),t("p",[e._v("A. 将 Amazon Simple Queue Service (Amazon SQS) 队列配置为作业的目的地。使用 Amazon EC2 实例实现计算节点，这些实例在 Auto Scaling 组中管理。配置 EC2 Auto Scaling 以使用计划扩展。\nB. 将 Amazon Simple Queue Service (Amazon SQS) 队列配置为作业的目的地。使用 Amazon EC2 实例实现计算节点，这些实例在 Auto Scaling 组中管理。根据队列的大小配置 EC2 Auto Scaling。\nC. 使用 Amazon EC2 实例实现主服务器和计算节点，这些实例在 Auto Scaling 组中管理。将 AWS CloudTrail 配置为作业的目的地。根据主服务器上的负载配置 EC2 Auto Scaling。\nD. 使用 Amazon EC2 实例实现主服务器和计算节点，这些实例在 Auto Scaling 组中管理。将 Amazon EventBridge (Amazon CloudWatch Events) 配置为作业的目的地。根据计算节点的负载配置 EC2 Auto Scaling。")]),e._v(" "),t("h2",{attrs:{id:"q9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q9"}},[e._v("#")]),e._v(" Q9")]),e._v(" "),t("p",[e._v("A company is running an SMB file server in its data center. The file server stores large files that are accessed frequently for the first few days after the files are created. After 7 days the files are rarely accessed.\nThe total data size is increasing and is close to the company's total storage capacity. A solutions architect must increase the company's available storage space without losing low-latency access to the most recently accessed files. The solutions architect must also provide file lifecycle management to avoid future storage issues.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use AWS DataSync to copy data that is older than 7 days from the SMB file server to AWS.\nB. Create an Amazon S3 File Gateway to extend the company's storage space. Create an S3 Lifecycle policy to transition the data to S3 Glacier Deep Archive after 7 days.\nC. Create an Amazon FSx for Windows File Server file system to extend the company's storage space.\nD. Install a utility on each user's computer to access Amazon S3. Create an S3 Lifecycle policy to transition the data to S3 Glacier Flexible Retrieval after 7 days.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司在其数据中心运行 SMB 文件服务器。文件服务器存储大型文件，这些文件在创建后几天内频繁访问。7 天后，文件很少被访问。\n总数据大小在增加，接近公司的总存储容量。解决方案架构师必须在不丢失对最近访问文件的低延迟访问的情况下增加公司的可用存储空间。解决方案架构师还必须提供文件生命周期管理，以避免未来的存储问题。\n哪种解决方案将满足这些要求？")]),e._v(" "),t("p",[e._v("A. 使用 AWS DataSync 将 7 天前的数据从 SMB 文件服务器复制到 AWS。\nB. 创建一个 Amazon S3 File Gateway 以扩展公司的存储空间。创建一个 S3 生命周期策略，将数据转换为 S3 Glacier Deep Archive 7 天后。\nC. 创建一个 Amazon FSx for Windows File Server 文件系统以扩展公司的存储空间。\nD. 在每个用户的计算机上安装一个实用程序以访问 Amazon S3。创建一个 S3 生命周期策略，将数据转换为 S3 Glacier Flexible Retrieval 7 天后。")]),e._v(" "),t("h2",{attrs:{id:"q10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q10"}},[e._v("#")]),e._v(" Q10")]),e._v(" "),t("p",[e._v("A company is building an ecommerce web application on AWS. The application sends information about new orders to an Amazon API Gateway REST API to process. The company wants to ensure that orders are processed in the order that they are received.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use an API Gateway integration to publish a message to an Amazon Simple Notification Service (Amazon SNS) topic when the application receives an order. Subscribe an AWS Lambda function to the topic to perform processing.\nB. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) FIFO queue when the application receives an order. Configure the SQS FIFO queue to invoke an AWS Lambda function for processing.\nC. Use an API Gateway authorizer to block any requests while the application processes an order.\nD. Use an API Gateway integration to send a message to an Amazon Simple Queue Service (Amazon SQS) standard queue when the application receives an order. Configure the SQS standard queue to invoke an AWS Lambda function for processing.")]),e._v(" "),t("p",[e._v("Chinese Version:\n一个公司正在 AWS 上构建一个电子商务网络应用程序。应用程序将有关新订单的信息发送到 Amazon API Gateway REST API 以进行处理。公司希望确保订单按接收顺序处理。\n哪种解决方案将满足这些要求？")]),e._v(" "),t("p",[e._v("A. 使用 API Gateway 集成在应用程序收到订单时发布消息到 Amazon Simple Notification Service (Amazon SNS) 主题。订阅 AWS Lambda 函数以执行处理。\nB. 使用 API Gateway 集成在应用程序收到订单时发送消息到 Amazon Simple Queue Service (Amazon SQS) FIFO 队列。配置 SQS FIFO 队列以调用 AWS Lambda 函数进行处理。\nC. 使用 API Gateway 授权器阻止任何请求，直到应用程序处理订单。\nD. 使用 API Gateway 集成在应用程序收到订单时发送消息到 Amazon Simple Queue Service (Amazon SQS) 标准队列。配置 SQS 标准队列以调用 AWS Lambda 函数进行处理。")])])}),[],!1,null,null,null);t.default=o.exports}}]);