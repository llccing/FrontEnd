## Q61
**Answer: ** C

The correct solution is C. Store the database credentials as a secret in AWS Secrets Manager. Turn on automatic rotation for the secret. Attach the required permission to the EC2 role to grant access to the secret.

AWS Secrets Manager is a service that enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle. By storing the database credentials as a secret in Secrets Manager, you can ensure that they are not hardcoded in the application and that they are automatically rotated on a regular basis. To grant the EC2 instance access to the secret, you can attach the required permission to the EC2 role. This will allow the application to retrieve the secret from Secrets Manager as needed.

## Q62
**Answer: ** D

It's a third-party certificate, hence AWS cannot manage renewal automatically. The closest thing you can do is to send a notification to renew the 3rd party certificate.

## Q63
**Answer: ** A

B. Using DynamoDB for storing and processing large .pdf files would not be cost-effective due to storage and throughput costs associated with DynamoDB.

C. Using Elastic Beanstalk with EC2 and EBS storage can work, but it may not be most cost-effective solution. It involves managing the underlying infrastructure and scaling manually.

D. Similar to C, using Elastic Beanstalk with EC2 and EFS storage can work, but it may not be most cost-effective solution. EFS is a shared file storage service and may not provide optimal performance for conversion process, especially as demand and file sizes increase.

A. leverages Lambda and the scalable and cost-effective storage of S3. With Lambda, you only pay for actual compute time used during the file conversion, and S3 provides durable and scalable storage for both .pdf files and .jpg files. The S3 PUT event triggers Lambda to perform conversion, eliminating need to manage infrastructure and scaling, making it most cost-effective solution for this scenario.

## Q64
**Answer: ** D

Agree answer is D)
---
Requirements are:
- "Users and applications interact with the data each day"
- "the company requires access to AWS and on-premises file storage with minimum latency"
---
Explanation: Answer A) will work with the same on-prem <> aws latency as in answer D) as both use the VPN Connection. Having said this, by using an Amazon FSx File Gateway on premise as the D) scenario mentioned, all users will have a great benefit on using the cache that the FSx File Gateway has on their daily workloads. And that is part of the requierements: "users", "each day", "latency"

## Q65
**Answer: ** D

Both Rekognition and Textract possess the ability to detect text within images, yet they are optimized for differing applications.

Rekognition specializes in identifying text located spatially within an image, for instance, words displayed on street signs, t-shirts, or license plates. Its typical use cases encompass visual search, content filtering, deriving insights from content, among others. However, it's not the ideal choice for images containing more than 100 words, as this exceeds its limitation.

On the other hand, Textract is tailored more towards processing documents and PDFs, offering a comprehensive suite for Optical Character Recognition (OCR). It proves useful in scenarios involving financial reports, medical records, receipts, ID documents, and more.

## Q66
**Answer: ** B

S3 One Zone-Infrequent Access (S3 One Zone-IA) is cheaper than S3 Standard and S3 Standard-Infrequent Access (S3 Standard-IA) but still offers immediate accessibility.
Since the files are rarely accessed after the first 30 days, transitioning them to S3 One Zone-IA after 30 days will reduce costs.
The 4-year retention period aligns with the company policy, and after this period, the files can be deleted.
Option C suggests moving the files from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days, which is a more expensive storage class compared to S3 One Zone-Infrequent Access (S3 One Zone-IA).

Since the files are rarely accessed after the first 30 days, moving them to S3 Standard-IA would result in higher storage costs compared to moving them to S3 One Zone-IA.

Therefore, option B is more cost-effective than option C.

## Q67
**Answer: ** D

In case of SQS - multi-consumers if one consumer has already picked the message and is processing, in meantime other consumer can pick it up and process the message there by two copies are added at the end. To avoid this the message is made invisible from the time its picked and deleted after processing. This visibility timeout is increased according to max time taken to process the message

## Q68
**Answer: ** A

Direct Connect goes throught 1 Gbps, 10 Gbps or 100 Gbps and the VPN goes up to 1.25 Gbps.

https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-direct-connect-vpn.html

## Q69
**Answer: ** B

By configuring the Auto Scaling group to use multiple Availability Zones, the application will be able to continue running even if one Availability Zone goes down. Configuring the database as Multi-AZ will also ensure that the database remains available in the event of a failure in one Availability Zone. Using an Amazon RDS Proxy instance for the database will allow the application to automatically route traffic to healthy database instances, further increasing the availability of the application. This solution will meet the requirements for high availability with minimal operational effort.

## Q70
**Answer: ** C

I would choose A, as NLB supports HTTP and HTTPS Health Checks, BUT you can't put any URL (as proposed), only the node IP addresses.