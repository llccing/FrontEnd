## AWS Firewall Manager

Centrally configure and manage firewall rules across your accounts.

AWS Firewall Manager is a security management service which allows you to centrally configure and manage firewall rules across your accounts and applications in AWS Organization. As new applications are created, Firewall Manager makes it easy to bring new applications and resources into compliance by enforcing a common set of security rules. Now you have a single service to build firewall rules, create security policies, and enforce them in a consistent, hierarchical manner across your entire infrastructure.


[AWS Firewall Manager FAQs](https://aws.amazon.com/firewall-manager/faqs/)

### What are the key benefits of AWS Firewall Manager?

AWS Firewall Manager is integrated with AWS Organizations so you can enable AWS WAF rules, AWS Shield Advanced protections, VPC security groups, AWS Network Firewalls, and Amazon Route 53 Resolver DNS Firewall rules across multiple AWS accounts and resources from a single place. Firewall Manager monitors for new resources or accounts created to ensure they comply with a mandatory set of security policies from day one. You can group rules, build policies, and centrally apply those policies across your entire infrastructure. For example, you can delegate the creation of application-specific rules within an account while retaining the ability to enforce global security policies across accounts. Your security team can be notified of threats to the organization so they can respond and rapidly mitigate an attack.

Firewall Manager also integrates with Managed Rules for AWS WAF, which gives you an easy way to deploy pre-configured WAF rules in front of your applications.

Security administrators can leverage Firewall Manager to apply a baseline set of security group rules for EC2 instances, Application Load Balancers and Elastic Network Interfaces (ENIs) in your Amazon VPCs. At the same time, you can also audit any existing security groups in your VPCs for over permissive rules and remediate them from a single place.

You can leverage Firewall Manager to centrally deploy AWS Network Firewall endpoints and associated rules across your VPCs in your organization, to control traffic leaving and entering your network. At the same time, you can also use Firewall Manager to associate your VPCs across your accounts with Route 53 Resolver DNS Firewall rules to block DNS queries made for known malicious domains and to allow queries for trusted domains.