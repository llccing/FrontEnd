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
