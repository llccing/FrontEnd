(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{528:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q181"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q181"}},[e._v("#")]),e._v(" Q181")]),e._v(" "),t("p",[e._v("A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances.")]),e._v(" "),t("p",[e._v("The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).")]),e._v(" "),t("p",[e._v("What should a solutions architect recommend for communication between the microservices?")]),e._v(" "),t("p",[e._v("A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.\nB. Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.\nC. Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.\nD. Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.")]),e._v(" "),t("h2",{attrs:{id:"q182"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q182"}},[e._v("#")]),e._v(" Q182")]),e._v(" "),t("p",[e._v("A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.\nB. Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.\nC. Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.\nD. Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.")]),e._v(" "),t("h2",{attrs:{id:"q183"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q183"}},[e._v("#")]),e._v(" Q183")]),e._v(" "),t("p",[e._v("A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.\nB. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.\nC. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.\nD. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.")]),e._v(" "),t("h2",{attrs:{id:"q184"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q184"}},[e._v("#")]),e._v(" Q184")]),e._v(" "),t("p",[e._v("A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway.")]),e._v(" "),t("p",[e._v("A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure the Lambda function to run in the VPC with the appropriate security group.\nB. Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.\nC. Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.\nD. Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.")]),e._v(" "),t("h2",{attrs:{id:"q185"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q185"}},[e._v("#")]),e._v(" Q185")]),e._v(" "),t("p",[e._v("A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.")]),e._v(" "),t("p",[e._v("How can a solutions architect ensure that the application has permission to access Amazon S3?")]),e._v(" "),t("p",[e._v("A. Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.\nB. Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.\nC. Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.\nD. Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.")]),e._v(" "),t("h2",{attrs:{id:"q186"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q186"}},[e._v("#")]),e._v(" Q186")]),e._v(" "),t("p",[e._v("A company has a Windows-based application that must be migrated to AWS. The application requires the use of a shared Windows file system attached to multiple Amazon EC2 Windows instances that are deployed across multiple Availability Zone:")]),e._v(" "),t("p",[e._v("What should a solutions architect do to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Configure AWS Storage Gateway in volume gateway mode. Mount the volume to each Windows instance.\nB. Configure Amazon FSx for Windows File Server. Mount the Amazon FSx file system to each Windows instance.\nC. Configure a file system by using Amazon Elastic File System (Amazon EFS). Mount the EFS file system to each Windows instance.\nD. Configure an Amazon Elastic Block Store (Amazon EBS) volume with the required size. Attach each EC2 instance to the volume. Mount the file system within the volume to each Windows instance.")]),e._v(" "),t("h2",{attrs:{id:"q187"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q187"}},[e._v("#")]),e._v(" Q187")]),e._v(" "),t("p",[e._v("A company is developing an ecommerce application that will consist of a load-balanced front end, a container-based application, and a relational database. A solutions architect needs to create a highly available solution that operates with as little manual intervention as possible.")]),e._v(" "),t("p",[e._v("Which solutions meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Create an Amazon RDS DB instance in Multi-AZ mode.\nB. Create an Amazon RDS DB instance and one or more replicas in another Availability Zone.\nC. Create an Amazon EC2 instance-based Docker cluster to handle the dynamic application load.\nD. Create an Amazon Elastic Container Service (Amazon ECS) cluster with a Fargate launch type to handle the dynamic application load.\nE. Create an Amazon Elastic Container Service (Amazon ECS) cluster with an Amazon EC2 launch type to handle the dynamic application load.")]),e._v(" "),t("h2",{attrs:{id:"q188"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q188"}},[e._v("#")]),e._v(" Q188")]),e._v(" "),t("p",[e._v("A company uses Amazon S3 as its data lake. The company has a new partner that must use SFTP to upload data files. A solutions architect needs to implement a highly available SFTP solution that minimizes operational overhead.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use AWS Transfer Family to configure an SFTP-enabled server with a publicly accessible endpoint. Choose the S3 data lake as the destination.\nB. Use Amazon S3 File Gateway as an SFTP server. Expose the S3 File Gateway endpoint URL to the new partner. Share the S3 File Gateway endpoint with the new partner.\nC. Launch an Amazon EC2 instance in a private subnet in a VPInstruct the new partner to upload files to the EC2 instance by using a VPN. Run a cron job script, on the EC2 instance to upload files to the S3 data lake.\nD. Launch Amazon EC2 instances in a private subnet in a VPC. Place a Network Load Balancer (NLB) in front of the EC2 instances. Create an SFTP listener port for the NLB. Share the NLB hostname with the new partner. Run a cron job script on the EC2 instances to upload files to the S3 data lake.")]),e._v(" "),t("h2",{attrs:{id:"q189"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q189"}},[e._v("#")]),e._v(" Q189")]),e._v(" "),t("p",[e._v("A company needs to store contract documents. A contract lasts for 5 years. During the 5-year period, the company must ensure that the documents cannot be overwritten or deleted. The company needs to encrypt the documents at rest and rotate the encryption keys automatically every year.")]),e._v(" "),t("p",[e._v("Which combination of steps should a solutions architect take to meet these requirements with the LEAST operational overhead? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Store the documents in Amazon S3. Use S3 Object Lock in governance mode.\nB. Store the documents in Amazon S3. Use S3 Object Lock in compliance mode.\nC. Use server-side encryption with Amazon S3 managed encryption keys (SSE-S3). Configure key rotation.\nD. Use server-side encryption with AWS Key Management Service (AWS KMS) customer managed keys. Configure key rotation.\nE. Use server-side encryption with AWS Key Management Service (AWS KMS) customer provided (imported) keys. Configure key rotation.")]),e._v(" "),t("h2",{attrs:{id:"q190"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q190"}},[e._v("#")]),e._v(" Q190")]),e._v(" "),t("p",[e._v("A company has a web application that is based on Java and PHP. The company plans to move the application from on premises to AWS. The company needs the ability to test new site features frequently. The company also needs a highly available and managed solution that requires minimum operational overhead.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Create an Amazon S3 bucket. Enable static web hosting on the S3 bucket. Upload the static content to the S3 bucket. Use AWS Lambda to process all dynamic content.\nB. Deploy the web application to an AWS Elastic Beanstalk environment. Use URL swapping to switch between multiple Elastic Beanstalk environments for feature testing.\nC. Deploy the web application to Amazon EC2 instances that are configured with Java and PHP. Use Auto Scaling groups and an Application Load Balancer to manage the website’s availability.\nD. Containerize the web application. Deploy the web application to Amazon EC2 instances. Use the AWS Load Balancer Controller to dynamically route traffic between containers that contain the new site features for testing.")])])}),[],!1,null,null,null);t.default=o.exports}}]);