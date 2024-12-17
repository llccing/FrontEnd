## Q51
**Answer:** BD

D Explanation: EventBridge can be used to schedule regular invocations of a Lambda function that retrieves the required data from the application's API. This step sets up the process to collect the data at the specified time every morning.

B Explanation: Amazon SES can format the data into an easy-to-read HTML report and send the email to multiple recipients efficiently.

## Q52
**Answer:** C

Key words: Standard File System and Scales Automatically.
S3 is object Store, hence if fails with the "Standard File System" requirement, so we can discard A.
EBS does not scale automatically, failing with the "Scales Automatically" requirement, so we can discard B and D

## Q53
**Answer:** C

Only CD provides Object Lock options which is required for stopping admin/root users from deleting.
D is governance mode which is like government, pay enough money and you can do anything. This is not what we want so compliance is the option.
C is right choice.

For future, remember
S3 Lock Governance = corrupt government official
S3 Lock Compliance = honest solution architect!

## Q54
**Answer:** C

EFS is not supported on Windows instances
https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AmazonEFS.html
Amazon FSx for Windows File Server provides fully managed Microsoft Windows file servers, backed by a fully native Windows file system.
https://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html

## Q55
**Answer:** C

Security groups only have allow rules

----------
A: route table that connect... no idea what this option is trying to do but won't work for RDS
B: SG are deny by default
D: Peering connection between subnets? No idea what this is but happy to learn if such a thing exists.

C: SG to allow input to private subnet means everything else will be blocked. Attaching this SG to DB instance means it will block everything except the private subnet instances which is where the required EC2 instances are.

---------------
RDS databases can only be accessed by EC2 instances located in private subnets: From the security group given to instances in the private subnets, the DB instances' security group will permit incoming traffic. Because of this, the RDS databases will only be accessible by EC2 instances located on the private subnets.
Because of its safe architecture, Every other source of incoming traffic will be blocked by the security group that is linked to the database instances. The RDS databases will be better shielded from unwanted access thanks to this.

## Q56
**Answer:** C

Option C includes all the necessary steps to meet the requirements, hence it is the correct solution.

Options A and D do not include the necessary steps to associate the API Gateway endpoint with the company's domain name and attach the certificate to the endpoint.

Option B includes the necessary steps to associate the API Gateway endpoint with the company's domain name and attach the certificate, but it imports the certificate into the us-east-1 Region instead of the ca-central-1 Region where the API Gateway is located.
-------------

The correct solution to meet these requirements is option C.

To design the API Gateway URL with the company's domain name and corresponding certificate, the company needs to do the following:

1. Create a Regional API Gateway endpoint: This will allow the company to create an endpoint that is specific to a region.

2. Associate the API Gateway endpoint with the company's domain name: This will allow the company to use its own domain name for the API Gateway URL.

3. Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region: This will allow the company to use HTTPS for secure communication with its APIs.

4. Attach the certificate to the API Gateway endpoint: This will allow the company to use the certificate for securing the API Gateway URL.

5. Configure Route 53 to route traffic to the API Gateway endpoint: This will allow the company to use Route 53 to route traffic to the API Gateway URL using the company's domain name.

## Q57
**Answer:** B

The best solution to meet these requirements would be option B: Use Amazon Rekognition to detect inappropriate content, and use human review for low-confidence predictions.

Amazon Rekognition is a cloud-based image and video analysis service that can detect inappropriate content in images using its pre-trained label detection model. It can identify a wide range of inappropriate content, including explicit or suggestive adult content, violent content, and offensive language. The service provides high accuracy and low latency, making it a good choice for this use case.

-------------
Option A, using Amazon Comprehend, is not a good fit for this use case because Amazon Comprehend is a natural language processing service that is designed to analyze text, not images.

Option C, using Amazon SageMaker to detect inappropriate content, would require significant development effort to build and train a custom machine learning model. It would also require a large dataset of labeled images to train the model, which may be time-consuming and expensive to obtain.

Option D, using AWS Fargate to deploy a custom machine learning model, would also require significant development effort and a large dataset of labeled images. It may not be the most efficient or cost-effective solution for this use case.

In summary, the best solution is to use Amazon Rekognition to detect inappropriate content in images, and use human review for low-confidence predictions to ensure that all inappropriate content is detected.

## Q58
**Answer:** C

Good answer is C:
AWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without having to manage servers. AWS Fargate is compatible with Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).

https://aws.amazon.com/fr/fargate/
---------
Using ECS on Fargate allows you to run containers without the need to manage the underlying infrastructure. Fargate abstracts away the underlying EC2 and provides serverless compute for containers.

A. This option would require manual provisioning and management of EC2, as well as installing and configuring Docker on those instances. It would introduce additional overhead and responsibilities for maintaining the underlying infrastructure.

B. While this option leverages ECS to manage containers, it still requires provisioning and managing EC2 to serve as worker nodes. It adds complexity and maintenance overhead compared to the serverless nature of Fargate.

D. This option still involves managing and provisioning EC2, even though an ECS-optimized AMI simplifies the process of setting up EC2 for running ECS. It does not provide the level of serverless abstraction and ease of management offered by Fargate.

## Q59
**Answer:** D

A: Not sure how recent this question is but Data Pipeline is not really a product AWS is recommending anymore https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html

B: 30TB of clickstream data could be done with EC2 but it would be challenging
C: CloudFront is for CDN and caching and mostly outgoing data, not incoming.
D: Kinesis, S3 data lake and Redshift will work perfectly for this case

## Q60
**Answer:** C

A. Network ACLs operate at subnet level and control inbound and outbound traffic. Updating the network ACL alone will not enforce the redirection of HTTP to HTTPS.

B. This approach would require modifying application code or server configuration to perform URL rewrite. It is not an optimal solution as it adds complexity and potential maintenance overhead. Moreover, it does not leverage the ALB's capabilities for handling HTTP-to-HTTPS redirection.

D. While NLB can handle SSL/TLS termination using SNI for routing requests to different services, replacing the ALB solely to enforce HTTP-to-HTTPS redirection would be an unnecessary and more complex solution.

Therefore, the recommended approach is to create a listener rule on the ALB to redirect HTTP traffic to HTTPS. By configuring a listener rule, you can define a redirect action that automatically directs HTTP requests to their corresponding HTTPS versions.