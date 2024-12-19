(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{318:function(e,t,a){"use strict";a.r(t);var n=a(14),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q41"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q41"}},[e._v("#")]),e._v(" Q41")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("This question just screams AppFlow (SaaS integration)\nhttps://aws.amazon.com/appflow/")]),e._v(" "),t("p",[e._v('configuring Auto-Scaling also takes time when compared to AppFlow,\nin AWS\'s words "in just a few clicks"\nAmazon AppFlow is a fully managed integration service that enables you to securely transfer data between\nSoftware-as-a-Service (SaaS) applications like Salesforce, SAP, Zendesk, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks')]),e._v(" "),t("h2",{attrs:{id:"q42"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q42"}},[e._v("#")]),e._v(" Q42")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Deploying a gateway VPC endpoint for Amazon S3 is the most cost-effective way for the company to avoid Regional data transfer charges. A gateway VPC endpoint is a network gateway that allows communication between instances in a VPC and a service, such as Amazon S3, without requiring an Internet gateway or a NAT device. Data transfer between the VPC and the service through a gateway VPC endpoint is free of charge, while data transfer between the VPC and the Internet through an Internet gateway or NAT device is subject to data transfer charges. By using a gateway VPC endpoint, the company can reduce its data transfer costs by eliminating the need to transfer data through the NAT gateway to access Amazon S3. This option would provide the required connectivity to Amazon S3 and minimize data transfer charges.")]),e._v(" "),t("h2",{attrs:{id:"q43"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q43"}},[e._v("#")]),e._v(" Q43")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("A: VPN also goes through the internet and uses the bandwidth\nC: daily Snowball transfer is not really a long-term solution when it comes to cost and efficiency\nD: S3 limits don't change anything here")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Option B (correct). Establish a new AWS Direct Connect connection and direct backup traffic through this new connection.")]),e._v(" "),t("p",[e._v("AWS Direct Connect is a network service that allows you to establish a dedicated network connection from your on-premises data center to AWS. This connection bypasses the public Internet and can provide more reliable, lower-latency communication between your on-premises application and Amazon S3. By directing backup traffic through the AWS Direct Connect connection, you can minimize the impact on your internet bandwidth and ensure timely backups to S3.")]),e._v(" "),t("h2",{attrs:{id:"q44"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q44"}},[e._v("#")]),e._v(" Q44")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AB")]),e._v(" "),t("p",[e._v("The correct solution is AB, as you can see here:")]),e._v(" "),t("p",[e._v("https://aws.amazon.com/it/premiumsupport/knowledge-center/s3-audit-deleted-missing-objects/")]),e._v(" "),t("p",[e._v("It states the following:")]),e._v(" "),t("p",[e._v("To prevent or mitigate future accidental deletions, consider the following features:")]),e._v(" "),t("p",[e._v("Enable versioning to keep historical versions of an object.\nEnable Cross-Region Replication of objects.\nEnable MFA delete to require multi-factor authentication (MFA) when deleting an object version.")]),e._v(" "),t("h2",{attrs:{id:"q45"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q45"}},[e._v("#")]),e._v(" Q45")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" BE")]),e._v(" "),t("p",[e._v("Create an Amazon Simple Queue Service (Amazon SQS) queue, and subscribe it to the SNS topic: This will decouple the data ingestion process and ensure that messages are not lost if the Lambda function fails to process them immediately")]),e._v(" "),t("p",[e._v("Modify the Lambda function to read from an Amazon Simple Queue Service (Amazon SQS) queue: This ensures that the Lambda function can process the messages from the SQS queue, providing a reliable way to handle data ingestion even if there are network issues.")]),e._v(" "),t("h2",{attrs:{id:"q46"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q46"}},[e._v("#")]),e._v(" Q46")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Amazon Macie is a data security and data privacy service that uses machine learning (ML) and pattern matching to discover and protect your sensitive data.")]),e._v(" "),t("h2",{attrs:{id:"q47"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q47"}},[e._v("#")]),e._v(" Q47")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("Reserved instances are for long term so on-demand will be the right choice - Answer D")]),e._v(" "),t("p",[e._v("Confirmed! Reserved instances require a fixed one-year or three-year commitment. See https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-capacity-reservations.html#capacity-reservations-differences")]),e._v(" "),t("hr"),e._v(" "),t("p",[t("em",[t("strong",[e._v("CORRECT")])]),e._v("\nOption D. Create an On-Demand Capacity Reservation that specifies the Region and three Availability Zones needed.")]),e._v(" "),t("p",[e._v("An On-Demand Capacity Reservation is a type of Amazon EC2 reservation that enables you to create and manage reserved capacity on Amazon EC2. With an On-Demand Capacity Reservation, you can specify the Region and Availability Zones where you want to reserve capacity, and the number of EC2 instances you want to reserve. This allows you to guarantee capacity in specific Availability Zones in a specific Region.")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("WRONG")])]),e._v("\nOption A, purchasing Reserved Instances that specify the Region needed, would not guarantee capacity in specific Availability Zones.\nOption B, creating an On-Demand Capacity Reservation that specifies the Region needed, would not guarantee capacity in specific Availability Zones.\nOption C, purchasing Reserved Instances that specify the Region and three Availability Zones needed, would not guarantee capacity in specific Availability Zones as Reserved Instances do not provide capacity reservations.")])])}),[],!1,null,null,null);t.default=i.exports}}]);