(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{343:function(e,s,a){"use strict";a.r(s);var t=a(14),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"iam-是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iam-是什么"}},[e._v("#")]),e._v(" IAM 是什么？")]),e._v(" "),s("p",[e._v("AWS Identity and Access Management (IAM) 是一种 Web 服务，可以帮助您安全地控制对 AWS 资源的访问。借助 IAM，您可以管理控制用户可访问哪些 AWS 资源的权限。可以使用 IAM 来控制谁通过了身份验证（准许登录）并获得授权（具有相应权限）来使用资源。IAM 提供了控制您 AWS 账户 身份验证和授权所需的基础设施。")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/IAM/latest/UserGuide/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Identity and Access Management (IAM)"),s("OutboundLink")],1)]),e._v(" "),s("h3",{attrs:{id:"in-aws-iam-identity-and-access-management-is-used-to-manage-access-to-aws-resources-here-s-a-breakdown-of-the-key-components"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#in-aws-iam-identity-and-access-management-is-used-to-manage-access-to-aws-resources-here-s-a-breakdown-of-the-key-components"}},[e._v("#")]),e._v(" In AWS, IAM (Identity and Access Management) is used to manage access to AWS resources. Here's a breakdown of the key components:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("IAM User")]),e._v(" "),s("ul",[s("li",[e._v("Definition: An IAM user is an entity that represents a person or a service that interacts with AWS.")]),e._v(" "),s("li",[e._v("Characteristics:\n"),s("ul",[s("li",[e._v("Each user has a unique name within the AWS account.")]),e._v(" "),s("li",[e._v("Users can have long-term credentials (username and password) and access keys for programmatic access.")]),e._v(" "),s("li",[e._v("Users are used to manage individual access to AWS resources.")])])])])]),e._v(" "),s("li",[s("p",[e._v("IAM Group")]),e._v(" "),s("ul",[s("li",[e._v("Definition: An IAM group is a collection of IAM users.")]),e._v(" "),s("li",[e._v("Characteristics:\n"),s("ul",[s("li",[e._v("Groups allow you to manage permissions for multiple users at once.")]),e._v(" "),s("li",[e._v("Permissions assigned to a group apply to all users in that group.")]),e._v(" "),s("li",[e._v("Users can belong to multiple groups.")])])])])]),e._v(" "),s("li",[s("p",[e._v("IAM Role")]),e._v(" "),s("ul",[s("li",[e._v("Definition: An IAM role is an entity that defines a set of permissions for making AWS service requests.")]),e._v(" "),s("li",[e._v("Characteristics:\n"),s("ul",[s("li",[e._v("Roles are not associated with a specific user or group.")]),e._v(" "),s("li",[e._v("They are assumed by trusted entities, such as IAM users, applications, or AWS services.")]),e._v(" "),s("li",[e._v("Roles provide temporary security credentials.")])])])])]),e._v(" "),s("li",[s("p",[e._v("IAM Policy")]),e._v(" "),s("ul",[s("li",[e._v("Definition: An IAM policy is a document that defines permissions.")]),e._v(" "),s("li",[e._v("Characteristics:\n"),s("ul",[s("li",[e._v("Policies are written in JSON and specify what actions are allowed or denied on which resources.")]),e._v(" "),s("li",[e._v("Policies can be attached to users, groups, or roles.")]),e._v(" "),s("li",[e._v("There are managed policies (AWS-managed or customer-managed) and inline policies.")])])])])]),e._v(" "),s("li",[s("p",[e._v("Summary")]),e._v(" "),s("ul",[s("li",[e._v("User: Represents an individual or service with specific credentials.")]),e._v(" "),s("li",[e._v("Group: A collection of users managed together, sharing permissions.")]),e._v(" "),s("li",[e._v("Role: Provides temporary access to AWS resources, often used for cross-account access or AWS service access.")]),e._v(" "),s("li",[e._v("Policy: Defines permissions and is attached to users, groups, or roles to specify what they can or cannot do.")])])])]),e._v(" "),s("h3",{attrs:{id:"what-are-iam-roles-and-how-do-they-work"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-iam-roles-and-how-do-they-work"}},[e._v("#")]),e._v(" What are IAM roles and how do they work?")]),e._v(" "),s("p",[e._v("AWS Identity and Access Management (IAM) roles provide a way to access AWS by relying on temporary security credentials. Each role has a set of permissions for making AWS service requests, and a role is not associated with a specific user or group. Instead, trusted entities such as identity providers or AWS services assume roles. For more information, see IAM roles.")]),e._v(" "),s("h3",{attrs:{id:"why-should-i-use-iam-roles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#why-should-i-use-iam-roles"}},[e._v("#")]),e._v(" Why should I use IAM roles?")]),e._v(" "),s("p",[e._v("You should use IAM roles to grant access to your AWS accounts by relying on short-term credentials, a security best practice. Authorized identities, which can be AWS services or users from your identity provider, can assume roles to make AWS requests. To grant permissions to a role, attach an IAM policy to it. For more information, see Common scenarios for roles.")]),e._v(" "),s("h3",{attrs:{id:"what-are-iam-users-and-should-i-still-be-using-them"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-iam-users-and-should-i-still-be-using-them"}},[e._v("#")]),e._v(" What are IAM users and should I still be using them?")]),e._v(" "),s("p",[e._v("IAM users are identities with long-term credentials. You might be using IAM users for workforce users. In this case, AWS recommends using an identity provider and federating into AWS by assuming roles. You also can use roles to grant cross-account access to services and features such as AWS Lambda functions. In some scenarios, you might require IAM users with access keys that have long-term credentials with access to your AWS account. For these scenarios, AWS recommends using IAM access last used information to rotate credentials often and remove credentials that are not being used. For more information, see Overview of AWS identity management: Users.")]),e._v(" "),s("h3",{attrs:{id:"what-are-iam-policies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-are-iam-policies"}},[e._v("#")]),e._v(" What are IAM policies?")]),e._v(" "),s("p",[e._v("IAM policies define permissions for the entities you attach them to. For example, to grant access to an IAM role, attach a policy to the role. The permissions defined in the policy determine whether requests are allowed or denied. You also can attach policies to some resources, such as Amazon S3 buckets, to grant direct, cross-account access. And you can attach policies to an AWS organization or organizational unit to restrict access across multiple accounts. AWS evaluates these policies when an IAM role makes a request. For more information, see Identity-based policies.")])])}),[],!1,null,null,null);s.default=r.exports}}]);