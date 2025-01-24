## IAM 是什么？

AWS Identity and Access Management (IAM) 是一种 Web 服务，可以帮助您安全地控制对 AWS 资源的访问。借助 IAM，您可以管理控制用户可访问哪些 AWS 资源的权限。可以使用 IAM 来控制谁通过了身份验证（准许登录）并获得授权（具有相应权限）来使用资源。IAM 提供了控制您 AWS 账户 身份验证和授权所需的基础设施。

[AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html)

### In AWS, IAM (Identity and Access Management) is used to manage access to AWS resources. Here's a breakdown of the key components:

- IAM User
    - Definition: An IAM user is an entity that represents a person or a service that interacts with AWS.
    - Characteristics:
        - Each user has a unique name within the AWS account.
        - Users can have long-term credentials (username and password) and access keys for programmatic access.
        - Users are used to manage individual access to AWS resources.

- IAM Group
    - Definition: An IAM group is a collection of IAM users.
    - Characteristics:
        - Groups allow you to manage permissions for multiple users at once.
        - Permissions assigned to a group apply to all users in that group.
        - Users can belong to multiple groups.

- IAM Role
    - Definition: An IAM role is an entity that defines a set of permissions for making AWS service requests.
    - Characteristics:
        - Roles are not associated with a specific user or group.
        - They are assumed by trusted entities, such as IAM users, applications, or AWS services.
        - Roles provide temporary security credentials.

- IAM Policy
    - Definition: An IAM policy is a document that defines permissions.
    - Characteristics:
        - Policies are written in JSON and specify what actions are allowed or denied on which resources.
        - Policies can be attached to users, groups, or roles.
        - There are managed policies (AWS-managed or customer-managed) and inline policies.

- Summary
    - User: Represents an individual or service with specific credentials.
    - Group: A collection of users managed together, sharing permissions.
    - Role: Provides temporary access to AWS resources, often used for cross-account access or AWS service access.
    - Policy: Defines permissions and is attached to users, groups, or roles to specify what they can or cannot do.

### What are IAM roles and how do they work?

AWS Identity and Access Management (IAM) roles provide a way to access AWS by relying on temporary security credentials. Each role has a set of permissions for making AWS service requests, and a role is not associated with a specific user or group. Instead, trusted entities such as identity providers or AWS services assume roles. For more information, see IAM roles.

### Why should I use IAM roles?

You should use IAM roles to grant access to your AWS accounts by relying on short-term credentials, a security best practice. Authorized identities, which can be AWS services or users from your identity provider, can assume roles to make AWS requests. To grant permissions to a role, attach an IAM policy to it. For more information, see Common scenarios for roles.

### What are IAM users and should I still be using them?

IAM users are identities with long-term credentials. You might be using IAM users for workforce users. In this case, AWS recommends using an identity provider and federating into AWS by assuming roles. You also can use roles to grant cross-account access to services and features such as AWS Lambda functions. In some scenarios, you might require IAM users with access keys that have long-term credentials with access to your AWS account. For these scenarios, AWS recommends using IAM access last used information to rotate credentials often and remove credentials that are not being used. For more information, see Overview of AWS identity management: Users.

### What are IAM policies?

IAM policies define permissions for the entities you attach them to. For example, to grant access to an IAM role, attach a policy to the role. The permissions defined in the policy determine whether requests are allowed or denied. You also can attach policies to some resources, such as Amazon S3 buckets, to grant direct, cross-account access. And you can attach policies to an AWS organization or organizational unit to restrict access across multiple accounts. AWS evaluates these policies when an IAM role makes a request. For more information, see Identity-based policies.

### Delegate access across AWS accounts using IAM roles
https://docs.aws.amazon.com/IAM/latest/UserGuide/tutorial_cross-account-with-roles.html

This tutorial teaches you how to use a role to delegate access to resources in different AWS accounts called Destination and Originating. You share resources in one account with users in a different account. By setting up cross-account access in this way, you don't have to create individual IAM users in each account. In addition, users don't have to sign out of one account and sign in to another account to access resources in different AWS accounts.

In this tutorial, the Destination account manages application data accessed by different applications and teams. In each account, you store application information in Amazon S3 buckets. You manage IAM users in the Originating account, where you have two IAM user roles: Developers and Analysts. Developers and Analysts use the Originating account to generate data shared by multiple microservices. Both roles have permissions to work in the Originating account and access resources there. From time to time, a developer must update the shared data in the Destination account. The developers store this data in an Amazon S3 bucket called amzn-s3-demo-bucket-shared-container.

At the end of this tutorial, you have the following:

- Users in the Originating account (the trusted account) allowed to assume a specific role in the Destination account.
- A role in the Destination account (the trusting account) allowed to access a specific Amazon S3 bucket.
- The amzn-s3-demo-bucket-shared-container bucket in the Destination account.
