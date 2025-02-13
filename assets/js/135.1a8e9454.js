(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{391:function(e,s,t){"use strict";t.r(s);var a=t(14),o=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"q161"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q161"}},[e._v("#")]),e._v(" Q161")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),s("p",[e._v("solution should remove operation overhead -> s3 -> lambda -> aurora")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("By placing the JSON documents in an S3 bucket, the documents will be stored in a highly durable and scalable object storage service. The use of AWS Lambda allows the company to run their Python code to process the documents as they arrive in the S3 bucket without having to worry about the underlying infrastructure. This also allows for horizontal scalability, as AWS Lambda will automatically scale the number of instances of the function based on the incoming rate of requests. The results can be stored in an Amazon Aurora DB cluster, which is a fully-managed, high-performance database service that is compatible with MySQL and PostgreSQL. This will provide the necessary durability and scalability for the results of the processing.")]),e._v(" "),s("h2",{attrs:{id:"q162"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q162"}},[e._v("#")]),e._v(" Q162")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),s("p",[e._v("If you see HPC and Linux both in the question.. Pick Amazon FSx for Lustre.")]),e._v(" "),s("h2",{attrs:{id:"q163"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q163"}},[e._v("#")]),e._v(" Q163")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),s("p",[e._v("A is minimal overhead.\nB has EC2 overhead\nC EC2 instance overhead + container repository running on EC2 overhead\nD AMI, CloudWatch alarm is overhead++")]),e._v(" "),s("h2",{attrs:{id:"q164"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q164"}},[e._v("#")]),e._v(" Q164")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),s("p",[e._v("Amazon SQS supports dead-letter queues (DLQ), which other queues (source queues) can target for messages that can't be processed (consumed) successfully.")]),e._v(" "),s("p",[e._v("https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html")]),e._v(" "),s("h2",{attrs:{id:"q165"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q165"}},[e._v("#")]),e._v(" Q165")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),s("p",[e._v("Answer D. Use an OAI to lockdown CloudFront to S3 origin & enable WAF on CF distribution.")]),e._v(" "),s("hr"),e._v(" "),s("p",[e._v("https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/ confirms use of OAI (and option D).")]),e._v(" "),s("h2",{attrs:{id:"q166"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q166"}},[e._v("#")]),e._v(" Q166")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),s("p",[e._v("CloudFront is well-suited for efficiently serving static HTML pages to users around the world. By using itwith the S3 as its origin, the static HTML pages can be cached and distributed globally to edge locations, reducing latency and improving performance for users accessing the pages from different regions. This solution ensures efficient and effective delivery of the daily reports to millions of users worldwide, providing a scalable and high-performance solution for the global event.")]),e._v(" "),s("p",[e._v("A would allow temporary access to the files, but it does not address the scalability and performance requirements of serving millions of views globally.")]),e._v(" "),s("p",[e._v("B is not necessary for this scenario as the goal is to distribute the static HTML pages efficiently to users worldwide, not replicate the files across multiple Regions.")]),e._v(" "),s("p",[e._v("C is primarily used for routing DNS traffic based on the geographic location of users, but it does not provide the caching and content delivery capabilities required fo this use case.")]),e._v(" "),s("h2",{attrs:{id:"q167"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q167"}},[e._v("#")]),e._v(" Q167")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),s("p",[e._v('"without any downtime" rules out spot instance.')]),e._v(" "),s("h2",{attrs:{id:"q168"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q168"}},[e._v("#")]),e._v(" Q168")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),s("p",[e._v("By creating an SCP in the root organizational unit, the security team can define and enforce fine-grained permissions that limit access to specific services or actions across all member accounts. The SCP acts as a guardrail, denying access to specified services or actions, ensuring that the permissions are consistent and applied uniformly across the organization. SCPs are scalable and provide a single point of control for managing permissions, allowing the security team to centrally manage access restrictions without needing to modify individual account settings.")]),e._v(" "),s("p",[e._v("Option A and option B are not suitable for controlling access across multiple accounts in AWS Organizations. ACLs and security groups are typically used for managing network traffic and access within a single account or a specific resource.")]),e._v(" "),s("p",[e._v("Option C is not the recommended approach. Cross-account roles are used for granting access, and denying access through cross-account roles can be complex and less manageable compared to using SCPs.")]),e._v(" "),s("h2",{attrs:{id:"q169"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q169"}},[e._v("#")]),e._v(" Q169")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),s("p",[e._v("When you see DDOS immediately think Shield.")]),e._v(" "),s("h2",{attrs:{id:"q170"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#q170"}},[e._v("#")]),e._v(" Q170")]),e._v(" "),s("p",[s("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),s("p",[e._v("Geographic (Geo) Match Conditions in AWS WAF. This new condition type allows you to use AWS WAF to restrict application access based on the geographic location of your viewers. With geo match conditions you can choose the countries from which AWS WAF should allow access.\nhttps://aws.amazon.com/about-aws/whats-new/2017/10/aws-waf-now-supports-geographic-match/")])])}),[],!1,null,null,null);s.default=o.exports}}]);