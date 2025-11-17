## Q1
**Answer:** A

S3 Transfer Acceleration is the best solution cz it's faster , good for high speed, Transfer Acceleration is designed to optimize transfer speeds from
across the world into S3 buckets.

## Q2
**Answer:** C

Amazon Athena is an interactive query service that makes it easy to analyze data directly in Amazon Simple Storage Service (Amazon S3) using standard SQL. With a few actions in the AWS Management Console, you can point Athena at your data stored in Amazon S3 and begin using standard SQL to run ad-hoc queries and get results in seconds.

## Q3
**Answer:** B

the condition key aws:PrincipalOrgID can prevent the members who don't belong to your organization to access the resourc

## Q4
**Answer:** A

Keywords:
- EC2 in VPC
- EC2 instance needs to access the S3 bucket without connectivity to the internet

A: Correct - Gateway VPC endpoint can connect to S3 bucket privately without additional cost
B: Incorrect - You can set up interface VPC endpoint for CloudWatch Logs for private network from EC2 to CloudWatch. But from CloudWatch to S3 bucket: Log data can take up to 12 hours to become available for export and the requirement only need EC2 to S3
C: Incorrect - Create an instance profile just grant access but not help EC2 connect to S3 privately
D: Incorrect - API Gateway like the proxy which receive network from out site and it forward request to AWS Lambda, Amazon EC2, Elastic Load Balancing products such as Application Load Balancers or Classic Load Balancers, Amazon DynamoDB, Amazon Kinesis, or any publicly available HTTPS-based endpoint. But not S3

## Q5
**Answer:** C

Ebs doesnt support cross az only reside in one Az but Efs does, that why it's c.
Chinese Version:
EBS 不支持跨可用区，只能在一个可用区中使用，而 EFS 支持跨可用区，可以在多个可用区中使用。这就是为什么选择 C 选项。

## Q6
**Answer:** B

B. On a Snowball Edge device you can copy files with a speed of up to 100Gbps. 70TB will take around 5600 seconds, so very quickly, less than 2 hours. The downside is that it'll take between 4-6 working days to receive the device and then another 2-3 working days to send it back and for AWS to move the data onto S3 once it reaches them. Total time: 6-9 working days. Bandwidth used: 0.

C. File Gateway uses the Internet, so maximum speed will be at most 1Gbps, so it'll take a minimum of 6.5 days and you use 70TB of Internet bandwidth.

D. You can achieve speeds of up to 10Gbps with Direct Connect. Total time 15.5 hours and you will use 70TB of bandwidth. However, what's interesting is that the question does not specific what type of bandwidth? Direct Connect does not use your Internet bandwidth, as you will have a dedicate peer to peer connectivity between your on-prem and the AWS Cloud, so technically, you're not using your "public" bandwidth.

The requirements are a bit too vague but I think that B is the most appropriate answer, although D might also be correct if the bandwidth usage refers strictly to your public connectivity.

### what's NFS

In the IT area, NFS stands for Network File System. It is a distributed file system protocol that allows users to access files over a network as if they were on a local disk. Here are some key points about NFS:

#### Key Features of NFS

- **File Sharing**: Enables multiple users and systems to access the same files concurrently.
- **Transparency**: Provides a seamless experience where remote files appear as if they are local.
- **Compatibility**: Works across various operating systems, making it versatile for mixed environments.
- **Security**: Supports authentication and permission settings to control access to files.
- **Performance**: Can be optimized with caching and other techniques to improve access speed.

#### Use Cases

- **Home Directories**: Centralizing user directories across multiple machines.
- **Data Sharing**: Facilitating collaboration by sharing files among users in a network.
- **Centralized Management**: Simplifying data management by storing files in a single location.

NFS is widely used in environments where file sharing and centralized storage are essential, such as in enterprises, educational institutions, and data centers.

## Q7
**Answer:** D
D. Publish the messages to an Amazon Simple Notification Service (Amazon SNS) topic with multiple Amazon Simple Queue Service (Amazon SQS) subscriptions. Configure the consumer applications to process the messages from the queues.

This solution uses Amazon SNS and SQS to publish and subscribe to messages respectively, which decouples the system and enables scalability by allowing multiple consumer applications to process the messages in parallel. Additionally, using Amazon SQS with multiple subscriptions can provide increased resiliency by allowing multiple copies of the same message to be processed in parallel.

## Q8
**Answer:** B

A - incorrect: Schedule scaling policy doesn't make sense.
C, D - incorrect: Primary server should not be in same Auto Scaling group with compute nodes.
B is correct.

## Q9
**Answer:** B

The same question and answer explanation exists in a Udemy course.
Correct answer is B.
Amazon S3 File Gateway provides a seamless way to connect to the cloud to store application data files and backup images as durable objects in Amazon S3 cloud storage. Amazon S3 File Gateway offers SMB or NFS-based access to data in Amazon S3 with local caching.
It can be used for on-premises data-intensive Amazon EC2-based applications that need file protocol access to S3 object storage. Lifecycle policies can then transition the data to S3 Glacier Deep Archive after 7 days.

D is wrong because is involves too much extra configuration which is unnecessary.

## Q10
**Answer:** B

AnswerB - SQS FIFO queues ensure that messages are processed in the order they are received, which perfectly matches the requirement of maintaining order.
