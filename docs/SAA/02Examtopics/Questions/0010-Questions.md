## Q11
A company has an application that runs on Amazon EC2 instances and uses an Amazon Aurora database. The EC2 instances connect to the database by using user names and passwords that are stored locally in a file. The company wants to minimize the operational overhead of credential management.
What should a solutions architect do to accomplish this goal?

A. Use AWS Secrets Manager. Turn on automatic rotation.
B. Use AWS Systems Manager Parameter Store. Turn on automatic rotation.
C. Create an Amazon S3 bucket to store objects that are encrypted with an AWS Key Management Service (AWS KMS) encryption key. Migrate the credential file to the S3 bucket. Point the application to the S3 bucket.
D. Create an encrypted Amazon Elastic Block Store (Amazon EBS) volume for each EC2 instance. Attach the new EBS volume to each EC2 instance. Migrate the credential file to the new EBS volume. Point the application to the new EBS volume.

Chinese Version:
一个公司在其 EC2 实例上运行一个使用 Amazon Aurora 数据库的应用程序。EC2 实例通过使用存储在本地文件中的用户名和密码连接到数据库。公司希望最小化凭证管理的运营开销。
解决方案架构师应采取什么措施来实现这一目标？

A. 使用 AWS Secrets Manager。启用自动轮换。
B. 使用 AWS Systems Manager Parameter Store。启用自动轮换。
C. 创建一个 Amazon S3 存储桶来存储使用 AWS Key Management Service (AWS KMS) 加密密钥加密的对象。将凭证文件迁移到 S3 存储桶。将应用程序指向 S3 存储桶。
D. 为每个 EC2 实例创建一个加密的 Amazon Elastic Block Store (Amazon EBS) 卷。将新 EBS 卷附加到每个 EC2 实例。将凭证文件迁移到新 EBS 卷。将应用程序指向新 EBS 卷。

## Q12
A global company hosts its web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has static data and dynamic data. The company stores its static data in an Amazon S3 bucket. The company wants to improve performance and reduce latency for the static data and dynamic data. The company is using its own domain name registered with Amazon Route 53.
What should a solutions architect do to meet these requirements?

A. Create an Amazon CloudFront distribution that has the S3 bucket and the ALB as origins. Configure Route 53 to route traffic to the CloudFront distribution.
B. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint Configure Route 53 to route traffic to the CloudFront distribution.
C. Create an Amazon CloudFront distribution that has the S3 bucket as an origin. Create an AWS Global Accelerator standard accelerator that has the ALB and the CloudFront distribution as endpoints. Create a custom domain name that points to the accelerator DNS name. Use the custom domain name as an endpoint for the web application.
D. Create an Amazon CloudFront distribution that has the ALB as an origin. Create an AWS Global Accelerator standard accelerator that has the S3 bucket as an endpoint. Create two domain names. Point one domain name to the CloudFront DNS name for dynamic content. Point the other domain name to the accelerator DNS name for static content. Use the domain names as endpoints for the web application.

Chinese Version:
一个全球公司在其 Application Load Balancer (ALB) 后面的 EC2 实例上托管 Web 应用程序。Web 应用程序既有静态数据也有动态数据。公司将其静态数据存储在 Amazon S3 存储桶中。公司希望提高静态数据和动态数据的性能并减少延迟。公司使用其自己的域名注册了 Amazon Route 53。
解决方案架构师应采取什么措施来满足这些要求？

A. 创建一个 Amazon CloudFront 分发，其中包含 S3 存储桶和 ALB 作为源。配置 Route 53 将流量路由到 CloudFront 分发。
B. 创建一个 Amazon CloudFront 分发，其中包含 ALB 作为源。创建一个 AWS Global Accelerator 标准加速器，其中包含 S3 存储桶作为端点。配置 Route 53 将流量路由到 CloudFront 分发。
C. 创建一个 Amazon CloudFront 分发，其中包含 S3 存储桶作为源。创建一个 AWS Global Accelerator 标准加速器，其中包含 ALB 和 CloudFront 分发作为端点。创建一个指向加速器 DNS 名称的自定义域名。将自定义域名用作 Web 应用程序的端点。
D. 创建一个 Amazon CloudFront 分发，其中包含 ALB 作为源。创建一个 AWS Global Accelerator 标准加速器，其中包含 S3 存储桶作为端点。创建两个域名。将一个域名指向 CloudFront DNS 名称以进行动态内容。将另一个域名指向加速器 DNS 名称以进行静态内容。将域名用作 Web 应用程序的端点。

## Q13
A company performs monthly maintenance on its AWS infrastructure. During these maintenance activities, the company needs to rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions.
Which solution will meet these requirements with the LEAST operational overhead?

A. Store the credentials as secrets in AWS Secrets Manager. Use multi-Region secret replication for the required Regions. Configure Secrets Manager to rotate the secrets on a schedule.
B. Store the credentials as secrets in AWS Systems Manager by creating a secure string parameter. Use multi-Region secret replication for the required Regions. Configure Systems Manager to rotate the secrets on a schedule.
C. Store the credentials in an Amazon S3 bucket that has server-side encryption (SSE) enabled. Use Amazon EventBridge (Amazon CloudWatch Events) to invoke an AWS Lambda function to rotate the credentials.
D. Encrypt the credentials as secrets by using AWS Key Management Service (AWS KMS) multi-Region customer managed keys. Store the secrets in an Amazon DynamoDB global table. Use an AWS Lambda function to retrieve the secrets from DynamoDB. Use the RDS API to rotate the secrets.

Chinese Version:
一个公司每月对其 AWS 基础设施进行维护。在这些维护活动中，公司需要跨多个 AWS 区域轮换其 Amazon RDS for MySQL 数据库的凭证。
哪个解决方案在操作开销方面最不繁琐？

A. 将凭证作为 AWS Secrets Manager 中的秘密存储。使用多区域秘密复制所需的区域。配置 Secrets Manager 以按计划轮换秘密。
B. 将凭证作为 AWS Systems Manager 中的安全字符串参数存储。使用多区域秘密复制所需的区域。配置 Systems Manager 以按计划轮换秘密。
C. 将凭证存储在具有服务器端加密 (SSE) 的 Amazon S3 存储桶中。使用 Amazon EventBridge (Amazon CloudWatch Events) 调用 AWS Lambda 函数来轮换凭证。
D. 使用 AWS Key Management Service (AWS KMS) 多区域客户管理密钥加密凭证。将秘密存储在 Amazon DynamoDB 全局表中。使用 AWS Lambda 函数从 DynamoDB 检索秘密。使用 RDS API 轮换秘密。

## Q14
A company runs an ecommerce application on Amazon EC2 instances behind an Application Load Balancer. The instances run in an Amazon EC2 Auto Scaling group across multiple Availability Zones. The Auto Scaling group scales based on CPU utilization metrics. The ecommerce application stores the transaction data in a MySQL 8.0 database that is hosted on a large EC2 instance.
The database's performance degrades quickly as application load increases. The application handles more read requests than write transactions. The company wants a solution that will automatically scale the database to meet the demand of unpredictable read workloads while maintaining high availability.
Which solution will meet these requirements?

A. Use Amazon Redshift with a single node for leader and compute functionality.
B. Use Amazon RDS with a Single-AZ deployment Configure Amazon RDS to add reader instances in a different Availability Zone.
C. Use Amazon Aurora with a Multi-AZ deployment. Configure Aurora Auto Scaling with Aurora Replicas.
D. Use Amazon ElastiCache for Memcached with EC2 Spot Instances.

Chinese Version:
一个公司在其 Application Load Balancer 后面的 EC2 实例上运行一个电商应用程序。实例在多个可用区中的 Amazon EC2 Auto Scaling 组中运行。Auto Scaling 组根据 CPU 利用率指标扩展。电商应用程序将事务数据存储在运行在大型 EC2 实例上的 MySQL 8.0 数据库中。
随着应用程序负载的增加，数据库的性能迅速下降。应用程序处理更多的读取请求而不是写入事务。公司希望一个解决方案能够自动扩展数据库以满足不可预测的读取工作负载的需求，同时保持高可用性。
哪个解决方案将满足这些要求？

A. 使用 Amazon Redshift 与单节点用于领导和计算功能。
B. 使用 Amazon RDS 与单可用区部署。配置 Amazon RDS 以在不同的可用区中添加读取器实例。
C. 使用 Amazon Aurora 与多可用区部署。配置 Aurora Auto Scaling 与 Aurora Replicas。
D. 使用 Amazon ElastiCache for Memcached 与 EC2 Spot 实例。

## Q15
A company recently migrated to AWS and wants to implement a solution to protect the traffic that flows in and out of the production VPC. The company had an inspection server in its on-premises data center. The inspection server performed specific operations such as traffic flow inspection and traffic filtering. The company wants to have the same functionalities in the AWS Cloud.
Which solution will meet these requirements?

A. Use Amazon GuardDuty for traffic inspection and traffic filtering in the production VPC.
B. Use Traffic Mirroring to mirror traffic from the production VPC for traffic inspection and filtering.
C. Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.
D. Use AWS Firewall Manager to create the required rules for traffic inspection and traffic filtering for the production VPC.

Chinese Version:
一个公司最近迁移到 AWS，并希望实施一个解决方案来保护进出生产 VPC 的流量。公司在其本地数据中心有一个检查服务器。检查服务器执行特定的操作，例如流量流检查和流量过滤。公司希望在 AWS 云中拥有相同的功能。
哪个解决方案将满足这些要求？

A. 使用 Amazon GuardDuty 进行生产 VPC 中的流量检查和流量过滤。
B. 使用 Traffic Mirroring 将生产 VPC 的流量镜像用于流量检查和过滤。
C. 使用 AWS Network Firewall 为生产 VPC 创建所需的流量检查和流量过滤规则。
D. 使用 AWS Firewall Manager 为生产 VPC 创建所需的流量检查和流量过滤规则。

## Q16
A company hosts a data lake on AWS. The data lake consists of data in Amazon S3 and Amazon RDS for PostgreSQL. The company needs a reporting solution that provides data visualization and includes all the data sources within the data lake. Only the company's management team should have full access to all the visualizations. The rest of the company should have only limited access.
Which solution will meet these requirements?

A. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate IAM roles.
B. Create an analysis in Amazon QuickSight. Connect all the data sources and create new datasets. Publish dashboards to visualize the data. Share the dashboards with the appropriate users and groups.
C. Create an AWS Glue table and crawler for the data in Amazon S3. Create an AWS Glue extract, transform, and load (ETL) job to produce reports. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.
D. Create an AWS Glue table and crawler for the data in Amazon S3. Use Amazon Athena Federated Query to access data within Amazon RDS for PostgreSQL. Generate reports by using Amazon Athena. Publish the reports to Amazon S3. Use S3 bucket policies to limit access to the reports.

Chinese Version:
一个公司在其 AWS 云中托管了一个数据湖。数据湖由 Amazon S3 中的数据和 Amazon RDS for PostgreSQL 中的数据组成。公司需要一个提供数据可视化并包含数据湖中所有数据源的报告解决方案。只有公司管理层应完全访问所有可视化。其余公司员工应仅有限访问。
哪个解决方案将满足这些要求？

A. 在 Amazon QuickSight 中创建分析。连接所有数据源并创建新数据集。发布仪表板以可视化数据。与适当的 IAM 角色共享仪表板。
B. 在 Amazon QuickSight 中创建分析。连接所有数据源并创建新数据集。发布仪表板以可视化数据。与适当的用户和组共享仪表板。
C. 为 Amazon S3 中的数据创建一个 AWS Glue 表和爬虫。创建一个 AWS Glue 提取、转换和加载 (ETL) 作业以生成报告。将报告发布到 Amazon S3。使用 S3 存储桶策略限制对报告的访问。
D. 为 Amazon S3 中的数据创建一个 AWS Glue 表和爬虫。使用 Amazon Athena Federated Query 访问 Amazon RDS for PostgreSQL 中的数据。使用 Amazon Athena 生成报告。将报告发布到 Amazon S3。使用 S3 存储桶策略限制对报告的访问。

## Q17
A company is implementing a new business application. The application runs on two Amazon EC2 instances and uses an Amazon S3 bucket for document storage. A solutions architect needs to ensure that the EC2 instances can access the S3 bucket.
What should the solutions architect do to meet this requirement?

A. Create an IAM role that grants access to the S3 bucket. Attach the role to the EC2 instances.
B. Create an IAM policy that grants access to the S3 bucket. Attach the policy to the EC2 instances.
C. Create an IAM group that grants access to the S3 bucket. Attach the group to the EC2 instances.
D. Create an IAM user that grants access to the S3 bucket. Attach the user account to the EC2 instances.

Chinese Version:
一个公司正在实施一个新的业务应用程序。该应用程序在两个 Amazon EC2 实例上运行，并使用 Amazon S3 存储桶存储文档。解决方案架构师需要确保 EC2 实例可以访问 S3 存储桶。
解决方案架构师应采取什么措施来满足此要求？

A. 创建一个授予对 S3 存储桶访问权限的 IAM 角色。将角色附加到 EC2 实例。
B. 创建一个授予对 S3 存储桶访问权限的 IAM 策略。将策略附加到 EC2 实例。
C. 创建一个授予对 S3 存储桶访问权限的 IAM 组。将组附加到 EC2 实例。
D. 创建一个授予对 S3 存储桶访问权限的 IAM 用户。将用户帐户附加到 EC2 实例。

## Q18
An application development team is designing a microservice that will convert large images to smaller, compressed images. When a user uploads an image through the web interface, the microservice should store the image in an Amazon S3 bucket, process and compress the image with an AWS Lambda function, and store the image in its compressed form in a different S3 bucket.
A solutions architect needs to design a solution that uses durable, stateless components to process the images automatically.
Which combination of actions will meet these requirements? (Choose two.)

A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Configure the S3 bucket to send a notification to the SQS queue when an image is uploaded to the S3 bucket.
B. Configure the Lambda function to use the Amazon Simple Queue Service (Amazon SQS) queue as the invocation source. When the SQS message is successfully processed, delete the message in the queue.
C. Configure the Lambda function to monitor the S3 bucket for new uploads. When an uploaded image is detected, write the file name to a text file in memory and use the text file to keep track of the images that were processed.
D. Launch an Amazon EC2 instance to monitor an Amazon Simple Queue Service (Amazon SQS) queue. When items are added to the queue, log the file name in a text file on the EC2 instance and invoke the Lambda function.
E. Configure an Amazon EventBridge (Amazon CloudWatch Events) event to monitor the S3 bucket. When an image is uploaded, send an alert to an Amazon ample Notification Service (Amazon SNS) topic with the application owner's email address for further processing.

Chinese Version:
一个应用程序开发团队正在设计一个将大图像转换为较小、压缩图像的微服务。当用户通过 Web 界面上传图像时，微服务应将图像存储在 Amazon S3 存储桶中，使用 AWS Lambda 函数处理和压缩图像，并将图像以压缩形式存储在不同的 S3 存储桶中。
解决方案架构师需要设计一个使用持久、无状态组件自动处理图像的解决方案。
哪些组合操作将满足这些要求？（选择两个。）

A. 创建一个 Amazon Simple Queue Service (Amazon SQS) 队列。配置 S3 存储桶，当图像上传到 S3 存储桶时向 SQS 队列发送通知。
B. 配置 Lambda 函数以将 Amazon Simple Queue Service (Amazon SQS) 队列用作调用源。当 SQS 消息成功处理后，从队列中删除消息。
C. 配置 Lambda 函数以监控 S3 存储桶中的新上传。当检测到上传的图像时，将文件名写入内存中的文本文件，并使用文本文件跟踪已处理的图像。
D. 启动一个 Amazon EC2 实例来监控 Amazon Simple Queue Service (Amazon SQS) 队列。当项目添加到队列时，在 EC2 实例上的文本文件中记录文件名，并调用 Lambda 函数。
E. 配置一个 Amazon EventBridge (Amazon CloudWatch Events) 事件来监控 S3 存储桶。当上传图像时，向包含应用程序所有者电子邮件地址的 Amazon 简单通知服务 (Amazon SNS) 主题发送警报，以进行进一步处理。

## Q19
A company has a three-tier web application that is deployed on AWS. The web servers are deployed in a public subnet in a VPC. The application servers and database servers are deployed in private subnets in the same VPC. The company has deployed a third-party virtual firewall appliance from AWS Marketplace in an inspection VPC. The appliance is configured with an IP interface that can accept IP packets.
A solutions architect needs to integrate the web application with the appliance to inspect all traffic to the application before the traffic reaches the web server.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create a Network Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.
B. Create an Application Load Balancer in the public subnet of the application's VPC to route the traffic to the appliance for packet inspection.
C. Deploy a transit gateway in the inspection VPConfigure route tables to route the incoming packets through the transit gateway.
D. Deploy a Gateway Load Balancer in the inspection VPC. Create a Gateway Load Balancer endpoint to receive the incoming packets and forward the packets to the appliance.

Chinese Version:
一个公司在其 AWS 云中部署了一个三层 Web 应用程序。Web 服务器部署在应用程序 VPC 中的公共子网中。应用程序服务器和数据库服务器部署在同一 VPC 中的私有子网中。公司在其检查 VPC 中部署了来自 AWS Marketplace 的第三方虚拟防火墙设备。该设备配置了一个 IP 接口，可以接受 IP 数据包。
解决方案架构师需要将 Web 应用程序与设备集成，以检查所有到达应用程序的流量，在流量到达 Web 服务器之前。
哪个解决方案在操作开销方面最不繁琐？

A. 在应用程序 VPC 的公共子网中创建一个 Network Load Balancer，将流量路由到设备进行数据包检查。
B. 在应用程序 VPC 的公共子网中创建一个 Application Load Balancer，将流量路由到设备进行数据包检查。
C. 在检查 VPC 中部署一个 Transit Gateway，配置路由表以将传入的数据包通过 Transit Gateway 路由。
D. 在检查 VPC 中部署一个 Gateway Load Balancer。创建一个 Gateway Load Balancer 端点以接收传入的数据包，并将数据包转发到设备。

## Q20
A company wants to improve its ability to clone large amounts of production data into a test environment in the same AWS Region. The data is stored in Amazon EC2 instances on Amazon Elastic Block Store (Amazon EBS) volumes. Modifications to the cloned data must not affect the production environment. The software that accesses this data requires consistently high I/O performance.
A solutions architect needs to minimize the time that is required to clone the production data into the test environment.
Which solution will meet these requirements?

A. Take EBS snapshots of the production EBS volumes. Restore the snapshots onto EC2 instance store volumes in the test environment.
B. Configure the production EBS volumes to use the EBS Multi-Attach feature. Take EBS snapshots of the production EBS volumes. Attach the production EBS volumes to the EC2 instances in the test environment.
C. Take EBS snapshots of the production EBS volumes. Create and initialize new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment before restoring the volumes from the production EBS snapshots.
D. Take EBS snapshots of the production EBS volumes. Turn on the EBS fast snapshot restore feature on the EBS snapshots. Restore the snapshots into new EBS volumes. Attach the new EBS volumes to EC2 instances in the test environment.

Chinese Version:
一个公司希望提高其将大量生产数据克隆到同一 AWS 区域测试环境的能力。数据存储在 Amazon EC2 实例上的 Amazon Elastic Block Store (Amazon EBS) 卷中。对克隆数据所做的修改不得影响生产环境。访问此数据的应用程序需要一致的高 I/O 性能。
解决方案架构师需要最小化将生产数据克隆到测试环境所需的时间。
哪个解决方案将满足这些要求？

A. 对生产 EBS 卷进行 EBS 快照。将快照恢复到测试环境中的 EC2 实例存储卷。
B. 配置生产 EBS 卷以使用 EBS 多重附加功能。对生产 EBS 卷进行 EBS 快照。将生产 EBS 卷附加到测试环境中的 EC2 实例。
C. 对生产 EBS 卷进行 EBS 快照。创建并初始化新 EBS 卷。在从生产 EBS 快照恢复卷之前，将新 EBS 卷附加到测试环境中的 EC2 实例。
D. 对生产 EBS 卷进行 EBS 快照。在 EBS 快照上启用 EBS 快速快照恢复功能。将快照恢复到新 EBS 卷中。将新 EBS 卷附加到测试环境中的 EC2 实例。
