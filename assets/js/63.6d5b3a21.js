(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{522:function(a,e,t){"use strict";t.r(e);var s=t(14),o=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"q171"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q171"}},[a._v("#")]),a._v(" Q171")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" B")]),a._v(" "),e("p",[a._v("Option B. Though D is also possible B is more scalable as Lambda will autoscale to meet the dynamic load.")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v('Ans B - I was going for option D... but then I saw bullrem\'s response (1 year, 9 mth ago):\n"Option D is similar to option B in that it uses Amazon API Gateway to handle the API requests, but it also includes an EC2 instance to perform the tax computations. However, using an EC2 instance in this way is less scalable and less elastic than using AWS Lambda to perform the computations."')]),a._v(" "),e("h2",{attrs:{id:"q172"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q172"}},[a._v("#")]),a._v(" Q172")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" C")]),a._v(" "),e("p",[a._v("CCCCCCCCC\nField-level encryption allows you to enable your users to securely upload sensitive information to your web servers. The sensitive information provided by your users is encrypted at the edge, close to the user, and remains encrypted throughout your entire application stack. This encryption ensures that only applications that need the data—and have the credentials to decrypt it—are able to do so.")]),a._v(" "),e("h2",{attrs:{id:"q173"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q173"}},[a._v("#")]),a._v(" Q173")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" B")]),a._v(" "),e("p",[a._v("B. Cloud front is best for content delivery. Global Accelerator is best for non-HTTP (TCP/UDP) cases and supports HTTP cases as well but with static IP (elastic IP) or anycast IP address only.")]),a._v(" "),e("h2",{attrs:{id:"q174"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q174"}},[a._v("#")]),a._v(" Q174")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" B")]),a._v(" "),e("p",[a._v("B. auto scaling groups can not span multi region")]),a._v(" "),e("h2",{attrs:{id:"q175"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q175"}},[a._v("#")]),a._v(" Q175")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" B")]),a._v(" "),e("p",[a._v("Many applications, including those built on modern serverless architectures, can have a large number of open connections to the database server and may open and close database connections at a high rate, exhausting database memory and compute resources. Amazon RDS Proxy allows applications to pool and share connections established with the database, improving database efficiency and application scalability.\nhttps://aws.amazon.com/id/rds/proxy/")]),a._v(" "),e("h2",{attrs:{id:"q176"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q176"}},[a._v("#")]),a._v(" Q176")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" A")]),a._v(" "),e("p",[a._v("VPC endpoints for service in private subnets\nhttps://docs.aws.amazon.com/amazondynamodb/latest/developerguide/vpc-endpoints-dynamodb.html")]),a._v(" "),e("h2",{attrs:{id:"q177"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q177"}},[a._v("#")]),a._v(" Q177")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" B")]),a._v(" "),e("p",[a._v("Amazon DynamoDB Accelerator (DAX) is a fully managed, highly available, in-memory cache that can reduce latency and increase throughput for many types of database workloads. DAX is available for Amazon DynamoDB and Amazon ElastiCache for Redis.")]),a._v(" "),e("p",[a._v("https://aws.amazon.com/dynamodb/dax/")]),a._v(" "),e("h2",{attrs:{id:"q178"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q178"}},[a._v("#")]),a._v(" Q178")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" A")]),a._v(" "),e("p",[a._v("Using AWS Backup to copy EC2 and RDS backups to the separate Region is the solution that meets the requirements with the least operational overhead. AWS Backup simplifies the backup process and automates the copying of backups to another Region, reducing the manual effort and operational complexity involved in managing separate backup processes for EC2 instances and RDS databases.")]),a._v(" "),e("p",[a._v("Option B is incorrect because Amazon Data Lifecycle Manager (Amazon DLM) is not designed for directly copying RDS backups to a separate region.")]),a._v(" "),e("p",[a._v("Option C is incorrect because creating Amazon Machine Images (AMIs) and read replicas adds complexity and operational overhead compared to a dedicated backup solution.")]),a._v(" "),e("p",[a._v("Option D is incorrect because using Amazon EBS snapshots, RDS snapshots, and S3 Cross-Region Replication (CRR) involves multiple manual steps and additional configuration, increasing complexity.")]),a._v(" "),e("h2",{attrs:{id:"q179"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q179"}},[a._v("#")]),a._v(" Q179")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" A")]),a._v(" "),e("p",[a._v("Agree with A, IAM role is for services (EC2 for example)\nIAM policy is more for users and groups")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("A all day. Don't even need to read the other answers.\nYou can't attach a policy to EC2. You have to attach a role.")]),a._v(" "),e("h2",{attrs:{id:"q180"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q180"}},[a._v("#")]),a._v(" Q180")]),a._v(" "),e("p",[e("strong",[a._v("Answer:")]),a._v(" BC")]),a._v(" "),e("p",[a._v("Shield - Load Balancer, CF, Route53\nAWF - CF, ALB, API Gateway")]),a._v(" "),e("hr"),a._v(" "),e("p",[a._v("Shield - Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Amazon CloudFront, AWS Global Accelerator, and Route 53.")]),a._v(" "),e("p",[a._v("WAF - Amazon CloudFront, the Application Load Balancer (ALB), Amazon API Gateway, and AWS AppSync")])])}),[],!1,null,null,null);e.default=o.exports}}]);