(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{407:function(t,a,e){"use strict";e.r(a);var s=e(14),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[t._v("#")]),t._v(" Result")]),t._v(" "),a("ul",[a("li",[t._v("69% Failed")]),t._v(" "),a("li",[t._v("1h18mins")])]),t._v(" "),a("h2",{attrs:{id:"_1-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-20"}},[t._v("#")]),t._v(" 1/20")]),t._v(" "),a("p",[t._v("For a big oracle database which running for 15 years. you can also consider to use Database Migration Service(DMS) to migrate the database servers to Amazon RDS.")]),t._v(" "),a("h2",{attrs:{id:"_2-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-20"}},[t._v("#")]),t._v(" 2/20")]),t._v(" "),a("p",[t._v("For large file such as terabytes of data, you can use AWS DataSync, which can handle occasional interruptions in internet connectivity.")]),t._v(" "),a("h2",{attrs:{id:"_3-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-20"}},[t._v("#")]),t._v(" 3/20")]),t._v(" "),a("p",[t._v("A second Elastic Network Interface, attach it to the EC2 instance configured with the private IP address. Move the network interface to standby instance if the primary EC2 instance becomes unreachable.")]),t._v(" "),a("h2",{attrs:{id:"_4-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-20"}},[t._v("#")]),t._v(" 4/20")]),t._v(" "),a("p",[t._v("For the first 30 days, the file should be visist mroe frequent. after 30 days, can move to S3 Glacier.")]),t._v(" "),a("h2",{attrs:{id:"_5-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-20"}},[t._v("#")]),t._v(" 5/20")]),t._v(" "),a("p",[t._v("EC2 Auto Scaling group and ALB spanning multiple AZs.")]),t._v(" "),a("h2",{attrs:{id:"_6-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-20"}},[t._v("#")]),t._v(" 6/20")]),t._v(" "),a("p",[t._v("case: ALB => EC2, Aurora database.\nrequirement: more resilient to periodic increases in request rates.\nsolutions:")]),t._v(" "),a("ul",[a("li",[t._v("AWS Global Accelerator")]),t._v(" "),a("li",[t._v("CloudFront in front of the ALB")])]),t._v(" "),a("h2",{attrs:{id:"_7-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-20"}},[t._v("#")]),t._v(" 7/20")]),t._v(" "),a("p",[t._v("ALB listener can handle URL query string; and Route 53 does not support URL query string based routing.")]),t._v(" "),a("h2",{attrs:{id:"_8-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-20"}},[t._v("#")]),t._v(" 8/20")]),t._v(" "),a("ul",[a("li",[t._v("backup and restore, RPO in hours, RTO in 24 hours or less.")]),t._v(" "),a("li",[t._v("Pilot light, RPO in minutes, RTO in hours.")]),t._v(" "),a("li",[t._v("Warm standby, RPO in seconds, RTO in minutes.")]),t._v(" "),a("li",[t._v("Multi-region (multi-site) active-active, RPO near zero, RTO potentially zero.")])]),t._v(" "),a("h2",{attrs:{id:"_9-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-20"}},[t._v("#")]),t._v(" 9/20")]),t._v(" "),a("p",[t._v("if the number of messages increase to 100,000 each second. only SNS can support.\ncoz Kinese Data Stream can 1,000 records per second for writes.")]),t._v(" "),a("p",[t._v("So we should use a SNS topic, and multiple SQS subscriptions,\nand configured the consumer applications to process the messages from the queues.")]),t._v(" "),a("h2",{attrs:{id:"_10-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-20"}},[t._v("#")]),t._v(" 10/20")]),t._v(" "),a("p",[t._v("vpc peering connection and PrivateLink connection can use for two aws account, which the service is in private subnet.")]),t._v(" "),a("h2",{attrs:{id:"_11-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-20"}},[t._v("#")]),t._v(" 11/20")]),t._v(" "),a("p",[t._v("if you use spot instance, and want to stoped but not terminated, in case the spot instance are interrupted.")]),t._v(" "),a("h2",{attrs:{id:"_12-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-20"}},[t._v("#")]),t._v(" 12/20")]),t._v(" "),a("p",[t._v("use S3 replication between the S3 butckets. Create an S3 event notification for the analysis S3 bucket.\nConfigure Lambda and SageMaker Pipelines as destinations of the event notification. Configure S3:ObjectCreated:Put\nas the event type.")]),t._v(" "),a("h2",{attrs:{id:"_13-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-20"}},[t._v("#")]),t._v(" 13/20")]),t._v(" "),a("p",[t._v('Aurora Global Database, span multiple Regions, enabling low latency global reads. From the name "Global",\nyou should know that will enable multiple Regions.')]),t._v(" "),a("h2",{attrs:{id:"_14-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-20"}},[t._v("#")]),t._v(" 14/20")]),t._v(" "),a("p",[t._v("use NLB as the Global Accelerator endpoint in each Region.\nCloudFront cannot point to latency record as an origin.")]),t._v(" "),a("h2",{attrs:{id:"_15-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-20"}},[t._v("#")]),t._v(" 15/20")]),t._v(" "),a("p",[t._v("EFS Throughput Modes provides throughput with the ability to be shared across instances.\nAnd the EBS volume cannot be shared across instances except multi-attach.")]),t._v(" "),a("h2",{attrs:{id:"_16-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-20"}},[t._v("#")]),t._v(" 16/20")]),t._v(" "),a("p",[t._v("first is key-value, so should use DynamoDB.\nthen, miscroseconds latency, should be DynamoDB Accelerator.\ncoz Aurora + ElasticCache cannot meet the miscroseconds latency.")]),t._v(" "),a("h2",{attrs:{id:"_17-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-20"}},[t._v("#")]),t._v(" 17/20")]),t._v(" "),a("p",[t._v("use Customer managed keys. SSE-KMS.\nSSE-S3 would not allow key management and audit for the key usage.")]),t._v(" "),a("h2",{attrs:{id:"_18-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_18-20"}},[t._v("#")]),t._v(" 18/20")]),t._v(" "),a("p",[t._v("ALB + Global Accelerator.")]),t._v(" "),a("h2",{attrs:{id:"_19-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_19-20"}},[t._v("#")]),t._v(" 19/20")]),t._v(" "),a("p",[t._v("Aurora Serverless for MySQL, ideal for infrequent access patterns with minimal downtime and allows you to provision\na MySQL instance without selecting a particular instance type.")]),t._v(" "),a("h2",{attrs:{id:"_20-20"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-20"}},[t._v("#")]),t._v(" 20/20")]),t._v(" "),a("p",[t._v("point is create CloudFront origin group with two buckets, 1th is primary, 2th is secondary. then can implement failover handling for the primary and standby bucket.")])])}),[],!1,null,null,null);a.default=r.exports}}]);