(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{528:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q161"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q161"}},[e._v("#")]),e._v(" Q161")]),e._v(" "),t("p",[e._v("A company has a small Python application that processes JSON documents and outputs the results to an on-premises SQL database. The application runs thousands of times each day. The company wants to move the application to the AWS Cloud. The company needs a highly available solution that maximizes scalability and minimizes operational overhead.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Place the JSON documents in an Amazon S3 bucket. Run the Python code on multiple Amazon EC2 instances to process the documents. Store the results in an Amazon Aurora DB cluster.\nB. Place the JSON documents in an Amazon S3 bucket. Create an AWS Lambda function that runs the Python code to process the documents as they arrive in the S3 bucket. Store the results in an Amazon Aurora DB cluster.\nC. Place the JSON documents in an Amazon Elastic Block Store (Amazon EBS) volume. Use the EBS Multi-Attach feature to attach the volume to multiple Amazon EC2 instances. Run the Python code on the EC2 instances to process the documents. Store the results on an Amazon RDS DB instance.\nD. Place the JSON documents in an Amazon Simple Queue Service (Amazon SQS) queue as messages. Deploy the Python code as a container on an Amazon Elastic Container Service (Amazon ECS) cluster that is configured with the Amazon EC2 launch type. Use the container to process the SQS messages. Store the results on an Amazon RDS DB instance.")]),e._v(" "),t("h2",{attrs:{id:"q162"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q162"}},[e._v("#")]),e._v(" Q162")]),e._v(" "),t("p",[e._v("A company wants to use high performance computing (HPC) infrastructure on AWS for financial risk modeling. The company’s HPC workloads run on Linux. Each HPC workflow runs on hundreds of Amazon EC2 Spot Instances, is short-lived, and generates thousands of output files that are ultimately stored in persistent storage for analytics and long-term future use.")]),e._v(" "),t("p",[e._v("The company seeks a cloud storage solution that permits the copying of on-premises data to long-term persistent storage to make data available for processing by all EC2 instances. The solution should also be a high performance file system that is integrated with persistent storage to read and write datasets and output files.")]),e._v(" "),t("p",[e._v("Which combination of AWS services meets these requirements?")]),e._v(" "),t("p",[e._v("A. Amazon FSx for Lustre integrated with Amazon S3\nB. Amazon FSx for Windows File Server integrated with Amazon S3\nC. Amazon S3 Glacier integrated with Amazon Elastic Block Store (Amazon EBS)\nD. Amazon S3 bucket with a VPC endpoint integrated with an Amazon Elastic Block Store (Amazon EBS) General Purpose SSD (gp2) volume")]),e._v(" "),t("h2",{attrs:{id:"q163"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q163"}},[e._v("#")]),e._v(" Q163")]),e._v(" "),t("p",[e._v("A company is building a containerized application on premises and decides to move the application to AWS. The application will have thousands of users soon after it is deployed. The company is unsure how to manage the deployment of containers at scale. The company needs to deploy the containerized application in a highly available architecture that minimizes operational overhead.")]),e._v(" "),t("p",[e._v("Which solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the AWS Fargate launch type to run the containers. Use target tracking to scale automatically based on demand.\nB. Store container images in an Amazon Elastic Container Registry (Amazon ECR) repository. Use an Amazon Elastic Container Service (Amazon ECS) cluster with the Amazon EC2 launch type to run the containers. Use target tracking to scale automatically based on demand.\nC. Store container images in a repository that runs on an Amazon EC2 instance. Run the containers on EC2 instances that are spread across multiple Availability Zones. Monitor the average CPU utilization in Amazon CloudWatch. Launch new EC2 instances as needed.\nD. Create an Amazon EC2 Amazon Machine Image (AMI) that contains the container image. Launch EC2 instances in an Auto Scaling group across multiple Availability Zones. Use an Amazon CloudWatch alarm to scale out EC2 instances when the average CPU utilization threshold is breached.")]),e._v(" "),t("h2",{attrs:{id:"q164"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q164"}},[e._v("#")]),e._v(" Q164")]),e._v(" "),t("p",[e._v("A company has two applications: a sender application that sends messages with payloads to be processed and a processing application intended to receive the messages with payloads. The company wants to implement an AWS service to handle messages between the two applications. The sender application can send about 1,000 messages each hour. The messages may take up to 2 days to be processed: If the messages fail to process, they must be retained so that they do not impact the processing of any remaining messages.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements and is the MOST operationally efficient?")]),e._v(" "),t("p",[e._v("A. Set up an Amazon EC2 instance running a Redis database. Configure both applications to use the instance. Store, process, and delete the messages, respectively.\nB. Use an Amazon Kinesis data stream to receive the messages from the sender application. Integrate the processing application with the Kinesis Client Library (KCL).\nC. Integrate the sender and processor applications with an Amazon Simple Queue Service (Amazon SQS) queue. Configure a dead-letter queue to collect the messages that failed to process.\nD. Subscribe the processing application to an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications to process. Integrate the sender application to write to the SNS topic.")]),e._v(" "),t("h2",{attrs:{id:"q165"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q165"}},[e._v("#")]),e._v(" Q165")]),e._v(" "),t("p",[e._v("A solutions architect must design a solution that uses Amazon CloudFront with an Amazon S3 origin to store a static website. The company’s security policy requires that all website traffic be inspected by AWS WAF.")]),e._v(" "),t("p",[e._v("How should the solutions architect comply with these requirements?")]),e._v(" "),t("p",[e._v("A. Configure an S3 bucket policy to accept requests coming from the AWS WAF Amazon Resource Name (ARN) only.\nB. Configure Amazon CloudFront to forward all incoming requests to AWS WAF before requesting content from the S3 origin.\nC. Configure a security group that allows Amazon CloudFront IP addresses to access Amazon S3 only. Associate AWS WAF to CloudFront.\nD. Configure Amazon CloudFront and Amazon S3 to use an origin access identity (OAI) to restrict access to the S3 bucket. Enable AWS WAF on the distribution.")]),e._v(" "),t("h2",{attrs:{id:"q166"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q166"}},[e._v("#")]),e._v(" Q166")]),e._v(" "),t("p",[e._v("Organizers for a global event want to put daily reports online as static HTML pages. The pages are expected to generate millions of views from users around the world. The files are stored in an Amazon S3 bucket. A solutions architect has been asked to design an efficient and effective solution.")]),e._v(" "),t("p",[e._v("Which action should the solutions architect take to accomplish this?")]),e._v(" "),t("p",[e._v("A. Generate presigned URLs for the files.\nB. Use cross-Region replication to all Regions.\nC. Use the geoproximity feature of Amazon Route 53.\nD. Use Amazon CloudFront with the S3 bucket as its origin.")]),e._v(" "),t("h2",{attrs:{id:"q167"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q167"}},[e._v("#")]),e._v(" Q167")]),e._v(" "),t("p",[e._v("A company runs a production application on a fleet of Amazon EC2 instances. The application reads the data from an Amazon SQS queue and processes the messages in parallel. The message volume is unpredictable and often has intermittent traffic. This application should continually process messages without any downtime.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements MOST cost-effectively?")]),e._v(" "),t("p",[e._v("A. Use Spot Instances exclusively to handle the maximum capacity required.\nB. Use Reserved Instances exclusively to handle the maximum capacity required.\nC. Use Reserved Instances for the baseline capacity and use Spot Instances to handle additional capacity.\nD. Use Reserved Instances for the baseline capacity and use On-Demand Instances to handle additional capacity.")]),e._v(" "),t("h2",{attrs:{id:"q168"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q168"}},[e._v("#")]),e._v(" Q168")]),e._v(" "),t("p",[e._v("A security team wants to limit access to specific services or actions in all of the team’s AWS accounts. All accounts belong to a large organization in AWS Organizations. The solution must be scalable and there must be a single point where permissions can be maintained.")]),e._v(" "),t("p",[e._v("What should a solutions architect do to accomplish this?")]),e._v(" "),t("p",[e._v("A. Create an ACL to provide access to the services or actions.\nB. Create a security group to allow accounts and attach it to user groups.\nC. Create cross-account roles in each account to deny access to the services or actions.\nD. Create a service control policy in the root organizational unit to deny access to the services or actions.")]),e._v(" "),t("h2",{attrs:{id:"q169"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q169"}},[e._v("#")]),e._v(" Q169")]),e._v(" "),t("p",[e._v("A company is concerned about the security of its public web application due to recent web attacks. The application uses an Application Load Balancer (ALB). A solutions architect must reduce the risk of DDoS attacks against the application.")]),e._v(" "),t("p",[e._v("What should the solutions architect do to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Add an Amazon Inspector agent to the ALB.\nB. Configure Amazon Macie to prevent attacks.\nC. Enable AWS Shield Advanced to prevent attacks.\nD. Configure Amazon GuardDuty to monitor the ALB.")]),e._v(" "),t("h2",{attrs:{id:"q170"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q170"}},[e._v("#")]),e._v(" Q170")]),e._v(" "),t("p",[e._v("A company’s web application is running on Amazon EC2 instances behind an Application Load Balancer. The company recently changed its policy, which now requires the application to be accessed from one specific country only.")]),e._v(" "),t("p",[e._v("Which configuration will meet this requirement?")]),e._v(" "),t("p",[e._v("A. Configure the security group for the EC2 instances.\nB. Configure the security group on the Application Load Balancer.\nC. Configure AWS WAF on the Application Load Balancer in a VPC.\nD. Configure the network ACL for the subnet that contains the EC2 instances.")])])}),[],!1,null,null,null);t.default=o.exports}}]);