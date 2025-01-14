(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{508:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q101"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q101"}},[e._v("#")]),e._v(" Q101")]),e._v(" "),t("p",[e._v("A solutions architect is designing a VPC with public and private subnets. The VPC and subnets use IPv4 CIDR blocks. There is one public subnet and one private subnet in each of three Availability Zones (AZs) for high availability. An internet gateway is used to provide internet access for the public subnets. The private subnets require access to the internet to allow Amazon EC2 instances to download software updates.\nWhat should the solutions architect do to enable Internet access for the private subnets?")]),e._v(" "),t("p",[e._v("A. Create three NAT gateways, one for each public subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ.\nB. Create three NAT instances, one for each private subnet in each AZ. Create a private route table for each AZ that forwards non-VPC traffic to the NAT instance in its AZ.\nC. Create a second internet gateway on one of the private subnets. Update the route table for the private subnets that forward non-VPC traffic to the private internet gateway.\nD. Create an egress-only internet gateway on one of the public subnets. Update the route table for the private subnets that forward non-VPC traffic to the egress-only Internet gateway.")]),e._v(" "),t("h2",{attrs:{id:"q102"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q102"}},[e._v("#")]),e._v(" Q102")]),e._v(" "),t("p",[e._v("A company wants to migrate an on-premises data center to AWS. The data center hosts an SFTP server that stores its data on an NFS-based file system. The server holds 200 GB of data that needs to be transferred. The server must be hosted on an Amazon EC2 instance that uses an Amazon Elastic File System (Amazon EFS) file system.\nWhich combination of steps should a solutions architect take to automate this task? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Launch the EC2 instance into the same Availability Zone as the EFS file system.\nB. Install an AWS DataSync agent in the on-premises data center.\nC. Create a secondary Amazon Elastic Block Store (Amazon EBS) volume on the EC2 instance for the data.\nD. Manually use an operating system copy command to push the data to the EC2 instance.\nE. Use AWS DataSync to create a suitable location configuration for the on-premises SFTP server.")]),e._v(" "),t("h2",{attrs:{id:"q103"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q103"}},[e._v("#")]),e._v(" Q103")]),e._v(" "),t("p",[e._v("A company has an AWS Glue extract, transform, and load (ETL) job that runs every day at the same time. The job processes XML data that is in an Amazon S3 bucket. New data is added to the S3 bucket every day. A solutions architect notices that AWS Glue is processing all the data during each run.\nWhat should the solutions architect do to prevent AWS Glue from reprocessing old data?")]),e._v(" "),t("p",[e._v("A. Edit the job to use job bookmarks.\nB. Edit the job to delete data after the data is processed.\nC. Edit the job by setting the NumberOfWorkers field to 1.\nD. Use a FindMatches machine learning (ML) transform.")]),e._v(" "),t("h2",{attrs:{id:"q104"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q104"}},[e._v("#")]),e._v(" Q104")]),e._v(" "),t("p",[e._v("A solutions architect must design a highly available infrastructure for a website. The website is powered by Windows web servers that run on Amazon EC2 instances. The solutions architect must implement a solution that can mitigate a large-scale DDoS attack that originates from thousands of IP addresses. Downtime is not acceptable for the website.\nWhich actions should the solutions architect take to protect the website from such an attack? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Use AWS Shield Advanced to stop the DDoS attack.\nB. Configure Amazon GuardDuty to automatically block the attackers.\nC. Configure the website to use Amazon CloudFront for both static and dynamic content.\nD. Use an AWS Lambda function to automatically add attacker IP addresses to VPC network ACLs.\nE. Use EC2 Spot Instances in an Auto Scaling group with a target tracking scaling policy that is set to 80% CPU utilization.")]),e._v(" "),t("h2",{attrs:{id:"q105"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q105"}},[e._v("#")]),e._v(" Q105")]),e._v(" "),t("p",[e._v("A company is preparing to deploy a new serverless workload. A solutions architect must use the principle of least privilege to configure permissions that will be used to run an AWS Lambda function. An Amazon EventBridge (Amazon CloudWatch Events) rule will invoke the function.\nWhich solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Add an execution role to the function with lambda:InvokeFunction as the action and * as the principal.\nB. Add an execution role to the function with lambda:InvokeFunction as the action and Service: lambda.amazonaws.com as the principal.\nC. Add a resource-based policy to the function with lambda:* as the action and Service: events.amazonaws.com as the principal.\nD. Add a resource-based policy to the function with lambda:InvokeFunction as the action and Service: events.amazonaws.com as the principal.")]),e._v(" "),t("h2",{attrs:{id:"q106"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q106"}},[e._v("#")]),e._v(" Q106")]),e._v(" "),t("p",[e._v("A company is preparing to store confidential data in Amazon S3. For compliance reasons, the data must be encrypted at rest. Encryption key usage must be logged for auditing purposes. Keys must be rotated every year.\nWhich solution meets these requirements and is the MOST operationally efficient?")]),e._v(" "),t("p",[e._v("A. Server-side encryption with customer-provided keys (SSE-C)\nB. Server-side encryption with Amazon S3 managed keys (SSE-S3)\nC. Server-side encryption with AWS KMS keys (SSE-KMS) with manual rotation\nD. Server-side encryption with AWS KMS keys (SSE-KMS) with automatic rotation")]),e._v(" "),t("h2",{attrs:{id:"q107"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q107"}},[e._v("#")]),e._v(" Q107")]),e._v(" "),t("p",[e._v("A bicycle sharing company is developing a multi-tier architecture to track the location of its bicycles during peak operating hours. The company wants to use these data points in its existing analytics platform. A solutions architect must determine the most viable multi-tier option to support this architecture. The data points must be accessible from the REST API.\nWhich action meets these requirements for storing and retrieving location data?")]),e._v(" "),t("p",[e._v("A. Use Amazon Athena with Amazon S3.\nB. Use Amazon API Gateway with AWS Lambda.\nC. Use Amazon QuickSight with Amazon Redshift.\nD. Use Amazon API Gateway with Amazon Kinesis Data Analytics.")]),e._v(" "),t("h2",{attrs:{id:"q108"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q108"}},[e._v("#")]),e._v(" Q108")]),e._v(" "),t("p",[e._v("A company has an automobile sales website that stores its listings in a database on Amazon RDS. When an automobile is sold, the listing needs to be removed from the website and the data must be sent to multiple target systems.\nWhich design should a solutions architect recommend?")]),e._v(" "),t("p",[e._v("A. Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) queue for the targets to consume.\nB. Create an AWS Lambda function triggered when the database on Amazon RDS is updated to send the information to an Amazon Simple Queue Service (Amazon SQS) FIFO queue for the targets to consume.\nC. Subscribe to an RDS event notification and send an Amazon Simple Queue Service (Amazon SQS) queue fanned out to multiple Amazon Simple Notification Service (Amazon SNS) topics. Use AWS Lambda functions to update the targets.\nD. Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.")]),e._v(" "),t("h2",{attrs:{id:"q109"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q109"}},[e._v("#")]),e._v(" Q109")]),e._v(" "),t("p",[e._v("A company needs to store data in Amazon S3 and must prevent the data from being changed. The company wants new objects that are uploaded to Amazon S3 to remain unchangeable for a nonspecific amount of time until the company decides to modify the objects. Only specific users in the company's AWS account can have the ability to delete the objects.\nWhat should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Create an S3 Glacier vault. Apply a write-once, read-many (WORM) vault lock policy to the objects.\nB. Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Set a retention period of 100 years. Use governance mode as the S3 bucket’s default retention mode for new objects.\nC. Create an S3 bucket. Use AWS CloudTrail to track any S3 API events that modify the objects. Upon notification, restore the modified objects from any backup versions that the company has.\nD. Create an S3 bucket with S3 Object Lock enabled. Enable versioning. Add a legal hold to the objects. Add the s3:PutObjectLegalHold permission to the IAM policies of users who need to delete the objects.")]),e._v(" "),t("h2",{attrs:{id:"q110"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q110"}},[e._v("#")]),e._v(" Q110")]),e._v(" "),t("p",[e._v("A social media company allows users to upload images to its website. The website runs on Amazon EC2 instances. During upload requests, the website resizes the images to a standard size and stores the resized images in Amazon S3. Users are experiencing slow upload requests to the website.\nThe company needs to reduce coupling within the application and improve website performance. A solutions architect must design the most operationally efficient process for image uploads.\nWhich combination of actions should the solutions architect take to meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Configure the application to upload images to S3 Glacier.\nB. Configure the web server to upload the original images to Amazon S3.\nC. Configure the application to upload images directly from each user's browser to Amazon S3 through the use of a presigned URL\nD. Configure S3 Event Notifications to invoke an AWS Lambda function when an image is uploaded. Use the function to resize the image.\nE. Create an Amazon EventBridge (Amazon CloudWatch Events) rule that invokes an AWS Lambda function on a schedule to resize uploaded images.")])])}),[],!1,null,null,null);t.default=o.exports}}]);