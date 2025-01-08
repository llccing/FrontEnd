(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{509:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q111"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q111"}},[e._v("#")]),e._v(" Q111")]),e._v(" "),t("p",[e._v("A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity.\nWhich architecture offers the HIGHEST availability?")]),e._v(" "),t("p",[e._v("A. Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.\nB. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone.\nC. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled.\nD. Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled.")]),e._v(" "),t("h2",{attrs:{id:"q112"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q112"}},[e._v("#")]),e._v(" Q112")]),e._v(" "),t("p",[e._v("A company hosts a containerized web application on a fleet of on-premises servers that process incoming requests. The number of requests is growing quickly. The on-premises servers cannot handle the increased number of requests. The company wants to move the application to AWS with minimum code changes and minimum development effort.\nWhich solution will meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Use AWS Fargate on Amazon Elastic Container Service (Amazon ECS) to run the containerized web application with Service Auto Scaling. Use an Application Load Balancer to distribute the incoming requests.\nB. Use two Amazon EC2 instances to host the containerized web application. Use an Application Load Balancer to distribute the incoming requests.\nC. Use AWS Lambda with a new code that uses one of the supported languages. Create multiple Lambda functions to support the load. Use Amazon API Gateway as an entry point to the Lambda functions.\nD. Use a high performance computing (HPC) solution such as AWS ParallelCluster to establish an HPC cluster that can process the incoming requests at the appropriate scale.")]),e._v(" "),t("h2",{attrs:{id:"q113"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q113"}},[e._v("#")]),e._v(" Q113")]),e._v(" "),t("p",[e._v("A company uses 50 TB of data for reporting. The company wants to move this data from on premises to AWS. A custom application in the company’s data center runs a weekly data transformation job. The company plans to pause the application until the data transfer is complete and needs to begin the transfer process as soon as possible.\nThe data center does not have any available network bandwidth for additional workloads. A solutions architect must transfer the data and must configure the transformation job to continue to run in the AWS Cloud.\nWhich solution will meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue.\nB. Order an AWS Snowcone device to move the data. Deploy the transformation application to the device.\nC. Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue.\nD. Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application.")]),e._v(" "),t("h2",{attrs:{id:"q114"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q114"}},[e._v("#")]),e._v(" Q114")]),e._v(" "),t("p",[e._v("A company has created an image analysis application in which users can upload photos and add photo frames to their images. The users upload images and metadata to indicate which photo frames they want to add to their images. The application uses a single Amazon EC2 instance and Amazon DynamoDB to store the metadata.\nThe application is becoming more popular, and the number of users is increasing. The company expects the number of concurrent users to vary significantly depending on the time of day and day of week. The company must ensure that the application can scale to meet the needs of the growing user base.\nWhich solution meats these requirements?")]),e._v(" "),t("p",[e._v("A. Use AWS Lambda to process the photos. Store the photos and metadata in DynamoDB.\nB. Use Amazon Kinesis Data Firehose to process the photos and to store the photos and metadata.\nC. Use AWS Lambda to process the photos. Store the photos in Amazon S3. Retain DynamoDB to store the metadata.\nD. Increase the number of EC2 instances to three. Use Provisioned IOPS SSD (io2) Amazon Elastic Block Store (Amazon EBS) volumes to store the photos and metadata.")]),e._v(" "),t("h2",{attrs:{id:"q115"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q115"}},[e._v("#")]),e._v(" Q115")]),e._v(" "),t("p",[e._v("A medical records company is hosting an application on Amazon EC2 instances. The application processes customer data files that are stored on Amazon S3. The EC2 instances are hosted in public subnets. The EC2 instances access Amazon S3 over the internet, but they do not require any other network access.\nA new requirement mandates that the network traffic for file transfers take a private route and not be sent over the internet.\nWhich change to the network architecture should a solutions architect recommend to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Create a NAT gateway. Configure the route table for the public subnets to send traffic to Amazon S3 through the NAT gateway.\nB. Configure the security group for the EC2 instances to restrict outbound traffic so that only traffic to the S3 prefix list is permitted.\nC. Move the EC2 instances to private subnets. Create a VPC endpoint for Amazon S3, and link the endpoint to the route table for the private subnets.\nD. Remove the internet gateway from the VPC. Set up an AWS Direct Connect connection, and route traffic to Amazon S3 over the Direct Connect connection.")]),e._v(" "),t("h2",{attrs:{id:"q116"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q116"}},[e._v("#")]),e._v(" Q116")]),e._v(" "),t("p",[e._v("A company uses a popular content management system (CMS) for its corporate website. However, the required patching and maintenance are burdensome. The company is redesigning its website and wants anew solution. The website will be updated four times a year and does not need to have any dynamic content available. The solution must provide high scalability and enhanced security.\nWhich combination of changes will meet these requirements with the LEAST operational overhead? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Configure Amazon CloudFront in front of the website to use HTTPS functionality.\nB. Deploy an AWS WAF web ACL in front of the website to provide HTTPS functionality.\nC. Create and deploy an AWS Lambda function to manage and serve the website content.\nD. Create the new website and an Amazon S3 bucket. Deploy the website on the S3 bucket with static website hosting enabled.\nE. Create the new website. Deploy the website by using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer.")]),e._v(" "),t("h2",{attrs:{id:"q117"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q117"}},[e._v("#")]),e._v(" Q117")]),e._v(" "),t("p",[e._v("A company stores its application logs in an Amazon CloudWatch Logs log group. A new policy requires the company to store all application logs in Amazon OpenSearch Service (Amazon Elasticsearch Service) in near-real time.\nWhich solution will meet this requirement with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Configure a CloudWatch Logs subscription to stream the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).\nB. Create an AWS Lambda function. Use the log group to invoke the function to write the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).\nC. Create an Amazon Kinesis Data Firehose delivery stream. Configure the log group as the delivery streams sources. Configure Amazon OpenSearch Service (Amazon Elasticsearch Service) as the delivery stream's destination.\nD. Install and configure Amazon Kinesis Agent on each application server to deliver the logs to Amazon Kinesis Data Streams. Configure Kinesis Data Streams to deliver the logs to Amazon OpenSearch Service (Amazon Elasticsearch Service).")]),e._v(" "),t("h2",{attrs:{id:"q118"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q118"}},[e._v("#")]),e._v(" Q118")]),e._v(" "),t("p",[e._v("A company is building a web-based application running on Amazon EC2 instances in multiple Availability Zones. The web application will provide access to a repository of text documents totaling about 900 TB in size. The company anticipates that the web application will experience periods of high demand. A solutions architect must ensure that the storage component for the text documents can scale to meet the demand of the application at all times. The company is concerned about the overall cost of the solution.\nWhich storage solution meets these requirements MOST cost-effectively?")]),e._v(" "),t("p",[e._v("A. Amazon Elastic Block Store (Amazon EBS)\nB. Amazon Elastic File System (Amazon EFS)\nC. Amazon OpenSearch Service (Amazon Elasticsearch Service)\nD. Amazon S3")]),e._v(" "),t("h2",{attrs:{id:"q119"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q119"}},[e._v("#")]),e._v(" Q119")]),e._v(" "),t("p",[e._v("A global company is using Amazon API Gateway to design REST APIs for its loyalty club users in the us-east-1 Region and the ap-southeast-2 Region. A solutions architect must design a solution to protect these API Gateway managed REST APIs across multiple accounts from SQL injection and cross-site scripting attacks.\nWhich solution will meet these requirements with the LEAST amount of administrative effort?")]),e._v(" "),t("p",[e._v("A. Set up AWS WAF in both Regions. Associate Regional web ACLs with an API stage.\nB. Set up AWS Firewall Manager in both Regions. Centrally configure AWS WAF rules.\nC. Set up AWS Shield in both Regions. Associate Regional web ACLs with an API stage.\nD. Set up AWS Shield in one of the Regions. Associate Regional web ACLs with an API stage.")]),e._v(" "),t("h2",{attrs:{id:"q120"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q120"}},[e._v("#")]),e._v(" Q120")]),e._v(" "),t("p",[e._v("A company has implemented a self-managed DNS solution on three Amazon EC2 instances behind a Network Load Balancer (NLB) in the us-west-2 Region. Most of the company's users are located in the United States and Europe. The company wants to improve the performance and availability of the solution. The company launches and configures three EC2 instances in the eu-west-1 Region and adds the EC2 instances as targets for a new NLB.\nWhich solution can the company use to route traffic to all the EC2 instances?")]),e._v(" "),t("p",[e._v("A. Create an Amazon Route 53 geolocation routing policy to route requests to one of the two NLBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.\nB. Create a standard accelerator in AWS Global Accelerator. Create endpoint groups in us-west-2 and eu-west-1. Add the two NLBs as endpoints for the endpoint groups.\nC. Attach Elastic IP addresses to the six EC2 instances. Create an Amazon Route 53 geolocation routing policy to route requests to one of the six EC2 instances. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution's origin.\nD. Replace the two NLBs with two Application Load Balancers (ALBs). Create an Amazon Route 53 latency routing policy to route requests to one of the two ALBs. Create an Amazon CloudFront distribution. Use the Route 53 record as the distribution’s origin.")])])}),[],!1,null,null,null);t.default=o.exports}}]);