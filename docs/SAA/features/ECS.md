## Amazon Elastic Container Service (ECS)

Amazon Elastic Container Service（ECS）是一项完全托管式容器编排服务，可帮助您更高效地部署、管理和扩展容器化的应用程序。它与 AWS 环境深度集成，提供易于使用的解决方案，用于在云端和本地运行容器工作负载，并通过 Amazon ECS Anywhere 提供高级安全功能。

### what is the difference between ECS and EKS?

Simplicity vs flexibility

What customers tell us they love most about Amazon ECS is the simplicity it provides. Amazon ECS delivers an AWS-opinionated solution for running containers at scale. It reduces the time it takes customers to build, deploy, or migrate their containerized applications successfully. Designed for simplicity from the start, using Amazon ECS decreases the number of decisions customers must make around compute, network, and security configurations, without sacrificing scale or features. For example, if you need a load balancer, AWS Application Load Balancer (ALB) or Network Load Balancer (NLB) integrate seamlessly with Amazon ECS, so you don’t need to build or maintain generalized abstractions.

Amazon ECS powers a growing number of popular AWS services including Amazon SageMaker, Amazon Polly, Amazon Lex, and AWS Batch, and is trusted by hundreds of thousands of customers including Samsung, GE, Expedia, and Duolingo. Customers adopting containers at scale seeking powerful simplicity should start with Amazon ECS.

Teams choose Kubernetes for its vibrant ecosystem and community, consistent open source APIs, and broad flexibility. They rely on Amazon EKS to handle the undifferentiated heavy lifting of building and operating Kubernetes at scale.

Amazon EKS provides the flexibility of Kubernetes with the security and resiliency of being an AWS managed service that is optimized for customers building highly available services. Amazon EKS provides a secure, reliable, scalable, and resilient Kubernetes environment for customers such as Intel, Snap, Intuit, GoDaddy, and Fidelity, and helps Amazon.com deliver an incredible customer experience. Customers adopting Kubernetes that want the resiliency of AWS should start with Amazon EKS.

more details: https://aws.amazon.com/cn/blogs/containers/amazon-ecs-vs-amazon-eks-making-sense-of-aws-container-services/
