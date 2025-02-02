## Q41
A company's application integrates with multiple software-as-a-service (SaaS) sources for data collection. The company runs Amazon EC2 instances to receive the data and to upload the data to an Amazon S3 bucket for analysis. The same EC2 instance that receives and uploads the data also sends a notification to the user when an upload is complete. The company has noticed slow application performance and wants to improve the performance as much as possible.
Which solution will meet these requirements with the LEAST operational overhead?

A. Create an Auto Scaling group so that EC2 instances can scale out. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
B. Create an Amazon AppFlow flow to transfer data between each SaaS source and the S3 bucket. Configure an S3 event notification to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.
C. Create an Amazon EventBridge (Amazon CloudWatch Events) rule for each SaaS source to send output data. Configure the S3 bucket as the rule's target. Create a second EventBridge (Cloud Watch Events) rule to send events when the upload to the S3 bucket is complete. Configure an Amazon Simple Notification Service (Amazon SNS) topic as the second rule's target.
D. Create a Docker container to use instead of an EC2 instance. Host the containerized application on Amazon Elastic Container Service (Amazon ECS). Configure Amazon CloudWatch Container Insights to send events to an Amazon Simple Notification Service (Amazon SNS) topic when the upload to the S3 bucket is complete.

Chinese Version:
一家公司的应用程序与多个软件即服务（SaaS）源集成，以收集数据。公司运行 Amazon EC2 实例来接收数据并将其上传到 Amazon S3 存储桶进行分析。接收和上传数据的是同一个 EC2 实例，它还向用户发送上传完成的通知。公司注意到应用程序性能缓慢，并希望尽可能提高性能。
哪种解决方案在操作开销方面最符合这些要求？

A. 创建一个 Auto Scaling 组，以便 EC2 实例可以扩展。配置 S3 事件通知，以在将数据上传到 S3 存储桶时发送事件到 Amazon Simple Notification Service (Amazon SNS) 主题。
B. 创建一个 Amazon AppFlow 流，将每个 SaaS 源与 S3 存储桶之间的数据传输。配置 S3 事件通知，以在将数据上传到 S3 存储桶时发送事件到 Amazon Simple Notification Service (Amazon SNS) 主题。
C. 为每个 SaaS 源创建一个 Amazon EventBridge (Amazon CloudWatch Events) 规则，以发送输出数据。将 S3 存储桶配置为规则的目标。创建第二个 EventBridge (Cloud Watch Events) 规则，以在将数据上传到 S3 存储桶时发送事件。将 Amazon Simple Notification Service (Amazon SNS) 主题配置为第二个规则的目标。
D. 创建一个 Docker 容器，以替代 EC2 实例。将容器化应用程序托管在 Amazon Elastic Container Service (Amazon ECS) 上。配置 Amazon CloudWatch Container Insights 以在将数据上传到 S3 存储桶时发送事件到 Amazon Simple Notification Service (Amazon SNS) 主题。


## Q42
A company runs a highly available image-processing application on Amazon EC2 instances in a single VPC. The EC2 instances run inside several subnets across multiple Availability Zones. The EC2 instances do not communicate with each other. However, the EC2 instances download images from Amazon S3 and upload images to Amazon S3 through a single NAT gateway. The company is concerned about data transfer charges.
What is the MOST cost-effective way for the company to avoid Regional data transfer charges?

A. Launch the NAT gateway in each Availability Zone.
B. Replace the NAT gateway with a NAT instance.
C. Deploy a gateway VPC endpoint for Amazon S3.
D. Provision an EC2 Dedicated Host to run the EC2 instances.

Chinese Version:
一家公司在其单个 VPC 中运行一个高度可用的图像处理应用程序，该应用程序在多个可用区中的多个子网中运行。EC2 实例之间不进行通信，但它们通过单个 NAT 网关从 Amazon S3 下载图像并上传图像到 Amazon S3。公司担心数据传输费用。
哪种方法最有效地避免区域数据传输费用？

A. 在每个可用区中启动 NAT 网关。
B. 将 NAT 网关替换为 NAT 实例。
C. 为 s3 部署网关 VPC 端点。
D. 为运行 EC2 实例的 EC2 专用主机。

## Q43
A company has an on-premises application that generates a large amount of time-sensitive data that is backed up to Amazon S3. The application has grown and there are user complaints about internet bandwidth limitations. A solutions architect needs to design a long-term solution that allows for both timely backups to Amazon S3 and with minimal impact on internet connectivity for internal users.
Which solution meets these requirements?

A. Establish AWS VPN connections and proxy all traffic through a VPC gateway endpoint.
B. Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.
C. Order daily AWS Snowball devices. Load the data onto the Snowball devices and return the devices to AWS each day.
D. Submit a support ticket through the AWS Management Console. Request the removal of S3 service limits from the account.

Chinese Version:
一家公司有一个本地应用程序，该应用程序生成大量时间敏感数据，并备份到 Amazon S3。该应用程序已增长，用户抱怨互联网带宽限制。解决方案架构师需要设计一个长期解决方案，既能及时备份到 Amazon S3，又能最小化对内部用户互联网连接的影响。
哪种解决方案符合这些要求？

A. 建立 AWS VPN 连接，并通过 VPC 网关端点代理所有流量。
B. 建立一个新的 AWS Direct Connect 连接，并直接通过该新连接备份流量。
C. 订购每日 AWS Snowball 设备。将数据加载到 Snowball 设备上，并每天将设备返回 AWS。
D. 通过 AWS 管理控制台提交支持票证。请求删除 S3 服务限制。


## Q44
A company has an Amazon S3 bucket that contains critical data. The company must protect the data from accidental deletion.
Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)

A. Enable versioning on the S3 bucket.
B. Enable MFA Delete on the S3 bucket.
C. Create a bucket policy on the S3 bucket.
D. Enable default encryption on the S3 bucket.
E. Create a lifecycle policy for the objects in the S3 bucket.

Chinese Version:
一家公司有一个包含关键数据的 Amazon S3 存储桶。公司必须保护数据免受意外删除。解决方案架构师应采取哪些步骤来满足这些要求？（选择两个。）

A. 在 S3 存储桶上启用版本控制。
B. 在 S3 存储桶上启用 MFA 删除。
C. 在 S3 存储桶上创建存储桶策略。
D. 在 S3 存储桶上启用默认加密。
E. 为 S3 存储桶中的对象创建生命周期策略。

## Q45
A company has a data ingestion workflow that consists of the following:
• An Amazon Simple Notification Service (Amazon SNS) topic for notifications about new data deliveries
• An AWS Lambda function to process the data and record metadata
The company observes that the ingestion workflow fails occasionally because of network connectivity issues. When such a failure occurs, the Lambda function does not ingest the corresponding data unless the company manually reruns the job.
Which combination of actions should a solutions architect take to ensure that the Lambda function ingests all data in the future? (Choose two.)

A. Deploy the Lambda function in multiple Availability Zones.
B. Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic.
C. Increase the CPU and memory that are allocated to the Lambda function.
D. Increase provisioned throughput for the Lambda function.
E. Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue.

Chinese Version:
一家公司有一个数据摄取工作流，包括以下内容：
• 一个 Amazon Simple Notification Service (Amazon SNS) 主题，用于通知新数据交付
• 一个 AWS Lambda 函数，用于处理数据并记录元数据
公司观察到，摄取工作流偶尔会因网络连接问题而失败。当出现这种情况时，Lambda 函数不会摄取相应数据，除非公司手动重新运行该作业。
解决方案架构师应采取哪些措施以确保 Lambda 函数在未来摄取所有数据？（选择两个。）

A. 将 Lambda 函数部署在多个可用区中。
B. 创建一个 Amazon Simple Queue Service (Amazon SQS) 队列，并订阅它到 SNS 主题。
C. 增加分配给 Lambda 函数的 CPU 和内存。
D. 增加 Lambda 函数的预置吞吐量。
E. 修改 Lambda 函数以从 Amazon Simple Queue Service (Amazon SQS) 队列中读取数据。

## Q46
A company has an application that provides marketing services to stores. The services are based on previous purchases by store customers. The stores upload transaction data to the company through SFTP, and the data is processed and analyzed to generate new marketing offers. Some of the files can exceed 200 GB in size.
Recently, the company discovered that some of the stores have uploaded files that contain personally identifiable information (PII) that should not have been included. The company wants administrators to be alerted if PII is shared again. The company also wants to automate remediation.
What should a solutions architect do to meet these requirements with the LEAST development effort?

A. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Inspector to scan the objects in the bucket. If objects contain PII, trigger an S3 Lifecycle policy to remove the objects that contain PII.
B. Use an Amazon S3 bucket as a secure transfer point. Use Amazon Macie to scan the objects in the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.
C. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Notification Service (Amazon SNS) to trigger a notification to the administrators to remove the objects that contain PII.
D. Implement custom scanning algorithms in an AWS Lambda function. Trigger the function when objects are loaded into the bucket. If objects contain PII, use Amazon Simple Email Service (Amazon SES) to trigger a notification to the administrators and trigger an S3 Lifecycle policy to remove the meats that contain PII.

Chinese Version:
一家公司有一个应用程序，为商店提供营销服务。这些服务基于商店客户之前的购买情况。商店通过 SFTP 将交易数据上传到公司，数据被处理和分析以生成新的营销优惠。有些文件可能超过 200 GB 大小。最近，公司发现一些商店上传的文件包含不应包含的个人身份信息（PII）。公司希望管理员在再次共享 PII 时收到通知。公司还希望自动化修复。解决方案架构师应采取哪些措施以最少的开发工作量满足这些要求？

A. 使用 Amazon S3 存储桶作为安全传输点。使用 Amazon Inspector 扫描存储桶中的对象。如果对象包含 PII，则触发 S3 生命周期策略以删除包含 PII 的对象。
B. 使用 Amazon S3 存储桶作为安全传输点。使用 Amazon Macie 扫描存储桶中的对象。如果对象包含 PII，则使用 Amazon Simple Notification Service (Amazon SNS) 触发通知，以通知管理员删除包含 PII 的对象。
C. 在 AWS Lambda 函数中实现自定义扫描算法。在对象加载到存储桶时触发该函数。如果对象包含 PII，则使用 Amazon Simple Notification Service (Amazon SNS) 触发通知，以通知管理员删除包含 PII 的对象。
D. 在 AWS Lambda 函数中实现自定义扫描算法。在对象加载到存储桶时触发该函数。如果对象包含 PII，则使用 Amazon Simple Email Service (Amazon SES) 触发通知，以通知管理员并触发 S3 生命周期策略以删除包含 PII 的对象。

## Q47
A company needs guaranteed Amazon EC2 capacity in three specific Availability Zones in a specific AWS Region for an upcoming event that will last 1 week.
What should the company do to guarantee the EC2 capacity?

A. Purchase Reserved Instances that specify the Region needed.
B. Create an On-Demand Capacity Reservation that specifies the Region needed.
C. Purchase Reserved Instances that specify the Region and three Availability Zones needed.
D. Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.

Chinese Version:
一家公司需要保证在特定 AWS 区域内的三个特定可用区中，为期一周的 EC2 容量。公司应采取什么措施来保证 EC2 容量？

A. 购买指定所需区域的保留实例。
B. 创建指定所需区域的按需容量预留。
C. 购买指定所需区域和三个可用区的保留实例。
D. 创建指定所需区域和三个可用区的按需容量预留。

## Q48
A company's website uses an Amazon EC2 instance store for its catalog of items. The company wants to make sure that the catalog is highly available and that the catalog is stored in a durable location.
What should a solutions architect do to meet these requirements?

A. Move the catalog to Amazon ElastiCache for Redis.
B. Deploy a larger EC2 instance with a larger instance store.
C. Move the catalog from the instance store to Amazon S3 Glacier Deep Archive.
D. Move the catalog to an Amazon Elastic File System (Amazon EFS) file system.

Chinese Version:
一家公司的网站使用 Amazon EC2 实例存储来存储其商品目录。公司希望确保目录高度可用，并存储在耐用位置。解决方案架构师应采取哪些措施来满足这些要求？

A. 将目录移动到 Amazon ElastiCache for Redis。
B. 部署一个具有更大实例存储的更大 EC2 实例。
C. 将目录从实例存储移动到 Amazon S3 Glacier Deep Archive。
D. 将目录移动到 Amazon Elastic File System (Amazon EFS) 文件系统。

## Q49
A company stores call transcript files on a monthly basis. Users access the files randomly within 1 year of the call, but users access the files infrequently after 1 year. The company wants to optimize its solution by giving users the ability to query and retrieve files that are less than 1-year-old as quickly as possible. A delay in retrieving older files is acceptable.
Which solution will meet these requirements MOST cost-effectively?

A. Store individual files with tags in Amazon S3 Glacier Instant Retrieval. Query the tags to retrieve the files from S3 Glacier Instant Retrieval.
B. Store individual files in Amazon S3 Intelligent-Tiering. Use S3 Lifecycle policies to move the files to S3 Glacier Flexible Retrieval after 1 year. Query and retrieve the files that are in Amazon S3 by using Amazon Athena. Query and retrieve the files that are in S3 Glacier by using S3 Glacier Select.
C. Store individual files with tags in Amazon S3 Standard storage. Store search metadata for each archive in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Instant Retrieval after 1 year. Query and retrieve the files by searching for metadata from Amazon S3.
D. Store individual files in Amazon S3 Standard storage. Use S3 Lifecycle policies to move the files to S3 Glacier Deep Archive after 1 year. Store search metadata in Amazon RDS. Query the files from Amazon RDS. Retrieve the files from S3 Glacier Deep Archive.

Chinese Version:
一家公司按月存储通话转录文件。用户在通话后 1 年内随机访问这些文件，但在通话后 1 年之后很少访问这些文件。公司希望通过提供用户查询和检索 1 年以内文件的能力，以最经济的方式满足这些要求。检索较旧文件的延迟是可以接受的。哪种解决方案最符合这些要求？

A. 将单个文件存储在 Amazon S3 Glacier Instant Retrieval 中，并使用标签查询这些文件。
B. 将单个文件存储在 Amazon S3 Intelligent-Tiering 中。使用 S3 生命周期策略将文件移动到 Amazon S3 Glacier Flexible Retrieval 中，1 年后。使用 Amazon Athena 查询和检索 Amazon S3 中的文件。使用 S3 Glacier Select 查询和检索 S3 Glacier 中的文件。
C. 将单个文件存储在 Amazon S3 Standard 存储中。使用 S3 生命周期策略将文件移动到 Amazon S3 Glacier Instant Retrieval 中，1 年后。使用 Amazon S3 中的元数据搜索查询和检索文件。
D. 将单个文件存储在 Amazon S3 Standard 存储中。使用 S3 生命周期策略将文件移动到 Amazon S3 Glacier Deep Archive 中，1 年后。将搜索元数据存储在 Amazon RDS 中。从 Amazon RDS 查询文件。从 Amazon S3 Glacier Deep Archive 检索文件。

## Q50
A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability.
What should a solutions architect do to meet these requirements?

A. Create an AWS Lambda function to apply the patch to all EC2 instances.
B. Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances.
C. Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances.
D. Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances.

Chinese Version:
一家公司有一个生产工作负载，运行在 1,000 个 Amazon EC2 Linux 实例上。该工作负载由第三方软件提供支持。公司需要尽快在所有 EC2 实例上应用第三方软件的补丁，以解决一个关键的安全漏洞。解决方案架构师应采取哪些措施来满足这些要求？

A. 创建一个 AWS Lambda 函数，以应用补丁到所有 EC2 实例。
B. 配置 AWS Systems Manager Patch Manager 以应用补丁到所有 EC2 实例。
C. 安排一个 AWS Systems Manager 维护窗口，以应用补丁到所有 EC2 实例。
D. 使用 AWS Systems Manager Run Command 运行一个自定义命令，以应用补丁到所有 EC2 实例。
