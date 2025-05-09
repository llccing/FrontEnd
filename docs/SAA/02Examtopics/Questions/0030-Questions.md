## Q31
A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift
clusters are congured with tags. The company wants to minimize the effort of conguring and operating this check.
What should a solutions architect do to accomplish this?

A. Use AWS Config rules to define and detect resources that are not properly tagged.
B. Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.
C. Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.
D. Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.

Chinese Version:
一家公司在其 AWS 上托管其 Web 应用程序，希望确保所有 Amazon EC2 实例、Amazon RDS DB 实例和 Amazon Redshift 集群都已配置标签。公司希望最大限度地减少配置和操作此检查的工作量。
解决方案架构师应采取什么措施来完成此任务？

A. 使用 AWS Config 规则定义并检测未正确配置标签的资源。
B. 使用 Cost Explorer 显示未正确配置标签的资源。手动为这些资源添加标签。
C. 编写 API 调用来检查所有资源的标签分配情况。在 EC2 实例上定期运行代码。
D. 编写 API 调用来检查所有资源的标签分配情况。通过 Amazon CloudWatch 调度 AWS Lambda 函数，定期运行代码。

## Q32
A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.
Which method is the MOST cost-effective for hosting the website?

A. Containerize the website and host it in AWS Fargate.
B. Create an Amazon S3 bucket and host the website there.
C. Deploy a web server on an Amazon EC2 instance to host the website.
D. Congure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.

Chinese Version:
一个开发团队需要托管一个将被其他团队访问的网站。该网站的内容包括 HTML、CSS、客户端 JavaScript 和图像。
哪种方法最符合成本效益？
A. 将网站容器化并托管在 AWS Fargate 中。
B. 创建一个 Amazon S3 存储桶并托管该网站。
C. 在 Amazon EC2 实例上部署一个 Web 服务器以托管该网站。
D. 配置一个使用 Express.js 框架的 AWS Lambda 目标的应用程序负载均衡器。


## Q33
A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours.The company needs a scalable, near-real-time solution to share the details of millions of nancial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.

What should a solutions architect recommend to meet these requirements?

A. Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.

B. Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.

C. Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every

transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.

D. Store the batched transactions data in Amazon S3 as les. Use AWS Lambda to process every le and remove sensitive data before updating the les in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction les stored in Amazon S3.

Chinese Version:
一家公司在其 AWS 上运行一个在线市场 Web 应用程序。该应用程序在高峰时段为数百万用户提供服务。公司需要一个可扩展的、近乎实时的解决方案，以将数百万笔财务交易的数据与几个内部应用程序共享。交易数据还需要经过处理，以删除敏感数据，然后存储在文档数据库中以实现低延迟检索。
解决方案架构师应推荐什么来满足这些要求？

A. 将交易数据存储到 Amazon DynamoDB 中。在 DynamoDB 中设置一个规则，以在每次写入时删除敏感数据。使用 DynamoDB Streams 与其他应用程序共享交易数据。
B. 将交易数据流式传输到 Amazon Kinesis Data Firehose 中，以将数据存储在 Amazon DynamoDB 和 Amazon S3 中。使用 Amazon Kinesis Data Firehose 与 AWS Lambda 的集成来删除敏感数据。其他应用程序可以消费存储在 Amazon S3 中的数据。
C. 将交易数据流式传输到 Amazon Kinesis Data Streams 中。使用 AWS Lambda 集成来删除每笔交易中的敏感数据，然后将交易数据存储在 Amazon DynamoDB 中。其他应用程序可以消费从 Kinesis 数据流中获取的交易数据。
D. 将批量处理的交易数据存储在 Amazon S3 中作为文件。使用 AWS Lambda 处理每个文件并删除敏感数据，然后更新 Amazon S3 中的文件。Lambda 函数然后将数据存储在 Amazon DynamoDB 中。其他应用程序可以消费存储在 Amazon S3 中的交易文件。

## Q34
A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.
What should a solutions architect do to meet these requirements?

A. Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.
B. Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.
C. Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.
D. Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.

Chinese Version:
一家公司在其 AWS 上托管其多层应用程序。为了合规、治理、审计和安全，公司必须跟踪其 AWS 资源上的配置更改并记录对这些资源所做的 API 调用历史。
解决方案架构师应采取什么措施来满足这些要求？

A. 使用 AWS CloudTrail 跟踪配置更改并使用 AWS Config 记录 API 调用。
B. 使用 AWS Config 跟踪配置更改并使用 AWS CloudTrail 记录 API 调用。
C. 使用 AWS Config 跟踪配置更改并使用 Amazon CloudWatch 记录 API 调用。
D. 使用 AWS CloudTrail 跟踪配置更改并使用 Amazon CloudWatch 记录 API 调用。

## Q35
A company is preparing to launch a public-facing web application in the AWS Cloud. The architecture consists of Amazon EC2 instances within a VPC behind an Elastic Load Balancer (ELB). A third-party service is used for the DNS. The company's solutions architect must recommend a solution to detect and protect against large-scale DDoS attacks.
Which solution meets these requirements?

A. Enable Amazon GuardDuty on the account.
B. Enable Amazon Inspector on the EC2 instances.
C. Enable AWS Shield and assign Amazon Route 53 to it.
D. Enable AWS Shield Advanced and assign the ELB to it.

Chinese Version:
一家公司正在准备推出一个面向公众的 Web 应用程序。该架构包括位于 VPC 中的 ELB 后面的 Amazon EC2 实例。第三方服务用于 DNS。公司解决方案架构师必须推荐一个解决方案来检测和保护大规模 DDoS 攻击。
哪种解决方案符合这些要求？

A. 在账户上启用 Amazon GuardDuty。
B. 在 EC2 实例上启用 Amazon Inspector。
C. 启用 AWS Shield 并将 Amazon Route 53 分配给它。
D. 启用 AWS Shield Advanced 并将 ELB 分配给它。

## Q36
A company is building an application in the AWS Cloud. The application will store data in Amazon S3 buckets in two AWS Regions. The company must use an AWS Key Management Service (AWS KMS) customer managed key to encrypt all data that is stored in the S3 buckets. The data in both S3 buckets must be encrypted and decrypted with the same KMS key. The data and the key must be stored in each of the two Regions.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.
B. Create a customer managed multi-Region KMS key. Create an S3 bucket in each Region. Configure replication between the S3 buckets. Configure the application to use the KMS key with client-side encryption.
C. Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure replication between the S3 buckets.
D. Create a customer managed KMS key and an S3 bucket in each Region. Configure the S3 buckets to use server-side encryption with AWS KMS keys (SSE-KMS). Configure replication between the S3 buckets.

Chinese Version:
一家公司正在 AWS 云中构建一个应用程序。该应用程序将在两个 AWS 区域中存储数据。公司必须使用 AWS Key Management Service (AWS KMS) 客户管理密钥来加密存储在 S3 存储桶中的所有数据。两个 S3 存储桶中的数据必须使用相同的 KMS 密钥进行加密和解密。数据和密钥必须存储在每个区域中。
哪种解决方案将满足这些要求，并具有最少的运营开销？

A. 在每个区域中创建一个 S3 存储桶。配置 S3 存储桶以使用 Amazon S3 托管加密密钥（SSE-S3）进行服务器端加密。配置 S3 存储桶之间的复制。
B. 创建一个客户管理的跨区域 KMS 密钥。在每个区域中创建一个 S3 存储桶。配置 S3 存储桶之间的复制。配置应用程序以使用 KMS 密钥进行客户端加密。
C. 在每个区域中创建一个客户管理的 KMS 密钥和一个 S3 存储桶。配置 S3 存储桶以使用 Amazon S3 托管加密密钥（SSE-S3）进行服务器端加密。配置 S3 存储桶之间的复制。
D. 在每个区域中创建一个客户管理的 KMS 密钥和一个 S3 存储桶。配置 S3 存储桶以使用 AWS KMS 密钥（SSE-KMS）进行服务器端加密。配置 S3 存储桶之间的复制。

## Q37
A company recently launched a variety of new workloads on Amazon EC2 instances in its AWS account. The company needs to create a strategy to access and administer the instances remotely and securely. The company needs to implement a repeatable process that works with native AWS services and follows the AWS Well-Architected Framework.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use the EC2 serial console to directly access the terminal interface of each instance for administration.
B. Attach the appropriate IAM role to each existing instance and new instance. Use AWS Systems Manager Session Manager to establish a remote SSH session.
C. Create an administrative SSH key pair. Load the public key into each EC2 instance. Deploy a bastion host in a public subnet to provide a tunnel for administration of each instance.
D. Establish an AWS Site-to-Site VPN connection. Instruct administrators to use their local on-premises machines to connect directly to the instances by using SSH keys across the VPN tunnel.

Chinese Version:
一家公司最近在其 AWS 账户中启动了多种新的工作负载。公司需要创建一个策略来远程访问和管理这些实例，并确保安全。公司需要实施一个可重复的过程，该过程使用原生 AWS 服务并遵循 AWS 最佳实践。
哪种解决方案将满足这些要求，并具有最少的运营开销？

A. 使用 EC2 串行控制台直接访问每个实例的终端接口进行管理。
B. 将适当的 IAM 角色附加到每个现有实例和新的实例。使用 AWS Systems Manager Session Manager 建立远程 SSH 会话。
C. 创建一个管理员 SSH 密钥对。将公钥加载到每个 EC2 实例中。在公共子网中部署一个堡垒主机，为每个实例提供管理隧道。
D. 建立 AWS 站点到站点 VPN 连接。指示管理员使用其本地本地机器通过 VPN 隧道直接连接到实例。

## Q38
A company is hosting a static website on Amazon S3 and is using Amazon Route 53 for DNS. The website is experiencing increased demand from around the world. The company must decrease latency for users who access the website.
Which solution meets these requirements MOST cost-effectively?

A. Replicate the S3 bucket that contains the website to all AWS Regions. Add Route 53 geolocation routing entries.
B. Provision accelerators in AWS Global Accelerator. Associate the supplied IP addresses with the S3 bucket. Edit the Route 53 entries to point to the IP addresses of the accelerators.
C. Add an Amazon CloudFront distribution in front of the S3 bucket. Edit the Route 53 entries to point to the CloudFront distribution.
D. Enable S3 Transfer Acceleration on the bucket. Edit the Route 53 entries to point to the new endpoint.

Chinese Version:
一家公司在其 Amazon S3 上托管一个静态网站，并使用 Amazon Route 53 进行 DNS。该网站正经历来自世界各地的增加需求。公司必须减少用户访问该网站的延迟。
哪种解决方案最符合成本效益？

A. 将包含网站的 S3 存储桶复制到所有 AWS 区域。添加 Route 53 地理位置路由条目。
B. 在 AWS Global Accelerator 中提供加速器。将提供的 IP 地址与 S3 存储桶关联。编辑 Route 53 条目以指向加速器的 IP 地址。
C. 在 S3 存储桶前面添加一个 Amazon CloudFront 分布。编辑 Route 53 条目以指向 CloudFront 分布。
D. 在存储桶上启用 S3 传输加速。编辑 Route 53 条目以指向新端点。

## Q39
A company maintains a searchable repository of items on its website. The data is stored in an Amazon RDS for MySQL database table that contains more than 10 million rows. The database has 2 TB of General Purpose SSD storage. There are millions of updates against this data every day through the company's website.
The company has noticed that some insert operations are taking 10 seconds or longer. The company has determined that the database storage performance is the problem.
Which solution addresses this performance issue?

A. Change the storage type to Provisioned IOPS SSD.
B. Change the DB instance to a memory optimized instance class.
C. Change the DB instance to a burstable performance instance class.
D. Enable Multi-AZ RDS read replicas with MySQL native asynchronous replication.

Chinese Version:
一家公司在其网站上维护一个可搜索的项目库。数据存储在 Amazon RDS for MySQL 数据库表中，该表包含超过 1000 万行。数据库有 2 TB 的通用 SSD 存储。每天通过公司网站对这些数据进行数百万次更新。
公司注意到，某些插入操作需要 10 秒或更长时间。公司确定数据库存储性能是问题所在。
哪种解决方案解决了此性能问题？

A. 将存储类型更改为预置 IOPS SSD。
B. 将 DB 实例更改为内存优化实例类。
C. 将 DB 实例更改为突发性能实例类。
D. 启用具有 MySQL 原生异步复制的 Multi-AZ RDS 只读副本。

## Q40
A company has thousands of edge devices that collectively generate 1 TB of status alerts each day. Each alert is approximately 2 KB in size. A solutions architect needs to implement a solution to ingest and store the alerts for future analysis.

The company wants a highly available solution. However, the company needs to minimize costs and does not want to manage additional infrastructure. Additionally, the company wants to keep 14 days of data available for immediate analysis and archive any data older than 14 days.
What is the MOST operationally efficient solution that meets these requirements?

A. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.
B. Launch Amazon EC2 instances across two Availability Zones and place them behind an Elastic Load Balancer to ingest the alerts. Create a script on the EC2 instances that will store the alerts in an Amazon S3 bucket. Set up an S3 Lifecycle configuration to transition data to Amazon S3 Glacier after 14 days.
C. Create an Amazon Kinesis Data Firehose delivery stream to ingest the alerts. Configure the Kinesis Data Firehose stream to deliver the alerts to an Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster. Set up the Amazon OpenSearch Service (Amazon Elasticsearch Service) cluster to take manual snapshots every day and delete data from the cluster that is older than 14 days.
D. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to ingest the alerts, and set the message retention period to 14 days. Configure consumers to poll the SQS queue, check the age of the message, and analyze the message data as needed. If the message is 14 days old, the consumer should copy the message to an Amazon S3 bucket and delete the message from the SQS queue.

Chinese Version:
一家公司有数千个边缘设备，每天生成约 1 TB 的状态警报。每个警报大约为 2 KB 大小。解决方案架构师需要实施一个解决方案来摄取和存储警报，以供将来分析。
公司希望有一个高可用性解决方案。然而，公司需要最小化成本，并且不想管理额外的基础设施。此外，公司希望保留 14 天的数据以供立即分析，并存档任何超过 14 天的数据。
哪种解决方案最符合成本效益？

A. 创建一个 Amazon Kinesis Data Firehose 交付流来摄取警报。配置 Kinesis Data Firehose 流以将警报交付到 Amazon S3 存储桶。设置 S3 生命周期配置以在 14 天后将数据传输到 Amazon S3 Glacier。
B. 在两个可用区中启动 Amazon EC2 实例，并将它们放置在 Elastic Load Balancer 后面以摄取警报。在 EC2 实例上创建一个脚本，以将警报存储在 Amazon S3 存储桶中。设置 S3 生命周期配置以在 14 天后将数据传输到 Amazon S3 Glacier。
C. 创建一个 Amazon Kinesis Data Firehose 交付流来摄取警报。配置 Kinesis Data Firehose 流以将警报交付到 Amazon OpenSearch Service (Amazon Elasticsearch Service) 集群。设置 Amazon OpenSearch Service (Amazon Elasticsearch Service) 集群以每天手动拍摄快照，并删除集群中超过 14 天的数据。
D. 创建一个 Amazon Simple Queue Service (Amazon SQS) 标准队列来摄取警报，并将消息保留期设置为 14 天。配置消费者轮询 SQS 队列，检查消息的年龄，并根据需要分析消息数据。如果消息超过 14 天，消费者应将消息复制到 Amazon S3 存储桶并从 SQS 队列中删除消息。
