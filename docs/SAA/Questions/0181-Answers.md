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

## Q186

**Answer:** B
Correct is B
FSx --> shared Windows file system（SMB）
EFS --> Linux NFS

## Q187

**Answer:**  AD

Highly available application - Amazon RDS DB instance in Multi-AZ
little manual intervention - Fargate

## Q188

**Answer:** A

Answer is A
AWS Transfer Family securely scales your recurring business-to-business file transfers to AWS Storage services using SFTP, FTPS, FTP, and AS2 protocols.
https://aws.amazon.com/aws-transfer-family/

## Q189

**Answer:** BD

should be BD
C could have been fine, but key rotation is activate per default on SSE-S3, and no way to deactivate it if I am not wrong

---------
Answer: BD:
B: S3 Compliance Mode ensures no one can overwrite or delete the object.
D: Customer-managed KMS Key: (must be enabled) automatic every 1 year

Options not right:
A: Governance mode allows override and delete.
C: SSE-S3 customer do not have control on rotation of keys(Which is once a year in our requirement)
E: As per AWS Documentation, Customer Imported keys cannot be auto rotated.

## Q190

**Answer:** B

Elastic Beanstalk can test Blue/Green deployment. Switching Dev to prod/ prod to dev easily.

---
A and C are not allowing for feature testing.
B and D allow feature testing. D requires overhead of containerisation as well as the LB controller to selectively chose containers for features (assuming on how this might be implemented). EBS allows switching between environment like A/B testing but on whole site. Expensive but cost is not a concern for this question.

