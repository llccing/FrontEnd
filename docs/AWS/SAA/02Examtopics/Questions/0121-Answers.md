## Q121

**Answer:** A

"You can enable encryption for an Amazon RDS DB instance when you create it, but not after it's created. However, you can add encryption to an unencrypted DB instance by creating a snapshot of your DB instance, and then creating an encrypted copy of that snapshot. You can then restore a DB instance from the encrypted snapshot to get an encrypted copy of your original DB instance."
https://docs.aws.amazon.com/prescriptive-guidance/latest/patterns/encrypt-an-existing-amazon-rds-for-postgresql-db-instance.html

## Q122

**Answer:** B

If you are a developer who needs to digitally sign or verify data using asymmetric keys, you should use the service to create and manage the private keys you’ll need. If you’re looking for a scalable key management infrastructure to support your developers and their growing number of applications, you should use it to reduce your licensing costs and operational burden...
https://aws.amazon.com/kms/faqs/#:~:text=If%20you%20are%20a%20developer%20who%20needs%20to%20digitally,a%20broad%20set%20of%20industry%20and%20regional%20compliance%20regimes.

## Q123

**Answer:** D

This issue is solved by SSL offloading, i.e. by moving the SSL termination task to the ALB.
https://aws.amazon.com/blogs/aws/elastic-load-balancer-support-for-ssl-termination/

-----------
a interesting thing, jeff wrote the aws blog for twenty years.
https://aws.amazon.com/blogs/aws/and-thats-a-wrap/


## Q124

**Answer:** A

Cant be implemented on Lambda because the timeout for Lambda is 15mins and the Job takes 60minutes to complete.
Answer >> A

## Q125

**Answer:** AE

A and E!
Application has to be highly available while the instance and database should not be exposed to the public internet, but the instances still requires access to the internet. NAT gateway has to be deployed in public subnets in this case while instances and database remain in private subnets in the VPC, therefore answer is (A) and (E).
https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html

If the instances did not require access to the internet, then the answer could have been
(B) to use a private NAT gateway and keep it in the private subnets to communicate only to the VPCs.

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Scenario2.html

## Q126

**Answer:** B
B is the only right answer. C does not indicate archiving after 2 years. If it did specify 2 years, then C would also be an option.

## Q127

**Answer:** D

Max instance store possible at this time is 30TB for NVMe which has the higher I/O compared to EBS.

is4gen.8xlarge 4 x 7,500 GB (30 TB) NVMe SSD

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html#instance-store-volumes

## Q128

**Answer:** B

run applications in containers -> Container service not EC2 (no operational overhead to config container workload on EC2)
Spot instance < On-demand cost

## Q129

**Answer:** AE

I would say A and E since Aurora and Fargate are serverless (less operational overhead).

----
Ans A,E -
-PostgreSQL is compatible with Aurora
-Fargate for container service
Both services are serverless

## Q130

**Answer:** B

B is the correct answer, since target scaling monitors cloudwatch metrics, while simple/step scaling monitors cloudwatch alarms.
