(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{500:function(e,t,a){"use strict";a.r(t);var n=a(14),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q51"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q51"}},[e._v("#")]),e._v(" Q51")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" BD")]),e._v(" "),t("p",[e._v("D Explanation: EventBridge can be used to schedule regular invocations of a Lambda function that retrieves the required data from the application's API. This step sets up the process to collect the data at the specified time every morning.")]),e._v(" "),t("p",[e._v("B Explanation: Amazon SES can format the data into an easy-to-read HTML report and send the email to multiple recipients efficiently.")]),e._v(" "),t("h2",{attrs:{id:"q52"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q52"}},[e._v("#")]),e._v(" Q52")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v('Key words: Standard File System and Scales Automatically.\nS3 is object Store, hence if fails with the "Standard File System" requirement, so we can discard A.\nEBS does not scale automatically, failing with the "Scales Automatically" requirement, so we can discard B and D')]),e._v(" "),t("h2",{attrs:{id:"q53"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q53"}},[e._v("#")]),e._v(" Q53")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Only CD provides Object Lock options which is required for stopping admin/root users from deleting.\nD is governance mode which is like government, pay enough money and you can do anything. This is not what we want so compliance is the option.\nC is right choice.")]),e._v(" "),t("p",[e._v("For future, remember\nS3 Lock Governance = corrupt government official\nS3 Lock Compliance = honest solution architect!")]),e._v(" "),t("h2",{attrs:{id:"q54"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q54"}},[e._v("#")]),e._v(" Q54")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("EFS is not supported on Windows instances\nhttps://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/AmazonEFS.html\nAmazon FSx for Windows File Server provides fully managed Microsoft Windows file servers, backed by a fully native Windows file system.\nhttps://docs.aws.amazon.com/fsx/latest/WindowsGuide/what-is.html")]),e._v(" "),t("h2",{attrs:{id:"q55"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q55"}},[e._v("#")]),e._v(" Q55")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Security groups only have allow rules")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("A: route table that connect... no idea what this option is trying to do but won't work for RDS\nB: SG are deny by default\nD: Peering connection between subnets? No idea what this is but happy to learn if such a thing exists.")]),e._v(" "),t("p",[e._v("C: SG to allow input to private subnet means everything else will be blocked. Attaching this SG to DB instance means it will block everything except the private subnet instances which is where the required EC2 instances are.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("RDS databases can only be accessed by EC2 instances located in private subnets: From the security group given to instances in the private subnets, the DB instances' security group will permit incoming traffic. Because of this, the RDS databases will only be accessible by EC2 instances located on the private subnets.\nBecause of its safe architecture, Every other source of incoming traffic will be blocked by the security group that is linked to the database instances. The RDS databases will be better shielded from unwanted access thanks to this.")]),e._v(" "),t("h2",{attrs:{id:"q56"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q56"}},[e._v("#")]),e._v(" Q56")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Option C includes all the necessary steps to meet the requirements, hence it is the correct solution.")]),e._v(" "),t("p",[e._v("Options A and D do not include the necessary steps to associate the API Gateway endpoint with the company's domain name and attach the certificate to the endpoint.")]),e._v(" "),t("h2",{attrs:{id:"option-b-includes-the-necessary-steps-to-associate-the-api-gateway-endpoint-with-the-company-s-domain-name-and-attach-the-certificate-but-it-imports-the-certificate-into-the-us-east-1-region-instead-of-the-ca-central-1-region-where-the-api-gateway-is-located"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#option-b-includes-the-necessary-steps-to-associate-the-api-gateway-endpoint-with-the-company-s-domain-name-and-attach-the-certificate-but-it-imports-the-certificate-into-the-us-east-1-region-instead-of-the-ca-central-1-region-where-the-api-gateway-is-located"}},[e._v("#")]),e._v(" Option B includes the necessary steps to associate the API Gateway endpoint with the company's domain name and attach the certificate, but it imports the certificate into the us-east-1 Region instead of the ca-central-1 Region where the API Gateway is located.")]),e._v(" "),t("p",[e._v("The correct solution to meet these requirements is option C.")]),e._v(" "),t("p",[e._v("To design the API Gateway URL with the company's domain name and corresponding certificate, the company needs to do the following:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Create a Regional API Gateway endpoint: This will allow the company to create an endpoint that is specific to a region.")])]),e._v(" "),t("li",[t("p",[e._v("Associate the API Gateway endpoint with the company's domain name: This will allow the company to use its own domain name for the API Gateway URL.")])]),e._v(" "),t("li",[t("p",[e._v("Import the public certificate associated with the company's domain name into AWS Certificate Manager (ACM) in the same Region: This will allow the company to use HTTPS for secure communication with its APIs.")])]),e._v(" "),t("li",[t("p",[e._v("Attach the certificate to the API Gateway endpoint: This will allow the company to use the certificate for securing the API Gateway URL.")])]),e._v(" "),t("li",[t("p",[e._v("Configure Route 53 to route traffic to the API Gateway endpoint: This will allow the company to use Route 53 to route traffic to the API Gateway URL using the company's domain name.")])])]),e._v(" "),t("h2",{attrs:{id:"q57"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q57"}},[e._v("#")]),e._v(" Q57")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("The best solution to meet these requirements would be option B: Use Amazon Rekognition to detect inappropriate content, and use human review for low-confidence predictions.")]),e._v(" "),t("p",[e._v("Amazon Rekognition is a cloud-based image and video analysis service that can detect inappropriate content in images using its pre-trained label detection model. It can identify a wide range of inappropriate content, including explicit or suggestive adult content, violent content, and offensive language. The service provides high accuracy and low latency, making it a good choice for this use case.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Option A, using Amazon Comprehend, is not a good fit for this use case because Amazon Comprehend is a natural language processing service that is designed to analyze text, not images.")]),e._v(" "),t("p",[e._v("Option C, using Amazon SageMaker to detect inappropriate content, would require significant development effort to build and train a custom machine learning model. It would also require a large dataset of labeled images to train the model, which may be time-consuming and expensive to obtain.")]),e._v(" "),t("p",[e._v("Option D, using AWS Fargate to deploy a custom machine learning model, would also require significant development effort and a large dataset of labeled images. It may not be the most efficient or cost-effective solution for this use case.")]),e._v(" "),t("p",[e._v("In summary, the best solution is to use Amazon Rekognition to detect inappropriate content in images, and use human review for low-confidence predictions to ensure that all inappropriate content is detected.")]),e._v(" "),t("h2",{attrs:{id:"q58"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q58"}},[e._v("#")]),e._v(" Q58")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("Good answer is C:\nAWS Fargate is a serverless, pay-as-you-go compute engine that lets you focus on building applications without having to manage servers. AWS Fargate is compatible with Amazon Elastic Container Service (ECS) and Amazon Elastic Kubernetes Service (EKS).")]),e._v(" "),t("h2",{attrs:{id:"https-aws-amazon-com-fr-fargate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#https-aws-amazon-com-fr-fargate"}},[e._v("#")]),e._v(" https://aws.amazon.com/fr/fargate/")]),e._v(" "),t("p",[e._v("Using ECS on Fargate allows you to run containers without the need to manage the underlying infrastructure. Fargate abstracts away the underlying EC2 and provides serverless compute for containers.")]),e._v(" "),t("p",[e._v("A. This option would require manual provisioning and management of EC2, as well as installing and configuring Docker on those instances. It would introduce additional overhead and responsibilities for maintaining the underlying infrastructure.")]),e._v(" "),t("p",[e._v("B. While this option leverages ECS to manage containers, it still requires provisioning and managing EC2 to serve as worker nodes. It adds complexity and maintenance overhead compared to the serverless nature of Fargate.")]),e._v(" "),t("p",[e._v("D. This option still involves managing and provisioning EC2, even though an ECS-optimized AMI simplifies the process of setting up EC2 for running ECS. It does not provide the level of serverless abstraction and ease of management offered by Fargate.")]),e._v(" "),t("h2",{attrs:{id:"q59"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q59"}},[e._v("#")]),e._v(" Q59")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v("A: Not sure how recent this question is but Data Pipeline is not really a product AWS is recommending anymore https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/what-is-datapipeline.html")]),e._v(" "),t("p",[e._v("B: 30TB of clickstream data could be done with EC2 but it would be challenging\nC: CloudFront is for CDN and caching and mostly outgoing data, not incoming.\nD: Kinesis, S3 data lake and Redshift will work perfectly for this case")]),e._v(" "),t("h2",{attrs:{id:"q60"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q60"}},[e._v("#")]),e._v(" Q60")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("A. Network ACLs operate at subnet level and control inbound and outbound traffic. Updating the network ACL alone will not enforce the redirection of HTTP to HTTPS.")]),e._v(" "),t("p",[e._v("B. This approach would require modifying application code or server configuration to perform URL rewrite. It is not an optimal solution as it adds complexity and potential maintenance overhead. Moreover, it does not leverage the ALB's capabilities for handling HTTP-to-HTTPS redirection.")]),e._v(" "),t("p",[e._v("D. While NLB can handle SSL/TLS termination using SNI for routing requests to different services, replacing the ALB solely to enforce HTTP-to-HTTPS redirection would be an unnecessary and more complex solution.")]),e._v(" "),t("p",[e._v("Therefore, the recommended approach is to create a listener rule on the ALB to redirect HTTP traffic to HTTPS. By configuring a listener rule, you can define a redirect action that automatically directs HTTP requests to their corresponding HTTPS versions.")])])}),[],!1,null,null,null);t.default=i.exports}}]);