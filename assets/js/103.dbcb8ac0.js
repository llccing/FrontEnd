(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{347:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q1"}},[e._v("#")]),e._v(" Q1")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("S3 Transfer Acceleration is the best solution cz it's faster , good for high speed, Transfer Acceleration is designed to optimize transfer speeds from\nacross the world into S3 buckets.")]),e._v(" "),t("h2",{attrs:{id:"q2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q2"}},[e._v("#")]),e._v(" Q2")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL. With a few actions in the AWS Management Console, you can point Athena at your data stored in Amazon S3 and begin using standard SQL to run ad-hoc queries and get results in seconds.")]),e._v(" "),t("h2",{attrs:{id:"q3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q3"}},[e._v("#")]),e._v(" Q3")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("the condition key aws:PrincipalOrgID can prevent the members who don't belong to your organization to access the resourc")]),e._v(" "),t("h2",{attrs:{id:"q4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q4"}},[e._v("#")]),e._v(" Q4")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Keywords:")]),e._v(" "),t("ul",[t("li",[e._v("EC2 in VPC")]),e._v(" "),t("li",[e._v("EC2 instance needs to access the S3 bucket without connectivity to the internet")])]),e._v(" "),t("p",[e._v("A: Correct - Gateway VPC endpoint can connect to S3 bucket privately without additional cost\nB: Incorrect - You can set up interface VPC endpoint for CloudWatch Logs for private network from EC2 to CloudWatch. But from CloudWatch to S3 bucket: Log data can take up to 12 hours to become available for export and the requirement only need EC2 to S3\nC: Incorrect - Create an instance profile just grant access but not help EC2 connect to S3 privately\nD: Incorrect - API Gateway like the proxy which receive network from out site and it forward request to AWS Lambda, Amazon EC2, Elastic Load Balancing products such as Application Load Balancers or Classic Load Balancers, Amazon DynamoDB, Amazon Kinesis, or any publicly available HTTPS-based endpoint. But not S3")]),e._v(" "),t("h2",{attrs:{id:"q5"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q5"}},[e._v("#")]),e._v(" Q5")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Ebs doesnt support cross az only reside in one Az but Efs does, that why it's c.\nChinese Version:\nEBS 不支持跨可用区，只能在一个可用区中使用，而 EFS 支持跨可用区，可以在多个可用区中使用。这就是为什么选择 C 选项。")]),e._v(" "),t("h2",{attrs:{id:"q6"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q6"}},[e._v("#")]),e._v(" Q6")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("B. On a Snowball Edge device you can copy files with a speed of up to 100Gbps. 70TB will take around 5600 seconds, so very quickly, less than 2 hours. The downside is that it'll take between 4-6 working days to receive the device and then another 2-3 working days to send it back and for AWS to move the data onto S3 once it reaches them. Total time: 6-9 working days. Bandwidth used: 0.")]),e._v(" "),t("p",[e._v("C. File Gateway uses the Internet, so maximum speed will be at most 1Gbps, so it'll take a minimum of 6.5 days and you use 70TB of Internet bandwidth.")]),e._v(" "),t("p",[e._v("D. You can achieve speeds of up to 10Gbps with Direct Connect. Total time 15.5 hours and you will use 70TB of bandwidth. However, what's interesting is that the question does not specific what type of bandwidth? Direct Connect does not use your Internet bandwidth, as you will have a dedicate peer to peer connectivity between your on-prem and the AWS Cloud, so technically, you're not using your \"public\" bandwidth.")]),e._v(" "),t("p",[e._v("The requirements are a bit too vague but I think that B is the most appropriate answer, although D might also be correct if the bandwidth usage refers strictly to your public connectivity.")]),e._v(" "),t("h3",{attrs:{id:"what-s-nfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-s-nfs"}},[e._v("#")]),e._v(" what's NFS")]),e._v(" "),t("p",[e._v("In the IT area, NFS stands for Network File System. It is a distributed file system protocol that allows users to access files over a network as if they were on a local disk. Here are some key points about NFS:")]),e._v(" "),t("h4",{attrs:{id:"key-features-of-nfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-features-of-nfs"}},[e._v("#")]),e._v(" Key Features of NFS")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("File Sharing")]),e._v(": Enables multiple users and systems to access the same files concurrently.")]),e._v(" "),t("li",[t("strong",[e._v("Transparency")]),e._v(": Provides a seamless experience where remote files appear as if they are local.")]),e._v(" "),t("li",[t("strong",[e._v("Compatibility")]),e._v(": Works across various operating systems, making it versatile for mixed environments.")]),e._v(" "),t("li",[t("strong",[e._v("Security")]),e._v(": Supports authentication and permission settings to control access to files.")]),e._v(" "),t("li",[t("strong",[e._v("Performance")]),e._v(": Can be optimized with caching and other techniques to improve access speed.")])]),e._v(" "),t("h4",{attrs:{id:"use-cases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use-cases"}},[e._v("#")]),e._v(" Use Cases")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Home Directories")]),e._v(": Centralizing user directories across multiple machines.")]),e._v(" "),t("li",[t("strong",[e._v("Data Sharing")]),e._v(": Facilitating collaboration by sharing files among users in a network.")]),e._v(" "),t("li",[t("strong",[e._v("Centralized Management")]),e._v(": Simplifying data management by storing files in a single location.")])]),e._v(" "),t("p",[e._v("NFS is widely used in environments where file sharing and centralized storage are essential, such as in enterprises, educational institutions, and data centers.")]),e._v(" "),t("h2",{attrs:{id:"q7"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q7"}},[e._v("#")]),e._v(" Q7")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D\nD. Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues.")]),e._v(" "),t("p",[e._v("This solution uses Amazon SNS and SQS to publish and subscribe to messages respectively, which decouples the system and enables scalability by allowing multiple consumer applications to process the messages in parallel. Additionally, using Amazon SQS with multiple subscriptions can provide increased resiliency by allowing multiple copies of the same message to be processed in parallel.")]),e._v(" "),t("h2",{attrs:{id:"q8"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q8"}},[e._v("#")]),e._v(" Q8")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("A - incorrect: Schedule scaling policy doesn't make sense.\nC, D - incorrect: Primary server should not be in same Auto Scaling group with compute nodes.\nB is correct.")]),e._v(" "),t("h2",{attrs:{id:"q9"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q9"}},[e._v("#")]),e._v(" Q9")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("The same question and answer explanation exists in a Udemy course.\nCorrect answer is B.\nAmazon S3 File Gateway provides a seamless way to connect to the cloud to store application data files and backup images as durable objects in Amazon S3 cloud storage. Amazon S3 File Gateway offers SMB or NFS-based access to data in Amazon S3 with local caching.\nIt can be used for on-premises data-intensive Amazon EC2-based applications that need file protocol access to S3 object storage. Lifecycle policies can then transition the data to S3 Glacier Deep Archive after 7 days.")]),e._v(" "),t("p",[e._v("D is wrong because is involves too much extra configuration which is unnecessary.")]),e._v(" "),t("h2",{attrs:{id:"q10"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q10"}},[e._v("#")]),e._v(" Q10")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("AnswerB - SQS FIFO queues ensure that messages are processed in the order they are received, which perfectly matches the requirement of maintaining order.")])])}),[],!1,null,null,null);t.default=n.exports}}]);