(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{511:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q121"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q121"}},[e._v("#")]),e._v(" Q121")]),e._v(" "),t("p",[e._v("A company is running an online transaction processing (OLTP) workload on AWS. This workload uses an unencrypted Amazon RDS DB instance in a Multi-AZ deployment. Daily database snapshots are taken from this instance.\nWhat should a solutions architect do to ensure the database and snapshots are always encrypted moving forward?")]),e._v(" "),t("p",[e._v("A. Encrypt a copy of the latest DB snapshot. Replace existing DB instance by restoring the encrypted snapshot.\nB. Create a new encrypted Amazon Elastic Block Store (Amazon EBS) volume and copy the snapshots to it. Enable encryption on the DB instance.\nC. Copy the snapshots and enable encryption using AWS Key Management Service (AWS KMS) Restore encrypted snapshot to an existing DB instance.\nD. Copy the snapshots to an Amazon S3 bucket that is encrypted using server-side encryption with AWS Key Management Service (AWS KMS) managed keys (SSE-KMS).")]),e._v(" "),t("h2",{attrs:{id:"q122"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q122"}},[e._v("#")]),e._v(" Q122")]),e._v(" "),t("p",[e._v("A company wants to build a scalable key management infrastructure to support developers who need to encrypt data in their applications.\nWhat should a solutions architect do to reduce the operational burden?")]),e._v(" "),t("p",[e._v("A. Use multi-factor authentication (MFA) to protect the encryption keys.\nB. Use AWS Key Management Service (AWS KMS) to protect the encryption keys.\nC. Use AWS Certificate Manager (ACM) to create, store, and assign the encryption keys.\nD. Use an IAM policy to limit the scope of users who have access permissions to protect the encryption keys.")]),e._v(" "),t("h2",{attrs:{id:"q123"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q123"}},[e._v("#")]),e._v(" Q123")]),e._v(" "),t("p",[e._v("A company has a dynamic web application hosted on two Amazon EC2 instances. The company has its own SSL certificate, which is on each instance to perform SSL termination.\nThere has been an increase in traffic recently, and the operations team determined that SSL encryption and decryption is causing the compute capacity of the web servers to reach their maximum limit.\nWhat should a solutions architect do to increase the application's performance?")]),e._v(" "),t("p",[e._v("A. Create a new SSL certificate using AWS Certificate Manager (ACM). Install the ACM certificate on each instance.\nB. Create an Amazon S3 bucket Migrate the SSL certificate to the S3 bucket. Configure the EC2 instances to reference the bucket for SSL termination.\nC. Create another EC2 instance as a proxy server. Migrate the SSL certificate to the new instance and configure it to direct connections to the existing EC2 instances.\nD. Import the SSL certificate into AWS Certificate Manager (ACM). Create an Application Load Balancer with an HTTPS listener that uses the SSL certificate from ACM.")]),e._v(" "),t("h2",{attrs:{id:"q124"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q124"}},[e._v("#")]),e._v(" Q124")]),e._v(" "),t("p",[e._v("A company has a highly dynamic batch processing job that uses many Amazon EC2 instances to complete it. The job is stateless in nature, can be started and stopped at any given time with no negative impact, and typically takes upwards of 60 minutes total to complete. The company has asked a solutions architect to design a scalable and cost-effective solution that meets the requirements of the job.\nWhat should the solutions architect recommend?")]),e._v(" "),t("p",[e._v("A. Implement EC2 Spot Instances.\nB. Purchase EC2 Reserved Instances.\nC. Implement EC2 On-Demand Instances.\nD. Implement the processing on AWS Lambda.")]),e._v(" "),t("h2",{attrs:{id:"q125"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q125"}},[e._v("#")]),e._v(" Q125")]),e._v(" "),t("p",[e._v("A company runs its two-tier ecommerce website on AWS. The web tier consists of a load balancer that sends traffic to Amazon EC2 instances. The database tier uses an Amazon RDS DB instance. The EC2 instances and the RDS DB instance should not be exposed to the public internet. The EC2 instances require internet access to complete payment processing of orders through a third-party web service. The application must be highly available.\nWhich combination of configuration options will meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Use an Auto Scaling group to launch the EC2 instances in private subnets. Deploy an RDS Multi-AZ DB instance in private subnets.\nB. Configure a VPC with two private subnets and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the private subnets.\nC. Use an Auto Scaling group to launch the EC2 instances in public subnets across two Availability Zones. Deploy an RDS Multi-AZ DB instance in private subnets.\nD. Configure a VPC with one public subnet, one private subnet, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnet.\nE. Configure a VPC with two public subnets, two private subnets, and two NAT gateways across two Availability Zones. Deploy an Application Load Balancer in the public subnets.")]),e._v(" "),t("h2",{attrs:{id:"q126"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q126"}},[e._v("#")]),e._v(" Q126")]),e._v(" "),t("p",[e._v("A solutions architect needs to implement a solution to reduce a company's storage costs. All the company's data is in the Amazon S3 Standard storage class. The company must keep all data for at least 25 years. Data from the most recent 2 years must be highly available and immediately retrievable.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive immediately.\nB. Set up an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 2 years.\nC. Use S3 Intelligent-Tiering. Activate the archiving option to ensure that data is archived in S3 Glacier Deep Archive.\nD. Set up an S3 Lifecycle policy to transition objects to S3 One Zone-Infrequent Access (S3 One Zone-IA) immediately and to S3 Glacier Deep Archive after 2 years.")]),e._v(" "),t("h2",{attrs:{id:"q127"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q127"}},[e._v("#")]),e._v(" Q127")]),e._v(" "),t("p",[e._v("A media company is evaluating the possibility of moving its systems to the AWS Cloud. The company needs at least 10 TB of storage with the maximum possible I/O performance for video processing, 300 TB of very durable storage for storing media content, and 900 TB of storage to meet requirements for archival media that is not in use anymore.\nWhich set of services should a solutions architect recommend to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Amazon EBS for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage\nB. Amazon EBS for maximum performance, Amazon EFS for durable data storage, and Amazon S3 Glacier for archival storage\nC. Amazon EC2 instance store for maximum performance, Amazon EFS for durable data storage, and Amazon S3 for archival storage\nD. Amazon EC2 instance store for maximum performance, Amazon S3 for durable data storage, and Amazon S3 Glacier for archival storage")]),e._v(" "),t("h2",{attrs:{id:"q128"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q128"}},[e._v("#")]),e._v(" Q128")]),e._v(" "),t("p",[e._v("A company wants to run applications in containers in the AWS Cloud. These applications are stateless and can tolerate disruptions within the underlying infrastructure. The company needs a solution that minimizes cost and operational overhead.\nWhat should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use Spot Instances in an Amazon EC2 Auto Scaling group to run the application containers.\nB. Use Spot Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.\nC. Use On-Demand Instances in an Amazon EC2 Auto Scaling group to run the application containers.\nD. Use On-Demand Instances in an Amazon Elastic Kubernetes Service (Amazon EKS) managed node group.")]),e._v(" "),t("h2",{attrs:{id:"q129"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q129"}},[e._v("#")]),e._v(" Q129")]),e._v(" "),t("p",[e._v("A company is running a multi-tier web application on premises. The web application is containerized and runs on a number of Linux hosts connected to a PostgreSQL database that contains user records. The operational overhead of maintaining the infrastructure and capacity planning is limiting the company's growth. A solutions architect must improve the application's infrastructure.\nWhich combination of actions should the solutions architect take to accomplish this? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Migrate the PostgreSQL database to Amazon Aurora.\nB. Migrate the web application to be hosted on Amazon EC2 instances.\nC. Set up an Amazon CloudFront distribution for the web application content.\nD. Set up Amazon ElastiCache between the web application and the PostgreSQL database.\nE. Migrate the web application to be hosted on AWS Fargate with Amazon Elastic Container Service (Amazon ECS).")]),e._v(" "),t("h2",{attrs:{id:"q130"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q130"}},[e._v("#")]),e._v(" Q130")]),e._v(" "),t("p",[e._v("An application runs on Amazon EC2 instances across multiple Availability Zonas. The instances run in an Amazon EC2 Auto Scaling group behind an Application Load Balancer. The application performs best when the CPU utilization of the EC2 instances is at or near 40%.\nWhat should a solutions architect do to maintain the desired performance across all instances in the group?")]),e._v(" "),t("p",[e._v("A. Use a simple scaling policy to dynamically scale the Auto Scaling group.\nB. Use a target tracking policy to dynamically scale the Auto Scaling group.\nC. Use an AWS Lambda function ta update the desired Auto Scaling group capacity.\nD. Use scheduled scaling actions to scale up and scale down the Auto Scaling group.")])])}),[],!1,null,null,null);t.default=o.exports}}]);