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
