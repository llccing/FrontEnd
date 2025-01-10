(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{525:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q191"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q191"}},[e._v("#")]),e._v(" Q191")]),e._v(" "),t("p",[e._v("A company has an ordering application that stores customer information in Amazon RDS for MySQL. During regular business hours, employees run one-time queries for reporting purposes. Timeouts are occurring during order processing because the reporting queries are taking a long time to run. The company needs to eliminate the timeouts without preventing employees from performing queries.")]),e._v(" "),t("p",[e._v("What should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Create a read replica. Move reporting queries to the read replica.\nB. Create a read replica. Distribute the ordering application to the primary DB instance and the read replica.\nC. Migrate the ordering application to Amazon DynamoDB with on-demand capacity.\nD. Schedule the reporting queries for non-peak hours.")]),e._v(" "),t("h2",{attrs:{id:"q192"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q192"}},[e._v("#")]),e._v(" Q192")]),e._v(" "),t("p",[e._v("A hospital wants to create digital copies for its large collection of historical written records. The hospital will continue to add hundreds of new documents each day. The hospital’s data team will scan the documents and will upload the documents to the AWS Cloud.")]),e._v(" "),t("p",[e._v("A solutions architect must implement a solution to analyze the documents, extract the medical information, and store the documents so that an application can run SQL queries on the data. The solution must maximize scalability and operational efficiency.")]),e._v(" "),t("p",[e._v("Which combination of steps should the solutions architect take to meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Write the document information to an Amazon EC2 instance that runs a MySQL database.\nB. Write the document information to an Amazon S3 bucket. Use Amazon Athena to query the data.\nC. Create an Auto Scaling group of Amazon EC2 instances to run a custom application that processes the scanned files and extracts the medical information.\nD. Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Rekognition to convert the documents to raw text. Use Amazon Transcribe Medical to detect and extract relevant medical information from the text.\nE. Create an AWS Lambda function that runs when new documents are uploaded. Use Amazon Textract to convert the documents to raw text. Use Amazon Comprehend Medical to detect and extract relevant medical information from the text.")]),e._v(" "),t("h2",{attrs:{id:"q193"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q193"}},[e._v("#")]),e._v(" Q193")]),e._v(" "),t("p",[e._v("A company is running a batch application on Amazon EC2 instances. The application consists of a backend with multiple Amazon RDS databases. The application is causing a high number of reads on the databases. A solutions architect must reduce the number of database reads while ensuring high availability.")]),e._v(" "),t("p",[e._v("What should the solutions architect do to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Add Amazon RDS read replicas.\nB. Use Amazon ElastiCache for Redis.\nC. Use Amazon Route 53 DNS caching\nD. Use Amazon ElastiCache for Memcached.")]),e._v(" "),t("h2",{attrs:{id:"q194"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q194"}},[e._v("#")]),e._v(" Q194")]),e._v(" "),t("p",[e._v("A company needs to run a critical application on AWS. The company needs to use Amazon EC2 for the application’s database. The database must be highly available and must fail over automatically if a disruptive event occurs.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Launch two EC2 instances, each in a different Availability Zone in the same AWS Region. Install the database on both EC2 instances. Configure the EC2 instances as a cluster. Set up database replication.\nB. Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use AWS CloudFormation to automate provisioning of the EC2 instance if a disruptive event occurs.\nC. Launch two EC2 instances, each in a different AWS Region. Install the database on both EC2 instances. Set up database replication. Fail over the database to a second Region.\nD. Launch an EC2 instance in an Availability Zone. Install the database on the EC2 instance. Use an Amazon Machine Image (AMI) to back up the data. Use EC2 automatic recovery to recover the instance if a disruptive event occurs.")]),e._v(" "),t("h2",{attrs:{id:"q195"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q195"}},[e._v("#")]),e._v(" Q195")]),e._v(" "),t("p",[e._v("A company’s order system sends requests from clients to Amazon EC2 instances. The EC2 instances process the orders and then store the orders in a database on Amazon RDS. Users report that they must reprocess orders when the system fails. The company wants a resilient solution that can process orders automatically if a system outage occurs.")]),e._v(" "),t("p",[e._v("What should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Move the EC2 instances into an Auto Scaling group. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to target an Amazon Elastic Container Service (Amazon ECS) task.\nB. Move the EC2 instances into an Auto Scaling group behind an Application Load Balancer (ALB). Update the order system to send messages to the ALB endpoint.\nC. Move the EC2 instances into an Auto Scaling group. Configure the order system to send messages to an Amazon Simple Queue Service (Amazon SQS) queue. Configure the EC2 instances to consume messages from the queue.\nD. Create an Amazon Simple Notification Service (Amazon SNS) topic. Create an AWS Lambda function, and subscribe the function to the SNS topic. Configure the order system to send messages to the SNS topic. Send a command to the EC2 instances to process the messages by using AWS Systems Manager Run Command.")]),e._v(" "),t("h2",{attrs:{id:"q196"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q196"}},[e._v("#")]),e._v(" Q196")]),e._v(" "),t("p",[e._v("A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack.\nB. Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days.\nC. Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days.\nD. Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute.")]),e._v(" "),t("h2",{attrs:{id:"q197"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q197"}},[e._v("#")]),e._v(" Q197")]),e._v(" "),t("p",[e._v("A company has a Microsoft .NET application that runs on an on-premises Windows Server. The application stores data by using an Oracle Database Standard Edition server. The company is planning a migration to AWS and wants to minimize development changes while moving the application. The AWS application environment should be highly available.")]),e._v(" "),t("p",[e._v("Which combination of actions should the company take to meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Refactor the application as serverless with AWS Lambda functions running .NET Core.\nB. Rehost the application in AWS Elastic Beanstalk with the .NET platform in a Multi-AZ deployment.\nC. Replatform the application to run on Amazon EC2 with the Amazon Linux Amazon Machine Image (AMI).\nD. Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Amazon DynamoDB in a Multi-AZ deployment.\nE. Use AWS Database Migration Service (AWS DMS) to migrate from the Oracle database to Oracle on Amazon RDS in a Multi-AZ deployment.")]),e._v(" "),t("h2",{attrs:{id:"q198"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q198"}},[e._v("#")]),e._v(" Q198")]),e._v(" "),t("p",[e._v("A company runs a containerized application on a Kubernetes cluster in an on-premises data center. The company is using a MongoDB database for data storage. The company wants to migrate some of these environments to AWS, but no code changes or deployment method changes are possible at this time. The company needs a solution that minimizes operational overhead.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Use Amazon Elastic Container Service (Amazon ECS) with Amazon EC2 worker nodes for compute and MongoDB on EC2 for data storage.\nB. Use Amazon Elastic Container Service (Amazon ECS) with AWS Fargate for compute and Amazon DynamoDB for data storage\nC. Use Amazon Elastic Kubernetes Service (Amazon EKS) with Amazon EC2 worker nodes for compute and Amazon DynamoDB for data storage.\nD. Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.")]),e._v(" "),t("h2",{attrs:{id:"q199"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q199"}},[e._v("#")]),e._v(" Q199")]),e._v(" "),t("p",[e._v("A telemarketing company is designing its customer call center functionality on AWS. The company needs a solution that provides multiple speaker recognition and generates transcript files. The company wants to query the transcript files to analyze the business patterns. The transcript files must be stored for 7 years for auditing purposes.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use machine learning models for transcript file analysis.\nB. Use Amazon Transcribe for multiple speaker recognition. Use Amazon Athena for transcript file analysis.\nC. Use Amazon Translate for multiple speaker recognition. Store the transcript files in Amazon Redshift. Use SQL queries for transcript file analysis.\nD. Use Amazon Rekognition for multiple speaker recognition. Store the transcript files in Amazon S3. Use Amazon Textract for transcript file analysis.")]),e._v(" "),t("h2",{attrs:{id:"q200"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q200"}},[e._v("#")]),e._v(" Q200")]),e._v(" "),t("p",[e._v("A company hosts its application on AWS. The company uses Amazon Cognito to manage users. When users log in to the application, the application fetches required data from Amazon DynamoDB by using a REST API that is hosted in Amazon API Gateway. The company wants an AWS managed solution that will control access to the REST API to reduce development efforts.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Configure an AWS Lambda function to be an authorizer in API Gateway to validate which user made the request.\nB. For each user, create and assign an API key that must be sent with each request. Validate the key by using an AWS Lambda function.\nC. Send the user’s email address in the header with every request. Invoke an AWS Lambda function to validate that the user with that email address has proper access.\nD. Configure an Amazon Cognito user pool authorizer in API Gateway to allow Amazon Cognito to validate each request.")])])}),[],!1,null,null,null);t.default=o.exports}}]);