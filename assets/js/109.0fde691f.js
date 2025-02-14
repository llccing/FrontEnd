(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{356:function(e,a,t){"use strict";t.r(a);var n=t(14),o=Object(n.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"q31"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q31"}},[e._v("#")]),e._v(" Q31")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),a("p",[e._v("AWS Config provides a set of pre-built or customizable rules that can be used to check the configuration and compliance of AWS resources. By\ncreating a custom rule or using the built-in rule for tagging, you can define the required tags for EC2, RDS DB and Redshift clusters. AWS Config\ncontinuously monitors the resources and generates configuration change events or evaluation results.")]),e._v(" "),a("p",[e._v("By leveraging AWS Config, the solution can automatically detect any resources that do not comply with the defined tagging requirements. This\napproach eliminates the need for manual checks or periodic code execution, reducing operational overhead. Additionally, AWS Config provides\nthe ability to automatically remediate non-compliant resources by triggering Lambda or sending notifications, further streamlining the\nconfiguration management process.")]),e._v(" "),a("p",[e._v("Option B (using Cost Explorer) primarily focuses on cost analysis and does not provide direct enforcement of proper tagging. Option C and D\n(writing API calls and running them manually or through scheduled Lambda) require more manual effort and maintenance compared to using AWS Config rules.")]),e._v(" "),a("h2",{attrs:{id:"q32"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q32"}},[e._v("#")]),e._v(" Q32")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),a("p",[e._v("Good answer is B: client-side JavaScript. the website is static, so it must be S3.")]),e._v(" "),a("h2",{attrs:{id:"q33"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q33"}},[e._v("#")]),e._v(" Q33")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),a("p",[e._v('I would go for C. The tricky phrase is "near-real-time solution", pointing to Firehouse, but it can\'t send data to DynamoDB, so it leaves us with C as best option.')]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Q: What is a destination in Firehose?")]),e._v(" "),a("p",[e._v("A destination is the data store where your data will be delivered. Firehose currently supports Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Splunk, Datadog, NewRelic, Dynatrace, Sumo Logic, LogicMonitor, MongoDB, and HTTP End Point as destinations.")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("A: DynamoDB streams are logs, not fit for real-time sharing.\nB: S3 is not document database, it's BLOB\nD: S3 and files are not database\nC: Kinesis + Lambda + DynamoDB is high performance, low latency scalable solution.")]),e._v(" "),a("h2",{attrs:{id:"q34"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q34"}},[e._v("#")]),e._v(" Q34")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),a("p",[e._v("CloudTrail - Track user activity and API call history.\nConfig - Assess, audits, and evaluates the configuration and relationships of tag resources.")]),e._v(" "),a("p",[e._v("Therefore, the answer is B")]),e._v(" "),a("h2",{attrs:{id:"q35"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q35"}},[e._v("#")]),e._v(" Q35")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),a("p",[e._v("A: GuardDuty is not for this, mostly for account monitoring for suspicious activity\nB: Inspector is for OS vulnerabilities\nC: Shield with R53 is not going to protect against DDoS\nD: Shield Advanced is build for DDoS protection")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Prevent large scale DDOS attack = AWS Shield Advanced")]),e._v(" "),a("h2",{attrs:{id:"q36"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q36"}},[e._v("#")]),e._v(" Q36")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),a("p",[e._v("it is all about multi-region key.\nAWS KMS supports multi-Region keys, which are AWS KMS keys in different AWS Regions that can be used interchangeably – as though you had the same key in multiple Regions. Each set of related multi-Region keys has the same key material and key ID, so you can encrypt data in one AWS Region and decrypt it in a different AWS Region without re-encrypting or making a cross-Region call to AWS KMS.\nYou can use multi-Region keys with client-side encryption libraries such as S3 client-side encryption\nhttps://docs.aws.amazon.com/kms/latest/developerguide/multi-region-keys-overview.html")]),e._v(" "),a("h2",{attrs:{id:"q37"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q37"}},[e._v("#")]),e._v(" Q37")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),a("p",[e._v("How can Session Manager benefit my organization?\nAns: No open inbound ports and no need to manage bastion hosts or SSH keys\nhttps://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html")]),e._v(" "),a("hr"),e._v(" "),a("p",[e._v("Option A provides direct access to the terminal interface of each instance, but it may not be practical for administration purposes and can be cumbersome to manage, especially for multiple instances.")]),e._v(" "),a("p",[e._v("Option C adds operational overhead and introduces additional infrastructure that needs to be managed, monitored, and secured. It also requires SSH key management and maintenance.")]),e._v(" "),a("p",[e._v("Option D is complex and may not be necessary for remote administration. It also requires administrators to connect from their local on-premises machines, which adds complexity and potential security risks.")]),e._v(" "),a("p",[e._v("Therefore, option B is the recommended solution as it provides secure, auditable, and repeatable remote access using IAM roles and AWS Systems Manager Session Manager, with minimal operational overhead.")]),e._v(" "),a("h2",{attrs:{id:"q38"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q38"}},[e._v("#")]),e._v(" Q38")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),a("p",[e._v("Option A (replicating the S3 bucket to all AWS Regions) can be costly and complex, requiring replication of data across multiple Regions and managing synchronization. It may not provide a significant latency improvement compared to the CloudFront solution.")]),e._v(" "),a("p",[e._v("Option B (provisioning accelerators in AWS Global Accelerator) can be more expensive as it adds an extra layer of infrastructure (accelerators) and requires associating IP addresses with the S3 bucket. CloudFront already includes global edge locations and provides similar acceleration capabilities.")]),e._v(" "),a("p",[e._v("Option D (enabling S3 Transfer Acceleration) can help improve upload speed to the S3 bucket but may not have a significant impact on reducing latency for website visitors.")]),e._v(" "),a("p",[e._v("Therefore, option C is the most cost-effective solution as it leverages CloudFront's caching and global distribution capabilities to decrease latency and improve website performance.")]),e._v(" "),a("h2",{attrs:{id:"q39"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q39"}},[e._v("#")]),e._v(" Q39")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),a("p",[e._v("A: Made for high levels of I/O opps for consistent, predictable performance.\nB: Can improve performance of insert opps, but it's a storage performance rather than processing power problem\nC: for moderate CPU usage\nD: for scale read-only replicas and doesn't improve performance of insert opps on the primary DB instance")]),e._v(" "),a("h2",{attrs:{id:"q40"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#q40"}},[e._v("#")]),e._v(" Q40")]),e._v(" "),a("p",[a("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),a("p",[e._v("Definitely A, it's the most operationally efficient compared to D, which requires a lot of code and infrastructure to maintain. A is mostly managed (firehose is fully managed and S3 lifecycles are also managed)")])])}),[],!1,null,null,null);a.default=o.exports}}]);