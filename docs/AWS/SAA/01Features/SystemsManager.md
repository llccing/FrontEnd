## AWS Systems Manager
AWS Systems Manager helps you centrally view, manage, and operate nodes at scale in AWS, on-premises, and multicloud environments. Systems Manager provides various tools to help you complete common node tasks. These tools include:

- Use Patch Manager to apply patches to nodes such as security updates.
- Session Manager provides secure node management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys.
- Using Run Command you can remotely and securely manage the configuration of your managed nodes. A managed node is any Amazon Elastic Compute Cloud (Amazon EC2) instance or non-EC2 machine in your hybrid and multicloud environment that has been configured for Systems Manager.

[AWS Systems Manager 常见问题](https://aws.amazon.com/systems-manager/faq/)

### Parameter Store

Parameter Store 是 AWS Systems Manager 的一项功能，可为配置数据提供安全存储，现在，您可以与其他 AWS 账户共享高级层参数，从而集中管理配置数据。参数是键值对，您可以在代码中引用，也可以通过几个 AWS 集成（例如 AWS CloudFormation 和 Amazon EC2）来引用。如今，许多客户在多个 AWS 账户中都有依赖共享配置数据的工作负载。现在，您可以通过与其他需要访问权限的账户共享参数，而不是在账户之间手动复制和同步数据，从而维护配置数据的单一信任源。

[AWS Systems Manager Parameter Store 跨账户共享](https://aws.amazon.com/cn/about-aws/whats-new/2024/02/aws-systems-manager-parameter-store-cross-account-sharing/)

### OpsCenter

OpsCenter, a capability of AWS Systems Manager, provides a central location where operations engineers and IT professionals can view, investigate, and resolve operational work items (OpsItems) related to AWS resources. OpsCenter is designed to reduce mean time to resolution for issues impacting AWS resources. OpsCenter aggregates and standardizes OpsItems across services while providing contextual investigation data about each OpsItem, related OpsItems, and related resources. OpsCenter also provides Systems Manager Automation runbooks that you can use to quickly resolve issues. You can specify searchable, custom data for each OpsItem. You can also view automatically-generated summary reports about OpsItems by status and source.

https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html


### State Manager 

State Manager, a capability of AWS Systems Manager, is a secure and scalable configuration management service that automates the process of keeping your managed nodes and other AWS resources in a state that you define.

with State Manager to perform the following types of tasks:

- Attach a Systems Manager role to Amazon Elastic Compute Cloud (Amazon EC2) instances to make them managed nodes.
- Enforce desired ingress and egress rules for a security group.
- Create or delete Amazon DynamoDB backups.
- Create or delete Amazon Elastic Block Store (Amazon EBS) snapshots.
- Turn off read and write permissions on Amazon Simple Storage Service (Amazon S3) buckets.
- Start, restart, or stop managed nodes and Amazon Relational Database Service (Amazon RDS) instances.
- Apply patches to Linux, macOS, and Window AMIs.

https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-state.html

### Session Manager

Session Manager is a fully managed AWS Systems Manager capability. With Session Manager, you can manage your Amazon Elastic Compute Cloud (Amazon EC2) instances, edge devices, on-premises servers, and virtual machines (VMs). You can use either an interactive one-click browser-based shell or the AWS Command Line Interface (AWS CLI). Session Manager provides secure node management without the need to open inbound ports, maintain bastion hosts, or manage SSH keys. Session Manager also allows you to comply with corporate policies that require controlled access to managed nodes, strict security practices, and logs with node access details, while providing end users with simple one-click cross-platform access to your managed nodes.

https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html