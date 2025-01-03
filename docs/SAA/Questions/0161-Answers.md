## Q161

**Answer:** B

solution should remove operation overhead -> s3 -> lambda -> aurora

---
By placing the JSON documents in an S3 bucket, the documents will be stored in a highly durable and scalable object storage service. The use of AWS Lambda allows the company to run their Python code to process the documents as they arrive in the S3 bucket without having to worry about the underlying infrastructure. This also allows for horizontal scalability, as AWS Lambda will automatically scale the number of instances of the function based on the incoming rate of requests. The results can be stored in an Amazon Aurora DB cluster, which is a fully-managed, high-performance database service that is compatible with MySQL and PostgreSQL. This will provide the necessary durability and scalability for the results of the processing.

## Q162

**Answer:** D

If you see HPC and Linux both in the question.. Pick Amazon FSx for Lustre.

## Q163

**Answer:** A

A is minimal overhead.
B has EC2 overhead
C EC2 instance overhead + container repository running on EC2 overhead
D AMI, CloudWatch alarm is overhead++

## Q164

**Answer:** C

Amazon SQS supports dead-letter queues (DLQ), which other queues (source queues) can target for messages that can't be processed (consumed) successfully.

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html


## Q165

**Answer:** D

Answer D. Use an OAI to lockdown CloudFront to S3 origin & enable WAF on CF distribution.

---
https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-access-to-amazon-s3/ confirms use of OAI (and option D).

## Q166

**Answer:** D

CloudFront is well-suited for efficiently serving static HTML pages to users around the world. By using itwith the S3 as its origin, the static HTML pages can be cached and distributed globally to edge locations, reducing latency and improving performance for users accessing the pages from different regions. This solution ensures efficient and effective delivery of the daily reports to millions of users worldwide, providing a scalable and high-performance solution for the global event.

A would allow temporary access to the files, but it does not address the scalability and performance requirements of serving millions of views globally.

B is not necessary for this scenario as the goal is to distribute the static HTML pages efficiently to users worldwide, not replicate the files across multiple Regions.

C is primarily used for routing DNS traffic based on the geographic location of users, but it does not provide the caching and content delivery capabilities required fo this use case.

## Q167

**Answer:** D

"without any downtime" rules out spot instance.

## Q168

**Answer:** D

By creating an SCP in the root organizational unit, the security team can define and enforce fine-grained permissions that limit access to specific services or actions across all member accounts. The SCP acts as a guardrail, denying access to specified services or actions, ensuring that the permissions are consistent and applied uniformly across the organization. SCPs are scalable and provide a single point of control for managing permissions, allowing the security team to centrally manage access restrictions without needing to modify individual account settings.

Option A and option B are not suitable for controlling access across multiple accounts in AWS Organizations. ACLs and security groups are typically used for managing network traffic and access within a single account or a specific resource.

Option C is not the recommended approach. Cross-account roles are used for granting access, and denying access through cross-account roles can be complex and less manageable compared to using SCPs.

## Q169

**Answer:** C

When you see DDOS immediately think Shield.

## Q170

**Answer:** C

Geographic (Geo) Match Conditions in AWS WAF. This new condition type allows you to use AWS WAF to restrict application access based on the geographic location of your viewers. With geo match conditions you can choose the countries from which AWS WAF should allow access.
https://aws.amazon.com/about-aws/whats-new/2017/10/aws-waf-now-supports-geographic-match/



