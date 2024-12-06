## AWS Systems Manager
AWS Systems Manager helps you centrally view, manage, and operate nodes at scale in AWS, on-premises, and multicloud environments. Systems Manager provides various tools to help you complete common node tasks. These tools include:

- Use Patch Manager to apply patches to nodes such as security updates.
- Session Manager provides secure node management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys.
- Using Run Command you can remotely and securely manage the configuration of your managed nodes. A managed node is any Amazon Elastic Compute Cloud (Amazon EC2) instance or non-EC2 machine in your hybrid and multicloud environment that has been configured for Systems Manager.

[AWS Systems Manager 常见问题](https://aws.amazon.com/systems-manager/faq/)

### Parameter Store

Parameter Store 是 AWS Systems Manager 的一项功能，可为配置数据提供安全存储，现在，您可以与其他 AWS 账户共享高级层参数，从而集中管理配置数据。参数是键值对，您可以在代码中引用，也可以通过几个 AWS 集成（例如 AWS CloudFormation 和 Amazon EC2）来引用。如今，许多客户在多个 AWS 账户中都有依赖共享配置数据的工作负载。现在，您可以通过与其他需要访问权限的账户共享参数，而不是在账户之间手动复制和同步数据，从而维护配置数据的单一信任源。

[AWS Systems Manager Parameter Store 跨账户共享](https://aws.amazon.com/cn/about-aws/whats-new/2024/02/aws-systems-manager-parameter-store-cross-account-sharing/)
