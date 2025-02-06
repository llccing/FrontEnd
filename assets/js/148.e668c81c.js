(window.webpackJsonp=window.webpackJsonp||[]).push([[148],{392:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[e._v("#")]),e._v(" Result")]),e._v(" "),t("p",[e._v("correct questions: 45/65\ncorrect rate: 69% Fail\nTime: 1 hour 22 minutes")]),e._v(" "),t("h2",{attrs:{id:"_1-20-config-compute-lambda-subnet-s-cidr-range-in-the-database-s-security-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-20-config-compute-lambda-subnet-s-cidr-range-in-the-database-s-security-group"}},[e._v("#")]),e._v(" 1/20 Config compute (lambda) subnet's CIDR range in the database's security group.")]),e._v(" "),t("h2",{attrs:{id:"_2-20-rds-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-20-rds-snapshot"}},[e._v("#")]),e._v(" 2/20 RDS snapshot")]),e._v(" "),t("p",[e._v("This will save costs and don't reduce the capacity of the DB instance, when your requirement is only for a short period. such as continuous running about 48 hours once a month.")]),e._v(" "),t("h2",{attrs:{id:"_3-20-aurora-serverless"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-20-aurora-serverless"}},[e._v("#")]),e._v(" 3/20 Aurora Serverless")]),e._v(" "),t("p",[e._v("It's a relational database service, so it is compatible with MySQL and PostgreSQL. and don't have to manage the underlying infrastructure.")]),e._v(" "),t("h2",{attrs:{id:"_4-20-cross-account-iam-role"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-20-cross-account-iam-role"}},[e._v("#")]),e._v(" 4/20 Cross-account IAM role")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html")]),e._v(" "),t("p",[e._v("Basic steps from AI:")]),e._v(" "),t("p",[e._v("Sure, here's a concise summary of the article on setting up cross-account access using AWS IAM roles:")]),e._v(" "),t("h3",{attrs:{id:"summary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),t("p",[e._v("The article explains how to set up cross-account access in AWS by using IAM roles. This allows users in one AWS account (Account A) to access resources in another AWS account (Account B) without requiring individual credentials for each user.")]),e._v(" "),t("h3",{attrs:{id:"steps-to-set-up-cross-account-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-set-up-cross-account-access"}},[e._v("#")]),e._v(" Steps to Set Up Cross-Account Access")]),e._v(" "),t("ol",[t("li",[t("p",[t("strong",[e._v("Create a Role in Account B:")])]),e._v(" "),t("ul",[t("li",[e._v("Go to the IAM console in Account B.")]),e._v(" "),t("li",[e._v('Create a new role and select "Another AWS account" as the trusted entity.')]),e._v(" "),t("li",[e._v("Enter the Account ID of Account A.")]),e._v(" "),t("li",[e._v("Attach policies to the role to specify permissions.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Grant Access to the Role in Account A:")])]),e._v(" "),t("ul",[t("li",[e._v("In Account A, create or update IAM policies to allow users to assume the role in Account B.")]),e._v(" "),t("li",[e._v("Attach these policies to the users or groups who need access.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Assume the Role:")])]),e._v(" "),t("ul",[t("li",[e._v("Users in Account A can assume the role using the AWS Management Console, AWS CLI, or AWS SDKs.")]),e._v(" "),t("li",[e._v("When assuming the role, users receive temporary credentials to access resources in Account B.")])])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Verify Access:")])]),e._v(" "),t("ul",[t("li",[e._v("Test the setup by having a user in Account A assume the role and perform actions in Account B.")])])])]),e._v(" "),t("p",[e._v("This setup ensures secure cross-account access without sharing long-term credentials.")]),e._v(" "),t("h2",{attrs:{id:"_5-20-client-side-encryption-for-s3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-20-client-side-encryption-for-s3"}},[e._v("#")]),e._v(" 5/20 client-side encryption for S3")]),e._v(" "),t("p",[e._v("The requirement is ensure that data is encrypted at rest before the data is uploaded to S3. so the client-side encryption is the best choice.")]),e._v(" "),t("h2",{attrs:{id:"_6-20-lambda-function-can-run-max-for-15-minutes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-20-lambda-function-can-run-max-for-15-minutes"}},[e._v("#")]),e._v(" 6/20 lambda function can run max for 15 minutes.")]),e._v(" "),t("p",[e._v("use Fargate with ECS to process the data. and it's also a serverless solution.")]),e._v(" "),t("h2",{attrs:{id:"_7-20-sqs-fifo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-20-sqs-fifo"}},[e._v("#")]),e._v(" 7/20 SQS FIFO")]),e._v(" "),t("p",[e._v("Use it to process the data in order. and make sure the data is not processed multiple times.")]),e._v(" "),t("h2",{attrs:{id:"_8-20-cors-on-the-s3-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-20-cors-on-the-s3-bucket"}},[e._v("#")]),e._v(" 8/20 CORS on the S3 bucket")]),e._v(" "),t("p",[e._v("Cross-origin resource sharing (CORS) defines a way for client web applications that are loaded in one domain to interact with resources in a different domain. With CORS support, you can build rich client-side web applications with Amazon S3 and selectively allow cross-origin access to your Amazon S3 resources.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html")]),e._v(" "),t("h2",{attrs:{id:"_9-20-elasticcache-for-session-storage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-20-elasticcache-for-session-storage"}},[e._v("#")]),e._v(" 9/20 ElasticCache for Session storage.")]),e._v(" "),t("p",[e._v("ELB sticky session is used to keep the same client to the same instance.")]),e._v(" "),t("p",[e._v("Sticky sessions just keep a specific user hitting a specific instance. It doesn't maintain any other state. That will be up to your application to do.")]),e._v(" "),t("p",[e._v("Overloading some instances is a thing that can happen with sticky sessions, if most of your users that happen to be stuck to a specific instance come on at the same time, only that instance will get any traffic. Or if you scale up, the new instances will not get much traffic since everyone is stuck to the old instances.")]),e._v(" "),t("p",[e._v("This problem is the same with all load balancer types.")]),e._v(" "),t("p",[e._v("The better way to handle sessions is to have your application instances be stateless. Store the session data in a shared database instead. Redis gets used for this a lot.")]),e._v(" "),t("h2",{attrs:{id:"_10-20-transfer-family-which-support-sftp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-20-transfer-family-which-support-sftp"}},[e._v("#")]),e._v(" 10/20 Transfer Family which support SFTP.")]),e._v(" "),t("p",[e._v("S3 File Gateway support NFS and SMB. don't support SFTP.")]),e._v(" "),t("h2",{attrs:{id:"_11-20-nat-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-20-nat-gateway"}},[e._v("#")]),e._v(" 11/20 NAT Gateway")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html")]),e._v(" "),t("p",[e._v("support two connectivity types:")]),e._v(" "),t("ul",[t("li",[e._v("Public NAT Gateway:")]),e._v(" "),t("li",[e._v("Private NAT Gateway:")])]),e._v(" "),t("h2",{attrs:{id:"_12-20-interface-vpc-endpoint"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-20-interface-vpc-endpoint"}},[e._v("#")]),e._v(" 12/20 interface VPC endpoint")]),e._v(" "),t("p",[e._v("The traffic between your Amazon VPC and Kinesis Data Streams is not leaving the Amazon network.")]),e._v(" "),t("p",[e._v("the Gateway endpoint is used to route the traffic to the Amazon S3 and DynamoDB.")]),e._v(" "),t("h2",{attrs:{id:"_13-20-on-demand-capacity-reservation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-20-on-demand-capacity-reservation"}},[e._v("#")]),e._v(" 13/20 On-Demand Capacity Reservation")]),e._v(" "),t("p",[e._v("This can be reserved any duration. in opposite to Reserved Instances, you need to commit to a one- or three-year term.")]),e._v(" "),t("h2",{attrs:{id:"_14-20-nlb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-20-nlb"}},[e._v("#")]),e._v(" 14/20 NLB.")]),e._v(" "),t("p",[e._v("The NLB can also use as the target of some ec2 instances.\nso the NLB don't need to be replace with the ALB.")]),e._v(" "),t("p",[e._v("The important thing is the ASG Auto Scaling Group should extend multiple AZs. This make sure the high availability.")]),e._v(" "),t("h2",{attrs:{id:"_15-20-fargate-and-aurora-serverless"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-20-fargate-and-aurora-serverless"}},[e._v("#")]),e._v(" 15/20 Fargate and Aurora Serverless")]),e._v(" "),t("p",[e._v("Fargate is a serverless compute engine for containers.")]),e._v(" "),t("p",[e._v("Aurora Serverless is a serverless relational database service.")]),e._v(" "),t("p",[e._v("The serverless makes sure the application is always running. and it's also a cost-effective solution.")]),e._v(" "),t("h2",{attrs:{id:"_16-20-ebs-volume-is-restricted-to-the-same-az"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-20-ebs-volume-is-restricted-to-the-same-az"}},[e._v("#")]),e._v(" 16/20 EBS volume is restricted to the same AZ.")]),e._v(" "),t("p",[e._v("The proper way to restore the volume in different regions is to take snapshots and copy  them to another region.\nSnapshots can be used to launch new instances or create AMIs. EBS volumes are stored in S3, but are not accessible directly.\nAlso, the question does not mention data restoration.")]),e._v(" "),t("h2",{attrs:{id:"_17-20-same-as-the-15-20-use-fargate-and-aurora-serverless"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-20-same-as-the-15-20-use-fargate-and-aurora-serverless"}},[e._v("#")]),e._v(" 17/20 same as the 15/20, use Fargate and Aurora Serverless.")]),e._v(" "),t("h2",{attrs:{id:"_18-20-the-nat-gateway-must-be-placed-in-the-public-subnet"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-20-the-nat-gateway-must-be-placed-in-the-public-subnet"}},[e._v("#")]),e._v(" 18/20 The NAT Gateway must be placed in the public subnet.")]),e._v(" "),t("p",[e._v("For the NAT Gateway,")]),e._v(" "),t("p",[e._v("if you want to access the internet, you need to place the NAT Gateway in the public subnet.")]),e._v(" "),t("p",[e._v("if you want to access other VPCs or your on-premises data center, you need to place the NAT Gateway in the private subnet.")]),e._v(" "),t("h2",{attrs:{id:"_19-20-vpc-sharing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-20-vpc-sharing"}},[e._v("#")]),e._v(" 19/20 VPC sharing")]),e._v(" "),t("p",[e._v("VPC sharing is a feature that allows you to share a VPC with other AWS accounts.")]),e._v(" "),t("p",[e._v("VPC subnet sharing allows multiple AWS accounts to create their application resources, such as Amazon EC2 instances, Amazon Relational Database Service (RDS) databases, Amazon Redshift clusters, and AWS Lambda functions, into shared, centrally-managed virtual private clouds (VPCs). In this model, the account that owns the VPC (owner) shares one or more subnets with other accounts (participants) that belong to the same organization from AWS Organizations. After a subnet is shared, the participants can view, create, modify, and delete their application resources in the subnets shared with them. Participants cannot view, modify, or delete resources that belong to other participants or the VPC owner.")]),e._v(" "),t("h2",{attrs:{id:"_20-20-auto-scaling-on-the-rds-for-oracle-instance"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-20-auto-scaling-on-the-rds-for-oracle-instance"}},[e._v("#")]),e._v(" 20/20 Auto Scaling on the RDS for Oracle instance.")]),e._v(" "),t("p",[e._v("The Aurora would not be able to replace Oracle as it uses Oracle-specific PL/SQL functions.")])])}),[],!1,null,null,null);t.default=r.exports}}]);