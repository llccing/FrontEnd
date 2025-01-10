## Q191

**Answer:** A

The best solution to address the timeouts and eliminate the impact of long-running reporting queries without disrupting order processing is:A

## Q192
**Answer:** B, E

B and E are correct. Textract to extract text from files. Rekognition can also be used for text detection but after Rekognition - it's mentioned that Transcribe is used. Transcribe is used for Speech to Text. So that option D may not be valid.

## Q193

**Answer:** A

A vs B:
A: reduce the number of database reads on main + high availability provide
B: only reduce the number of DB reads
so A wins

-----
This question is stupid! Both answers can be correct!

## Q194

**Answer:** A

Changing my vote to A. After reviewing a Udemy course of SAA-C03, it seems that A (multi-AZ and Clusters) is sufficient for HA.

-------------------
Here AWS defines HA, and uses the word cluster - AWS has several methods for achieving HA through both approaches, such as through a scalable, load balanced cluster or assuming an active–standby pair. - https://docs.aws.amazon.com/whitepapers/latest/real-time-communication-on-aws/high-availability-and-scalability-on-aws.html

## Q195

**Answer:** C

The key reasons are:

Using an Auto Scaling group ensures the EC2 instances that process orders are highly available and scalable.
With SQS, the orders are decoupled from the instances that process them via asynchronous queuing.
If instances fail or go down, the orders remain in the queue until new instances can pick them up. This provides automated resilience.
Any failed processing can retry by resending messages back to the queue

## Q196

**Answer:** D

changing my answer to D after researching a bit.

The DynamoDB TTL feature allows you to define a per-item timestamp to determine when an item is no longer needed. Shortly after the date and time of the specified timestamp, DynamoDB deletes the item from your table without consuming any write throughput.

## Q197

**Answer:** B, E

DynamoDB is NoSQL - D is out
Replatform requires considerable overhead - C is out
Lambda function is for running code for short duration - A is out
Answer - BE

## Q198

**Answer:** D

Answer is not B. == mine.

-------
Option D is the correct solution that meets all the requirements:
º Use Amazon Elastic Kubernetes Service (Amazon EKS) with AWS Fargate for compute and Amazon DocumentDB (with MongoDB compatibility) for data storage.
The key reasons are:
º EKS allows running the Kubernetes environment on AWS without changes.
º Using Fargate removes the need to provision and manage EC2 instances.
º DocumentDB provides MongoDB compatibility so the data layer is unchanged.

## Q199

**Answer:** B

This is a poorly worded question with poorly worded options. Rekognition and Translate cannot convert speech to text so those options A, C & D are gone. B is the closes option but it does not mention S3 or retention policy of 7 years. Just a best guess on massive assumptions.

## Q200

**Answer:** D

seems to be D to me: https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html

