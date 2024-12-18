## Q71
A company runs a shopping application that uses Amazon DynamoDB to store customer information. In case of data corruption, a solutions architect needs to design a solution that meets a recovery point objective (RPO) of 15 minutes and a recovery time objective (RTO) of 1 hour.
What should the solutions architect recommend to meet these requirements?

A. Configure DynamoDB global tables. For RPO recovery, point the application to a different AWS Region.
B. Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.
C. Export the DynamoDB data to Amazon S3 Glacier on a daily basis. For RPO recovery, import the data from S3 Glacier to DynamoDB.
D. Schedule Amazon Elastic Block Store (Amazon EBS) snapshots for the DynamoDB table every 15 minutes. For RPO recovery, restore the DynamoDB table by using the EBS snapshot.

Chinese version:
一家公司运行一个购物应用程序，使用Amazon DynamoDB存储客户信息。在数据损坏的情况下，解决方案架构师需要设计一个解决方案，以满足恢复点目标（RPO）为15分钟和恢复时间目标（RTO）为1小时的要求。解决方案架构师应该推荐什么来满足这些要求？

A. 配置DynamoDB全局表。对于RPO恢复，将应用程序指向不同的AWS区域。
B. 配置DynamoDB点-时间恢复。对于RPO恢复，恢复到所需的时间点。
C. 将DynamoDB数据导出到Amazon S3 Glacier，每天一次。对于RPO恢复，从S3 Glacier导入数据到DynamoDB。
D. 为DynamoDB表安排每15分钟的Amazon Elastic Block Store（Amazon EBS）快照。对于RPO恢复，使用EBS快照恢复DynamoDB表。

## Q72
A company runs a photo processing application that needs to frequently upload and download pictures from Amazon S3 buckets that are located in the same AWS Region. A solutions architect has noticed an increased cost in data transfer fees and needs to implement a solution to reduce these costs.
How can the solutions architect meet this requirement?

A. Deploy Amazon API Gateway into a public subnet and adjust the route table to route S3 calls through it.
B. Deploy a NAT gateway into a public subnet and attach an endpoint policy that allows access to the S3 buckets.
C. Deploy the application into a public subnet and allow it to route through an internet gateway to access the S3 buckets.
D. Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.

Chinese version: 
一家公司运行一个照片处理应用程序，需要频繁地上传和下载位于同一AWS区域中的Amazon S3存储桶中的图片。解决方案架构师注意到数据传输费用有所增加，并需要实施一个解决方案来减少这些费用。解决方案架构师如何满足这一要求？

A. 将Amazon API Gateway部署到公共子网，并调整路由表以通过它路由S3调用。
B. 将NAT网关部署到公共子网，并附加一个允许访问S3存储桶的终端节点策略。
C. 将应用程序部署到公共子网，并允许它通过互联网网关访问S3存储桶。
D. 将S3 VPC网关端点部署到VPC中，并附加一个允许访问S3存储桶的终端节点策略。


## Q73
A company recently launched Linux-based application instances on Amazon EC2 in a private subnet and launched a Linux-based bastion host on an Amazon EC2 instance in a public subnet of a VPC. A solutions architect needs to connect from the on-premises network, through the company's internet connection, to the bastion host, and to the application servers. The solutions architect must make sure that the security groups of all the EC2 instances will allow that access.
Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)

A. Replace the current security group of the bastion host with one that only allows inbound access from the application instances.
B. Replace the current security group of the bastion host with one that only allows inbound access from the internal IP range for the company.
C. Replace the current security group of the bastion host with one that only allows inbound access from the external IP range for the company.
D. Replace the current security group of the application instances with one that allows inbound SSH access from only the private IP address of the bastion host.
E. Replace the current security group of the application instances with one that allows inbound SSH access from only the public IP address of the bastion host.

Chinese version:
一家公司最近在Amazon EC2中启动了Linux基础的应用程序实例，并在一个VPC的私有子网中启动了一个Linux基础的堡垒主机。解决方案架构师需要从本地网络通过公司的互联网连接连接到堡垒主机和应用程序服务器。解决方案架构师必须确保所有EC2实例的安全组允许这种访问。解决方案架构师应该采取哪些步骤来满足这些要求？（选择两个。）

A. 将堡垒主机当前的安全组替换为仅允许从应用程序实例接收入站访问的安全组。
B. 将堡垒主机当前的安全组替换为仅允许从公司内部IP范围接收入站访问的安全组。
C. 将堡垒主机当前的安全组替换为仅允许从公司外部IP范围接收入站访问的安全组。
D. 将应用程序实例当前的安全组替换为仅允许从堡垒主机的私有IP地址接收入站SSH访问的安全组。
E. 将应用程序实例当前的安全组替换为仅允许从堡垒主机的公共IP地址接收入站SSH访问的安全组。

## Q74
A solutions architect is designing a two-tier web application. The application consists of a public-facing web tier hosted on Amazon EC2 in public subnets. The database tier consists of Microsoft SQL Server running on Amazon EC2 in a private subnet. Security is a high priority for the company.
How should security groups be configured in this situation? (Choose two.)

A. Configure the security group for the web tier to allow inbound traffic on port 443 from 0.0.0.0/0.
B. Configure the security group for the web tier to allow outbound traffic on port 443 from 0.0.0.0/0.
C. Configure the security group for the database tier to allow inbound traffic on port 1433 from the security group for the web tier.
D. Configure the security group for the database tier to allow outbound traffic on ports 443 and 1433 to the security group for the web tier.
E. Configure the security group for the database tier to allow inbound traffic on ports 443 and 1433 from the security group for the web tier.

Chinese version:
解决方案架构师正在设计一个两层Web应用程序。该应用程序由在公共子网中托管的公共Web层和在私有子网中托管的Microsoft SQL Server组成。安全性是公司的重中之重。在这种情况下，应该如何配置安全组？（选择两个。）

A. 配置Web层的入站流量，允许从0.0.0.0/0到端口443的入站流量。
B. 配置Web层的出站流量，允许从0.0.0.0/0到端口443的出站流量。
C. 配置数据库层的入站流量，允许从Web层的安全组到端口1433的入站流量。
D. 配置数据库层的出站流量，允许从端口443和1433到Web层的安全组。
E. 配置数据库层的入站流量，允许从Web层的安全组到端口443和1433的入站流量。

## Q75
A company wants to move a multi-tiered application from on premises to the AWS Cloud to improve the application's performance. The application consists of application tiers that communicate with each other by way of RESTful services. Transactions are dropped when one tier becomes overloaded. A solutions architect must design a solution that resolves these issues and modernizes the application.
Which solution meets these requirements and is the MOST operationally efficient?

A. Use Amazon API Gateway and direct transactions to the AWS Lambda functions as the application layer. Use Amazon Simple Queue Service (Amazon SQS) as the communication layer between application services.
B. Use Amazon CloudWatch metrics to analyze the application performance history to determine the servers' peak utilization during the performance failures. Increase the size of the application server's Amazon EC2 instances to meet the peak requirements.
C. Use Amazon Simple Notification Service (Amazon SNS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SNS queue length and scale up and down as required.
D. Use Amazon Simple Queue Service (Amazon SQS) to handle the messaging between application servers running on Amazon EC2 in an Auto Scaling group. Use Amazon CloudWatch to monitor the SQS queue length and scale up when communication failures are detected.

Chinese version:
一家公司希望将一个多层应用程序从本地环境迁移到AWS云，以提高应用程序的性能。该应用程序由通过RESTful服务相互通信的应用程序层组成。当一个层变得过载时，事务会被丢弃。解决方案架构师必须设计一个解决方案，以解决这些问题并现代化应用程序。哪种解决方案满足这些要求并最有效地运行？

A. 使用Amazon API Gateway和将事务直接定向到AWS Lambda函数作为应用程序层。使用Amazon Simple Queue Service（Amazon SQS）作为应用程序服务之间的通信层。
B. 使用Amazon CloudWatch指标分析应用程序性能历史，以确定服务器在性能故障期间的峰值利用率。增加应用程序服务器的Amazon EC2实例的大小，以满足峰值需求。
C. 使用Amazon Simple Notification Service（Amazon SNS）处理在Amazon EC2中的自动扩展组中运行的应用程序服务器之间的消息传递。使用Amazon CloudWatch监控SNS队列长度，并根据需要扩展和缩小。
D. 使用Amazon Simple Queue Service（Amazon SQS）处理在Amazon EC2中的自动扩展组中运行的应用程序服务器之间的消息传递。使用Amazon CloudWatch监控SQS队列长度，并在检测到通信故障时扩展。

## Q76
A company receives 10 TB of instrumentation data each day from several machines located at a single factory. The data consists of JSON files stored on a storage area network (SAN) in an on-premises data center located within the factory. The company wants to send this data to Amazon S3 where it can be accessed by several additional systems that provide critical near-real-time analytics. A secure transfer is important because the data is considered sensitive.
Which solution offers the MOST reliable data transfer?

A. AWS DataSync over public internet
B. AWS DataSync over AWS Direct Connect
C. AWS Database Migration Service (AWS DMS) over public internet
D. AWS Database Migration Service (AWS DMS) over AWS Direct Connect

Chinese version:
一家公司每天从位于一个工厂内的几台机器接收10 TB的仪器数据。数据由存储在工厂内的本地数据中心内的存储区域网络（SAN）中的JSON文件组成。公司希望将这些数据发送到Amazon S3，在那里可以被几个提供关键近实时分析的额外系统访问。数据传输的安全性很重要，因为数据被认为是敏感的。哪种解决方案提供了最可靠的数据传输？

A. AWS DataSync通过公共互联网
B. AWS DataSync通过AWS Direct Connect
C. AWS Database Migration Service（AWS DMS）通过公共互联网
D. AWS Database Migration Service（AWS DMS）通过AWS Direct Connect

## Q77
A company needs to configure a real-time data ingestion architecture for its application. The company needs an API, a process that transforms data as the data is streamed, and a storage solution for the data.
Which solution will meet these requirements with the LEAST operational overhead?

A. Deploy an Amazon EC2 instance to host an API that sends data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.
B. Deploy an Amazon EC2 instance to host an API that sends data to AWS Glue. Stop source/destination checking on the EC2 instance. Use AWS Glue to transform the data and to send the data to Amazon S3.
C. Configure an Amazon API Gateway API to send data to an Amazon Kinesis data stream. Create an Amazon Kinesis Data Firehose delivery stream that uses the Kinesis data stream as a data source. Use AWS Lambda functions to transform the data. Use the Kinesis Data Firehose delivery stream to send the data to Amazon S3.
D. Configure an Amazon API Gateway API to send data to AWS Glue. Use AWS Lambda functions to transform the data. Use AWS Glue to send the data to Amazon S3.

Chinese version:
一家公司需要为其应用程序配置一个实时数据摄取架构。公司需要一个API、一个处理数据流式传输的数据处理过程和一个数据存储解决方案。哪种解决方案将满足这些要求，并具有最少的运营开销？

A. 部署一个Amazon EC2实例来托管一个API，该API将数据发送到Amazon Kinesis数据流。创建一个使用Kinesis数据流作为数据源的Amazon Kinesis Data Firehose交付流。使用AWS Lambda函数转换数据。使用Kinesis Data Firehose交付流将数据发送到Amazon S3。
B. 部署一个Amazon EC2实例来托管一个API，该API将数据发送到AWS Glue。在EC2实例上停止源/目标检查。使用AWS Glue转换数据并将数据发送到Amazon S3。
C. 配置一个Amazon API Gateway API，将数据发送到Amazon Kinesis数据流。创建一个使用Kinesis数据流作为数据源的Amazon Kinesis Data Firehose交付流。使用AWS Lambda函数转换数据。使用Kinesis Data Firehose交付流将数据发送到Amazon S3。
D. 配置一个Amazon API Gateway API，将数据发送到AWS Glue。使用AWS Lambda函数转换数据。使用AWS Glue将数据发送到Amazon S3。

## Q78
A company needs to keep user transaction data in an Amazon DynamoDB table. The company must retain the data for 7 years.
What is the MOST operationally efficient solution that meets these requirements?

A. Use DynamoDB point-in-time recovery to back up the table continuously.
B. Use AWS Backup to create backup schedules and retention policies for the table.
C. Create an on-demand backup of the table by using the DynamoDB console. Store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.
D. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to invoke an AWS Lambda function. Configure the Lambda function to back up the table and to store the backup in an Amazon S3 bucket. Set an S3 Lifecycle configuration for the S3 bucket.

Chinese version:
一家公司需要将用户交易数据保存在Amazon DynamoDB表中。公司必须保留数据7年。哪种解决方案最有效地满足这些要求？

A. 使用DynamoDB点-时间恢复来连续备份表。
B. 使用AWS Backup创建表的备份计划和保留策略。
C. 使用DynamoDB控制台创建表的按需备份。将备份存储在Amazon S3存储桶中。设置S3生命周期配置。
D. 创建一个Amazon EventBridge（Amazon CloudWatch Events）规则，调用一个AWS Lambda函数。配置Lambda函数备份表并将备份存储在Amazon S3存储桶中。设置S3生命周期配置。

## Q79
A company is planning to use an Amazon DynamoDB table for data storage. The company is concerned about cost optimization. The table will not be used on most mornings. In the evenings, the read and write traffic will often be unpredictable. When traffic spikes occur, they will happen very quickly.
What should a solutions architect recommend?

A. Create a DynamoDB table in on-demand capacity mode.
B. Create a DynamoDB table with a global secondary index.
C. Create a DynamoDB table with provisioned capacity and auto scaling.
D. Create a DynamoDB table in provisioned capacity mode, and configure it as a global table.

Chinese version:
一家公司计划使用Amazon DynamoDB表进行数据存储。公司担心成本优化。该表在大多数早晨不会被使用。在晚上，读写流量往往是不确定的。当流量激增时，它们会很快发生。解决方案架构师应该推荐什么？

A. 创建一个在按需容量模式下的DynamoDB表。
B. 创建一个具有全局二级索引的DynamoDB表。
C. 创建一个具有预置容量和自动扩展的DynamoDB表。
D. 创建一个在预置容量模式下的DynamoDB表，并将其配置为全局表。

## Q80
A company recently signed a contract with an AWS Managed Service Provider (MSP) Partner for help with an application migration initiative. A solutions architect needs ta share an Amazon Machine Image (AMI) from an existing AWS account with the MSP Partner's AWS account. The AMI is backed by Amazon Elastic Block Store (Amazon EBS) and uses an AWS Key Management Service (AWS KMS) customer managed key to encrypt EBS volume snapshots.
What is the MOST secure way for the solutions architect to share the AMI with the MSP Partner's AWS account?

A. Make the encrypted AMI and snapshots publicly available. Modify the key policy to allow the MSP Partner's AWS account to use the key.
B. Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to allow the MSP Partner's AWS account to use the key.
C. Modify the launchPermission property of the AMI. Share the AMI with the MSP Partner's AWS account only. Modify the key policy to trust a new KMS key that is owned by the MSP Partner for encryption.
D. Export the AMI from the source account to an Amazon S3 bucket in the MSP Partner's AWS account, Encrypt the S3 bucket with a new KMS key that is owned by the MSP Partner. Copy and launch the AMI in the MSP Partner's AWS account.

Chinese version:
一家公司最近与一个AWS托管服务提供商（MSP）合作伙伴签订了一份合同，以帮助其应用程序迁移计划。解决方案架构师需要与MSP合作伙伴的AWS账户共享一个现有的AWS账户中的Amazon Machine Image（AMI）。该AMI由Amazon Elastic Block Store（Amazon EBS）支持，并使用AWS Key Management Service（AWS KMS）客户管理的密钥来加密EBS卷快照。解决方案架构师如何最安全地与MSP合作伙伴的AWS账户共享AMI？

A. 使加密的AMI和快照公开可用。修改密钥策略，允许MSP合作伙伴的AWS账户使用密钥。
B. 修改AMI的launchPermission属性。仅与MSP合作伙伴的AWS账户共享AMI。修改密钥策略，允许MSP合作伙伴的AWS账户使用密钥。
C. 修改AMI的launchPermission属性。仅与MSP合作伙伴的AWS账户共享AMI。修改密钥策略，信任MSP合作伙伴拥有的新KMS密钥进行加密。
D. 从源账户导出AMI到MSP合作伙伴的AWS账户中的Amazon S3存储桶，使用MSP合作伙伴拥有的新KMS密钥加密S3存储桶。在MSP合作伙伴的AWS账户中复制并启动AMI。
