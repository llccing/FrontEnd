(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{514:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q131"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q131"}},[e._v("#")]),e._v(" Q131")]),e._v(" "),t("p",[e._v("A company is developing a file-sharing application that will use an Amazon S3 bucket for storage. The company wants to serve all the files through an Amazon CloudFront distribution. The company does not want the files to be accessible through direct navigation to the S3 URL.\nWhat should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Write individual policies for each S3 bucket to grant read permission for only CloudFront access.\nB. Create an IAM user. Grant the user read permission to objects in the S3 bucket. Assign the user to CloudFront.\nC. Write an S3 bucket policy that assigns the CloudFront distribution ID as the Principal and assigns the target S3 bucket as the Amazon Resource Name (ARN).\nD. Create an origin access identity (OAI). Assign the OAI to the CloudFront distribution. Configure the S3 bucket permissions so that only the OAI has read permission.")]),e._v(" "),t("h2",{attrs:{id:"q132"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q132"}},[e._v("#")]),e._v(" Q132")]),e._v(" "),t("p",[e._v("A company’s website provides users with downloadable historical performance reports. The website needs a solution that will scale to meet the company’s website demands globally. The solution should be cost-effective, limit the provisioning of infrastructure resources, and provide the fastest possible response time.\nWhich combination should a solutions architect recommend to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Amazon CloudFront and Amazon S3\nB. AWS Lambda and Amazon DynamoDB\nC. Application Load Balancer with Amazon EC2 Auto Scaling\nD. Amazon Route 53 with internal Application Load Balancers")]),e._v(" "),t("h2",{attrs:{id:"q133"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q133"}},[e._v("#")]),e._v(" Q133")]),e._v(" "),t("p",[e._v("A company runs an Oracle database on premises. As part of the company’s migration to AWS, the company wants to upgrade the database to the most recent available version. The company also wants to set up disaster recovery (DR) for the database. The company needs to minimize the operational overhead for normal operations and DR setup. The company also needs to maintain access to the database's underlying operating system.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Migrate the Oracle database to an Amazon EC2 instance. Set up database replication to a different AWS Region.\nB. Migrate the Oracle database to Amazon RDS for Oracle. Activate Cross-Region automated backups to replicate the snapshots to another AWS Region.\nC. Migrate the Oracle database to Amazon RDS Custom for Oracle. Create a read replica for the database in another AWS Region.\nD. Migrate the Oracle database to Amazon RDS for Oracle. Create a standby database in another Availability Zone.")]),e._v(" "),t("h2",{attrs:{id:"q134"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q134"}},[e._v("#")]),e._v(" Q134")]),e._v(" "),t("p",[e._v("A company wants to move its application to a serverless solution. The serverless solution needs to analyze existing and new data by using SQL. The company stores the data in an Amazon S3 bucket. The data requires encryption and must be replicated to a different AWS Region.\nWhich solution will meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region kays (SSE-KMS). Use Amazon Athena to query the data.\nB. Create a new S3 bucket. Load the data into the new S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with AWS KMS multi-Region keys (SSE-KMS). Use Amazon RDS to query the data.\nC. Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon Athena to query the data.\nD. Load the data into the existing S3 bucket. Use S3 Cross-Region Replication (CRR) to replicate encrypted objects to an S3 bucket in another Region. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Use Amazon RDS to query the data.")]),e._v(" "),t("h2",{attrs:{id:"q135"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q135"}},[e._v("#")]),e._v(" Q135")]),e._v(" "),t("p",[e._v("A company runs workloads on AWS. The company needs to connect to a service from an external provider. The service is hosted in the provider's VPC. According to the company’s security team, the connectivity must be private and must be restricted to the target service. The connection must be initiated only from the company’s VPC.\nWhich solution will mast these requirements?")]),e._v(" "),t("p",[e._v("A. Create a VPC peering connection between the company's VPC and the provider's VPC. Update the route table to connect to the target service.\nB. Ask the provider to create a virtual private gateway in its VPC. Use AWS PrivateLink to connect to the target service.\nC. Create a NAT gateway in a public subnet of the company’s VPC. Update the route table to connect to the target service.\nD. Ask the provider to create a VPC endpoint for the target service. Use AWS PrivateLink to connect to the target service.")]),e._v(" "),t("h2",{attrs:{id:"q136"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q136"}},[e._v("#")]),e._v(" Q136")]),e._v(" "),t("p",[e._v("A company is migrating its on-premises PostgreSQL database to Amazon Aurora PostgreSQL. The on-premises database must remain online and accessible during the migration. The Aurora database must remain synchronized with the on-premises database.\nWhich combination of actions must a solutions architect take to meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Create an ongoing replication task.\nB. Create a database backup of the on-premises database.\nC. Create an AWS Database Migration Service (AWS DMS) replication server.\nD. Convert the database schema by using the AWS Schema Conversion Tool (AWS SCT).\nE. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to monitor the database synchronization.")]),e._v(" "),t("h2",{attrs:{id:"q137"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q137"}},[e._v("#")]),e._v(" Q137")]),e._v(" "),t("p",[e._v("A company uses AWS Organizations to create dedicated AWS accounts for each business unit to manage each business unit's account independently upon request. The root email recipient missed a notification that was sent to the root user email address of one account. The company wants to ensure that all future notifications are not missed. Future notifications must be limited to account administrators.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure the company’s email server to forward notification email messages that are sent to the AWS account root user email address to all users in the organization.\nB. Configure all AWS account root user email addresses as distribution lists that go to a few administrators who can respond to alerts. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.\nC. Configure all AWS account root user email messages to be sent to one administrator who is responsible for monitoring alerts and forwarding those alerts to the appropriate groups.\nD. Configure all existing AWS accounts and all newly created accounts to use the same root user email address. Configure AWS account alternate contacts in the AWS Organizations console or programmatically.")]),e._v(" "),t("h2",{attrs:{id:"q138"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q138"}},[e._v("#")]),e._v(" Q138")]),e._v(" "),t("p",[e._v("A company runs its ecommerce application on AWS. Every new order is published as a massage in a RabbitMQ queue that runs on an Amazon EC2 instance in a single Availability Zone. These messages are processed by a different application that runs on a separate EC2 instance. This application stores the details in a PostgreSQL database on another EC2 instance. All the EC2 instances are in the same Availability Zone.\nThe company needs to redesign its architecture to provide the highest availability with the least operational overhead.\nWhat should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Create another Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database.\nB. Migrate the queue to a redundant pair (active/standby) of RabbitMQ instances on Amazon MQ. Create a Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.\nC. Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Migrate the database to run on a Multi-AZ deployment of Amazon RDS for PostgreSQL.\nD. Create a Multi-AZ Auto Scaling group for EC2 instances that host the RabbitMQ queue. Create another Multi-AZ Auto Scaling group for EC2 instances that host the application. Create a third Multi-AZ Auto Scaling group for EC2 instances that host the PostgreSQL database")]),e._v(" "),t("h2",{attrs:{id:"q139"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q139"}},[e._v("#")]),e._v(" Q139")]),e._v(" "),t("p",[e._v("A reporting team receives files each day in an Amazon S3 bucket. The reporting team manually reviews and copies the files from this initial S3 bucket to an analysis S3 bucket each day at the same time to use with Amazon QuickSight. Additional teams are starting to send more files in larger sizes to the initial S3 bucket.\nThe reporting team wants to move the files automatically analysis S3 bucket as the files enter the initial S3 bucket. The reporting team also wants to use AWS Lambda functions to run pattern-matching code on the copied data. In addition, the reporting team wants to send the data files to a pipeline in Amazon SageMaker Pipelines.\nWhat should a solutions architect do to meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Create a Lambda function to copy the files to the analysis S3 bucket. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.\nB. Create a Lambda function to copy the files to the analysis S3 bucket. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.\nC. Configure S3 replication between the S3 buckets. Create an S3 event notification for the analysis S3 bucket. Configure Lambda and SageMaker Pipelines as destinations of the event notification. Configure s3:ObjectCreated:Put as the event type.\nD. Configure S3 replication between the S3 buckets. Configure the analysis S3 bucket to send event notifications to Amazon EventBridge (Amazon CloudWatch Events). Configure an ObjectCreated rule in EventBridge (CloudWatch Events). Configure Lambda and SageMaker Pipelines as targets for the rule.")]),e._v(" "),t("h2",{attrs:{id:"q140"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q140"}},[e._v("#")]),e._v(" Q140")]),e._v(" "),t("p",[e._v("A solutions architect needs to help a company optimize the cost of running an application on AWS. The application will use Amazon EC2 instances, AWS Fargate, and AWS Lambda for compute within the architecture.\nThe EC2 instances will run the data ingestion layer of the application. EC2 usage will be sporadic and unpredictable. Workloads that run on EC2 instances can be interrupted at any time. The application front end will run on Fargate, and Lambda will serve the API layer. The front-end utilization and API layer utilization will be predictable over the course of the next year.\nWhich combination of purchasing options will provide the MOST cost-effective solution for hosting this application? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Use Spot Instances for the data ingestion layer\nB. Use On-Demand Instances for the data ingestion layer\nC. Purchase a 1-year Compute Savings Plan for the front end and API layer.\nD. Purchase 1-year All Upfront Reserved instances for the data ingestion layer.\nE. Purchase a 1-year EC2 instance Savings Plan for the front end and API layer.")])])}),[],!1,null,null,null);t.default=o.exports}}]);