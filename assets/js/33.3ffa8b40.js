(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{501:function(e,t,a){"use strict";a.r(t);var o=a(14),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q11"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q11"}},[e._v("#")]),e._v(" Q11")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Option A: Using AWS Secrets Manager and enabling automatic rotation is the recommended solution for minimizing the operational overhead of credential management. AWS Secrets Manager provides a secure and centralized service for storing and managing secrets, such as database credentials. By leveraging Secrets Manager, the application can retrieve the database credentials programmatically at runtime, eliminating the need to store them locally in a file. Enabling automatic rotation ensures that the database credentials are regularly rotated without manual intervention, enhancing security and compliance.")]),e._v(" "),t("p",[e._v("Option B, using AWS Systems Manager Parameter Store and turning on automatic rotation, would not be suitable for storing secrets, such as database credentials, as it is intended for storing system parameters.")]),e._v(" "),t("p",[e._v("Option C, creating an S3 bucket to store objects that are encrypted with an AWS KMS encryption key and migrating the credential file to the S3 bucket, would not provide automatic rotation of the secrets.")]),e._v(" "),t("p",[e._v("Option D, creating an encrypted EBS volume and migrating the credential file to the new EBS volume, would not provide automatic rotation of the secrets.")]),e._v(" "),t("h2",{attrs:{id:"q12"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q12"}},[e._v("#")]),e._v(" Q12")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Keywords:")]),e._v(" "),t("ul",[t("li",[e._v("The web application has static data and dynamic data. Static data in an Amazon S3 bucket.")]),e._v(" "),t("li",[e._v("Improve performance and reduce latency for the static data and dynamic data.")]),e._v(" "),t("li",[e._v("The company is using its own domain name registered with Amazon Route 53.\nA: Correct - CloudFront has the Edge location and the cache for dynamic and static\nB: Incorrect - AWS Global Accelerator don't have cache function, so static file need to be load directly from S3 every time.")]),e._v(" "),t("li",[e._v("Beside that we configure CloudFront -> ALB, Accelerator -> S3, Route 53 -> CloudFront. It means that all the traffic go to CloudFront only, Acclerator don't have any traffic.\nC: Incorrect - Global Accelerator can configure CloudFront as the endpoint.\nD: Incorrect - We already have domain name. Why will we use new domain name? Will we change to new domain name? How everyone know you new domain name?")])]),e._v(" "),t("h2",{attrs:{id:"q13"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q13"}},[e._v("#")]),e._v(" Q13")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Keywords:")]),e._v(" "),t("ul",[t("li",[e._v("rotate the credentials for its Amazon RDS for MySQL databases across multiple AWS Regions")]),e._v(" "),t("li",[e._v("LEAST operational overhead")])]),e._v(" "),t("p",[e._v("A: Correct - AWS Secrets Manager supports")]),e._v(" "),t("ul",[t("li",[e._v("Encrypt credential for RDS, DocumentDb, Redshift, other DBs and key/value secret.")]),e._v(" "),t("li",[e._v("multi-region replication.")]),e._v(" "),t("li",[e._v("Remote base on schedule\nB: Incorrect - Secure string parameter only apply for Parameter Store. All the data in AWS Secrets Manager is encrypted\nC: Incorrect - don't mention about replicate S3 across region.\nD: Incorrect - So many steps compare to answer A =))")])]),e._v(" "),t("h2",{attrs:{id:"q14"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q14"}},[e._v("#")]),e._v(" Q14")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Option C, using Amazon Aurora with a Multi-AZ deployment and configuring Aurora Auto Scaling with Aurora Replicas, would be the best solution to meet the requirements.")]),e._v(" "),t("p",[e._v("Aurora is a fully managed, MySQL-compatible relational database that is designed for high performance and high availability. Aurora Multi-AZ deployments automatically maintain a synchronous standby replica in a different Availability Zone to provide high availability. Additionally, Aurora Auto Scaling allows you to automatically scale the number of Aurora Replicas in response to read workloads, allowing you to meet the demand of unpredictable read workloads while maintaining high availability. This would provide an automated solution for scaling the database to meet the demand of the application while maintaining high availability.")]),e._v(" "),t("h2",{attrs:{id:"q15"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q15"}},[e._v("#")]),e._v(" Q15")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("I would recommend option C: Use AWS Network Firewall to create the required rules for traffic inspection and traffic filtering for the production VPC.")]),e._v(" "),t("p",[e._v("AWS Network Firewall is a managed firewall service that provides filtering for both inbound and outbound network traffic. It allows you to create rules for traffic inspection and filtering, which can help protect your production VPC.")]),e._v(" "),t("p",[e._v("Option A: Amazon GuardDuty is a threat detection service, not a traffic inspection or filtering service.")]),e._v(" "),t("p",[e._v("Option B: Traffic Mirroring is a feature that allows you to replicate and send a copy of network traffic from a VPC to another VPC or on-premises location. It is not a service that performs traffic inspection or filtering.")]),e._v(" "),t("p",[e._v("Option D: AWS Firewall Manager is a security management service that helps you to centrally configure and manage firewalls across your accounts. It is not a service that performs traffic inspection or filtering.")]),e._v(" "),t("h2",{attrs:{id:"q16"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q16"}},[e._v("#")]),e._v(" Q16")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Keywords:")]),e._v(" "),t("ul",[t("li",[e._v("Data lake on AWS.")]),e._v(" "),t("li",[e._v("Consists of data in Amazon S3 and Amazon RDS for PostgreSQL.")]),e._v(" "),t("li",[e._v("The company needs a reporting solution that provides data VISUALIZATION and includes ALL the data sources within the data lake.")])]),e._v(" "),t("p",[e._v("A - Incorrect: Amazon QuickSight only support users(standard version) and groups (enterprise version). users and groups only exists without QuickSight. QuickSight don't support IAM. We use users and groups to view the QuickSight dashboard\nB - Correct: as explained in answer A and QuickSight is used to created dashboard from S3, RDS, Redshift, Aurora, Athena, OpenSearch, Timestream\nC - Incorrect: This way don't support visulization and don't mention how to process RDS data\nD - Incorrect: This way don't support visulization and don't mention how to combine data RDS and S3")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("The question requires a solution for data visualization, which means it focuses solely on downstream consumption. Therefore, any solution that includes upstream processing is off the table (C & D). This leaves us with two options: A and B. Essentially, they are the same with one key difference: A manages access through IAM Roles, while B manages it through an IAM group. Since only the management team is granted permission, using a group will be more efficient, as it scales better with changes in personnel and provides a centralized point for managing permissions.")]),e._v(" "),t("h2",{attrs:{id:"q17"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q17"}},[e._v("#")]),e._v(" Q17")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Always remember that you should associate IAM roles to EC2 instances.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("The correct option to meet this requirement is A: Create an IAM role that grants access to the S3 bucket and attach the role to the EC2 instances.")]),e._v(" "),t("p",[e._v("An IAM role is an AWS resource that allows you to delegate access to AWS resources and services. You can create an IAM role that grants access to the S3 bucket and then attach the role to the EC2 instances. This will allow the EC2 instances to access the S3 bucket and the documents stored within it.")]),e._v(" "),t("p",[e._v("Option B is incorrect because an IAM policy is used to define permissions for an IAM user or group, not for an EC2 instance.")]),e._v(" "),t("p",[e._v("Option C is incorrect because an IAM group is used to group together IAM users and policies, not to grant access to resources.")]),e._v(" "),t("p",[e._v("Option D is incorrect because an IAM user is used to represent a person or service that interacts with AWS resources, not to grant access to resources.")]),e._v(" "),t("h2",{attrs:{id:"q18"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q18"}},[e._v("#")]),e._v(" Q18")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A, B")]),e._v(" "),t("p",[e._v("To design a solution that uses durable, stateless components to process images automatically, a solutions architect could consider the following actions:")]),e._v(" "),t("p",[e._v("Option A involves creating an SQS queue and configuring the S3 bucket to send a notification to the queue when an image is uploaded. This allows the application to decouple the image upload process from the image processing process and ensures that the image processing process is triggered automatically when a new image is uploaded.")]),e._v(" "),t("p",[e._v("Option B involves configuring the Lambda function to use the SQS queue as the invocation source. When the SQS message is successfully processed, the message is deleted from the queue. This ensures that the Lambda function is invoked only once per image and that the image is not processed multiple times.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Option C is incorrect because it involves storing state (the file name) in memory, which is not a durable or scalable solution.")]),e._v(" "),t("p",[e._v("Option D is incorrect because it involves launching an EC2 instance to monitor the SQS queue, which is not a stateless solution.")]),e._v(" "),t("p",[e._v("Option E is incorrect because it involves using Amazon EventBridge (formerly Amazon CloudWatch Events) to send an alert to an Amazon Simple Notification Service (Amazon SNS) topic, which is not related to the image processing process.")]),e._v(" "),t("h2",{attrs:{id:"q19"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q19"}},[e._v("#")]),e._v(" Q19")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("It's D, Coz.. Gateway Load Balancer is a new type of load balancer that operates at layer 3 of the OSI model and is built on Hyperplane, which is capable of handling several thousands of connections per second. Gateway Load Balancer endpoints are configured in spoke VPCs originating or receiving traffic from the Internet. This architecture allows you to perform inline inspection of traffic from multiple spoke VPCs in a simplified and scalable fashion while still centralizing your virtual appliances.")]),e._v(" "),t("p",[e._v("Keywords:Third-party virtual firewall appliance from AWS Marketplace in an inspection VPC -> only Gateway Load Balancer support it")]),e._v(" "),t("p",[e._v("A: Incorrect - Network Load Balancer don't support to route traffic to third-party virtual firewall appliance.\nB: Incorrect - Application Load Balancer don't support to route traffic to third-party virtual firewall appliance.\nC: Incorrect - Transit Gateway is use as connect center to connect all VPC, Direct Connect Gateway and VPN Connection. Routes Tables in Trasit Gateway only limit which VPC can talk to other VPCs.\nD: Correct - Gateway Load Balancer support route traffic to third-party virtual firewall appliance in layer 3 that make it different from ALB and NLB.")]),e._v(" "),t("h2",{attrs:{id:"q20"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q20"}},[e._v("#")]),e._v(" Q20")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/ebs/latest/userguide/ebs-fast-snapshot-restore.html\nAmazon EBS fast snapshot restore (FSR) enables you to create a volume from a snapshot that is fully initialized at creation. This eliminates the latency of I/O operations on a block when it is accessed for the first time. Volumes that are created using fast snapshot restore instantly deliver all of their provisioned performance.")])])}),[],!1,null,null,null);t.default=n.exports}}]);