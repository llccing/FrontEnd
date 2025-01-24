## AWS Fargate

AWS Fargate 是一种无服务器、随用随付的计算引擎，可让您专注于构建应用程序，而无需管理服务器。将服务器管理、资源分配和扩展等任务转移到 AWS 不仅可以改善您的运营状况，还可以加快云端从构思到生产的过程，并降低总拥有成本。 

AWS Fargate 是一种适用于容器的无服务器计算引擎，可与 Amazon Elastic Container Service（ECS）和 Amazon Elastic Kubernetes Service（EKS）配合使用。通过 AWS Fargate 可以轻松专注于构建应用程序。使用 Fargate，您无需预置和管理服务器，而且可以为每个应用程序指定资源并为其付费，并通过设计隔离应用程序来提高安全性。

## why use Fargate?

AWS Fargate 是一种无服务器、随用随付的计算引擎，可让您专注于构建应用程序，而无需管理服务器。AWS Fargate 与 Amazon ECS 和 Amazon EKS 兼容。AWS Fargate 通过将底层基础设施资源的管理工作尽可能多地转移到 AWS，使开发团队可以专注于编写解决业务问题的代码，从而轻松扩展和管理云应用程序。将服务器管理、资源分配和扩展等任务转移到 AWS 不仅可以改善您的运营状况，还可以加快云端从构思到生产的过程，并降低总拥有成本（TCO）。由于该服务支持多种 CPU 架构和操作系统，因此您可以在各种应用程序中享受到无服务器在成本、敏捷性和可扩展性方面的好处。

### what is the difference between Fargate and Lambda?

These two choices because they provide:

- Reduced operational overhead: Both Lambda and Fargate abstract away server management, reducing the need for patching, maintenance, and capacity planning.
- Pay-per-use pricing: You only pay for the compute resources you actually use, potentially lowering costs for variable workloads.
- Faster deployment: Typically offers quicker deployment times compared to provisioning and configuring EC2 instances.
- Built-in high availability: Both services handle infrastructure redundancy automatically.
- Simplified compliance: Reduced attack surface and built-in security features can ease compliance efforts.
- Focus on code: Developers can concentrate more on writing application code rather than managing infrastructure.

While Lambda and Fargate are both serverless options, there are significant differences between them:

AWS Fargate is a serverless compute engine for containers, primarily used with Amazon ECS. It automatically manages your infrastructure, allowing you to focus on deploying and scaling containerized applications. Fargate is ideal for long-running applications, microservices, or batch processing—where you need fine-grained control over resource allocation (CPU, memory) and want to avoid managing underlying servers.

AWS Lambda is a serverless computing service that automatically runs your code in response to events, and manages the underlying compute resources. It's best suited for event-driven applications, such as processing files uploaded to Amazon S3, responding to HTTP requests, or running scheduled tasks. Lambda is also well-suited for stream processing and data processing applications due to its ability to scale automatically in response to events and handle high volumes of data in real time. Lambda can process data streams from sources like Amazon Kinesis or Amazon DynamoDB, allowing for efficient, serverless data transformations, filtering, and analytics without managing infrastructure. Lambda is designed for short-lived tasks (up to 15 minutes) and is billed based on the number of requests and execution time, making it cost-eﬀective for sporadic workloads.

If your project involves event-driven, short-duration tasks or unpredictable workloads, AWS Lambda might be the better fit. If you need to run containerized applications with specific resource needs (or you require persistent processes), AWS Fargate would be more appropriate.

