(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{506:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q91"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q91"}},[e._v("#")]),e._v(" Q91")]),e._v(" "),t("p",[e._v("A company has applications that run on Amazon EC2 instances in a VPC. One of the applications needs to call the Amazon S3 API to store and read objects. According to the company's security regulations, no traffic from the applications is allowed to travel across the internet.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure an S3 gateway endpoint.\nB. Create an S3 bucket in a private subnet.\nC. Create an S3 bucket in the same AWS Region as the EC2 instances.\nD. Configure a NAT gateway in the same subnet as the EC2 instances.")]),e._v(" "),t("h2",{attrs:{id:"q92"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q92"}},[e._v("#")]),e._v(" Q92")]),e._v(" "),t("p",[e._v("A company is storing sensitive user information in an Amazon S3 bucket. The company wants to provide secure access to this bucket from the application tier running on Amazon EC2 instances inside a VPC.\nWhich combination of steps should a solutions architect take to accomplish this? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Configure a VPC gateway endpoint for Amazon S3 within the VPC.\nB. Create a bucket policy to make the objects in the S3 bucket public.\nC. Create a bucket policy that limits access to only the application tier running in the VPC.\nD. Create an IAM user with an S3 access policy and copy the IAM credentials to the EC2 instance.\nE. Create a NAT instance and have the EC2 instances use the NAT instance to access the S3 bucket.")]),e._v(" "),t("h2",{attrs:{id:"q93"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q93"}},[e._v("#")]),e._v(" Q93")]),e._v(" "),t("p",[e._v("A company runs an on-premises application that is powered by a MySQL database. The company is migrating the application to AWS to increase the application's elasticity and availability.\nThe current architecture shows heavy read activity on the database during times of normal operation. Every 4 hours, the company's development team pulls a full export of the production database to populate a database in the staging environment. During this period, users experience unacceptable application latency. The development team is unable to use the staging environment until the procedure completes.\nA solutions architect must recommend replacement architecture that alleviates the application latency issue. The replacement architecture also must give the development team the ability to continue using the staging environment without delay.\nWhich solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.\nB. Use Amazon Aurora MySQL with Multi-AZ Aurora Replicas for production. Use database cloning to create the staging database on-demand.\nC. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Use the standby instance for the staging database.\nD. Use Amazon RDS for MySQL with a Multi-AZ deployment and read replicas for production. Populate the staging database by implementing a backup and restore process that uses the mysqldump utility.")]),e._v(" "),t("h2",{attrs:{id:"q94"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q94"}},[e._v("#")]),e._v(" Q94")]),e._v(" "),t("p",[e._v("A company is designing an application where users upload small files into Amazon S3. After a user uploads a file, the file requires one-time simple processing to transform the data and save the data in JSON format for later analysis.\nEach file must be processed as quickly as possible after it is uploaded. Demand will vary. On some days, users will upload a high number of files. On other days, users will upload a few files or no files.\nWhich solution meets these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Configure Amazon EMR to read text files from Amazon S3. Run processing scripts to transform the data. Store the resulting JSON file in an Amazon Aurora DB cluster.\nB. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use Amazon EC2 instances to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.\nC. Configure Amazon S3 to send an event notification to an Amazon Simple Queue Service (Amazon SQS) queue. Use an AWS Lambda function to read from the queue and process the data. Store the resulting JSON file in Amazon DynamoDB.\nD. Configure Amazon EventBridge (Amazon CloudWatch Events) to send an event to Amazon Kinesis Data Streams when a new file is uploaded. Use an AWS Lambda function to consume the event from the stream and process the data. Store the resulting JSON file in an Amazon Aurora DB cluster.")]),e._v(" "),t("h2",{attrs:{id:"q95"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q95"}},[e._v("#")]),e._v(" Q95")]),e._v(" "),t("p",[e._v("An application allows users at a company's headquarters to access product data. The product data is stored in an Amazon RDS MySQL DB instance. The operations team has isolated an application performance slowdown and wants to separate read traffic from write traffic. A solutions architect needs to optimize the application's performance quickly.\nWhat should the solutions architect recommend?")]),e._v(" "),t("p",[e._v("A. Change the existing database to a Multi-AZ deployment. Serve the read requests from the primary Availability Zone.\nB. Change the existing database to a Multi-AZ deployment. Serve the read requests from the secondary Availability Zone.\nC. Create read replicas for the database. Configure the read replicas with half of the compute and storage resources as the source database.\nD. Create read replicas for the database. Configure the read replicas with the same compute and storage resources as the source database.")]),e._v(" "),t("h2",{attrs:{id:"q96"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q96"}},[e._v("#")]),e._v(" Q96")]),e._v(" "),t("p",[e._v("An Amazon EC2 administrator created the following policy associated with an IAM group containing several users:\n"),t("img",{attrs:{src:"https://img.examtopics.com/aws-certified-solutions-architect-associate-saa-c03/image1.png",alt:"image"}})]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Version"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"2012-10-17"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Statement"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Effect"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Allow"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Action"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2:TerminateInstances"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Resource"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"IpAddress"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"aws:SourceIp"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"10.100.100.0/24"')]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Effect"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Deny"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Action"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"ec2:*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Resource"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"*"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Condition"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"StringNotEquals"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n                    "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"ec2:Region"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"us-east-1"')]),e._v("\n                "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("What is the effect of this policy?")]),e._v(" "),t("p",[e._v("A. Users can terminate an EC2 instance in any AWS Region except us-east-1.\nB. Users can terminate an EC2 instance with the IP address 10.100.100.1 in the us-east-1 Region.\nC. Users can terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.\nD. Users cannot terminate an EC2 instance in the us-east-1 Region when the user's source IP is 10.100.100.254.")]),e._v(" "),t("h2",{attrs:{id:"q97"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q97"}},[e._v("#")]),e._v(" Q97")]),e._v(" "),t("p",[e._v("A company has a large Microsoft SharePoint deployment running on-premises that requires Microsoft Windows shared file storage. The company wants to migrate this workload to the AWS Cloud and is considering various storage options. The storage solution must be highly available and integrated with Active Directory for access control.\nWhich solution will satisfy these requirements?")]),e._v(" "),t("p",[e._v("A. Configure Amazon EFS storage and set the Active Directory domain for authentication.\nB. Create an SMB file share on an AWS Storage Gateway file gateway in two Availability Zones.\nC. Create an Amazon S3 bucket and configure Microsoft Windows Server to mount it as a volume.\nD. Create an Amazon FSx for Windows File Server file system on AWS and set the Active Directory domain for authentication.")]),e._v(" "),t("h2",{attrs:{id:"q98"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q98"}},[e._v("#")]),e._v(" Q98")]),e._v(" "),t("p",[e._v("An image-processing company has a web application that users use to upload images. The application uploads the images into an Amazon S3 bucket. The company has set up S3 event notifications to publish the object creation events to an Amazon Simple Queue Service (Amazon SQS) standard queue. The SQS queue serves as the event source for an AWS Lambda function that processes the images and sends the results to users through email.\nUsers report that they are receiving multiple email messages for every uploaded image. A solutions architect determines that SQS messages are invoking the Lambda function more than once, resulting in multiple email messages.\nWhat should the solutions architect do to resolve this issue with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Set up long polling in the SQS queue by increasing the ReceiveMessage wait time to 30 seconds.\nB. Change the SQS standard queue to an SQS FIFO queue. Use the message deduplication ID to discard duplicate messages.\nC. Increase the visibility timeout in the SQS queue to a value that is greater than the total of the function timeout and the batch window timeout.\nD. Modify the Lambda function to delete each message from the SQS queue immediately after the message is read before processing.")]),e._v(" "),t("h2",{attrs:{id:"q99"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q99"}},[e._v("#")]),e._v(" Q99")]),e._v(" "),t("p",[e._v("A company is implementing a shared storage solution for a gaming application that is hosted in an on-premises data center. The company needs the ability to use Lustre clients to access data. The solution must be fully managed.\nWhich solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Create an AWS Storage Gateway file gateway. Create a file share that uses the required client protocol. Connect the application server to the file share.\nB. Create an Amazon EC2 Windows instance. Install and configure a Windows file share role on the instance. Connect the application server to the file share.\nC. Create an Amazon Elastic File System (Amazon EFS) file system, and configure it to support Lustre. Attach the file system to the origin server. Connect the application server to the file system.\nD. Create an Amazon FSx for Lustre file system. Attach the file system to the origin server. Connect the application server to the file system.")]),e._v(" "),t("h2",{attrs:{id:"q100"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q100"}},[e._v("#")]),e._v(" Q100")]),e._v(" "),t("p",[e._v("A company's containerized application runs on an Amazon EC2 instance. The application needs to download security certificates before it can communicate with other business applications. The company wants a highly secure solution to encrypt and decrypt the certificates in near real time. The solution also needs to store data in highly available storage after the data is encrypted.\nWhich solution will meet these requirements with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Create AWS Secrets Manager secrets for encrypted certificates. Manually update the certificates as needed. Control access to the data by using fine-grained IAM access.\nB. Create an AWS Lambda function that uses the Python cryptography library to receive and perform encryption operations. Store the function in an Amazon S3 bucket.\nC. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon S3.\nD. Create an AWS Key Management Service (AWS KMS) customer managed key. Allow the EC2 role to use the KMS key for encryption operations. Store the encrypted data on Amazon Elastic Block Store (Amazon EBS) volumes.")])])}),[],!1,null,null,null);t.default=n.exports}}]);