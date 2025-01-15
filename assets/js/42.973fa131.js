(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{492:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q81"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q81"}},[e._v("#")]),e._v(" Q81")]),e._v(" "),t("p",[e._v("A solutions architect is designing the cloud architecture for a new application being deployed on AWS. The process should run in parallel while adding and removing application nodes as needed based on the number of jobs to be processed. The processor application is stateless. The solutions architect must ensure that the application is loosely coupled and the job items are durably stored.\nWhich design should the solutions architect use?")]),e._v(" "),t("p",[e._v("A. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on CPU usage.")]),e._v(" "),t("p",[e._v("B. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch configuration that uses the AMI. Create an Auto Scaling group using the launch configuration. Set the scaling policy for the Auto Scaling group to add and remove nodes based on network usage.")]),e._v(" "),t("p",[e._v("C. Create an Amazon SQS queue to hold the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of items in the SQS queue.")]),e._v(" "),t("p",[e._v("D. Create an Amazon SNS topic to send the jobs that need to be processed. Create an Amazon Machine Image (AMI) that consists of the processor application. Create a launch template that uses the AMI. Create an Auto Scaling group using the launch template. Set the scaling policy for the Auto Scaling group to add and remove nodes based on the number of messages published to the SNS topic.")]),e._v(" "),t("h2",{attrs:{id:"q82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q82"}},[e._v("#")]),e._v(" Q82")]),e._v(" "),t("p",[e._v("A company hosts its web applications in the AWS Cloud. The company configures Elastic Load Balancers to use certificates that are imported into AWS Certificate Manager (ACM). The company's security team must be notified 30 days before the expiration of each certificate.\nWhat should a solutions architect recommend to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Add a rule in ACM to publish a custom message to an Amazon Simple Notification Service (Amazon SNS) topic every day, beginning 30 days before any certificate will expire.\nB. Create an AWS Config rule that checks for certificates that will expire within 30 days. Configure Amazon EventBridge (Amazon CloudWatch Events) to invoke a custom alert by way of Amazon Simple Notification Service (Amazon SNS) when AWS Config reports a noncompliant resource.\nC. Use AWS Trusted Advisor to check for certificates that will expire within 30 days. Create an Amazon CloudWatch alarm that is based on Trusted Advisor metrics for check status changes. Configure the alarm to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).\nD. Create an Amazon EventBridge (Amazon CloudWatch Events) rule to detect any certificates that will expire within 30 days. Configure the rule to invoke an AWS Lambda function. Configure the Lambda function to send a custom alert by way of Amazon Simple Notification Service (Amazon SNS).")]),e._v(" "),t("h2",{attrs:{id:"q83"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q83"}},[e._v("#")]),e._v(" Q83")]),e._v(" "),t("p",[e._v("A company's dynamic website is hosted using on-premises servers in the United States. The company is launching its product in Europe, and it wants to optimize site loading times for new European users. The site's backend must remain in the United States. The product is being launched in a few days, and an immediate solution is needed.\nWhat should the solutions architect recommend?")]),e._v(" "),t("p",[e._v("A. Launch an Amazon EC2 instance in us-east-1 and migrate the site to it.\nB. Move the website to Amazon S3. Use Cross-Region Replication between Regions.\nC. Use Amazon CloudFront with a custom origin pointing to the on-premises servers.\nD. Use an Amazon Route 53 geoproximity routing policy pointing to on-premises servers.")]),e._v(" "),t("h2",{attrs:{id:"q84"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q84"}},[e._v("#")]),e._v(" Q84")]),e._v(" "),t("p",[e._v("A company wants to reduce the cost of its existing three-tier web architecture. The web, application, and database servers are running on Amazon EC2 instances for the development, test, and production environments. The EC2 instances average 30% CPU utilization during peak hours and 10% CPU utilization during non-peak hours.\nThe production EC2 instances run 24 hours a day. The development and test EC2 instances run for at least 8 hours each day. The company plans to implement automation to stop the development and test EC2 instances when they are not in use.\nWhich EC2 instance purchasing solution will meet the company's requirements MOST cost-effectively?")]),e._v(" "),t("p",[e._v("A. Use Spot Instances for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.\nB. Use Reserved Instances for the production EC2 instances. Use On-Demand Instances for the development and test EC2 instances.\nC. Use Spot blocks for the production EC2 instances. Use Reserved Instances for the development and test EC2 instances.\nD. Use On-Demand Instances for the production EC2 instances. Use Spot blocks for the development and test EC2 instances.")]),e._v(" "),t("h2",{attrs:{id:"q85"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q85"}},[e._v("#")]),e._v(" Q85")]),e._v(" "),t("p",[e._v("A company has a production web application in which users upload documents through a web interface or a mobile app. According to a new regulatory requirement. new documents cannot be modified or deleted after they are stored.\nWhat should a solutions architect do to meet this requirement?")]),e._v(" "),t("p",[e._v("A. Store the uploaded documents in an Amazon S3 bucket with S3 Versioning and S3 Object Lock enabled.\nB. Store the uploaded documents in an Amazon S3 bucket. Configure an S3 Lifecycle policy to archive the documents periodically.\nC. Store the uploaded documents in an Amazon S3 bucket with S3 Versioning enabled. Configure an ACL to restrict all access to read-only.\nD. Store the uploaded documents on an Amazon Elastic File System (Amazon EFS) volume. Access the data by mounting the volume in read-only mode.")]),e._v(" "),t("h2",{attrs:{id:"q86"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q86"}},[e._v("#")]),e._v(" Q86")]),e._v(" "),t("p",[e._v("A company has several web servers that need to frequently access a common Amazon RDS MySQL Multi-AZ DB instance. The company wants a secure method for the web servers to connect to the database while meeting a security requirement to rotate user credentials frequently.\nWhich solution meets these requirements?")]),e._v(" "),t("p",[e._v("A. Store the database user credentials in AWS Secrets Manager. Grant the necessary IAM permissions to allow the web servers to access AWS Secrets Manager.\nB. Store the database user credentials in AWS Systems Manager OpsCenter. Grant the necessary IAM permissions to allow the web servers to access OpsCenter.\nC. Store the database user credentials in a secure Amazon S3 bucket. Grant the necessary IAM permissions to allow the web servers to retrieve credentials and access the database.\nD. Store the database user credentials in files encrypted with AWS Key Management Service (AWS KMS) on the web server file system. The web server should be able to decrypt the files and access the database.")]),e._v(" "),t("h2",{attrs:{id:"q87"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q87"}},[e._v("#")]),e._v(" Q87")]),e._v(" "),t("p",[e._v("A company hosts an application on AWS Lambda functions that are invoked by an Amazon API Gateway API. The Lambda functions save customer data to an Amazon Aurora MySQL database. Whenever the company upgrades the database, the Lambda functions fail to establish database connections until the upgrade is complete. The result is that customer data is not recorded for some of the event.\nA solutions architect needs to design a solution that stores customer data that is created during database upgrades.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Provision an Amazon RDS proxy to sit between the Lambda functions and the database. Configure the Lambda functions to connect to the RDS proxy.\nB. Increase the run time of the Lambda functions to the maximum. Create a retry mechanism in the code that stores the customer data in the database.\nC. Persist the customer data to Lambda local storage. Configure new Lambda functions to scan the local storage to save the customer data to the database.\nD. Store the customer data in an Amazon Simple Queue Service (Amazon SQS) FIFO queue. Create a new Lambda function that polls the queue and stores the customer data in the database.")]),e._v(" "),t("h2",{attrs:{id:"q88"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q88"}},[e._v("#")]),e._v(" Q88")]),e._v(" "),t("p",[e._v("A survey company has gathered data for several years from areas in the United States. The company hosts the data in an Amazon S3 bucket that is 3 TB in size and growing. The company has started to share the data with a European marketing firm that has S3 buckets. The company wants to ensure that its data transfer costs remain as low as possible.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure the Requester Pays feature on the company's S3 bucket.\nB. Configure S3 Cross-Region Replication from the company's S3 bucket to one of the marketing firm's S3 buckets.\nC. Configure cross-account access for the marketing firm so that the marketing firm has access to the company's S3 bucket.\nD. Configure the company's S3 bucket to use S3 Intelligent-Tiering. Sync the S3 bucket to one of the marketing firm's S3 buckets.")]),e._v(" "),t("h2",{attrs:{id:"q89"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q89"}},[e._v("#")]),e._v(" Q89")]),e._v(" "),t("p",[e._v("A company uses Amazon S3 to store its confidential audit documents. The S3 bucket uses bucket policies to restrict access to audit team IAM user credentials according to the principle of least privilege. Company managers are worried about accidental deletion of documents in the S3 bucket and want a more secure solution.\nWhat should a solutions architect do to secure the audit documents?")]),e._v(" "),t("p",[e._v("A. Enable the versioning and MFA Delete features on the S3 bucket.\nB. Enable multi-factor authentication (MFA) on the IAM user credentials for each audit team IAM user account.\nC. Add an S3 Lifecycle policy to the audit team's IAM user accounts to deny the s3:DeleteObject action during audit dates.\nD. Use AWS Key Management Service (AWS KMS) to encrypt the S3 bucket and restrict audit team IAM user accounts from accessing the KMS key.")]),e._v(" "),t("h2",{attrs:{id:"q90"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q90"}},[e._v("#")]),e._v(" Q90")]),e._v(" "),t("p",[e._v("A company is using a SQL database to store movie data that is publicly accessible. The database runs on an Amazon RDS Single-AZ DB instance. A script runs queries at random intervals each day to record the number of new movies that have been added to the database. The script must report a final total during business hours.\nThe company's development team notices that the database performance is inadequate for development tasks when the script is running. A solutions architect must recommend a solution to resolve this issue.\nWhich solution will meet this requirement with the LEAST operational overhead?")]),e._v(" "),t("p",[e._v("A. Modify the DB instance to be a Multi-AZ deployment.\nB. Create a read replica of the database. Configure the script to query only the read replica.\nC. Instruct the development team to manually export the entries in the database at the end of each day.\nD. Use Amazon ElastiCache to cache the common queries that the script runs against the database.")])])}),[],!1,null,null,null);t.default=s.exports}}]);