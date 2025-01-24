(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{388:function(e,t,a){"use strict";a.r(t);var r=a(14),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"result"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[e._v("#")]),e._v(" Result")]),e._v(" "),t("p",[e._v("Correct rate: 74% pass(more than 70%)\ntime: 1h 26 mins\ncorrect questions: 48/65")]),e._v(" "),t("h2",{attrs:{id:"_1-17-approximatenumberofmessages-sqs-queue-attribute"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-17-approximatenumberofmessages-sqs-queue-attribute"}},[e._v("#")]),e._v(" 1/17 ApproximateNumberOfMessages SQS queue attribute.")]),e._v(" "),t("p",[e._v("For example, suppose that you have a web app that lets users upload images and use them online. In this scenario, each image requires resizing and encoding before it can be published. The app runs on EC2 instances in an Auto Scaling group, and it's configured to handle your typical upload rates. Unhealthy instances are terminated and replaced to maintain current instance levels at all times. The app places the raw bitmap data of the images in an SQS queue for processing. It processes the images and then publishes the processed images where they can be viewed by users. The architecture for this scenario works well if the number of image uploads doesn't vary over time. But if the number of uploads changes over time, you might consider using dynamic scaling to scale the capacity of your Auto Scaling group.")]),e._v(" "),t("p",[e._v("Backlog per instance: To calculate your backlog per instance, start with the ApproximateNumberOfMessages queue attribute to determine the length of the SQS queue (number of messages available for retrieval from the queue). Divide that number by the fleet's running capacity, which for an Auto Scaling group is the number of instances in the InService state, to get the backlog per instance.")]),e._v(" "),t("h2",{attrs:{id:"_2-17-auto-scaling-group-elb-rds-multi-az"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-17-auto-scaling-group-elb-rds-multi-az"}},[e._v("#")]),e._v(" 2/17 Auto Scaling Group & ELB & RDS multi-AZ")]),e._v(" "),t("h2",{attrs:{id:"_3-17-disaster-recovery-plan"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-17-disaster-recovery-plan"}},[e._v("#")]),e._v(" 3/17 Disaster Recovery Plan")]),e._v(" "),t("p",[e._v("Warm Standby, RTO in minutes, RPO in seconds.")]),e._v(" "),t("h2",{attrs:{id:"_4-17-aurora-serverless-is-high-performance-auto-scaling-and-cost-effective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-17-aurora-serverless-is-high-performance-auto-scaling-and-cost-effective"}},[e._v("#")]),e._v(" 4/17 Aurora Serverless is high performance, auto-scaling, and cost-effective.")]),e._v(" "),t("h2",{attrs:{id:"_5-17-global-accelerator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-17-global-accelerator"}},[e._v("#")]),e._v(" 5/17 Global Accelerator")]),e._v(" "),t("p",[e._v("exist:\n- Auto Scaling Group\n- EC2 instances\n- Application Load Balancer\n- Aurora")]),e._v(" "),t("p",[e._v("when periodic requests\n- Global Accelerator\n- CloudFront")]),e._v(" "),t("h2",{attrs:{id:"_6-17-low-latency-high-availability-in-another-region"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-17-low-latency-high-availability-in-another-region"}},[e._v("#")]),e._v(" 6/17 Low latency, high availability in another region.")]),e._v(" "),t("p",[e._v("provision EC2 instances in another region and Application Load Balancer.\nand use Global Accelerator to route traffic to the instances.")]),e._v(" "),t("h2",{attrs:{id:"_7-17-eni-elastic-network-interface"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-17-eni-elastic-network-interface"}},[e._v("#")]),e._v(" 7/17 ENI, Elastic Network Interface")]),e._v(" "),t("p",[e._v("the Network interface and the Elastic Network Interface are the same thing.")]),e._v(" "),t("p",[e._v("Low-budget, high-availability solution")]),e._v(" "),t("p",[e._v("If one of your instances serving a particular function fails, its network interface can be attached to a replacement or hot standby instance pre-configured for the same role in order to rapidly recover the service. For example, you can use a network interface as your primary or secondary network interface to a critical service such as a database instance or a NAT instance. If the instance fails, you (or more likely, the code running on your behalf) can attach the network interface to a hot standby instance. Because the interface maintains its private IP addresses, Elastic IP addresses, and MAC address, network traffic begins flowing to the standby instance as soon as you attach the network interface to the replacement instance. Users experience a brief loss of connectivity between the time the instance fails and the time that the network interface is attached to the standby instance, but no changes to the route table or your DNS server are required.")]),e._v(" "),t("h2",{attrs:{id:"_8-17-new-feature-aurora-serverless"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-17-new-feature-aurora-serverless"}},[e._v("#")]),e._v(" 8/17 new feature, Aurora Serverless")]),e._v(" "),t("p",[e._v("for infrequent database access. and minimal downtime. and without selecting a particular instance type.\njust use Aurora Serverless for MySQL or PostgreSQL.")]),e._v(" "),t("h2",{attrs:{id:"_9-17-config-the-cloudfront-high-availability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-17-config-the-cloudfront-high-availability"}},[e._v("#")]),e._v(" 9/17 config the cloudfront high availability")]),e._v(" "),t("p",[e._v("use origin group.")]),e._v(" "),t("h2",{attrs:{id:"_10-17-vpc-endpoint-the-bucket-policy-to-restrict-access-to-the-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-17-vpc-endpoint-the-bucket-policy-to-restrict-access-to-the-bucket"}},[e._v("#")]),e._v(" 10/17 vpc endpoint the bucket policy to restrict access to the bucket.")]),e._v(" "),t("h2",{attrs:{id:"_11-17-sse-kms-cmks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-17-sse-kms-cmks"}},[e._v("#")]),e._v(" 11/17 sse-kms, cmks")]),e._v(" "),t("p",[e._v("https://awstip.com/5-minutes-to-aws-s3-bucket-encryption-sse-c-sse-s3-sse-kms-e2fb07b05cb3")]),e._v(" "),t("p",[e._v("all three types of keys share a common ground — the ‘SSE’ world, which stands for ‘Server-Side Encryption’. This means that the server will handle encrypting and decrypting the data, rather than the customer (see ‘Client-Side Encryption’ instad). The key difference between them (Pun intended!) is how the key handled by AWS (SSE-KMS,SSE-S3)or you (SSE-C )")]),e._v(" "),t("h2",{attrs:{id:"_12-17-deregister-targets-from-target-groups"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-17-deregister-targets-from-target-groups"}},[e._v("#")]),e._v(" 12/17 deregister targets from target groups")]),e._v(" "),t("p",[e._v("when you scale-in and worry about some service need to continue running. you can change the deregistration timeout for the target groiup of the instance to greater than 1500 seconds.(1500/60 = 25 mins)")]),e._v(" "),t("p",[e._v("If demand on your application decreases, or you need to service your targets, you can deregister targets from your target groups. Deregistering a target removes it from your target group, but does not affect the target otherwise. The load balancer stops routing requests to a target as soon as it is deregistered. The target enters the draining state until in-flight requests have completed. You can register the target with the target group again when you are ready for it to resume receiving requests.")]),e._v(" "),t("h2",{attrs:{id:"_13-17-the-cloudwatch-logs-can-send-to-kinesis-lambda-or-kinesis-data-firehose"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-17-the-cloudwatch-logs-can-send-to-kinesis-lambda-or-kinesis-data-firehose"}},[e._v("#")]),e._v(" 13/17 the cloudwatch logs can send to kinesis, lambda, or kinesis data firehose.")]),e._v(" "),t("h2",{attrs:{id:"_14-17-s3-glacier-instant-retrieval-is-lowest-cost-storage-for-long-lived-data-that-is-rarely-accessed-and-requires-retrieval-in-milliseconds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-17-s3-glacier-instant-retrieval-is-lowest-cost-storage-for-long-lived-data-that-is-rarely-accessed-and-requires-retrieval-in-milliseconds"}},[e._v("#")]),e._v(" 14/17 s3 glacier instant retrieval is lowest cost storage for long-lived data that is rarely accessed and requires retrieval in milliseconds.")]),e._v(" "),t("h2",{attrs:{id:"_15-17-s3-event-notification"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-17-s3-event-notification"}},[e._v("#")]),e._v(" 15/17 S3 event notification")]),e._v(" "),t("p",[e._v("S3 event notifications enable you to receive notifications when certain events happen in your S3 bucket. These notifications are delivered to an SNS topic, an SQS queue, or an AWS Lambda function.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/AmazonS3/latest/userguide/NotificationHowTo.html")]),e._v(" "),t("h2",{attrs:{id:"_16-17-remember-auto-scaling-group-elb-rds-multi-az"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-17-remember-auto-scaling-group-elb-rds-multi-az"}},[e._v("#")]),e._v(" 16/17 remember auto scaling group + ELB + RDS multi-AZ.")]),e._v(" "),t("h2",{attrs:{id:"_17-17-only-nlb-support-udp-protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-17-only-nlb-support-udp-protocol"}},[e._v("#")]),e._v(" 17/17 only NLB support UDP protocol.")]),e._v(" "),t("p",[e._v("so you should choose NLB and Global Accelerator for UDP.")])])}),[],!1,null,null,null);t.default=s.exports}}]);