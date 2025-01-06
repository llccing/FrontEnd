## AWS Elastic Beanstalk

AWS Elastic Beanstalk makes it even easier for developers to quickly deploy and manage applications in the AWS Cloud. Developers simply upload their application, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring.

https://aws.amazon.com/elasticbeanstalk/faqs/

### What is the difference between AWS Elastic Beanstalk and Amazon EC2?

Elastic Beanstalk is a platform-as-a-service (PaaS) offering that simplifies the deployment and management of applications on AWS. It provides a managed environment for deploying and scaling applications, including auto-scaling, load balancing, and health monitoring.

EC2 is a virtual machine service that provides on-demand, resizable compute capacity. It requires more manual configuration and management, including provisioning instances, configuring load balancers, and monitoring health.

https://www.sitepoint.com/aws-elastic-beanstalk-vs-ec2/


### Blue/Green Deployment

Because AWS Elastic Beanstalk performs an in-place update when you update your application versions, your application might become unavailable to users for a short period of time. To avoid this, perform a blue/green deployment. To do this, deploy the new version to a separate environment, and then swap the CNAMEs of the two environments to redirect traffic to the new version instantly.

https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.CNAMESwap.html

