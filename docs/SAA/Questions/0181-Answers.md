## Q181

**Answer:** A

Data is processed sequentially, but the order of results does not matter => SQS; if order matters => SQS FIFO

## Q182

**Answer:** B

Amazon RDS MySQL DB instance with Multi-AZ functionality enabled to synchronously replicate the data
Standby DB in Multi-AZ- synchronous replication

Read Replica always asynchronous. so option C is ignored.

----
RDS Multi-AZ = Synchronous = High Availability
Read Replica = Asynchronous = Disaster Recovery (DR)

## Q183

**Answer:** A

A - is correct, because Dynamodb on-demand scales write and read capacity
B - Aurora auto scaling scales only read replicas

## Q184

**Answer:** A or C

Answer A: During Lambda function creation select "Advanced Settings" select "Enable VPC", this will allow you to select VPC, Subnets and SecurityGroup for your Lambda function. This is the way Lambda can get controlled access to resouces in your VPC.

Default Lambda Settings:
When you create a Lambda function without specifying a VPC, the Lambda function does not get associated with any particular VPC. By default, Lambda functions are not deployed within a VPC and do not have access to resources within a VPC, such as EC2 instances, RDS databases, or Elasticache clusters, unless you explicitly configure the Lambda function to connect to a VPC.

-----
Update the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect.

By updating the route tables in the VPC to allow the Lambda function to access the on-premises data center through Direct Connect, is the most appropriate solution. By updating the route tables, you can specify the route for traffic from the Lambda function to the IP address range of the on-premises data center via the Direct Connect connection. This ensures that the Lambda function can securely communicate with the database in the private subnet of the data center.

## Q185

**Answer:** B

B. Create an IAM role with S3 permissions, and then specify that role as the taskRoleArn in the task definition

---
The short name or full Amazon Resource Name (ARN) of the AWS Identity and Access Management role that grants containers in the task permission to call AWS APIs on your behalf.