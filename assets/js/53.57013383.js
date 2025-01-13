(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{514:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q121"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q121"}},[e._v("#")]),e._v(" Q121")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v('"You can enable encryption for an Amazon RDS DB instance when you create it, but not after it\'s created. However, you can add encryption to an unencrypted DB instance by creating a snapshot of your DB instance, and then creating an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot to get an encrypted copy of your original DB instance."\nhttps://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html')]),e._v(" "),t("h2",{attrs:{id:"q122"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q122"}},[e._v("#")]),e._v(" Q122")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("If you are a developer who needs to digitally sign or verify data using asymmetric keys, you should use the service to create and manage the private keys you’ll need. If you’re looking for a scalable key management infrastructure to support your developers and their growing number of applications, you should use it to reduce your licensing costs and operational burden...\nhttps://aws.amazon.com/kms/faqs/#:~:text=If%20you%20are%20a%20developer%20who%20needs%20to%20digitally,a%20broad%20set%20of%20industry%20and%20regional%20compliance%20regimes.")]),e._v(" "),t("h2",{attrs:{id:"q123"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q123"}},[e._v("#")]),e._v(" Q123")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("This issue is solved by SSL offloading, i.e. by moving the SSL termination task to the ALB.\nhttps://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("a interesting thing, jeff wrote the aws blog for twenty years.\nhttps://aws.amazon.com/blogs/aws/and-thats-a-wrap/")]),e._v(" "),t("h2",{attrs:{id:"q124"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q124"}},[e._v("#")]),e._v(" Q124")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Cant be implemented on Lambda because the timeout for Lambda is 15mins and the Job takes 60minutes to complete.\nAnswer >> A")]),e._v(" "),t("h2",{attrs:{id:"q125"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q125"}},[e._v("#")]),e._v(" Q125")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AE")]),e._v(" "),t("p",[e._v("A and E!\nApplication has to be highly available while the instance and database should not be exposed to the public internet, but the instances still requires access to the internet. NAT gateway has to be deployed in public subnets in this case while instances and database remain in private subnets in the VPC, therefore answer is (A) and (E).\nhttps://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html")]),e._v(" "),t("p",[e._v("If the instances did not require access to the internet, then the answer could have been\n(B) to use a private NAT gateway and keep it in the private subnets to communicate only to the VPCs.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html")]),e._v(" "),t("h2",{attrs:{id:"q126"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q126"}},[e._v("#")]),e._v(" Q126")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B\nB is the only right answer. C does not indicate archiving after 2 years. If it did specify 2 years, then C would also be an option.")]),e._v(" "),t("h2",{attrs:{id:"q127"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q127"}},[e._v("#")]),e._v(" Q127")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("Max instance store possible at this time is 30TB for NVMe which has the higher I/O compared to EBS.")]),e._v(" "),t("p",[e._v("is4gen.8xlarge 4 x 7,500 GB (30 TB) NVMe SSD")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes")]),e._v(" "),t("h2",{attrs:{id:"q128"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q128"}},[e._v("#")]),e._v(" Q128")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("run applications in containers -> Container service not EC2 (no operational overhead to config container workload on EC2)\nSpot instance < On-demand cost")]),e._v(" "),t("h2",{attrs:{id:"q129"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q129"}},[e._v("#")]),e._v(" Q129")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" AE")]),e._v(" "),t("p",[e._v("I would say A and E since Aurora and Fargate are serverless (less operational overhead).")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Ans A,E -\n-PostgreSQL is compatible with Aurora\n-Fargate for container service\nBoth services are serverless")]),e._v(" "),t("h2",{attrs:{id:"q130"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q130"}},[e._v("#")]),e._v(" Q130")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("B is the correct answer, since target scaling monitors cloudwatch metrics, while simple/step scaling monitors cloudwatch alarms.")])])}),[],!1,null,null,null);t.default=n.exports}}]);