## AWS Secrets Manager

AWS Secrets Manager 是一种密钥管理服务，可帮助保护对应用程序、服务和 IT 资源的访问。通过该项服务，您可以在数据库凭证、API 密钥和其他密钥的整个生命周期内轻松地对其进行轮换、管理和检索。使用 Secrets Manager，您可以保护和管理用于访问 AWS 云、第三方服务和本地的资源的密钥。

[AWS Secrets Manager 常见问题](https://aws.amazon.com/cn/secrets-manager/faqs/)

## What is the difference between AWS Secrets Manager and AWS Systems Manager Parameter Store?

Secrets Manager 和 Parameter Store 都是 AWS Systems Manager 的一部分，用于存储和管理配置数据。

- Secrets Manager 用于存储和检索敏感数据，如数据库凭证、API 密钥和密码。它提供了自动轮换功能，可以定期更新密钥，并支持跨账户共享。
- Parameter Store 用于存储和检索非敏感数据，如配置参数和环境变量。它也支持自动轮换，但主要用于存储和检索非敏感数据。

[AWS Secrets Manager vs Systems Manager Parameter Store](https://tutorialsdojo.com/aws-secrets-manager-vs-systems-manager-parameter-store/)

