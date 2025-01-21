(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{532:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q171"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q171"}},[e._v("#")]),e._v(" Q171")]),e._v(" "),t("p",[e._v("A company provides an API to its users that automates inquiries for tax computations based on item prices. The company experiences a larger number of inquiries during the holiday season only that cause slower response times. A solutions architect needs to design a solution that is scalable and elastic.")]),e._v(" "),t("p",[e._v("What should the solutions architect do to accomplish this?")]),e._v(" "),t("p",[e._v("A. Provide an API hosted on an Amazon EC2 instance. The EC2 instance performs the required computations when the API request is made.\nB. Design a REST API using Amazon API Gateway that accepts the item names. API Gateway passes item names to AWS Lambda for tax computations.\nC. Create an Application Load Balancer that has two Amazon EC2 instances behind it. The EC2 instances will compute the tax on the received item names.\nD. Design a REST API using Amazon API Gateway that connects with an API hosted on an Amazon EC2 instance. API Gateway accepts and passes the item names to the EC2 instance for tax computations.")]),e._v(" "),t("h2",{attrs:{id:"q172"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q172"}},[e._v("#")]),e._v(" Q172")]),e._v(" "),t("p",[e._v("A solutions architect is creating a new Amazon CloudFront distribution for an application. Some of the information submitted by users is sensitive. The application uses HTTPS but needs another layer of security. The sensitive information should.be protected throughout the entire application stack, and access to the information should be restricted to certain applications.")]),e._v(" "),t("p",[e._v("Which action should the solutions architect take?")]),e._v(" "),t("p",[e._v("A. Configure a CloudFront signed URL.\nB. Configure a CloudFront signed cookie.\nC. Configure a CloudFront field-level encryption profile.\nD. Configure CloudFront and set the Origin Protocol Policy setting to HTTPS Only for the Viewer Protocol Policy.")]),e._v(" "),t("h2",{attrs:{id:"q173"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q173"}},[e._v("#")]),e._v(" Q173")]),e._v(" "),t("p",[e._v("A gaming company hosts a browser-based application on AWS. The users of the application consume a large number of videos and images that are stored in Amazon S3. This content is the same for all users.")]),e._v(" "),t("p",[e._v("The application has increased in popularity, and millions of users worldwide accessing these media files. The company wants to provide the files to the users while reducing the load on the origin.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements MOST cost-effectively?")]),e._v(" "),t("p",[e._v("A. Deploy an AWS Global Accelerator accelerator in front of the web servers.\nB. Deploy an Amazon CloudFront web distribution in front of the S3 bucket.\nC. Deploy an Amazon ElastiCache for Redis instance in front of the web servers.\nD. Deploy an Amazon ElastiCache for Memcached instance in front of the web servers.")]),e._v(" "),t("h2",{attrs:{id:"q174"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q174"}},[e._v("#")]),e._v(" Q174")]),e._v(" "),t("p",[e._v("A company has a multi-tier application that runs six front-end web servers in an Amazon EC2 Auto Scaling group in a single Availability Zone behind an Application Load Balancer (ALB). A solutions architect needs to modify the infrastructure to be highly available without modifying the application.")]),e._v(" "),t("p",[e._v("Which architecture should the solutions architect choose that provides high availability?")]),e._v(" "),t("p",[e._v("A. Create an Auto Scaling group that uses three instances across each of two Regions.\nB. Modify the Auto Scaling group to use three instances across each of two Availability Zones.\nC. Create an Auto Scaling template that can be used to quickly create more instances in another Region.\nD. Change the ALB in front of the Amazon EC2 instances in a round-robin configuration to balance traffic to the web tier.")]),e._v(" "),t("h2",{attrs:{id:"q175"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q175"}},[e._v("#")]),e._v(" Q175")]),e._v(" "),t("p",[e._v("An ecommerce company has an order-processing application that uses Amazon API Gateway and an AWS Lambda function. The application stores data in an Amazon Aurora PostgreSQL database. During a recent sales event, a sudden surge in customer orders occurred. Some customers experienced timeouts, and the application did not process the orders of those customers.")]),e._v(" "),t("p",[e._v("A solutions architect determined that the CPU utilization and memory utilization were high on the database because of a large number of open connections. The solutions architect needs to prevent the timeout errors while making the least possible changes to the application.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure provisioned concurrency for the Lambda function. Modify the database to be a global database in multiple AWS Regions.\nB. Use Amazon RDS Proxy to create a proxy for the database. Modify the Lambda function to use the RDS Proxy endpoint instead of the database endpoint.\nC. Create a read replica for the database in a different AWS Region. Use query string parameters in API Gateway to route traffic to the read replica.\nD. Migrate the data from Aurora PostgreSQL to Amazon DynamoDB by using AWS Database Migration Service (AWS DMS). Modify the Lambda function to use the DynamoDB table.")]),e._v(" "),t("h2",{attrs:{id:"q176"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q176"}},[e._v("#")]),e._v(" Q176")]),e._v(" "),t("p",[e._v("An application runs on Amazon EC2 instances in private subnets. The application needs to access an Amazon DynamoDB table.")]),e._v(" "),t("p",[e._v("What is the MOST secure way to access the table while ensuring that the traffic does not leave the AWS network?")]),e._v(" "),t("p",[e._v("A. Use a VPC endpoint for DynamoDB.\nB. Use a NAT gateway in a public subnet.\nC. Use a NAT instance in a private subnet.\nD. Use the internet gateway attached to the VPC.")]),e._v(" "),t("h2",{attrs:{id:"q177"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q177"}},[e._v("#")]),e._v(" Q177")]),e._v(" "),t("p",[e._v("An entertainment company is using Amazon DynamoDB to store media metadata. The application is read intensive and experiencing delays. The company does not have staff to handle additional operational overhead and needs to improve the performance efficiency of DynamoDB without reconfiguring the application.")]),e._v(" "),t("p",[e._v("What should a solutions architect recommend to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Use Amazon ElastiCache for Redis.\nB. Use Amazon DynamoDB Accelerator (DAX).\nC. Replicate data by using DynamoDB global tables.\nD. Use Amazon ElastiCache for Memcached with Auto Discovery enabled.")]),e._v(" "),t("h2",{attrs:{id:"q178"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q178"}},[e._v("#")]),e._v(" Q178")]),e._v(" "),t("p",[e._v("A company’s infrastructure consists of Amazon EC2 instances and an Amazon RDS DB instance in a single AWS Region. The company wants to back up its data in a separate Region.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Use AWS Backup to copy EC2 backups and RDS backups to the separate Region.\nB. Use Amazon Data Lifecycle Manager (Amazon DLM) to copy EC2 backups and RDS backups to the separate Region.\nC. Create Amazon Machine Images (AMIs) of the EC2 instances. Copy the AMIs to the separate Region. Create a read replica for the RDS DB instance in the separate Region.\nD. Create Amazon Elastic Block Store (Amazon EBS) snapshots. Copy the EBS snapshots to the separate Region. Create RDS snapshots. Export the RDS snapshots to Amazon S3. Configure S3 Cross-Region Replication (CRR) to the separate Region.")]),e._v(" "),t("h2",{attrs:{id:"q179"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q179"}},[e._v("#")]),e._v(" Q179")]),e._v(" "),t("p",[e._v("A solutions architect needs to securely store a database user name and password that an application uses to access an Amazon RDS DB instance. The application that accesses the database runs on an Amazon EC2 instance. The solutions architect wants to create a secure parameter in AWS Systems Manager Parameter Store.")]),e._v(" "),t("p",[e._v("What should the solutions architect do to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Create an IAM role that has read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM role to the EC2 instance.\nB. Create an IAM policy that allows read access to the Parameter Store parameter. Allow Decrypt access to an AWS Key Management Service (AWS KMS) key that is used to encrypt the parameter. Assign this IAM policy to the EC2 instance.\nC. Create an IAM trust relationship between the Parameter Store parameter and the EC2 instance. Specify Amazon RDS as a principal in the trust policy.\nD. Create an IAM trust relationship between the DB instance and the EC2 instance. Specify Systems Manager as a principal in the trust policy.")]),e._v(" "),t("h2",{attrs:{id:"q180"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q180"}},[e._v("#")]),e._v(" Q180")]),e._v(" "),t("p",[e._v("A company is designing a cloud communications platform that is driven by APIs. The application is hosted on Amazon EC2 instances behind a Network Load Balancer (NLB). The company uses Amazon API Gateway to provide external users with access to the application through APIs. The company wants to protect the platform against web exploits like SQL injection and also wants to detect and mitigate large, sophisticated DDoS attacks.")]),e._v(" "),t("p",[e._v("Which combination of solutions provides the MOST protection? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Use AWS WAF to protect the NLB.\nB. Use AWS Shield Advanced with the NLB.\nC. Use AWS WAF to protect Amazon API Gateway.\nD. Use Amazon GuardDuty with AWS Shield Standard\nE. Use AWS Shield Standard with Amazon API Gateway.")])])}),[],!1,null,null,null);t.default=o.exports}}]);