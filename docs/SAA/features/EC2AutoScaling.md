## EC2 Auto Scaling

Amazon EC2 Auto Scaling is a fully managed service designed to launch or terminate Amazon EC2 instances automatically to help ensure you have the correct number of Amazon EC2 instances available to handle the load for your application. Amazon EC2 Auto Scaling helps you maintain application availability through fleet management for EC2 instances, which detects and replaces unhealthy instances, and by scaling your Amazon EC2 capacity up or down automatically according to conditions you define. You can use Amazon EC2 Auto Scaling to automatically increase the number of Amazon EC2 instances during demand spikes to maintain performance and decrease capacity during lulls to reduce costs.


### Can EC2 Auto Scaling groups span multiple AWS regions? 

EC2 Auto Scaling groups are regional constructs. They can span Availability Zones, but not AWS regions.

### When should I use Amazon EC2 Auto Scaling vs. AWS Auto Scaling?

You should use Amazon EC2 Auto Scaling when you need to scale your EC2 instances. AWS Auto Scaling is a newer service that allows you to scale multiple AWS resources, including EC2 instances, RDS instances, and Lambda functions.

https://docs.aws.amazon.com/autoscaling/ec2/userguide/what-is-amazon-ec2-auto-scaling.html
