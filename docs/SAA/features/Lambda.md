## Lambda 是什么？

您可以使用 AWS Lambda 运行代码而无需预置或管理服务器。

Lambda 在可用性高的计算基础设施上运行您的代码，执行计算资源的所有管理工作，其中包括服务器和操作系统维护、容量预置和弹性伸缩和记录。使用 Lambda，您只需在 Lambda 支持的一种语言运行时系统中提供代码。

您可以将代码组织到 Lambda 函数。Lambda 服务仅在需要时运行函数并自动扩展。您只需按使用的计算时间付费，代码未运行时不产生费用。

[AWS Lambda](https://docs.aws.amazon.com/zh_cn/lambda/latest/dg/welcome.html)

### what is the difference between lambda and aws glue?

AWS Lambda is a serverless compute service that lets you run code without provisioning or managing servers. AWS Glue is a fully managed ETL service that makes it easy to prepare and load your data for analytics.

[AWS Lambda vs AWS Glue: Key Differences](https://hevodata.com/learn/aws-glue-vs-aws-lambda-key-differences/)

#### When should we use AWS Glue or AWS Lambda?

- Complex ETL Workflows: If your data processing requires complex Extract, Transform, and Load (ETL) operations, AWS Glue is the better choice. It offers built-in data cleansing, transformation, and cataloging tools, making it ideal for managing large-scale data pipelines.
- Data Integration with Multiple Sources: AWS Glue is designed to seamlessly integrate with various data sources such as S3, RDS, Redshift, and external databases. If your workload involves combining and processing data from multiple sources, Glue’s data catalog and built-in connectors streamline this process.
-  Event-Driven Data Processing: AWS Lambda is ideal if your application needs to trigger data processing tasks based on specific events (e.g., file uploads and database changes). Lambda allows you to execute code responding to these events with minimal latency, making it suitable for real-time data processing.
- Simple or Short-Lived Tasks: AWS Lambda is more appropriate for simple data transformation tasks or operations that can be completed within a few seconds. Lambda’s pay-per-use pricing model is cost-efficient for short-lived functions, making it perfect for lightweight processing tasks.

