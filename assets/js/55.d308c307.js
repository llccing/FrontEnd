(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{515:function(e,a,t){"use strict";t.r(a);var n=t(14),o=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"q141"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q141"}},[e._v("#")]),e._v(" Q141")]),e._v(" "),a("p",[e._v("A company runs a web-based portal that provides users with global breaking news, local alerts, and weather updates. The portal delivers each user a personalized view by using mixture of static and dynamic content. Content is served over HTTPS through an API server running on an Amazon EC2 instance behind an Application Load Balancer (ALB). The company wants the portal to provide this content to its users across the world as quickly as possible.\nHow should a solutions architect design the application to ensure the LEAST amount of latency for all users?")]),e._v(" "),a("p",[e._v("A. Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve all static and dynamic content by specifying the ALB as an origin.\nB. Deploy the application stack in two AWS Regions. Use an Amazon Route 53 latency routing policy to serve all content from the ALB in the closest Region.\nC. Deploy the application stack in a single AWS Region. Use Amazon CloudFront to serve the static content. Serve the dynamic content directly from the ALB.\nD. Deploy the application stack in two AWS Regions. Use an Amazon Route 53 geolocation routing policy to serve all content from the ALB in the closest Region.")]),e._v(" "),a("h2",{attrs:{id:"q142"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q142"}},[e._v("#")]),e._v(" Q142")]),e._v(" "),a("p",[e._v("A gaming company is designing a highly available architecture. The application runs on a modified Linux kernel and supports only UDP-based traffic. The company needs the front-end tier to provide the best possible user experience. That tier must have low latency, route traffic to the nearest edge location, and provide static IP addresses for entry into the application endpoints.\nWhat should a solutions architect do to meet these requirements?")]),e._v(" "),a("p",[e._v("A. Configure Amazon Route 53 to forward requests to an Application Load Balancer. Use AWS Lambda for the application in AWS Application Auto Scaling.\nB. Configure Amazon CloudFront to forward requests to a Network Load Balancer. Use AWS Lambda for the application in an AWS Application Auto Scaling group.\nC. Configure AWS Global Accelerator to forward requests to a Network Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.\nD. Configure Amazon API Gateway to forward requests to an Application Load Balancer. Use Amazon EC2 instances for the application in an EC2 Auto Scaling group.")]),e._v(" "),a("h2",{attrs:{id:"q143"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q143"}},[e._v("#")]),e._v(" Q143")]),e._v(" "),a("p",[e._v("A company wants to migrate its existing on-premises monolithic application to AWS. The company wants to keep as much of the front-end code and the backend code as possible. However, the company wants to break the application into smaller applications. A different team will manage each application. The company needs a highly scalable solution that minimizes operational overhead.\nWhich solution will meet these requirements?")]),e._v(" "),a("p",[e._v("A. Host the application on AWS Lambda. Integrate the application with Amazon API Gateway.\nB. Host the application with AWS Amplify. Connect the application to an Amazon API Gateway API that is integrated with AWS Lambda.\nC. Host the application on Amazon EC2 instances. Set up an Application Load Balancer with EC2 instances in an Auto Scaling group as targets.\nD. Host the application on Amazon Elastic Container Service (Amazon ECS). Set up an Application Load Balancer with Amazon ECS as the target.")]),e._v(" "),a("h2",{attrs:{id:"q144"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q144"}},[e._v("#")]),e._v(" Q144")]),e._v(" "),a("p",[e._v("A company recently started using Amazon Aurora as the data store for its global ecommerce application. When large reports are run, developers report that the ecommerce application is performing poorly. After reviewing metrics in Amazon CloudWatch, a solutions architect finds that the ReadIOPS and CPUUtilizalion metrics are spiking when monthly reports run.\nWhat is the MOST cost-effective solution?")]),e._v(" "),a("p",[e._v("A. Migrate the monthly reporting to Amazon Redshift.\nB. Migrate the monthly reporting to an Aurora Replica.\nC. Migrate the Aurora database to a larger instance class.\nD. Increase the Provisioned IOPS on the Aurora instance.")]),e._v(" "),a("h2",{attrs:{id:"q145"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q145"}},[e._v("#")]),e._v(" Q145")]),e._v(" "),a("p",[e._v("A company hosts a website analytics application on a single Amazon EC2 On-Demand Instance. The analytics software is written in PHP and uses a MySQL database. The analytics software, the web server that provides PHP, and the database server are all hosted on the EC2 instance. The application is showing signs of performance degradation during busy times and is presenting 5xx errors. The company needs to make the application scale seamlessly.\nWhich solution will meet these requirements MOST cost-effectively?")]),e._v(" "),a("p",[e._v("A. Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use an Application Load Balancer to distribute the load to each EC2 instance.\nB. Migrate the database to an Amazon RDS for MySQL DB instance. Create an AMI of the web application. Use the AMI to launch a second EC2 On-Demand Instance. Use Amazon Route 53 weighted routing to distribute the load across the two EC2 instances.\nC. Migrate the database to an Amazon Aurora MySQL DB instance. Create an AWS Lambda function to stop the EC2 instance and change the instance type. Create an Amazon CloudWatch alarm to invoke the Lambda function when CPU utilization surpasses 75%.\nD. Migrate the database to an Amazon Aurora MySQL DB instance. Create an AMI of the web application. Apply the AMI to a launch template. Create an Auto Scaling group with the launch template Configure the launch template to use a Spot Fleet. Attach an Application Load Balancer to the Auto Scaling group.")]),e._v(" "),a("h2",{attrs:{id:"q146"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q146"}},[e._v("#")]),e._v(" Q146")]),e._v(" "),a("p",[e._v("A company runs a stateless web application in production on a group of Amazon EC2 On-Demand Instances behind an Application Load Balancer. The application experiences heavy usage during an 8-hour period each business day. Application usage is moderate and steady overnight. Application usage is low during weekends.\nThe company wants to minimize its EC2 costs without affecting the availability of the application.\nWhich solution will meet these requirements?")]),e._v(" "),a("p",[e._v("A. Use Spot Instances for the entire workload.\nB. Use Reserved Instances for the baseline level of usage. Use Spot instances for any additional capacity that the application needs.\nC. Use On-Demand Instances for the baseline level of usage. Use Spot Instances for any additional capacity that the application needs.\nD. Use Dedicated Instances for the baseline level of usage. Use On-Demand Instances for any additional capacity that the application needs.")]),e._v(" "),a("h2",{attrs:{id:"q147"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q147"}},[e._v("#")]),e._v(" Q147")]),e._v(" "),a("p",[e._v("A company needs to retain application log files for a critical application for 10 years. The application team regularly accesses logs from the past month for troubleshooting, but logs older than 1 month are rarely accessed. The application generates more than 10 TB of logs per month.\nWhich storage option meets these requirements MOST cost-effectively?")]),e._v(" "),a("p",[e._v("A. Store the logs in Amazon S3. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.\nB. Store the logs in Amazon S3. Use S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.\nC. Store the logs in Amazon CloudWatch Logs. Use AWS Backup to move logs more than 1 month old to S3 Glacier Deep Archive.\nD. Store the logs in Amazon CloudWatch Logs. Use Amazon S3 Lifecycle policies to move logs more than 1 month old to S3 Glacier Deep Archive.")]),e._v(" "),a("h2",{attrs:{id:"q148"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q148"}},[e._v("#")]),e._v(" Q148")]),e._v(" "),a("p",[e._v("A company has a data ingestion workflow that includes the following components:\nAn Amazon Simple Notification Service (Amazon SNS) topic that receives notifications about new data deliveries\nAn AWS Lambda function that processes and stores the data\nThe ingestion workflow occasionally fails because of network connectivity issues. When failure occurs, the corresponding data is not ingested unless the company manually reruns the job.\nWhat should a solutions architect do to ensure that all notifications are eventually processed?")]),e._v(" "),a("p",[e._v("A. Configure the Lambda function for deployment across multiple Availability Zones.\nB. Modify the Lambda function's configuration to increase the CPU and memory allocations for the function.\nC. Configure the SNS topic’s retry strategy to increase both the number of retries and the wait time between retries.\nD. Configure an Amazon Simple Queue Service (Amazon SQS) queue as the on-failure destination. Modify the Lambda function to process messages in the queue.")]),e._v(" "),a("h2",{attrs:{id:"q149"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q149"}},[e._v("#")]),e._v(" Q149")]),e._v(" "),a("p",[e._v("A company has a service that produces event data. The company wants to use AWS to process the event data as it is received. The data is written in a specific order that must be maintained throughout processing. The company wants to implement a solution that minimizes operational overhead.\nHow should a solutions architect accomplish this?")]),e._v(" "),a("p",[e._v("A. Create an Amazon Simple Queue Service (Amazon SQS) FIFO queue to hold messages. Set up an AWS Lambda function to process messages from the queue.\nB. Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an AWS Lambda function as a subscriber.\nC. Create an Amazon Simple Queue Service (Amazon SQS) standard queue to hold messages. Set up an AWS Lambda function to process messages from the queue independently.\nD. Create an Amazon Simple Notification Service (Amazon SNS) topic to deliver notifications containing payloads to process. Configure an Amazon Simple Queue Service (Amazon SQS) queue as a subscriber.")]),e._v(" "),a("h2",{attrs:{id:"q150"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q150"}},[e._v("#")]),e._v(" Q150")]),e._v(" "),a("p",[e._v("A company is migrating an application from on-premises servers to Amazon EC2 instances. As part of the migration design requirements, a solutions architect must implement infrastructure metric alarms. The company does not need to take action if CPU utilization increases to more than 50% for a short burst of time. However, if the CPU utilization increases to more than 50% and read IOPS on the disk are high at the same time, the company needs to act as soon as possible. The solutions architect also must reduce false alarms.\nWhat should the solutions architect do to meet these requirements?")]),e._v(" "),a("p",[e._v("A. Create Amazon CloudWatch composite alarms where possible.\nB. Create Amazon CloudWatch dashboards to visualize the metrics and react to issues quickly.\nC. Create Amazon CloudWatch Synthetics canaries to monitor the application and raise an alarm.\nD. Create single Amazon CloudWatch metric alarms with multiple metric thresholds where possible.")])])}),[],!1,null,null,null);a.default=o.exports}}]);