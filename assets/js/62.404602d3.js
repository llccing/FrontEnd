(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{516:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q181"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q181"}},[e._v("#")]),e._v(" Q181")]),e._v(" "),t("p",[e._v("A company has a legacy data processing application that runs on Amazon EC2 instances. Data is processed sequentially, but the order of results does not matter. The application uses a monolithic architecture. The only way that the company can scale the application to meet increased demand is to increase the size of the instances.")]),e._v(" "),t("p",[e._v("The company’s developers have decided to rewrite the application to use a microservices architecture on Amazon Elastic Container Service (Amazon ECS).")]),e._v(" "),t("p",[e._v("What should a solutions architect recommend for communication between the microservices?")]),e._v(" "),t("p",[e._v("A. Create an Amazon Simple Queue Service (Amazon SQS) queue. Add code to the data producers, and send data to the queue. Add code to the data consumers to process data from the queue.\nB. Create an Amazon Simple Notification Service (Amazon SNS) topic. Add code to the data producers, and publish notifications to the topic. Add code to the data consumers to subscribe to the topic.\nC. Create an AWS Lambda function to pass messages. Add code to the data producers to call the Lambda function with a data object. Add code to the data consumers to receive a data object that is passed from the Lambda function.\nD. Create an Amazon DynamoDB table. Enable DynamoDB Streams. Add code to the data producers to insert data into the table. Add code to the data consumers to use the DynamoDB Streams API to detect new table entries and retrieve the data.")]),e._v(" "),t("h2",{attrs:{id:"q182"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q182"}},[e._v("#")]),e._v(" Q182")]),e._v(" "),t("p",[e._v("A company wants to migrate its MySQL database from on premises to AWS. The company recently experienced a database outage that significantly impacted the business. To ensure this does not happen again, the company wants a reliable database solution on AWS that minimizes data loss and stores every transaction on at least two nodes.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Create an Amazon RDS DB instance with synchronous replication to three nodes in three Availability Zones.\nB. Create an Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data.\nC. Create an Amazon RDS MySQL DB instance and then create a read replica in a separate AWS Region that synchronously replicates the data.\nD. Create an Amazon EC2 instance with a MySQL engine installed that triggers an AWS Lambda function to synchronously replicate the data to an Amazon RDS MySQL DB instance.")]),e._v(" "),t("h2",{attrs:{id:"q183"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q183"}},[e._v("#")]),e._v(" Q183")]),e._v(" "),t("p",[e._v("A company is building a new dynamic ordering website. The company wants to minimize server maintenance and patching. The website must be highly available and must scale read and write capacity as quickly as possible to meet changes in user demand.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon DynamoDB with on-demand capacity for the database. Configure Amazon CloudFront to deliver the website content.\nB. Host static content in Amazon S3. Host dynamic content by using Amazon API Gateway and AWS Lambda. Use Amazon Aurora with Aurora Auto Scaling for the database. Configure Amazon CloudFront to deliver the website content.\nC. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon DynamoDB with provisioned write capacity for the database.\nD. Host all the website content on Amazon EC2 instances. Create an Auto Scaling group to scale the EC2 instances. Use an Application Load Balancer to distribute traffic. Use Amazon Aurora with Aurora Auto Scaling for the database.")]),e._v(" "),t("h2",{attrs:{id:"q184"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q184"}},[e._v("#")]),e._v(" Q184")]),e._v(" "),t("p",[e._v("A company has an AWS account used for software engineering. The AWS account has access to the company’s on-premises data center through a pair of AWS Direct Connect connections. All non-VPC traffic routes to the virtual private gateway.")]),e._v(" "),t("p",[e._v("A development team recently created an AWS Lambda function through the console. The development team needs to allow the function to access a database that runs in a private subnet in the company’s data center.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure the Lambda function to run in the VPC with the appropriate security group.\nB. Set up a VPN connection from AWS to the data center. Route the traffic from the Lambda function through the VPN.\nC. Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.\nD. Create an Elastic IP address. Configure the Lambda function to send traffic through the Elastic IP address without an elastic network interface.")]),e._v(" "),t("h2",{attrs:{id:"q185"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q185"}},[e._v("#")]),e._v(" Q185")]),e._v(" "),t("p",[e._v("A company runs an application using Amazon ECS. The application creates resized versions of an original image and then makes Amazon S3 API calls to store the resized images in Amazon S3.")]),e._v(" "),t("p",[e._v("How can a solutions architect ensure that the application has permission to access Amazon S3?")]),e._v(" "),t("p",[e._v("A. Update the S3 role in AWS IAM to allow read/write access from Amazon ECS, and then relaunch the container.\nB. Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition.\nC. Create a security group that allows access from Amazon ECS to Amazon S3, and update the launch configuration used by the ECS cluster.\nD. Create an IAM user with S3 permissions, and then relaunch the Amazon EC2 instances for the ECS cluster while logged in as this account.")])])}),[],!1,null,null,null);t.default=o.exports}}]);