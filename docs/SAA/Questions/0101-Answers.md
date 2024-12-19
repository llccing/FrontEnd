## Q101
**Answer:** A

The correct answer is option A.

To enable Internet access for the private subnets, the solutions architect should create three NAT gateways, one for each public subnet in each Availability Zone (AZ). NAT gateways allow private instances to initiate outbound traffic to the Internet but do not allow inbound traffic from the Internet to reach the private instances.

The solutions architect should then create a private route table for each AZ that forwards non-VPC traffic to the NAT gateway in its AZ. This will allow instances in the private subnets to access the Internet through the NAT gateways in the public subnets.

## Q102

**Answer:** B and E

E is correct
https://aws.amazon.com/blogs/storage/migrating-storage-with-aws-datasync/