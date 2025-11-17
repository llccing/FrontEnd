## AWS Auto Scaling

AWS Auto Scaling is a new AWS service that helps you optimize the performance of your applications while lowering infrastructure costs by easily and safely scaling multiple AWS resources. It simplifies the scaling experience by allowing you to scale collections of related resources that support your application with just a few clicks. AWS Auto Scaling helps you configure consistent and congruent scaling policies across the full infrastructure stack backing your application. AWS Auto Scaling will automatically scale resources as needed to align to your selected scaling strategy, so you maintain performance and pay only for the resources you actually need.

### Scaling Policies

- Simple Scaling Policy: Scales the group based on a single CloudWatch alarm.
- Step Scaling Policy: Scales the group based on a series of steps defined in a CloudWatch alarm.
- Target Tracking Scaling Policy: Scales the group based on a target value for a CloudWatch metric.
- Scheduled Scaling: Scales the group at a specific time.
- Predictive Scaling: Scales the group based on predicted load.

#### Target Tracking Scaling Policy

With target tracking, you select a load metric for your application, such as “Average CPU Utilization” or the new “Request Count Per Target” metric from Application Load Balancer, set the target value, and Auto Scaling adjusts the number of EC2 instances in your Auto Scaling group as needed to maintain that target. It acts like a home thermostat, automatically adjusting the system to keep the environment at your desired temperature. For example, you can configure target tracking to keep CPU utilization for your fleet of web servers at 50%. From there, Auto Scaling launches or terminates EC2 instances as required to keep the average CPU utilization at 50%.

https://aws.amazon.com/about-aws/whats-new/2017/07/introducing-target-tracking-scaling-policies-for-auto-scaling/
``