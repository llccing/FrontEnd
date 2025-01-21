(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{517:function(e,t,a){"use strict";a.r(t);var i=a(14),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q91"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q91"}},[e._v("#")]),e._v(" Q91")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Gateway endpoints provide reliable connectivity to Amazon S3 and DynamoDB without requiring an internet gateway or a NAT device for your VPC. It should be option A.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/privatelink/gateway-endpoints.html")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("B. Creating an S3 in a private subnet restricts direct internet access to the bucket but does not provide a direct and secure connection between the EC2and the S3. The application would still need to traverse the internet to access the S3 API.")]),e._v(" "),t("p",[e._v("C. Creating an S3 in the same Region as the EC2 does not inherently prevent traffic from traversing the internet.")]),e._v(" "),t("p",[e._v("D. Configuring a NAT gateway allows outbound internet connectivity for resources in private subnets, but it does not provide a direct and secure connection to the S3 service. The traffic from the EC2 to the S3 API would still traverse the internet.")]),e._v(" "),t("p",[e._v("The most suitable solution is to configure an S3 gateway endpoint (option A). It provides a secure and private connection between the VPC and the S3 service without requiring the traffic to traverse the internet. With an S3 gateway endpoint, the EC2 can access the S3 API directly within the VPC, meeting the security requirement of preventing traffic from traveling across the internet.")]),e._v(" "),t("h2",{attrs:{id:"q92"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q92"}},[e._v("#")]),e._v(" Q92")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AC")]),e._v(" "),t("p",[e._v("A: VPC S3 gateway for direct connection (no public internet) to access S3\nC: Bucket policy to secure access and only allow the VPC application tier to access it")]),e._v(" "),t("p",[e._v("B: Opens up to public\nD: Not secure to copy credentials\nE: NAT instance (obsolete now) is not useful for limiting resource access, it's for subnet connections")]),e._v(" "),t("h2",{attrs:{id:"q93"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q93"}},[e._v("#")]),e._v(" Q93")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Aura MySQL is very fast in comparison to RDS for creating a clone of DB, you can create a even clone of a clone while you still work on your own clone, this will allow the dev team continue working during cloning step.\nhttps://aws.amazon.com/blogs/aws/amazon-aurora-fast-database-cloning/")]),e._v(" "),t("h2",{attrs:{id:"q94"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q94"}},[e._v("#")]),e._v(" Q94")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("A. Configuring EMR and an Aurora DB cluster for this use case would introduce unnecessary complexity and operational overhead. EMR is typically used for processing large datasets and running big data frameworks like Apache Spark or Hadoop.")]),e._v(" "),t("p",[e._v("B. While using S3 event notifications and SQS for decoupling is a good approach, using EC2 to process the data would introduce operational overhead in terms of managing and scaling the EC2.")]),e._v(" "),t("p",[e._v("D. Using EventBridge and Kinesis Data Streams for this use case would introduce additional complexity and operational overhead compared to the other options. EventBridge and Kinesis are typically used for real-time streaming and processing of large volumes of data.")]),e._v(" "),t("p",[e._v("In summary, option C is the recommended solution as it provides a serverless and scalable approach for processing uploaded files using S3 event notifications, SQS, and Lambda. It offers low operational overhead, automatic scaling, and efficient handling of varying demand. Storing the resulting JSON file in DynamoDB aligns with the requirement of saving the data for later analysis.")]),e._v(" "),t("h2",{attrs:{id:"q95"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q95"}},[e._v("#")]),e._v(" Q95")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("A. In a Multi-AZ deployment, a standby replica of the database is created in a different AZ for high availability and automatic failover purposes. However, serving read requests from the primary AZ alone would not effectively separate read and write traffic. Both read and write traffic would still be directed to the primary database instance, which might not fully optimize performance.")]),e._v(" "),t("p",[e._v("B. The secondary instance in a Multi-AZ deployment is intended for failover and backup purposes, not for actively serving read traffic. It operates in a standby mode and is not optimized for handling read queries efficiently.")]),e._v(" "),t("p",[e._v("C. Configuring the read replicas with half of the compute and storage resources as the source database might not be optimal. It's generally recommended to configure the read replicas with the same compute and storage resources as the source database to ensure they can handle the read workload effectively.")]),e._v(" "),t("p",[e._v("D. Configuring the read replicas with the same compute and storage resources as the source database ensures that they can handle the read workload efficiently and provide the required performance boost.")]),e._v(" "),t("h2",{attrs:{id:"q96"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q96"}},[e._v("#")]),e._v(" Q96")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Ans C - must be in us-east-1 region and CIDR address is in allowable range (/24)")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("The first rule allows users with the specified IP CIDR to terminate instances, and the second rule specifies that the region must be us-east-1 for the termination process to be allowed, hence C is the correct answer.")]),e._v(" "),t("h2",{attrs:{id:"q97"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q97"}},[e._v("#")]),e._v(" Q97")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("A. EFS does not provide native integration with AD for access control. While you can configure EFS to work with AD, it requires additional setup and is not as straightforward as using a dedicated Windows file system like FSx for Windows File Server.")]),e._v(" "),t("p",[e._v("B. It may introduce additional complexity for this use case. Creating an SMB file share using AWS Storage Gateway would require maintaining the gateway and managing the synchronization between on-premises and AWS storage.")]),e._v(" "),t("p",[e._v("C. S3 does not natively provide the SMB file protocol required for MS SharePoint and Windows shared file storage. While it is possible to mount an S3 as a volume using 3rd-party tools or configurations, it is not the recommended.")]),e._v(" "),t("p",[e._v("D. FSx for Windows File Server is a fully managed, highly available file storage service that is compatible with MSWindows shared file storage requirements. It provides native integration with AD, allowing for seamless access control and authentication using existing AD user accounts.")]),e._v(" "),t("h2",{attrs:{id:"q98"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q98"}},[e._v("#")]),e._v(" Q98")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html")]),e._v(" "),t("p",[e._v("this is important part:\nImmediately after a message is received, it remains in the queue. To prevent other consumers from processing the message again, Amazon SQS sets a visibility timeout, a period of time during which Amazon SQS prevents other consumers from receiving and processing the message. The default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The maximum is 12 hours.")]),e._v(" "),t("h2",{attrs:{id:"q99"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q99"}},[e._v("#")]),e._v(" Q99")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("Answer is D.\nLustre in the question is only available as FSx\nhttps://aws.amazon.com/fsx/lustre/")]),e._v(" "),t("h2",{attrs:{id:"q100"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q100"}},[e._v("#")]),e._v(" Q100")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("Correct Answer is C: EBS is not highly available.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("EBS volumes are not Multi-AZ. EBS io2 types are multi-attach within the same AZ. EFS is multi-AZ")])])}),[],!1,null,null,null);t.default=n.exports}}]);