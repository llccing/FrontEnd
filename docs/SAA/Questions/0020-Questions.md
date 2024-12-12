## Q21
An ecommerce company wants to launch a one-deal-a-day website on AWS. Each day will feature exactly one product on sale for a period of 24 hours. The company wants to be able to handle millions of requests each hour with millisecond latency during peak hours.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use Amazon S3 to host the full website in different S3 buckets. Add Amazon CloudFront distributions. Set the S3 buckets as origins for the distributions. Store the order data in Amazon S3.
B. Deploy the full website on Amazon EC2 instances that run in Auto Scaling groups across multiple Availability Zones. Add an Application Load Balancer (ALB) to distribute the website traffic. Add another ALB for the backend APIs. Store the data in Amazon RDS for MySQL.
C. Migrate the full application to run in containers. Host the containers on Amazon Elastic Kubernetes Service (Amazon EKS). Use the Kubernetes Cluster Autoscaler to increase and decrease the number of pods to process bursts in traffic. Store the data in Amazon RDS for MySQL.
D. Use an Amazon S3 bucket to host the website's static content. Deploy an Amazon CloudFront distribution. Set the S3 bucket as the origin. Use Amazon API Gateway and AWS Lambda functions for the backend APIs. Store the data in Amazon DynamoDB.

Chinese Version:
一个电子商务公司希望在 AWS 上推出一个每日一特惠网站。每天将展示一款产品，为期 24 小时。公司希望能够在高峰时段处理数百万次请求，并实现毫秒级的延迟。
哪个解决方案在操作开销方面最不繁琐？

A. 使用 Amazon S3 托管整个网站，在不同的 S3 存储桶中。添加 Amazon CloudFront 分发。将 S3 存储桶设置为分发的源。将订单数据存储在 Amazon S3 中。
B. 将整个网站部署在 Amazon EC2 实例上，这些实例在多个可用区中运行。添加一个 Application Load Balancer (ALB) 以分发网站流量。添加另一个 ALB 用于后端 API。将数据存储在 Amazon RDS for MySQL 中。
C. 将整个应用程序迁移到容器中运行。将容器托管在 Amazon Elastic Kubernetes Service (Amazon EKS) 上。使用 Kubernetes 集群自动扩缩器来增加和减少处理流量高峰的 pod 数量。将数据存储在 Amazon RDS for MySQL 中。
D. 使用 Amazon S3 存储桶托管网站的静态内容。部署 Amazon CloudFront 分发。将 S3 存储桶设置为源。使用 Amazon API Gateway 和 AWS Lambda 函数处理后端 API。将数据存储在 Amazon DynamoDB 中。

## Q22
A solutions architect is using Amazon S3 to design the storage architecture of a new digital media application. The media files must be resilient to the loss of an Availability Zone. Some files are accessed frequently while other files are rarely accessed in an unpredictable pattern. The solutions architect must minimize the costs of storing and retrieving the media files.
Which storage option meets these requirements?

A. S3 Standard
B. S3 Intelligent-Tiering
C. S3 Standard-Infrequent Access (S3 Standard-IA)
D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

Chinese Version:
一个解决方案架构师正在使用 Amazon S3 设计一个新的数字媒体应用程序的存储架构。媒体文件必须能够抵御可用区丢失的影响。有些文件访问频繁，而有些文件则很少访问，访问模式不可预测。解决方案架构师必须最小化存储和检索媒体文件的成本。
哪个存储选项满足这些要求？

A. S3 Standard
B. S3 Intelligent-Tiering
C. S3 Standard-Infrequent Access (S3 Standard-IA)
D. S3 One Zone-Infrequent Access (S3 One Zone-IA)

## Q23
A company is storing backup files by using Amazon S3 Standard storage. The files are accessed frequently for 1 month. However, the files are not accessed after 1 month. The company must keep the files indefinitely.
Which storage solution will meet these requirements MOST cost-effectively?

A. Configure S3 Intelligent-Tiering to automatically migrate objects.
B. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Glacier Deep Archive after 1 month.
C. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 1 month.
D. Create an S3 Lifecycle configuration to transition objects from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) after 1 month.

Chinese Version:
一家公司使用 Amazon S3 Standard 存储备份文件。这些文件在 1 个月内频繁访问。然而，这些文件在 1 个月后不再访问。公司必须永久保留这些文件。
哪个存储解决方案最符合这些要求？

A. 配置 S3 Intelligent-Tiering 以自动迁移对象。
B. 创建一个 S3 生命周期配置，将对象从 S3 Standard 迁移到 S3 Glacier Deep Archive 1 个月后。
C. 创建一个 S3 生命周期配置，将对象从 S3 Standard 迁移到 S3 Standard-Infrequent Access (S3 Standard-IA) 1 个月后。
D. 创建一个 S3 生命周期配置，将对象从 S3 Standard 迁移到 S3 One Zone-Infrequent Access (S3 One Zone-IA) 1 个月后。

## Q24
A company observes an increase in Amazon EC2 costs in its most recent bill. The billing team notices unwanted vertical scaling of instance types for a couple of EC2 instances. A solutions architect needs to create a graph comparing the last 2 months of EC2 costs and perform an in-depth analysis to identify the root cause of the vertical scaling.
How should the solutions architect generate the information with the LEAST operational overhead?

A. Use AWS Budgets to create a budget report and compare EC2 costs based on instance types.
B. Use Cost Explorer's granular filtering feature to perform an in-depth analysis of EC2 costs based on instance types.
C. Use graphs from the AWS Billing and Cost Management dashboard to compare EC2 costs based on instance types for the last 2 months.
D. Use AWS Cost and Usage Reports to create a report and send it to an Amazon S3 bucket. Use Amazon QuickSight with Amazon S3 as a source to generate an interactive graph based on instance types.

Chinese Version:
一家公司观察到其最近账单中 Amazon EC2 成本的增加。账单团队注意到 EC2 实例类型的不必要垂直扩展。解决方案架构师需要创建一个图表，比较过去 2 个月的 EC2 成本，并进行深入分析以识别垂直扩展的原因。
解决方案架构师如何以最少的操作开销生成信息？

A. 使用 AWS Budgets 创建一个预算报告，并根据实例类型比较 EC2 成本。
B. 使用 Cost Explorer 的细粒度过滤功能对 EC2 成本进行深入分析，根据实例类型。
C. 使用 AWS Billing 和 Cost Management 仪表板中的图表，根据实例类型比较过去 2 个月的 EC2 成本。
D. 使用 AWS Cost and Usage Reports 创建一个报告，并将其发送到 Amazon S3 存储桶。使用 Amazon QuickSight 和 Amazon S3 作为数据源，生成基于实例类型的交互式图表。

## Q25
A company is designing an application. The application uses an AWS Lambda function to receive information through Amazon API Gateway and to store the information in an Amazon Aurora PostgreSQL database.
During the proof-of-concept stage, the company has to increase the Lambda quotas significantly to handle the high volumes of data that the company needs to load into the database. A solutions architect must recommend a new design to improve scalability and minimize the configuration effort.
Which solution will meet these requirements?

A. Refactor the Lambda function code to Apache Tomcat code that runs on Amazon EC2 instances. Connect the database by using native Java Database Connectivity (JDBC) drivers.
B. Change the platform from Aurora to Amazon DynamoDProvision a DynamoDB Accelerator (DAX) cluster. Use the DAX client SDK to point the existing DynamoDB API calls at the DAX cluster.
C. Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using Amazon Simple Notification Service (Amazon SNS).
D. Set up two Lambda functions. Configure one function to receive the information. Configure the other function to load the information into the database. Integrate the Lambda functions by using an Amazon Simple Queue Service (Amazon SQS) queue.

Chinese Version:
一家公司正在设计一个应用程序。该应用程序使用 AWS Lambda 函数通过 Amazon API Gateway 接收信息，并将信息存储在 Amazon Aurora PostgreSQL 数据库中。
在概念验证阶段，公司必须显著增加 Lambda 配额，以处理高数据量。解决方案架构师必须推荐一个新设计，以提高可扩展性并最小化配置工作量。
哪个解决方案将满足这些要求？

A. 重构 Lambda 函数代码，使其成为运行在 Amazon EC2 实例上的 Apache Tomcat 代码。通过使用原生 Java 数据库连接性 (JDBC) 驱动程序连接数据库。
B. 将平台从 Aurora 更改为 Amazon DynamoDB。为 DynamoDB 加速器 (DAX) 集群预置一个集群。使用 DAX 客户端 SDK 将现有 DynamoDB API 调用指向 DAX 集群。
C. 设置两个 Lambda 函数。配置一个函数接收信息。配置另一个函数将信息加载到数据库中。通过使用 Amazon Simple Notification Service (Amazon SNS) 集成 Lambda 函数。
D. 设置两个 Lambda 函数。配置一个函数接收信息。配置另一个函数将信息加载到数据库中。通过使用 Amazon Simple Queue Service (Amazon SQS) 队列集成 Lambda 函数。

## Q26
A company needs to review its AWS Cloud deployment to ensure that its Amazon S3 buckets do not have unauthorized configuration changes.
What should a solutions architect do to accomplish this goal?

A. Turn on AWS Config with the appropriate rules.
B. Turn on AWS Trusted Advisor with the appropriate checks.
C. Turn on Amazon Inspector with the appropriate assessment template.
D. Turn on Amazon S3 server access logging. Configure Amazon EventBridge (Amazon Cloud Watch Events).

Chinese Version:
一家公司需要审查其 AWS Cloud 部署，以确保其 Amazon S3 存储桶没有未经授权的配置更改。
解决方案架构师应采取哪些措施来实现这一目标？

A. 启用 AWS Config 并设置适当的规则。
B. 启用 AWS Trusted Advisor 并设置适当的检查。
C. 启用 Amazon Inspector 并设置适当的评估模板。
D. 启用 Amazon S3 服务器访问日志。配置 Amazon EventBridge（Amazon CloudWatch 事件）。

## Q27
A company is launching a new application and will display application metrics on an Amazon CloudWatch dashboard. The company's product manager needs to access this dashboard periodically. The product manager does not have an AWS account. A solutions architect must provide access to the product manager by following the principle of least privilege.
Which solution will meet these requirements?

A. Share the dashboard from the CloudWatch console. Enter the product manager's email address, and complete the sharing steps. Provide a shareable link for the dashboard to the product manager.
B. Create an IAM user specifically for the product manager. Attach the CloudWatchReadOnlyAccess AWS managed policy to the user. Share the new login credentials with the product manager. Share the browser URL of the correct dashboard with the product manager.
C. Create an IAM user for the company's employees. Attach the ViewOnlyAccess AWS managed policy to the IAM user. Share the new login credentials with the product manager. Ask the product manager to navigate to the CloudWatch console and locate the dashboard by name in the Dashboards section.
D. Deploy a bastion server in a public subnet. When the product manager requires access to the dashboard, start the server and share the RDP credentials. On the bastion server, ensure that the browser is configured to open the dashboard URL with cached AWS credentials that have appropriate permissions to view the dashboard.

Chinese Version:
一家公司正在推出一个新的应用程序，并将在 Amazon CloudWatch 仪表板上显示应用程序指标。公司产品经理需要定期访问此仪表板。产品经理没有 AWS 账户。解决方案架构师必须通过遵循最小特权原则为产品经理提供访问权限。
哪个解决方案将满足这些要求？

A. 从 CloudWatch 控制台共享仪表板。输入产品经理的电子邮件地址，并完成共享步骤。为仪表板提供一个可共享的链接。
B. 为产品经理创建一个特定的 IAM 用户。将 CloudWatchReadOnlyAccess AWS 托管策略附加到用户。与产品经理共享新的登录凭据。与产品经理共享正确的浏览器 URL。
C. 为公司员工创建一个 IAM 用户。将 ViewOnlyAccess AWS 托管策略附加到 IAM 用户。与产品经理共享新的登录凭据。要求产品经理导航到 CloudWatch 控制台，并在 Dashboards 部分按名称找到仪表板。
D. 在公共子网中部署一个堡垒服务器。当产品经理需要访问仪表板时，启动服务器并共享 RDP 凭据。在堡垒服务器上，确保浏览器配置为使用具有适当权限查看仪表板的缓存 AWS 凭据打开仪表板 URL。

## Q28
A company is migrating applications to AWS. The applications are deployed in different accounts. The company manages the accounts centrally by using AWS Organizations. The company's security team needs a single sign-on (SSO) solution across all the company's accounts. The company must continue managing the users and groups in its on-premises self-managed Microsoft Active Directory.
Which solution will meet these requirements?

A. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a one-way forest trust or a one-way domain trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.
B. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console. Create a two-way forest trust to connect the company's self-managed Microsoft Active Directory with AWS SSO by using AWS Directory Service for Microsoft Active Directory.
C. Use AWS Directory Service. Create a two-way trust relationship with the company's self-managed Microsoft Active Directory.
D. Deploy an identity provider (IdP) on premises. Enable AWS Single Sign-On (AWS SSO) from the AWS SSO console.

Chinese Version:
一家公司正在将应用程序迁移到 AWS。这些应用程序部署在不同的账户中。公司通过 AWS Organizations 集中管理这些账户。公司安全团队需要一个跨所有公司账户的单点登录 (SSO) 解决方案。公司必须继续在其本地自管理 Microsoft Active Directory 中管理用户和组。
哪个解决方案将满足这些要求？

A. 从 AWS SSO 控制台启用 AWS Single Sign-On (AWS SSO)。创建一个单向森林信任或单向域信任，以将公司自管理 Microsoft Active Directory 与 AWS SSO 连接起来，使用 AWS Directory Service for Microsoft Active Directory。
B. 从 AWS SSO 控制台启用 AWS Single Sign-On (AWS SSO)。创建一个双向森林信任，以将公司自管理 Microsoft Active Directory 与 AWS SSO 连接起来，使用 AWS Directory Service for Microsoft Active Directory。
C. 使用 AWS Directory Service。创建一个双向信任关系，与公司自管理 Microsoft Active Directory。
D. 在本地部署一个身份提供者 (IdP)。从 AWS SSO 控制台启用 AWS Single Sign-On (AWS SSO)。

