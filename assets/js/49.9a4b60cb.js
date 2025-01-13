(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{509:function(e,t,a){"use strict";a.r(t);var s=a(14),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q101"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q101"}},[e._v("#")]),e._v(" Q101")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("The correct answer is option A.")]),e._v(" "),t("p",[e._v("To enable Internet access for the private subnets, the solutions architect should create three NAT gateways, one for each public subnet in each Availability Zone (AZ). NAT gateways allow private instances to initiate outbound traffic to the Internet but do not allow inbound traffic from the Internet to reach the private instances.")]),e._v(" "),t("p",[e._v("The solutions architect should then create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ. This will allow instances in the private subnets to access the Internet through the NAT gateways in the public subnets.")]),e._v(" "),t("h2",{attrs:{id:"q102"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q102"}},[e._v("#")]),e._v(" Q102")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B and E")]),e._v(" "),t("p",[e._v("E is correct\nhttps://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/")]),e._v(" "),t("h2",{attrs:{id:"q103"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q103"}},[e._v("#")]),e._v(" Q103")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v('This is the purpose of bookmarks: "AWS Glue tracks data that has already been processed during a previous run of an ETL job by persisting state information from the job run. This persisted state information is called a job bookmark. Job bookmarks help AWS Glue maintain state information and prevent the reprocessing of old data."\nhttps://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html')]),e._v(" "),t("h2",{attrs:{id:"q104"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q104"}},[e._v("#")]),e._v(" Q104")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AC")]),e._v(" "),t("p",[e._v("I think it is AC, reason is they require a solution that is highly available. AWS Shield can handle the DDoS attacks. To make the solution HA you can use cloud front. AC seems to be the best answer imo.")]),e._v(" "),t("h2",{attrs:{id:"q105"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q105"}},[e._v("#")]),e._v(" Q105")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("Best way to check it... The question is taken from the example shown here in the documentation:\nhttps://docs.aws.amazon.com/eventbridge/latest/userguide/eb-use-resource-based.html#eb-lambda-permissions")]),e._v(" "),t("h2",{attrs:{id:"q106"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q106"}},[e._v("#")]),e._v(" Q106")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("SSE-KMS provides a secure and efficient way to encrypt data at rest in S3. SSE-KMS uses KMS to manage the encryption keys securely. With SSE-KMS, encryption keys can be automatically rotated using KMS key rotation feature, which simplifies the key management process and ensures compliance with the requirement to rotate keys every year.")]),e._v(" "),t("p",[e._v("Additionally, SSE-KMS provides built-in audit logging for encryption key usage through CloudTrail, which captures API calls related to the management and usage of KMS keys. This meets the requirement for logging key usage for auditing purposes.")]),e._v(" "),t("p",[e._v("Option A (SSE-C) requires customers to provide their own encryption keys, but it does not provide key rotation or built-in logging of key usage.\nOption B (SSE-S3) uses Amazon S3 managed keys for encryption, which simplifies key management but does not provide key rotation or detailed key usage logging.\nOption C (SSE-KMS with manual rotation) uses AWS KMS keys but requires manual rotation, which is less operationally efficient than the automatic key rotation available with option D.")]),e._v(" "),t("h2",{attrs:{id:"q107"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q107"}},[e._v("#")]),e._v(" Q107")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("I dont understand why you will vote B?\nhow are you going to store data with just lambda?")]),e._v(" "),t("blockquote",[t("p",[e._v("Which action meets these requirements for storing and retrieving location data")])]),e._v(" "),t("p",[e._v("In this use case there will obviously be a ton of data and you want to get real-time location data of the bicycles, and to analyze all these info kinesis is the one that makes most sense here.")]),e._v(" "),t("h2",{attrs:{id:"q108"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q108"}},[e._v("#")]),e._v(" Q108")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("The correct answer is "),t("strong",[e._v("D")]),e._v(": Subscribe to an RDS event notification and send an Amazon Simple Notification Service (Amazon SNS) topic fanned out to multiple Amazon Simple Queue Service (Amazon SQS) queues. Use AWS Lambda functions to update the targets.")]),e._v(" "),t("h3",{attrs:{id:"reasoning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#reasoning"}},[e._v("#")]),e._v(" Reasoning:")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("RDS Event Notifications")]),e._v(": While RDS event notifications can alert you to changes in the database instance status, they do not directly notify you of specific data changes within tables. Thus, using RDS event notifications alone is not sufficient for capturing when a specific record, such as an automobile listing, is updated or deleted.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("SNS and SQS")]),e._v(": By using SNS to fan out messages to multiple SQS queues, you can effectively distribute the information to multiple targets. Each target can have its own SQS queue, allowing for independent processing. This setup is scalable and decouples the message distribution from the processing logic.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("AWS Lambda Functions")]),e._v(": These can be triggered by messages in the SQS queues to perform specific actions required by each target system, such as updating or removing listings.")])])]),e._v(" "),t("h3",{attrs:{id:"why-not-a-or-b"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-not-a-or-b"}},[e._v("#")]),e._v(" Why Not A or B:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Direct Lambda Trigger on RDS")]),e._v(": AWS Lambda cannot be directly triggered by changes in RDS databases without additional services like DMS or Aurora with Kinesis. Therefore, options A and B, which suggest directly triggering Lambda on database updates, are not feasible.")])]),e._v(" "),t("h3",{attrs:{id:"why-not-c"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-not-c"}},[e._v("#")]),e._v(" Why Not C:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("RDS Event Notification to SQS/SNS")]),e._v(": While this option uses RDS event notifications, it suggests sending them to an SQS queue first, which is not as efficient for fanning out to multiple systems compared to using SNS directly for fanning out.")])]),e._v(" "),t("p",[e._v("Thus, option D provides a more scalable and decoupled solution using SNS for fanning out messages to multiple SQS queues and Lambda functions for processing.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("key point: Even though lambda is integrated with RDS, it is not best practices for multiple consumers.\nSNS + SQS Fan-Out should be chosen\nhttps://aws.amazon.com/getting-started/hands-on/send-fanout-event-notifications/?nc1=h_ls")]),e._v(" "),t("h2",{attrs:{id:"q109"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q109"}},[e._v("#")]),e._v(" Q109")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v('A - No as "specific users can delete"\nB - No as "nonspecific amount of time"\nC - No as "prevent the data from being change"\nD - The answer: "The Object Lock legal hold operation enables you to place a legal hold on an object version. Like setting a retention period, a legal hold prevents an object version from being overwritten or deleted. However, a legal hold doesn\'t have an associated retention period and remains in effect until removed." https://docs.aws.amazon.com/AmazonS3/latest/userguide/batch-ops-legal-hold.html')]),e._v(" "),t("h2",{attrs:{id:"q110"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q110"}},[e._v("#")]),e._v(" Q110")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C and D")]),e._v(" "),t("p",[e._v("CD is the more appropriate solution bec. when the user uploads the images, it will directly uploaded to the S3 while if BD, when the user uploads the images, it will first go to the web server then to the S3 bucket and This can cause a slow upload process since the web server is processing the download from the user, then upload to the s3 bucket.")])])}),[],!1,null,null,null);t.default=o.exports}}]);