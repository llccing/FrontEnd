## AWS Config

AWS Config 是一种完全托管的服务，可为您提供资源库存、配置历史记录和配置更改通知，用于增强安全性和方便管理。借助 AWS Config，您可以找到现有的 AWS 资源，记录第三方资源的配置，导出资源的完整库存清单与所有配置详细信息，并确定在任何时间点上配置资源的方式。这些功能使用合规性审计、安全分析、资源更改跟踪和故障排除。

[https://aws.amazon.com/cn/config/faqs/](https://aws.amazon.com/cn/config/faqs/)

###  AWS Config 如何帮助进行审计？

AWS Config 可为您提供资源配置历史记录的访问权。您可以将配置更改与可能对配置的更改做出了贡献的 AWS CloudTrail 事件关联起来。通过此信息，您能够充分了解从“谁进行的更改”、“来自哪个 IP 地址”之类的详细信息乃至此更改对 AWS 资源及相关资源产生的影响。您可以使用此信息生成报告，从而在一定的时间段内帮助审计和评估合规性。

### AWS Config 如何与 AWS CloudTrail 协作？

AWS CloudTrail 会记录您账户上的用户 API 活动，协助您访问有关该活动的信息。您将获得有关 API 操作的完整详细信息，如调用者的身份、该 API 调用的时间、请求参数和 AWS 服务返回的响应元素。AWS Config 将您的 AWS 资源的时间点配置详细信息记录为配置项（CI）。您可以使用 CI 在某个时间点回答“我的 AWS 资源是什么样的？”您可以使用 CloudTrail 回答“谁进行了 API 调用来修改此资源？” 例如，您可以对 AWS Config 使用 AWS 管理控制台以检测安全组“生产数据库”过去的配置是否不正确。使用集成的 CloudTrail 信息，您可以发现是哪个用户错误配置了“生产数据库”安全组。

### what is the difference between AWS Config and AWS CloudTrail and AWS CloudWatch?

Simple answer from AI:
AWS Config - Track configuration changes and API calls.
AWS CloudTrail - Track user activity and API call history.
AWS CloudWatch - Monitor, store, and access logs from AWS resources and applications.

AWS CloudTrail is a service that provides the event history of your AWS account activity, including actions taken through the AWS Management Console, AWS SDKs, command line tools, and other AWS services. This service simplifies security analysis, resource change tracking, and troubleshooting.

CloudWatch is a monitoring and observability service. It collects and tracks metrics, collects and monitors log files, and responds to system-wide performance changes. It provides data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimise resource utilisation.

AWS Config is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It provides a detailed view of the configuration of AWS resources in your account and tracks changes over time.

https://medium.com/trendfingers/distinguishing-aws-cloudtrail-cloudwatch-and-config-ae8e1277e55c

