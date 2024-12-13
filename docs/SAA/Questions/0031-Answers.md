## Q31
**Answer:** A

AWS Config provides a set of pre-built or customizable rules that can be used to check the configuration and compliance of AWS resources. By
creating a custom rule or using the built-in rule for tagging, you can define the required tags for EC2, RDS DB and Redshift clusters. AWS Config
continuously monitors the resources and generates configuration change events or evaluation results. 

By leveraging AWS Config, the solution can automatically detect any resources that do not comply with the defined tagging requirements. This
approach eliminates the need for manual checks or periodic code execution, reducing operational overhead. Additionally, AWS Config provides
the ability to automatically remediate non-compliant resources by triggering Lambda or sending notifications, further streamlining the
configuration management process. 

Option B (using Cost Explorer) primarily focuses on cost analysis and does not provide direct enforcement of proper tagging. Option C and D
(writing API calls and running them manually or through scheduled Lambda) require more manual effort and maintenance compared to using AWS Config rules.

## Q32
**Answer:** B

Good answer is B: client-side JavaScript. the website is static, so it must be S3.

## Q33
**Answer:** C

I would go for C. The tricky phrase is "near-real-time solution", pointing to Firehouse, but it can't send data to DynamoDB, so it leaves us with C as best option. 

----
Q: What is a destination in Firehose?

A destination is the data store where your data will be delivered. Firehose currently supports Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Splunk, Datadog, NewRelic, Dynatrace, Sumo Logic, LogicMonitor, MongoDB, and HTTP End Point as destinations.

-----
A: DynamoDB streams are logs, not fit for real-time sharing.
B: S3 is not document database, it's BLOB
D: S3 and files are not database
C: Kinesis + Lambda + DynamoDB is high performance, low latency scalable solution.

## Q34
**Answer:** B

CloudTrail - Track user activity and API call history.
Config - Assess, audits, and evaluates the configuration and relationships of tag resources.

Therefore, the answer is B