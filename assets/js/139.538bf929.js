(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{381:function(e,t,a){"use strict";a.r(t);var n=a(14),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q181"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q181"}},[e._v("#")]),e._v(" Q181")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Data is processed sequentially, but the order of results does not matter => SQS; if order matters => SQS FIFO")]),e._v(" "),t("h2",{attrs:{id:"q182"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q182"}},[e._v("#")]),e._v(" Q182")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data\nStandby DB in Multi-AZ- synchronous replication")]),e._v(" "),t("p",[e._v("Read Replica always asynchronous. so option C is ignored.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("RDS Multi-AZ = Synchronous = High Availability\nRead Replica = Asynchronous = Disaster Recovery (DR)")]),e._v(" "),t("h2",{attrs:{id:"q183"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q183"}},[e._v("#")]),e._v(" Q183")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("A - is correct, because Dynamodb on-demand scales write and read capacity\nB - Aurora auto scaling scales only read replicas")]),e._v(" "),t("h2",{attrs:{id:"q184"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q184"}},[e._v("#")]),e._v(" Q184")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A or C")]),e._v(" "),t("p",[e._v('Answer A: During Lambda function creation select "Advanced Settings" select "Enable VPC", this will allow you to select VPC, Subnets and SecurityGroup for your Lambda function. This is the way Lambda can get controlled access to resouces in your VPC.')]),e._v(" "),t("p",[e._v("Default Lambda Settings:\nWhen you create a Lambda function without specifying a VPC, the Lambda function does not get associated with any particular VPC. By default, Lambda functions are not deployed within a VPC and do not have access to resources within a VPC, such as EC2 instances, RDS databases, or Elasticache clusters, unless you explicitly configure the Lambda function to connect to a VPC.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.")]),e._v(" "),t("p",[e._v("By updating the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect, is the most appropriate solution. By updating the route tables, you can specify the route for traffic from the Lambda function to the IP address range of the on-premises data center via the Direct Connect connection. This ensures that the Lambda function can securely communicate with the database in the private subnet of the data center.")]),e._v(" "),t("h2",{attrs:{id:"q185"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q185"}},[e._v("#")]),e._v(" Q185")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("B. Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("The short name or full Amazon Resource Name (ARN) of the AWS Identity and Access Management role that grants containers in the task permission to call AWS APIs on your behalf.")]),e._v(" "),t("h2",{attrs:{id:"q186"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q186"}},[e._v("#")]),e._v(" Q186")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B\nCorrect is B\nFSx --\x3e shared Windows file system（SMB）\nEFS --\x3e Linux NFS")]),e._v(" "),t("h2",{attrs:{id:"q187"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q187"}},[e._v("#")]),e._v(" Q187")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v("  AD")]),e._v(" "),t("p",[e._v("Highly available application - Amazon RDS DB instance in Multi-AZ\nlittle manual intervention - Fargate")]),e._v(" "),t("h2",{attrs:{id:"q188"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q188"}},[e._v("#")]),e._v(" Q188")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Answer is A\nAWS Transfer Family securely scales your recurring business-to-business file transfers to AWS Storage services using SFTP, FTPS, FTP, and AS2 protocols.\nhttps://aws.amazon.com/aws-transfer-family/")]),e._v(" "),t("h2",{attrs:{id:"q189"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q189"}},[e._v("#")]),e._v(" Q189")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" BD")]),e._v(" "),t("p",[e._v("should be BD\nC could have been fine, but key rotation is activate per default on SSE-S3, and no way to deactivate it if I am not wrong")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Answer: BD:\nB: S3 Compliance Mode ensures no one can overwrite or delete the object.\nD: Customer-managed KMS Key: (must be enabled) automatic every 1 year")]),e._v(" "),t("p",[e._v("Options not right:\nA: Governance mode allows override and delete.\nC: SSE-S3 customer do not have control on rotation of keys(Which is once a year in our requirement)\nE: As per AWS Documentation, Customer Imported keys cannot be auto rotated.")]),e._v(" "),t("h2",{attrs:{id:"q190"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q190"}},[e._v("#")]),e._v(" Q190")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Elastic Beanstalk can test Blue/Green deployment. Switching Dev to prod/ prod to dev easily.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("A and C are not allowing for feature testing.\nB and D allow feature testing. D requires overhead of containerisation as well as the LB controller to selectively chose containers for features (assuming on how this might be implemented). EBS allows switching between environment like A/B testing but on whole site. Expensive but cost is not a concern for this question.")])])}),[],!1,null,null,null);t.default=s.exports}}]);