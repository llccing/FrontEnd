## Q141

**Answer:** A
Answer is A.
Amazon CloudFront is a web service that speeds up distribution of your static and dynamic web content
https://www.examtopics.com/discussions/amazon/view/81081-exam-aws-certified-solutions-architect-associate-saa-c02/

----------
Amazon cloud front is a better choice in terms of delivering both static and dynamic content globally. Also option B says deploy the application stack to only two regions. but the use case is to access the portal globally. Don't think Amazon Route 53 latency routing policy will have a bigger impact in terms of low latency.


## Q142

**Answer:** C

Correct Answer: C
AWS Global Accelerator and Amazon CloudFront are separate services that use the AWS global network and its edge locations around the world. CloudFront improves performance for both cacheable content (such as images and videos) and dynamic content (such as API acceleration and dynamic site delivery). Global Accelerator improves performance for a wide range of applications over TCP or UDP by proxying packets at the edge to applications running in one or more AWS Regions. Global Accelerator is a good fit for non-HTTP use cases, such as gaming (UDP), IoT (MQTT), or Voice over IP, as well as for HTTP use cases that specifically require static IP addresses or deterministic, fast regional failover. Both services integrate with AWS Shield for DDoS protection.

----------
UDP, static IP = Global Accelerator and Network Load Balancer


## Q143

**Answer:** D

D is organic pattern, lift and shift, decompose to containers, first making most use of existing code, whilst new features can be added over time with lambda+api gw later.
A is leapfrog pattern. requiring refactoring all code up front.o

## Q144

**Answer:** B

Report = Aurora replica


## Q145

**Answer:** D

I was tempted to pick A but then I realized there are two key requirements:
- scale seamlessly
- cost-effectively

None of A-C give seamless scalability. A and B are about adding second instance (which I assume does not match to "scale seamlessly"). C is about changing instance type.

Therefore D is only workable solution to the scalability requirement

## Q146

**Answer:** B

Answer is B: Reserved is cheaper than on demand the company has. And it's meet the availabilty (HA) requirement as to spot instance that can be disrupted at any time.
PRICING BELOW.
On-Demand: 0% There’s no commitment from you. You pay the most with this option.
Reserved : 40%-60%1-year or 3-year commitment from you. You save money from that commitment.
Spot 50%-90% Ridiculously inexpensive because there’s no commitment from the AWS side.

## Q147

**Answer:** B

Ans B - S3 with Glacier Deep plus Lifecycle management

---------
B is the most cost-effective solution. Storing the logs in S3 and using S3 Lifecycle policies to transition logs older than 1 month to S3 Glacier Deep Archive allows for cost optimization based on data access patterns. Since logs older than 1 month are rarely accessed, moving them to S3 Glacier Deep Archive helps minimize storage costs while still retaining the logs for the required 10-year period.

A is incorrect because using AWS Backup to move logs to S3 Glacier Deep Archive can incur additional costs and complexity compared to using S3 Lifecycle policies directly.

C adds unnecessary complexity and costs by involving CloudWatch Logs and AWS Backup when direct management through S3 is sufficient.

D is incorrect because using S3 Lifecycle policies to move logs from CloudWatch Logs to S3 Glacier Deep Archive is not a valid option. CloudWatch Logs and S3 have separate storage mechanisms, and S3 Lifecycle policies cannot be applied directly to CloudWatch Logs.

## Q148

**Answer:** D

*ensure that all notifications are eventually processed*

------
This is why https://docs.aws.amazon.com/sns/latest/dg/sns-message-delivery-retries.html

-------------
I choose Option D as the correct answer.

To ensure that all notifications are eventually processed, the solutions architect can set up an Amazon SQS queue as the on-failure destination for the Amazon SNS topic. This way, when the Lambda function fails due to network connectivity issues, the notification will be sent to the queue instead of being lost. The Lambda function can then be modified to process messages in the queue, ensuring that all notifications are eventually processed.

## Q149

**Answer:** A
Ans A - SQS (FIFO) ensures data is processed in the order it is received

## Q150

**Answer:** A

Composite alarms determine their states by monitoring the states of other alarms. You can **use composite alarms to reduce alarm noise**. For example, you can create a composite alarm where the underlying metric alarms go into ALARM when they meet specific conditions. You then can set up your composite alarm to go into ALARM and send you notifications when the underlying metric alarms go into ALARM by configuring the underlying metric alarms never to take actions. Currently, composite alarms can take the following actions:
https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html


-------
By creating composite alarms in CloudWatch, the solutions architect can combine multiple metrics, such as CPU utilization and read IOPS, into a single alarm. This allows the company to take action only when both conditions are met, reducing false alarms and focusing on meaningful alerts.

B can help in monitoring the overall health and performance of the application. However, it does not directly address the specific requirement of triggering an action when CPU utilization and read IOPS exceed certain thresholds simultaneously.

C. Creating CloudWatch Synthetics canaries is useful for actively monitoring the application's behavior and availability. However, it does not directly address the specific requirement of monitoring CPU utilization and read IOPS to trigger an action.

D. Creating single CloudWatch metric alarms with multiple metric thresholds where possible can be an option, but it does not address the requirement of triggering an action only when both CPU utilization and read IOPS exceed their respective thresholds simultaneously.

