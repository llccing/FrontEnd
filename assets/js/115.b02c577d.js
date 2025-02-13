(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{372:function(e,t,a){"use strict";a.r(t);var s=a(14),i=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q61"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q61"}},[e._v("#")]),e._v(" Q61")]),e._v(" "),t("p",[e._v("**Answer: ** C")]),e._v(" "),t("p",[e._v("The correct solution is C. Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.")]),e._v(" "),t("p",[e._v("AWS Secrets Manager is a service that enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. By storing the database credentials as a secret in Secrets Manager, you can ensure that they are not hardcoded in the application and that they are automatically rotated on a regular basis. To grant the EC2 instance access to the secret, you can attach the required permission to the EC2 role. This will allow the application to retrieve the secret from Secrets Manager as needed.")]),e._v(" "),t("h2",{attrs:{id:"q62"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q62"}},[e._v("#")]),e._v(" Q62")]),e._v(" "),t("p",[e._v("**Answer: ** D")]),e._v(" "),t("p",[e._v("It's a third-party certificate, hence AWS cannot manage renewal automatically. The closest thing you can do is to send a notification to renew the 3rd party certificate.")]),e._v(" "),t("h2",{attrs:{id:"q63"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q63"}},[e._v("#")]),e._v(" Q63")]),e._v(" "),t("p",[e._v("**Answer: ** A")]),e._v(" "),t("p",[e._v("B. Using DynamoDB for storing and processing large .pdf files would not be cost-effective due to storage and throughput costs associated with DynamoDB.")]),e._v(" "),t("p",[e._v("C. Using Elastic Beanstalk with EC2 and EBS storage can work, but it may not be most cost-effective solution. It involves managing the underlying infrastructure and scaling manually.")]),e._v(" "),t("p",[e._v("D. Similar to C, using Elastic Beanstalk with EC2 and EFS storage can work, but it may not be most cost-effective solution. EFS is a shared file storage service and may not provide optimal performance for conversion process, especially as demand and file sizes increase.")]),e._v(" "),t("p",[e._v("A. leverages Lambda and the scalable and cost-effective storage of S3. With Lambda, you only pay for actual compute time used during the file conversion, and S3 provides durable and scalable storage for both .pdf files and .jpg files. The S3 PUT event triggers Lambda to perform conversion, eliminating need to manage infrastructure and scaling, making it most cost-effective solution for this scenario.")]),e._v(" "),t("h2",{attrs:{id:"q64"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q64"}},[e._v("#")]),e._v(" Q64")]),e._v(" "),t("p",[e._v("**Answer: ** D")]),e._v(" "),t("h2",{attrs:{id:"agree-answer-is-d"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#agree-answer-is-d"}},[e._v("#")]),e._v(" Agree answer is D)")]),e._v(" "),t("p",[e._v("Requirements are:")]),e._v(" "),t("ul",[t("li",[e._v('"Users and applications interact with the data each day"')]),e._v(" "),t("li",[e._v('"the company requires access to AWS and on-premises file storage with minimum latency"')])]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v('Explanation: Answer A) will work with the same on-prem <> aws latency as in answer D) as both use the VPN Connection. Having said this, by using an Amazon FSx File Gateway on premise as the D) scenario mentioned, all users will have a great benefit on using the cache that the FSx File Gateway has on their daily workloads. And that is part of the requierements: "users", "each day", "latency"')]),e._v(" "),t("h2",{attrs:{id:"q65"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q65"}},[e._v("#")]),e._v(" Q65")]),e._v(" "),t("p",[e._v("**Answer: ** D")]),e._v(" "),t("p",[e._v("Both Rekognition and Textract possess the ability to detect text within images, yet they are optimized for differing applications.")]),e._v(" "),t("p",[e._v("Rekognition specializes in identifying text located spatially within an image, for instance, words displayed on street signs, t-shirts, or license plates. Its typical use cases encompass visual search, content filtering, deriving insights from content, among others. However, it's not the ideal choice for images containing more than 100 words, as this exceeds its limitation.")]),e._v(" "),t("p",[e._v("On the other hand, Textract is tailored more towards processing documents and PDFs, offering a comprehensive suite for Optical Character Recognition (OCR). It proves useful in scenarios involving financial reports, medical records, receipts, ID documents, and more.")]),e._v(" "),t("h2",{attrs:{id:"q66"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q66"}},[e._v("#")]),e._v(" Q66")]),e._v(" "),t("p",[e._v("**Answer: ** B")]),e._v(" "),t("p",[e._v("S3 One Zone-Infrequent Access (S3 One Zone-IA) is cheaper than S3 Standard and S3 Standard-Infrequent Access (S3 Standard-IA) but still offers immediate accessibility.\nSince the files are rarely accessed after the first 30 days, transitioning them to S3 One Zone-IA after 30 days will reduce costs.\nThe 4-year retention period aligns with the company policy, and after this period, the files can be deleted.\nOption C suggests moving the files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days, which is a more expensive storage class compared to S3 One Zone-Infrequent Access (S3 One Zone-IA).")]),e._v(" "),t("p",[e._v("Since the files are rarely accessed after the first 30 days, moving them to S3 Standard-IA would result in higher storage costs compared to moving them to S3 One Zone-IA.")]),e._v(" "),t("p",[e._v("Therefore, option B is more cost-effective than option C.")]),e._v(" "),t("h2",{attrs:{id:"q67"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q67"}},[e._v("#")]),e._v(" Q67")]),e._v(" "),t("p",[e._v("**Answer: ** D")]),e._v(" "),t("p",[e._v("In case of SQS - multi-consumers if one consumer has already picked the message and is processing, in meantime other consumer can pick it up and process the message there by two copies are added at the end. To avoid this the message is made invisible from the time its picked and deleted after processing. This visibility timeout is increased according to max time taken to process the message")]),e._v(" "),t("h2",{attrs:{id:"q68"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q68"}},[e._v("#")]),e._v(" Q68")]),e._v(" "),t("p",[e._v("**Answer: ** A")]),e._v(" "),t("p",[e._v("Direct Connect goes throught 1 Gbps, 10 Gbps or 100 Gbps and the VPN goes up to 1.25 Gbps.")]),e._v(" "),t("p",[e._v("https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-vpn.html")]),e._v(" "),t("h2",{attrs:{id:"q69"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q69"}},[e._v("#")]),e._v(" Q69")]),e._v(" "),t("p",[e._v("**Answer: ** B")]),e._v(" "),t("p",[e._v("By configuring the Auto Scaling group to use multiple Availability Zones, the application will be able to continue running even if one Availability Zone goes down. Configuring the database as Multi-AZ will also ensure that the database remains available in the event of a failure in one Availability Zone. Using an Amazon RDS Proxy instance for the database will allow the application to automatically route traffic to healthy database instances, further increasing the availability of the application. This solution will meet the requirements for high availability with minimal operational effort.")]),e._v(" "),t("h2",{attrs:{id:"q70"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q70"}},[e._v("#")]),e._v(" Q70")]),e._v(" "),t("p",[e._v("**Answer: ** C")]),e._v(" "),t("p",[e._v("I would choose A, as NLB supports HTTP and HTTPS Health Checks, BUT you can't put any URL (as proposed), only the node IP addresses.")])])}),[],!1,null,null,null);t.default=i.exports}}]);