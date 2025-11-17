## Q51
A company is developing an application that provides order shipping statistics for retrieval by a REST API. The company wants to extract the shipping statistics, organize the data into an easy-to-read HTML format, and send the report to several email addresses at the same time every morning.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Configure the application to send the data to Amazon Kinesis Data Firehose.
B. Use Amazon Simple Email Service (Amazon SES) to format the data and to send the report by email.
C. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Glue job to query the application's API for the data.
D. Create an Amazon EventBridge (Amazon CloudWatch Events) scheduled event that invokes an AWS Lambda function to query the application's API for the data.
E. Store the application data in Amazon S3. Create an Amazon Simple Notification Service (Amazon SNS) topic as an S3 event destination to send the report by email.

Chinese Version:
一家公司正在开发一个提供订单运输统计信息检索的 REST API 的应用程序。公司希望每天早上固定时间提取运输统计数据，将数据组织成易于阅读的 HTML 格式，并同时将报告发送给多个电子邮件地址。解决方案架构师应采取哪些步骤来满足这些要求？（选择两个。）

A. 配置应用程序将数据发送到 Amazon Kinesis Data Firehose。
B. 使用 Amazon Simple Email Service (Amazon SES) 格式化数据并发送报告。
C. 创建一个 Amazon EventBridge (Amazon CloudWatch Events) 计划事件，调用 AWS Glue 作业查询应用程序的 API 以获取数据。
D. 创建一个 Amazon EventBridge (Amazon CloudWatch Events) 计划事件，调用 AWS Lambda 函数查询应用程序的 API 以获取数据。
E. 将应用程序数据存储在 Amazon S3 中。创建一个 Amazon Simple Notification Service (Amazon SNS) 主题作为 S3 事件目标，通过电子邮件发送报告。

## Q52
A company wants to migrate its on-premises application to AWS. The application produces output files that vary in size from tens of gigabytes to hundreds of terabytes. The application data must be stored in a standard file system structure. The company wants a solution that scales automatically. is highly available, and requires minimum operational overhead.
Which solution will meet these requirements?

A. Migrate the application to run as containers on Amazon Elastic Container Service (Amazon ECS). Use Amazon S3 for storage.
B. Migrate the application to run as containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use Amazon Elastic Block Store (Amazon EBS) for storage.
C. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic File System (Amazon EFS) for storage.
D. Migrate the application to Amazon EC2 instances in a Multi-AZ Auto Scaling group. Use Amazon Elastic Block Store (Amazon EBS) for storage.

Chinese Version:
一家公司希望将其本地应用程序迁移到 AWS。该应用程序产生的输出文件大小从几十 GB 到数百 TB 不等。应用程序数据必须存储在标准的文件系统结构中。公司希望一个自动扩展、高可用且操作开销最小的解决方案。哪种解决方案可以满足这些要求？

A. 将应用程序迁移到 Amazon Elastic Container Service (Amazon ECS) 上运行。使用 Amazon S3 进行存储。
B. 将应用程序迁移到 Amazon Elastic Kubernetes Service (Amazon EKS) 上运行。使用 Amazon Elastic Block Store (Amazon EBS) 进行存储。
C. 将应用程序迁移到 Amazon EC2 实例，并部署在多可用区自动扩展组中。使用 Amazon Elastic File System (Amazon EFS) 进行存储。
D. 将应用程序迁移到 Amazon EC2 实例，并部署在多可用区自动扩展组中。使用 Amazon Elastic Block Store (Amazon EBS) 进行存储。

## Q53
A company needs to store its accounting records in Amazon S3. The records must be immediately accessible for 1 year and then must be archived for an additional 9 years. No one at the company, including administrative users and root users, can be able to delete the records during the entire 10-year period. The records must be stored with maximum resiliency.
Which solution will meet these requirements?

A. Store the records in S3 Glacier for the entire 10-year period. Use an access control policy to deny deletion of the records for a period of 10 years.
B. Store the records by using S3 Intelligent-Tiering. Use an IAM policy to deny deletion of the records. After 10 years, change the IAM policy to allow deletion.
C. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 Glacier Deep Archive after 1 year. Use S3 Object Lock in compliance mode for a period of 10 years.
D. Use an S3 Lifecycle policy to transition the records from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 year. Use S3 Object Lock in governance mode for a period of 10 years.

Chinese Version:
一家公司需要将它的会计记录存储在 Amazon S3 中。记录必须立即访问 1 年，然后必须存档 9 年。公司内部没有人，包括管理员和根用户，可以在整个 10 年期间删除记录。记录必须以最高可用性存储。哪种解决方案可以满足这些要求？

A. 将记录存储在 S3 Glacier 中，持续 10 年。使用访问控制策略拒绝删除记录 10 年。
B. 使用 S3 Intelligent-Tiering 存储记录。使用 IAM 策略拒绝删除记录。10 年后，更改 IAM 策略以允许删除。
C. 使用 S3 生命周期策略将记录从 S3 Standard 过渡到 S3 Glacier Deep Archive 1 年后。使用 S3 Object Lock 在合规模式下存储 10 年。
D. 使用 S3 生命周期策略将记录从 S3 Standard 过渡到 S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 年后。使用 S3 Object Lock 在治理模式下存储 10 年。

## Q54
A company runs multiple Windows workloads on AWS. The company's employees use Windows file shares that are hosted on two Amazon EC2 instances. The file shares synchronize data between themselves and maintain duplicate copies. The company wants a highly available and durable storage solution that preserves how users currently access the files.
What should a solutions architect do to meet these requirements?

A. Migrate all the data to Amazon S3. Set up IAM authentication for users to access files.
B. Set up an Amazon S3 File Gateway. Mount the S3 File Gateway on the existing EC2 instances.
C. Extend the file share environment to Amazon FSx for Windows File Server with a Multi-AZ configuration. Migrate all the data to FSx for Windows File Server.
D. Extend the file share environment to Amazon Elastic File System (Amazon EFS) with a Multi-AZ configuration. Migrate all the data to Amazon EFS.

Chinese Version:
一家公司在其 AWS 上运行多个 Windows 工作负载。公司员工使用由两个 Amazon EC2 实例托管的 Windows 文件共享。文件共享同步数据并维护重复副本。公司希望一个高可用且耐用的存储解决方案，保留用户当前访问文件的方式。解决方案架构师应采取哪些步骤来满足这些要求？

A. 将所有数据迁移到 Amazon S3。为用户设置 IAM 身份验证以访问文件。
B. 设置 Amazon S3 文件网关。在现有 EC2 实例上挂载 S3 文件网关。
C. 将文件共享环境扩展到 Amazon FSx for Windows File Server，并配置多可用区。将所有数据迁移到 FSx for Windows File Server。
D. 将文件共享环境扩展到 Amazon Elastic File System (Amazon EFS)，并配置多可用区。将所有数据迁移到 Amazon EFS。

## Q55
A solutions architect is developing a VPC architecture that includes multiple subnets. The architecture will host applications that use Amazon EC2 instances and Amazon RDS DB instances. The architecture consists of six subnets in two Availability Zones. Each Availability Zone includes a public subnet, a private subnet, and a dedicated subnet for databases. Only EC2 instances that run in the private subnets can have access to the RDS databases.
Which solution will meet these requirements?

A. Create a new route table that excludes the route to the public subnets' CIDR blocks. Associate the route table with the database subnets.
B. Create a security group that denies inbound traffic from the security group that is assigned to instances in the public subnets. Attach the security group to the DB instances.
C. Create a security group that allows inbound traffic from the security group that is assigned to instances in the private subnets. Attach the security group to the DB instances.
D. Create a new peering connection between the public subnets and the private subnets. Create a different peering connection between the private subnets and the database subnets.

Chinese Version:
解决方案架构师正在开发一个 VPC 架构，其中包括多个子网。该架构将托管使用 Amazon EC2 实例和 Amazon RDS DB 实例的应用程序。该架构由两个可用区中的六个子网组成。每个可用区包括一个公共子网、一个私有子网和一个专用于数据库的专用子网。只有运行在私有子网中的 EC2 实例可以访问 RDS 数据库。哪种解决方案可以满足这些要求？

A. 创建一个新路由表，排除对公共子网 CIDR 块的路由。将路由表与数据库子网关联。
B. 创建一个安全组，拒绝从分配给公共子网中实例的安全组接收的入站流量。将安全组附加到 DB 实例。
C. 创建一个安全组，允许从分配给私有子网中实例的安全组接收的入站流量。将安全组附加到 DB 实例。
D. 创建一个公共子网和私有子网之间的新对等连接。创建一个私有子网和数据库子网之间的不同对等连接。

## Q56
A company has registered its domain name with Amazon Route 53. The company uses Amazon API Gateway in the ca-central-1 Region as a public interface for its backend microservice APIs. Third-party services consume the APIs securely. The company wants to design its API Gateway URL with the company's domain name and corresponding certificate so that the third-party services can use HTTPS.
Which solution will meet these requirements?

A. Create stage variables in API Gateway with Name="Endpoint-URL" and Value="Company Domain Name" to overwrite the default URL. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM).
B. Create Route 53 DNS records with the company's domain name. Point the alias record to the Regional API Gateway stage endpoint. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region.
C. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region. Attach the certificate to the API Gateway endpoint. Configure Route 53 to route traffic to the API Gateway endpoint.
D. Create a Regional API Gateway endpoint. Associate the API Gateway endpoint with the company's domain name. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the us-east-1 Region. Attach the certificate to the API Gateway APIs. Create Route 53 DNS records with the company's domain name. Point an A record to the company's domain name.

Chinese Version:
一家公司已在其域名中注册了 Amazon Route 53。该公司在ca-central-1区域使用 Amazon API Gateway 作为其后端微服务 API 的公共接口。第三方服务安全地使用这些 API。公司希望其 API Gateway URL 使用其域名和相应的证书，以便第三方服务可以使用 HTTPS。哪种解决方案可以满足这些要求？

A. 在 API Gateway 中创建阶段变量，Name="Endpoint-URL" 和 Value="Company Domain Name"，以覆盖默认 URL。将公司域名的公共证书导入 AWS Certificate Manager (ACM)。
B. 创建 Route 53 DNS 记录，使用公司域名。将别名记录指向区域 API Gateway 阶段端点。将公司域名的公共证书导入 AWS Certificate Manager (ACM) 中的 us-east-1 区域。
C. 创建一个区域 API Gateway 端点。将 API Gateway 端点与公司域名关联。将公司域名的公共证书导入 AWS Certificate Manager (ACM) 中的同一区域。将证书附加到 API Gateway 端点。配置 Route 53 将流量路由到 API Gateway 端点。
D. 创建一个区域 API Gateway 端点。将 API Gateway 端点与公司域名关联。将公司域名的公共证书导入 AWS Certificate Manager (ACM) 中的 us-east-1 区域。将证书附加到 API Gateway API。创建 Route 53 DNS 记录，使用公司域名。将 A 记录指向公司域名。

## Q57
A company is running a popular social media website. The website gives users the ability to upload images to share with other users. The company wants to make sure that the images do not contain inappropriate content. The company needs a solution that minimizes development effort.
What should a solutions architect do to meet these requirements?

A. Use Amazon Comprehend to detect inappropriate content. Use human review for low-confidence predictions.
B. Use Amazon Rekognition to detect inappropriate content. Use human review for low-confidence predictions.
C. Use Amazon SageMaker to detect inappropriate content. Use ground truth to label low-confidence predictions.
D. Use AWS Fargate to deploy a custom machine learning model to detect inappropriate content. Use ground truth to label low-confidence predictions.

Chinese Version:
一家公司正在运行一个流行的社交媒体网站。该网站允许用户上传图像与其他用户分享。公司希望确保图像不包含不当内容。公司需要一个最小化开发工作量的解决方案。解决方案架构师应采取哪些步骤来满足这些要求？

A. 使用 Amazon Comprehend 检测不当内容。使用人工审查低置信度预测。
B. 使用 Amazon Rekognition 检测不当内容。使用人工审查低置信度预测。
C. 使用 Amazon SageMaker 检测不当内容。使用地面实况来标记低置信度预测。
D. 使用 AWS Fargate 部署自定义机器学习模型以检测不当内容。使用地面实况来标记低置信度预测。

## Q58
A company wants to run its critical applications in containers to meet requirements for scalability and availability. The company prefers to focus on maintenance of the critical applications. The company does not want to be responsible for provisioning and managing the underlying infrastructure that runs the containerized workload.
What should a solutions architect do to meet these requirements?

A. Use Amazon EC2 instances, and install Docker on the instances.
B. Use Amazon Elastic Container Service (Amazon ECS) on Amazon EC2 worker nodes.
C. Use Amazon Elastic Container Service (Amazon ECS) on AWS Fargate.
D. Use Amazon EC2 instances from an Amazon Elastic Container Service (Amazon ECS)-optimized Amazon Machine Image (AMI).

Chinese Version:
一家公司希望在其关键应用程序中运行容器，以满足可扩展性和可用性的要求。公司希望专注于关键应用程序的维护。公司不想负责管理运行容器化工作负载的底层基础设施。解决方案架构师应采取哪些步骤来满足这些要求？

A. 使用 Amazon EC2 实例，并在实例上安装 Docker。
B. 使用 Amazon Elastic Container Service (Amazon ECS) 在 Amazon EC2 工作节点上。
C. 使用 Amazon Elastic Container Service (Amazon ECS) 在 AWS Fargate 上。
D. 使用 Amazon EC2 实例，从 Amazon Elastic Container Service (Amazon ECS) 优化的 Amazon Machine Image (AMI) 中。

## Q59
A company hosts more than 300 global websites and applications. The company requires a platform to analyze more than 30 TB of clickstream data each day.
What should a solutions architect do to transmit and process the clickstream data?

A. Design an AWS Data Pipeline to archive the data to an Amazon S3 bucket and run an Amazon EMR cluster with the data to generate analytics.
B. Create an Auto Scaling group of Amazon EC2 instances to process the data and send it to an Amazon S3 data lake for Amazon Redshift to use for analysis.
C. Cache the data to Amazon CloudFront. Store the data in an Amazon S3 bucket. When an object is added to the S3 bucket. run an AWS Lambda function to process the data for analysis.
D. Collect the data from Amazon Kinesis Data Streams. Use Amazon Kinesis Data Firehose to transmit the data to an Amazon S3 data lake. Load the data in Amazon Redshift for analysis.

Chinese Version:
一家公司托管了超过 300 个全球网站和应用程序。该公司需要一个平台来分析每天超过 30 TB 的点击流数据。解决方案架构师应采取哪些步骤来传输和处理点击流数据？

A. 设计一个 AWS Data Pipeline 将数据归档到 Amazon S3 存储桶，并运行一个 Amazon EMR 集群来生成分析数据。
B. 创建一个 Amazon EC2 实例的自动扩展组来处理数据，并将其发送到 Amazon S3 数据湖，供 Amazon Redshift 使用进行分析。
C. 将数据缓存到 Amazon CloudFront。将数据存储在 Amazon S3 存储桶中。当对象添加到 S3 存储桶时，运行一个 AWS Lambda 函数来处理数据进行分析。
D. 从 Amazon Kinesis Data Streams 收集数据。使用 Amazon Kinesis Data Firehose 将数据传输到 Amazon S3 数据湖。将数据加载到 Amazon Redshift 进行分析。

## Q60
A company has a website hosted on AWS. The website is behind an Application Load Balancer (ALB) that is configured to handle HTTP and HTTPS separately. The company wants to forward all requests to the website so that the requests will use HTTPS.
What should a solutions architect do to meet this requirement?

A. Update the ALB's network ACL to accept only HTTPS traffic.
B. Create a rule that replaces the HTTP in the URL with HTTPS.
C. Create a listener rule on the ALB to redirect HTTP traffic to HTTPS.
D. Replace the ALB with a Network Load Balancer configured to use Server Name Indication (SNI).

Chinese Version:
一家公司在其 AWS 上托管了一个网站。该网站位于一个配置为分别处理 HTTP 和 HTTPS 的 Application Load Balancer (ALB) 后面。公司希望将所有请求转发到网站，以便请求使用 HTTPS。解决方案架构师应采取哪些步骤来满足这一要求？

A. 更新 ALB 的网络 ACL，仅接受 HTTPS 流量。
B. 创建一个规则，将 URL 中的 HTTP 替换为 HTTPS。
C. 在 ALB 上创建一个侦听器规则，将 HTTP 流量重定向到 HTTPS。
D. 将 ALB 替换为配置为使用服务器名称指示 (SNI) 的 Network Load Balancer。
