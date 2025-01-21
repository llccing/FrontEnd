(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{513:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q71"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q71"}},[e._v("#")]),e._v(" Q71")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v('A - DynamoDB global tables provides multi-Region, and multi-active database, but it not valid "in case of data corruption". In this case, you need a backup. This solutions isn\'t valid.\n'),t("strong",[e._v("B")]),e._v(" - Point in Time Recovery is designed as a continuous backup juts to recover it fast. It covers perfectly the RPO, and probably the RTO. https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html\nC - A daily export will not cover the RPO of 15min.\nD - DynamoDB is serverless... so what are these EBS snapshots taken from???")]),e._v(" "),t("h2",{attrs:{id:"q72"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q72"}},[e._v("#")]),e._v(" Q72")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("The best solution to reduce data transfer costs for an application frequently accessing S3 buckets in the same region is option D - Deploy an S3 VPC gateway endpoint into the VPC and attach an endpoint policy that allows access to the S3 buckets.")]),e._v(" "),t("p",[e._v("The key points:")]),e._v(" "),t("ul",[t("li",[e._v("S3 gateway endpoints allow private connections between VPCs and S3 without going over the public internet.")]),e._v(" "),t("li",[e._v("This avoids data transfer fees for traffic between the VPC and S3 within the same region.")]),e._v(" "),t("li",[e._v("An endpoint policy controls access to specific S3 buckets.")])]),e._v(" "),t("h2",{attrs:{id:"q73"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q73"}},[e._v("#")]),e._v(" Q73")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" CD")]),e._v(" "),t("p",[e._v("C because from on-prem network to bastion through internet (using on-prem resource's public IP),\nD because bastion and ec2 is in same VPC, meaning bastion can communicate to EC2 via it's private IP address")]),e._v(" "),t("h2",{attrs:{id:"q74"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q74"}},[e._v("#")]),e._v(" Q74")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AC")]),e._v(" "),t("p",[e._v("Web Server Rules: Inbound traffic from 443 (HTTPS) Source 0.0.0.0/0 - Allows inbound HTTPS access from any IPv4 address\nDatabase Rules : 1433 (MS SQL)The default port to access a Microsoft SQL Server database, for example, on an Amazon RDS instance")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/security-group-rules-reference.html")]),e._v(" "),t("h2",{attrs:{id:"q75"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q75"}},[e._v("#")]),e._v(" Q75")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v('The catch phrase is "scale up when communication failures are detected" Scaling should not be based on communication failures, that\'ll be crying over spilled milk ! or rather too late. So D is wrong.')]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Ans A - keep it simple: API Gateway + Lambda + SQS\nD won't work: it relies upon a failure detected - by then its too late)")]),e._v(" "),t("h2",{attrs:{id:"q76"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q76"}},[e._v("#")]),e._v(" Q76")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("DMS is for databases and here refers to “JSON files”. Public internet is not reliable. So best option is B.")]),e._v(" "),t("h2",{attrs:{id:"q77"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q77"}},[e._v("#")]),e._v(" Q77")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("(A) - You don't need to deploy an EC2 instance to host an API - Operational overhead\n(B) - Same as A\n("),t("strong",[e._v("C")]),e._v(") - Is the answer\n(D) - AWS Glue gets data from S3, not from API GW. AWS Glue could do ETL by itself, so don't need lambda. Non sense. https://aws.amazon.com/glue/")]),e._v(" "),t("p",[e._v("===>\nI don''t understand is why we should use Lambda in between to transform data. To me, Kinesis data firehose is enough as it is an extract, transform, and load (ETL) service.")]),e._v(" "),t("p",[e._v("===>\nIt is because they assume that Kinesis Data Firehose built-in transformations are not enough. So you have to use specific lambda transformation. Please refer to this link : https://aws.amazon.com/kinesis/data-firehose/#:~:text=Amazon%20Kinesis%20Data%20Firehose%20is,data%20stores%2C%20and%20analytics%20services.")]),e._v(" "),t("h2",{attrs:{id:"q78"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q78"}},[e._v("#")]),e._v(" Q78")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Agreed with option B is the right one. AWS backup retention goes from 1 day to 100 years (or even indefinitely, if you do not enter a retention period), so will meet the requirements.")]),e._v(" "),t("h2",{attrs:{id:"q79"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q79"}},[e._v("#")]),e._v(" Q79")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("On-demand mode is a good option if any of the following are true:")]),e._v(" "),t("ul",[t("li",[e._v("You create new tables with unknown workloads.")]),e._v(" "),t("li",[e._v("You have unpredictable application traffic.")]),e._v(" "),t("li",[e._v("You prefer the ease of paying for only what you use.")])]),e._v(" "),t("h2",{attrs:{id:"q80"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q80"}},[e._v("#")]),e._v(" Q80")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Share the existing KMS key with the MSP external account because it has already been used to encrypt the AMI snapshot.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html")])])}),[],!1,null,null,null);t.default=n.exports}}]);