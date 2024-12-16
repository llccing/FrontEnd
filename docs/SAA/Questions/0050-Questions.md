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

