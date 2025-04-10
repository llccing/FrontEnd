(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{379:function(e,t,a){"use strict";a.r(t);var n=a(14),o=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q111"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q111"}},[e._v("#")]),e._v(" Q111")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v('Answer is D as the "HIGHEST available" and less "operational complex"\nThe "Amazon RDS for MySQL with Multi-AZ enabled" option excludes A and B\nThe "Auto Scaling group" is more available and reduces operational complexity in case of incidents (as remediation it is automated) than just adding one more instance. This excludes C.')]),e._v(" "),t("p",[e._v("C and D to choose from based on\nD over C since is configured")]),e._v(" "),t("h2",{attrs:{id:"q112"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q112"}},[e._v("#")]),e._v(" Q112")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("less operational overhead means A: Fargate (no EC2), move the containers on ECS, autoscaling for growth and ALB to balance consumption.\nB - requires configure EC2\nC - requires add code (developpers)\nD - seems like the most complex approach, like re-architecting the app to take advantage of an HPC platform.")]),e._v(" "),t("h2",{attrs:{id:"q113"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q113"}},[e._v("#")]),e._v(" Q113")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v('A. Use AWS DataSync to move the data. Create a custom transformation job by using AWS Glue. - No BW available for DataSync, so "asap" will be weeks/months (?)\nB. Order an AWS Snowcone device to move the data. Deploy the transformation application to the device. - Snowcone will just store 14TB (SSD configuration).\n'),t("strong",[e._v("C")]),e._v(". Order an AWS Snowball Edge Storage Optimized device. Copy the data to the device. Create a custom transformation job by using AWS Glue. - SnowBall can store 80TB (ok), takes around 1 week to move the device (faster than A), and AWS Glue allows to do ETL jobs. This is the answer.\nD. Order an AWS Snowball Edge Storage Optimized device that includes Amazon EC2 compute. Copy the data to the device. Create a new EC2 instance on AWS to run the transformation application. - Same as C, but the ETL job requires the deployment/configuration/maintenance of an EC2 instance, while Glue is serverless. This means D has more operational overhead than C.")]),e._v(" "),t("h2",{attrs:{id:"q114"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q114"}},[e._v("#")]),e._v(" Q114")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C\nSolution C offloads the photo processing to Lambda. Storing the photos in S3 ensures scalability and durability, while keeping the metadata in DynamoDB allows for efficient querying of the associated information.")]),e._v(" "),t("p",[e._v("Option A does not provide an appropriate solution for storing the photos, as DynamoDB is not suitable for storing large binary data like images.")]),e._v(" "),t("p",[e._v("Option B is more focused on real-time streaming data processing and is not the ideal service for processing and storing photos and metadata in this use case.")]),e._v(" "),t("p",[e._v("Option D involves manual scaling and management of EC2 instances, which is less flexible and more labor-intensive compared to the serverless nature of Lambda. It may not efficiently handle the varying number of concurrent users and can introduce higher operational overhead.")]),e._v(" "),t("p",[e._v("In conclusion, option C provides the best solution for scaling the application to meet the needs of the growing user base by leveraging the scalability and durability of Lambda, S3, and DynamoDB.")]),e._v(" "),t("h2",{attrs:{id:"q115"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q115"}},[e._v("#")]),e._v(" Q115")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C\nOption A (creating a NAT gateway) would not meet the requirement since it still involves sending traffic to S3 over the internet. NAT gateway is used for outbound internet connectivity from private subnets, but it doesn't provide a private route for accessing S3.")]),e._v(" "),t("p",[e._v("Option B (configuring security groups) focuses on controlling outbound traffic using security groups. While it can restrict outbound traffic, it doesn't provide a private route for accessing S3.")]),e._v(" "),t("p",[e._v("Option D (setting up Direct Connect) involves establishing a dedicated private network connection between the on-premises environment and AWS. While it offers private connectivity, it is more suitable for hybrid scenarios and not necessary for achieving private access to S3 within the VPC.")]),e._v(" "),t("p",[e._v("In summary, option C provides a straightforward solution by moving the EC2 instances to private subnets, creating a VPC endpoint for S3, and linking the endpoint to the route table for private subnets. This ensures that file transfer traffic between the EC2 instances and S3 remains within the private network without going over the internet.")]),e._v(" "),t("h2",{attrs:{id:"q116"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q116"}},[e._v("#")]),e._v(" Q116")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AD\nagree with A and D")]),e._v(" "),t("p",[e._v("static website -> obviously S3, and S3 is super scalable\nCDN -> CloudFront obviously as well, and with HTTPS security is enhanced.")]),e._v(" "),t("p",[e._v("B does not make sense because you are not replacing the CDN with anything,\nE works too but takes too much effort and compared to S3, S3 still wins in term of scalability. plus why use EC2 when you are only hosting static website")]),e._v(" "),t("h2",{attrs:{id:"q117"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q117"}},[e._v("#")]),e._v(" Q117")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("answer is A\nhttps://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_OpenSearch_Stream.html")]),e._v(" "),t("blockquote",[t("p",[e._v("You can configure a CloudWatch Logs log group to stream data it receives to your Amazon OpenSearch Service cluster in NEAR REAL-TIME through a CloudWatch Logs subscription")])]),e._v(" "),t("p",[e._v("least overhead compared to kinesis")]),e._v(" "),t("h2",{attrs:{id:"q118"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q118"}},[e._v("#")]),e._v(" Q118")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D\nthe cost of S3<EFS<EBS")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("D. S3 is more cost effective than all and can handle all objects like Block, File or Text.")]),e._v(" "),t("h2",{attrs:{id:"q119"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q119"}},[e._v("#")]),e._v(" Q119")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("B")]),e._v(" "),t("p",[e._v("Using AWS WAF has several benefits. Additional protection against web attacks using criteria that you specify. You can define criteria using characteristics of web requests such as the following:\nPresence of SQL code that is likely to be malicious (known as SQL injection).\nPresence of a script that is likely to be malicious (known as cross-site scripting).")]),e._v(" "),t("p",[e._v("AWS Firewall Manager simplifies your administration and maintenance tasks across multiple accounts and resources for a variety of protections.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html")]),e._v(" "),t("h2",{attrs:{id:"q120"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q120"}},[e._v("#")]),e._v(" Q120")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("B is the correct one for seld manage DNS\nIf need to use Route53, ALB (layar 7 ) needs to be used as end points for 2 reginal x 3 EC2s, if it the case answer would be the option 4")])])}),[],!1,null,null,null);t.default=o.exports}}]);