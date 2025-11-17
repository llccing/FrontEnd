## AWS AppFlow

AWS AppFlow 是一项数据集成服务，允许您轻松地从多个 SaaS 应用程序中提取数据，并将其传输到 Amazon S3 存储桶。

Amazon AppFlow is a fully managed integration service that enables you to securely transfer data between Software-as-a-Service (SaaS) applications like Salesforce, Marketo, Slack, and ServiceNow, and AWS services like Amazon S3 and Amazon Redshift, in just a few clicks. With AppFlow, you can run data flows at nearly any scale at the frequency you choose - on a schedule, in response to a business event, or on demand. You can configure powerful data transformation capabilities like filtering and validation to generate rich, ready-to-use data as part of the flow itself, without additional steps. AppFlow automatically encrypts data in motion, and allows users to restrict data from flowing over the public Internet for SaaS applications that are integrated with AWS PrivateLink, reducing exposure to security threats.


###  What are the benefits of AppFlow? 

AppFlow relieves you from investing significant time and highly-skilled developer staff to build and maintain custom API connectors for AWS services to exchange data with SaaS applications. SaaS application administrators and business analysts can quickly implement most of the integrations they need without waiting months for IT to finish integration projects. Specifically, the benefits include:

- Speed and agility: Amazon AppFlow enables you to integrate applications in a few minutes – no more waiting days or weeks to code custom connectors. Features like data pagination, error logging, and network connection retries are included by default so there’s no coding or management. With Amazon Appflow, data flow quality is built in, and you can enrich the flow of data through masking, mapping, merging, filtering, and validation as part of the flow itself.
- Privacy and security: AppFlow encrypts data at rest and in motion. You can encrypt data with AWS managed keys or bring your own custom keys. It also allows users to restrict data from flowing over the public Internet using Amazon VPC endpoints enabled by AWS PrivateLink. This minimizes the threat from Internet based attacks and the risk of sensitive data leakage.
- Scalability: AppFlow easily scales up without the need to plan or provision resources, so you can move large volumes of data without breaking it down into multiple batches. Using Amazon AppFlow, you can easily transfer millions of Salesforce records or Zendesk tickets - all while running a single flow.
- Reliability: AppFlow uses a highly available architecture with redundant, isolated resources to prevent any single points of failure while running within the resilient AWS infrastructure.


### When should I use AppFlow or Amazon EventBridge?

Amazon EventBridge enables developers to build event driven applications that interact with SaaS applications and AWS services. SaaS applications that have integrated with EventBridge emit events to the customer’s event bus, which can then be routed to targets such as Amazon EC2 instances or Lambda functions for processing. AppFlow supports bi-directional transfer of data between SaaS applications and AWS services that may be initiated by humans using a UI, a schedule, or events - all with a point and click interface.

### When should I use AppFlow or AWS Glue?

AWS Glue provides a managed ETL service that makes it easy for data engineers to prepare and load data stored on AWS for analytics. It creates a data catalog from JDBC-compliant data sources (i.e. databases) that makes metadata available for ETL as well as querying via Amazon Athena, Amazon EMR, and Amazon Redshift Spectrum. AppFlow connects to API-based data sources and enables users in lines of business to build data integration without writing code.