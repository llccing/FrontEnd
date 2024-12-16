## AWS EventBridge

Amazon EventBridge is a service that provides real-time access to changes in data in AWS services, your own applications, and software as a service (SaaS) applications without writing code.

To get started, you can choose an event source on the EventBridge console. You can then select a target from AWS services including AWS Lambda, Amazon Simple Notification Service (SNS), and Amazon Kinesis Data Firehose. EventBridge will automatically deliver the events in near real-time.

[AWS EventBridge FAQs](https://aws.amazon.com/eventbridge/faqs/)

### AWS CloudWatch Events

EventBridge was formerly called Amazon CloudWatch Events. The default event bus and the rules you created in CloudWatch Events also display in the EventBridge console. EventBridge uses the same CloudWatch Events API, so your code that uses the CloudWatch Events API stays the same.

[EventBridge was formerly called Amazon CloudWatch Events](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cwe-now-eb.html)
