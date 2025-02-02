## Q61
A company is developing a two-tier web application on AWS. The company's developers have deployed the application on an Amazon EC2 instance that connects directly to a backend Amazon RDS database. The company must not hardcode database credentials in the application. The company must also implement a solution to automatically rotate the database credentials on a regular basis.
Which solution will meet these requirements with the LEAST operational overhead?

A. Store the database credentials in the instance metadata. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and instance metadata at the same time.
B. Store the database credentials in a configuration file in an encrypted Amazon S3 bucket. Use Amazon EventBridge (Amazon CloudWatch Events) rules to run a scheduled AWS Lambda function that updates the RDS credentials and the credentials in the configuration file at the same time. Use S3 Versioning to ensure the ability to fall back to previous values.
C. Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.
D. Store the database credentials as encrypted parameters in AWS Systems Manager Parameter Store. Turn on automatic rotation for the encrypted parameters. Attach the required permission to the EC2 role to grant access to the encrypted parameters.


Chinese version:
公司正在AWS上开发一个两层的Web应用程序。公司的开发人员已经将应用程序部署在一个Amazon EC2实例上，该实例直接连接到后端的Amazon RDS数据库。公司必须避免在应用程序中硬编码数据库凭证，并且必须实现一个解决方案，以定期自动轮换数据库凭证。
哪种解决方案在最少的操作开销下满足这些要求？

A. 将数据库凭证存储在实例元数据中。使用Amazon EventBridge（Amazon CloudWatch Events）规则运行一个计划的AWS Lambda函数，同时更新RDS凭证和实例元数据。
B. 将数据库凭证存储在加密的Amazon S3桶中的配置文件中。使用Amazon EventBridge（Amazon CloudWatch Events）规则运行一个计划的AWS Lambda函数，同时更新RDS凭证和配置文件中的凭证。使用S3版本控制确保能够回退到以前的值。
C. 将数据库凭证作为秘密存储在AWS Secrets Manager中。开启秘密的自动轮换。将所需权限附加到EC2角色，以授予对秘密的访问权限。
D. 将数据库凭证作为加密参数存储在AWS Systems Manager Parameter Store中。开启加密参数的自动轮换。将所需权限附加到EC2角色，以授予对加密参数的访问权限。

## Q62
A company is deploying a new public web application to AWS. The application will run behind an Application Load Balancer (ALB). The application needs to be encrypted at the edge with an SSL/TLS certificate that is issued by an external certificate authority (CA). The certificate must be rotated each year before the certificate expires.
What should a solutions architect do to meet these requirements?

A. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.
B. Use AWS Certificate Manager (ACM) to issue an SSL/TLS certificate. Import the key material from the certificate. Apply the certificate to the ALUse the managed renewal feature to automatically rotate the certificate.
C. Use AWS Certificate Manager (ACM) Private Certificate Authority to issue an SSL/TLS certificate from the root CA. Apply the certificate to the ALB. Use the managed renewal feature to automatically rotate the certificate.
D. Use AWS Certificate Manager (ACM) to import an SSL/TLS certificate. Apply the certificate to the ALB. Use Amazon EventBridge (Amazon CloudWatch Events) to send a notification when the certificate is nearing expiration. Rotate the certificate manually.

Chinese version:
公司正在将一个新的公共Web应用程序部署到AWS。该应用程序将在一个应用程序负载均衡器（ALB）后面运行。应用程序需要使用由外部证书颁发机构（CA）颁发的SSL/TLS证书在边缘进行加密。证书必须在每年到期前轮换。
解决方案架构师应该怎么做来满足这些要求？

A. 使用AWS Certificate Manager（ACM）颁发SSL/TLS证书。将证书应用到ALB。使用托管续订功能自动轮换证书。
B. 使用AWS Certificate Manager（ACM）颁发SSL/TLS证书。从证书中导入密钥材料。将证书应用到ALB。使用托管续订功能自动轮换证书。
C. 使用AWS Certificate Manager（ACM）私有证书颁发机构从根CA颁发SSL/TLS证书。将证书应用到ALB。使用托管续订功能自动轮换证书。
D. 使用AWS Certificate Manager（ACM）导入SSL/TLS证书。将证书应用到ALB。使用Amazon EventBridge（Amazon CloudWatch Events）在证书即将到期时发送通知。手动轮换证书。

## Q63
A company runs its infrastructure on AWS and has a registered base of 700,000 users for its document management application. The company intends to create a product that converts large .pdf files to .jpg image files. The .pdf files average 5 MB in size. The company needs to store the original files and the converted files. A solutions architect must design a scalable solution to accommodate demand that will grow rapidly over time.
Which solution meets these requirements MOST cost-effectively?

A. Save the .pdf files to Amazon S3. Configure an S3 PUT event to invoke an AWS Lambda function to convert the files to .jpg format and store them back in Amazon S3.
B. Save the .pdf files to Amazon DynamoDUse the DynamoDB Streams feature to invoke an AWS Lambda function to convert the files to .jpg format and store them back in DynamoDB.
C. Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic Block Store (Amazon EBS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the files to .jpg format. Save the .pdf files and the .jpg files in the EBS store.
D. Upload the .pdf files to an AWS Elastic Beanstalk application that includes Amazon EC2 instances, Amazon Elastic File System (Amazon EFS) storage, and an Auto Scaling group. Use a program in the EC2 instances to convert the file to .jpg format. Save the .pdf files and the .jpg files in the EBS store.

Chinese version:
Using publicly trained GPT model. Try rephrasing if you're looking for Accenture-specific info.

公司在AWS上运行其基础设施，并且其文档管理应用程序拥有70万注册用户。公司打算创建一个将大型.pdf文件转换为.jpg图像文件的产品。pdf文件的平均大小为5 MB。公司需要存储原始文件和转换后的文件。解决方案架构师必须设计一个可扩展的解决方案，以适应将迅速增长的需求。
哪种解决方案最具成本效益地满足这些要求？

A. 将.pdf文件保存到Amazon S3。配置一个S3 PUT事件以调用AWS Lambda函数将文件转换为.jpg格式，并将它们存储回Amazon S3。
B. 将.pdf文件保存到Amazon DynamoDB。使用DynamoDB Streams功能调用AWS Lambda函数将文件转换为.jpg格式，并将它们存储回DynamoDB。
C. 将.pdf文件上传到包含Amazon EC2实例、Amazon Elastic Block Store（Amazon EBS）存储和Auto Scaling组的AWS Elastic Beanstalk应用程序中。使用EC2实例中的程序将文件转换为.jpg格式。将.pdf文件和.jpg文件保存在EBS存储中。
D. 将.pdf文件上传到包含Amazon EC2实例、Amazon Elastic File System（Amazon EFS）存储和Auto Scaling组的AWS Elastic Beanstalk应用程序中。使用EC2实例中的程序将文件转换为.jpg格式。将.pdf文件和.jpg文件保存在EBS存储中。

## Q64
A company has more than 5 TB of file data on Windows file servers that run on premises. Users and applications interact with the data each day.
The company is moving its Windows workloads to AWS. As the company continues this process, the company requires access to AWS and on-premises file storage with minimum latency. The company needs a solution that minimizes operational overhead and requires no significant changes to the existing file access patterns. The company uses an AWS Site-to-Site VPN connection for connectivity to AWS.
What should a solutions architect do to meet these requirements?

A. Deploy and configure Amazon FSx for Windows File Server on AWS. Move the on-premises file data to FSx for Windows File Server. Reconfigure the workloads to use FSx for Windows File Server on AWS.
B. Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to the S3 File Gateway. Reconfigure the on-premises workloads and the cloud workloads to use the S3 File Gateway.
C. Deploy and configure an Amazon S3 File Gateway on premises. Move the on-premises file data to Amazon S3. Reconfigure the workloads to use either Amazon S3 directly or the S3 File Gateway. depending on each workload's location.
D. Deploy and configure Amazon FSx for Windows File Server on AWS. Deploy and configure an Amazon FSx File Gateway on premises. Move the on-premises file data to the FSx File Gateway. Configure the cloud workloads to use FSx for Windows File Server on AWS. Configure the on-premises workloads to use the FSx File Gateway.

Chinese version:
公司在本地运行的Windows文件服务器上拥有超过5 TB的文件数据。用户和应用程序每天都与这些数据交互。公司正在将其Windows工作负载迁移到AWS。在此过程中，公司需要访问AWS和本地文件存储，并且需要最低的延迟。公司需要一个解决方案，以最小化操作开销，并且不需要对现有的文件访问模式进行重大更改。公司使用AWS站点到站点VPN连接来连接到AWS。
解决方案架构师应该怎么做来满足这些要求？

A. 在AWS上部署和配置Amazon FSx for Windows File Server。将本地文件数据移动到FSx for Windows File Server。重新配置工作负载以使用AWS上的FSx for Windows File Server。
B. 在本地部署和配置Amazon S3 File Gateway。将本地文件数据移动到S3 File Gateway。重新配置本地工作负载和云工作负载以使用S3 File Gateway。
C. 在本地部署和配置Amazon S3 File Gateway。将本地文件数据移动到Amazon S3。根据每个工作负载的位置，重新配置工作负载以直接使用Amazon S3或S3 File Gateway。
D. 在AWS上部署和配置Amazon FSx for Windows File Server。在本地部署和配置Amazon FSx File Gateway。将本地文件数据移动到FSx File Gateway。配置云工作负载以使用AWS上的FSx for Windows File Server。配置本地工作负载以使用FSx File Gateway。

## Q65
A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports.
Which solution will meet these requirements with the LEAST operational overhead?

A. Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text.
B. Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text.
C. Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.
D. Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text.

Chinese version:
一家医院最近使用Amazon API Gateway和AWS Lambda部署了一个RESTful API。医院使用API Gateway和Lambda上传PDF格式和JPEG格式的报告。医院需要修改Lambda代码以识别报告中的受保护健康信息（PHI）。
哪种解决方案在最少的操作开销下满足这些要求？

A. 使用现有的Python库从报告中提取文本，并从提取的文本中识别PHI。
B. 使用Amazon Textract从报告中提取文本。使用Amazon SageMaker从提取的文本中识别PHI。
C. 使用Amazon Textract从报告中提取文本。使用Amazon Comprehend Medical从提取的文本中识别PHI。
D. 使用Amazon Rekognition从报告中提取文本。使用Amazon Comprehend Medical从提取的文本中识别PHI。


## Q66
A company has an application that generates a large number of files, each approximately 5 MB in size. The files are stored in Amazon S3. Company policy requires the files to be stored for 4 years before they can be deleted. Immediate accessibility is always required as the files contain critical business data that is not easy to reproduce. The files are frequently accessed in the first 30 days of the object creation but are rarely accessed after the first 30 days.
Which storage solution is MOST cost-effective?

A. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Glacier 30 days from object creation. Delete the files 4 years after object creation.
B. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 One Zone-Infrequent Access (S3 One Zone-IA) 30 days from object creation. Delete the files 4 years after object creation.
C. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Delete the files 4 years after object creation.
D. Create an S3 bucket lifecycle policy to move files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) 30 days from object creation. Move the files to S3 Glacier 4 years after object creation.

Chinese version:
一家公司有一个应用程序，生成大量文件，每个文件大约5 MB。这些文件存储在Amazon S3中。公司政策要求文件存储4年才能删除。始终需要立即访问这些文件，因为它们包含关键的业务数据，不易复制。文件在创建后的前30天内频繁访问，之后很少访问。
哪种存储解决方案最具成本效益？

A. 创建一个S3桶生命周期策略，将文件从S3标准移动到S3 Glacier 30天从对象创建之日起。删除文件4年后的对象创建。
B. 创建一个S3桶生命周期策略，将文件从S3标准移动到S3 One Zone-Infrequent Access（S3 One Zone-IA）30天从对象创建之日起。删除文件4年后的对象创建。
C. 创建一个S3桶生命周期策略，将文件从S3标准移动到S3 Standard-Infrequent Access（S3 Standard-IA）30天从对象创建之日起。删除文件4年后的对象创建。
D. 创建一个S3桶生命周期策略，将文件从S3标准移动到S3 Standard-Infrequent Access（S3 Standard-IA）30天从对象创建之日起。将文件移动到S3 Glacier 4年后的对象创建。

## Q67
A company hosts an application on multiple Amazon EC2 instances. The application processes messages from an Amazon SQS queue, writes to an Amazon RDS table, and deletes the message from the queue. Occasional duplicate records are found in the RDS table. The SQS queue does not contain any duplicate messages.
What should a solutions architect do to ensure messages are being processed once only?

A. Use the CreateQueue API call to create a new queue.
B. Use the AddPermission API call to add appropriate permissions.
C. Use the ReceiveMessage API call to set an appropriate wait time.
D. Use the ChangeMessageVisibility API call to increase the visibility timeout.

Chinese version:
一家公司在其多个Amazon EC2实例上托管了一个应用程序。该应用程序从Amazon SQS队列中处理消息，写入Amazon RDS表，并从队列中删除消息。偶尔会在RDS表中找到重复记录。SQS队列中不包含任何重复消息。
解决方案架构师应该怎么做才能确保消息只被处理一次？

A. 使用CreateQueue API调用来创建一个新队列。
B. 使用AddPermission API调用来添加适当的权限。
C. 使用ReceiveMessage API调用来设置适当的等待时间。
D. 使用ChangeMessageVisibility API调用来增加可见性超时。

## Q68
A solutions architect is designing a new hybrid architecture to extend a company's on-premises infrastructure to AWS. The company requires a highly available connection with consistent low latency to an AWS Region. The company needs to minimize costs and is willing to accept slower traffic if the primary connection fails.
What should the solutions architect do to meet these requirements?

A. Provision an AWS Direct Connect connection to a Region. Provision a VPN connection as a backup if the primary Direct Connect connection fails.
B. Provision a VPN tunnel connection to a Region for private connectivity. Provision a second VPN tunnel for private connectivity and as a backup if the primary VPN connection fails.
C. Provision an AWS Direct Connect connection to a Region. Provision a second Direct Connect connection to the same Region as a backup if the primary Direct Connect connection fails.
D. Provision an AWS Direct Connect connection to a Region. Use the Direct Connect failover attribute from the AWS CLI to automatically create a backup connection if the primary Direct Connect connection fails.

Chinese version:
解决方案架构师正在设计一个新的混合架构，以将公司的本地基础设施扩展到AWS。公司需要一个具有一致低延迟的高可用连接到AWS区域。公司需要最小化成本，并愿意接受较低的流量，如果主连接失败。
解决方案架构师应该怎么做来满足这些要求？

A. 为AWS区域提供AWS Direct Connect连接。为私有连接提供VPN连接作为备份，如果主Direct Connect连接失败。
B. 为私有连接提供到AWS区域的VPN隧道连接。为私有连接提供第二个VPN隧道作为备份，如果主VPN连接失败。
C. 为AWS区域提供AWS Direct Connect连接。为相同的区域提供第二个Direct Connect连接作为备份，如果主Direct Connect连接失败。
D. 为AWS区域提供AWS Direct Connect连接。使用AWS CLI中的Direct Connect故障转移属性自动创建备份连接，如果主Direct Connect连接失败。

## Q69
A company is running a business-critical web application on Amazon EC2 instances behind an Application Load Balancer. The EC2 instances are in an Auto Scaling group. The application uses an Amazon Aurora PostgreSQL database that is deployed in a single Availability Zone. The company wants the application to be highly available with minimum downtime and minimum loss of data.
Which solution will meet these requirements with the LEAST operational effort?

A. Place the EC2 instances in different AWS Regions. Use Amazon Route 53 health checks to redirect traffic. Use Aurora PostgreSQL Cross-Region Replication.
B. Configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.
C. Configure the Auto Scaling group to use one Availability Zone. Generate hourly snapshots of the database. Recover the database from the snapshots in the event of a failure.
D. Configure the Auto Scaling group to use multiple AWS Regions. Write the data from the application to Amazon S3. Use S3 Event Notifications to launch an AWS Lambda function to write the data to the database.

Chinese version:
一家公司在其Amazon EC2实例后面运行一个关键的Web应用程序，这些实例位于一个自动扩展组中。该应用程序使用一个在单个可用区中部署的Amazon Aurora PostgreSQL数据库。公司希望应用程序具有高可用性，最小的停机时间和最小的数据丢失。
哪种解决方案在操作最少的条件下满足这些要求？

A. 将EC2实例放置在不同的AWS区域中。使用Amazon Route 53健康检查来重定向流量。使用Aurora PostgreSQL跨区域复制。
B. 配置自动扩展组以使用多个可用区。配置数据库为多可用区。为数据库配置一个Amazon RDS代理实例。
C. 配置自动扩展组以使用一个可用区。为数据库生成每小时快照。在发生故障时从快照中恢复数据库。
D. 配置自动扩展组以使用多个AWS区域。将应用程序的数据写入Amazon S3。使用S3事件通知启动一个AWS Lambda函数，将数据写入数据库。

## Q70

A company's HTTP application is behind a Network Load Balancer (NLB). The NLB's target group is configured to use an Amazon EC2 Auto Scaling group with multiple EC2 instances that run the web service.
The company notices that the NLB is not detecting HTTP errors for the application. These errors require a manual restart of the EC2 instances that run the web service. The company needs to improve the application's availability without writing custom scripts or code.
What should a solutions architect do to meet these requirements?

A. Enable HTTP health checks on the NLB, supplying the URL of the company's application.
B. Add a cron job to the EC2 instances to check the local application's logs once each minute. If HTTP errors are detected. the application will restart.
C. Replace the NLB with an Application Load Balancer. Enable HTTP health checks by supplying the URL of the company's application. Configure an Auto Scaling action to replace unhealthy instances.
D. Create an Amazon Cloud Watch alarm that monitors the UnhealthyHostCount metric for the NLB. Configure an Auto Scaling action to replace unhealthy instances when the alarm is in the ALARM state.

Chinese version:
一家公司的HTTP应用程序位于一个网络负载均衡器（NLB）后面。NLB的目标组配置为使用一个包含多个EC2实例的Amazon EC2自动扩展组，这些实例运行Web服务。公司注意到NLB没有检测到HTTP错误。这些错误需要手动重启运行Web服务的EC2实例。公司需要提高应用程序的可用性，而无需编写自定义脚本或代码。解决方案架构师应该怎么做来满足这些要求？

A. 在NLB上启用HTTP健康检查，提供公司应用程序的URL。
B. 向EC2实例添加一个cron作业，每分钟检查本地应用程序的日志。如果检测到HTTP错误，应用程序将重新启动。
C. 将NLB替换为应用程序负载均衡器。启用HTTP健康检查，提供公司应用程序的URL。配置自动扩展操作以替换不健康的实例。
D. 创建一个Amazon Cloud Watch警报，监控NLB的UnhealthyHostCount指标。配置自动扩展操作以替换不健康的实例，当警报处于ALARM状态时。

