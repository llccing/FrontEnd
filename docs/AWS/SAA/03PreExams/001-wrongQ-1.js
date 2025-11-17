const questions = [
    {
        "question": `A company is hosting its website by using Amazon EC2 instances behind an Elastic Load Balancer across multiple Availability Zones. 
        The instances run in an EC2 Auto Scaling group. The website uses Amazon Elastic Block Store (Amazon EBS) volumes to store product manuals for users to download. 
        The company updates the product content often, so new instances launched by the Auto Scaling group often have old data. 
        It can take up to 30 minutes for the new instances to receive all the updates. The updates also require the EBS volumes to be resized during business hours.
        The company wants to ensure that the product manuals are always up to date on all instances and that the architecture adjusts quickly to increased user demand. 
        A solutions architect needs to meet these requirements without causing the company to update its application code or adjust its website. 
        What should the solutions architect do to accomplish this goal?`,
        "options": [
            {
                "option": "A",
                "text": "Store the product manuals in an EBS volume. Mount that volume to the EC2 instances."
            },
            {
                "option": "B",
                "text": "Store the product manuals in an Amazon S3 bucket. Redirect the downloads to this bucket."
            },
            {
                "option": "C",
                "text": "Store the product manuals in an Amazon Elastic File System (Amazon EFS) volume. Mount that volume to the EC2 instances."
            },
            {
                "option": "D",
                "text": "Store the product manuals in an Amazon S3 Standard-Infrequent Access (S3 Standard-IA) bucket. Redirect the downloads to this bucket."
            }
        ],
    },
    {
        "question": "A solutions architect plans to convert a company's monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the application's API. Which solution meets these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Use AWS Fargate to host the web application with backend Amazon RDS Multi-AZ DB instances."
            },
            {
                "option": "B",
                "text": "Use Amazon API Gateway with an edge-optimized API endpoint, AWS Lambda for compute, and Amazon DynamoDB as the data store."
            },
            {
                "option": "C",
                "text": "Use an Amazon Route 53 routing policy with geolocation that points to an Amazon S3 bucket with static website hosting and Amazon DynamoDB as the data store."
            },
            {
                "option": "D",
                "text": "Use an Amazon CloudFront distribution that points to an Elastic Load Balancer with an Amazon EC2 Auto Scaling group, along with Amazon RDS Multi-AZ DB instances."
            }
        ],
    },
    {
        "question": "A company with facilities in North America, Europe, and Asia is designing a new distributed application to optimize its global supply chain and manufacturing process. The orders booked on one continent should be visible to all Regions in a second or less. The database should be able to support failover with a short Recovery Time Objective (RTO). The uptime of the application is important to ensure that manufacturing is not impacted. What should a solutions architect recommend?",
        "options": [
            {
                "option": "A",
                "text": "Use Amazon DynamoDB global tables."
            },
            {
                "option": "B",
                "text": "Use Amazon Aurora Global Database."
            },
            {
                "option": "C",
                "text": "Use Amazon RDS for MySQL with a cross-Region read replica."
            },
            {
                "option": "D",
                "text": "Use Amazon RDS for PostgreSQL with a cross-Region read replica."
            }
        ],
    },
    {
        "question": "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Create an AWS Lambda function to apply the patch to all EC2 instances."
            },
            {
                "option": "B",
                "text": "Configure AWS Systems Manager Patch Manager to apply the patch to all EC2 instances."
            },
            {
                "option": "C",
                "text": "Schedule an AWS Systems Manager maintenance window to apply the patch to all EC2 instances."
            },
            {
                "option": "D",
                "text": "Use AWS Systems Manager Run Command to run a custom command that applies the patch to all EC2 instances."
            }
        ],
    },
    {
        "question": "An online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS Regions at all times. Which solution will meet these requirements with the LEAST amount of operational overhead?",
        "options": [
            {
                "option": "A",
                "text": "Migrate the PostgreSQL database to a PostgreSQL cluster on Amazon EC2 instances."
            },
            {
                "option": "B",
                "text": "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance with the Multi-AZ feature turned on."
            },
            {
                "option": "C",
                "text": "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Create a read replica in another Region."
            },
            {
                "option": "D",
                "text": "Migrate the PostgreSQL database to an Amazon RDS for PostgreSQL DB instance. Set up DB snapshots to be copied to another Region."
            }
        ],
    },
    {
        "question": "A company is designing a new application that runs in a VPC on Amazon EC2 instances. The application stores data in Amazon S3 and uses Amazon DynamoDB as its database. For compliance reasons, the company prohibits all traffic between the EC2 instances and other AWS services from passing over the public internet. What can a solutions architect do to meet this requirement?",
        "options": [
            {
                "option": "A",
                "text": "Configure gateway VPC endpoints to Amazon S3 and DynamoDB."
            },
            {
                "option": "B",
                "text": "Configure interface VPC endpoints to Amazon S3 and DynamoDB."
            },
            {
                "option": "C",
                "text": "Configure a gateway VPC endpoint to Amazon S3. Configure an interface VPC endpoint to DynamoDB."
            },
            {
                "option": "D",
                "text": "Configure a gateway VPC endpoint to DynamoDB. Configure an interface VPC endpoint to Amazon S3."
            }
        ],
    },
    {
        "question": "A company's packaged application dynamically creates and returns single-use text files in response to user requests. The company is using Amazon CloudFront for distribution but wants to further reduce data transfer costs. The company cannot modify the application's source code. What should a solutions architect do to reduce costs?",
        "options": [
            {
                "option": "A",
                "text": "Use Lambda@Edge to compress the files as they are sent to users."
            },
            {
                "option": "B",
                "text": "Enable Amazon S3 Transfer Acceleration to reduce the response times."
            },
            {
                "option": "C",
                "text": "Enable caching on the CloudFront distribution to store generated files at the edge."
            },
            {
                "option": "D",
                "text": "Use Amazon S3 multipart uploads to move the files to Amazon S3 before returning them to users."
            }
        ],
    },
    {
        "question": "A company is using a VPC peering strategy to connect its VPCs in a single Region to allow for cross-communication. A recent increase in account creations and VPCs has made it difficult to maintain the VPC peering strategy, and the company expects to grow to hundreds of VPCs. There are also new requests to create site-to-site VPNs with some of the VPCs. A solutions architect has been tasked with creating a centrally managed networking setup for multiple accounts, VPCs, and VPNs. Which networking solution meets these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Configure shared VPCs and VPNs and share to each other."
            },
            {
                "option": "B",
                "text": "Configure a hub-and-spoke VPC and route all traffic through VPC peering."
            },
            {
                "option": "C",
                "text": "Configure an AWS Direct Connect connection between all VPCs and VPNs."
            },
            {
                "option": "D",
                "text": "Configure a transit gateway with AWS Transit Gateway and connect all VPCs and VPNs."
            }
        ],
    },
    {
        "question": "A company is running an application on Amazon EC2 instances. Traffic to the workload increases substantially during business hours and decreases afterward. The CPU utilization of an EC2 instance is a strong indicator of end-user demand on the application. The company has configured an Auto Scaling group to have a minimum group size of 2 EC2 instances and a maximum group size of 10 EC2 instances. The company is concerned that the current scaling policy that is associated with the Auto Scaling group might not be correct. The company must avoid over-provisioning EC2 instances and incurring unnecessary costs. What should a solutions architect recommend to meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Configure Amazon EC2 Auto Scaling to use a scheduled scaling plan and launch an additional 8 EC2 instances during business hours."
            },
            {
                "option": "B",
                "text": "Configure AWS Auto Scaling to use a scaling plan that enables predictive scaling. Configure predictive scaling with a scaling mode of forecast and scale, and to enforce the maximum capacity setting during scaling."
            },
            {
                "option": "C",
                "text": "Configure a step scaling policy to add 4 EC2 instances at 50% CPU utilization and add another 4 EC2 instances at 90% CPU utilization. Configure scale-in policies to perform the reverse and remove EC2 instances based on the two values."
            },
            {
                "option": "D",
                "text": "Configure AWS Auto Scaling to have a desired capacity of 5 EC2 instances, and disable any existing scaling policies. Monitor the CPU utilization metric for 1 week. Then create dynamic scaling policies that are based on the observed values."
            }
        ],
    },
    {
        "question": "A company has an ecommerce application that stores data in an on-premises SQL database. The company has decided to migrate this database to AWS. However, as part of the migration, the company wants to find a way to attain sub-millisecond responses to common read requests. A solutions architect knows that the increase in speed is paramount and that a small percentage of stale data returned in the database reads is acceptable. What should the solutions architect recommend?",
        "options": [
            {
                "option": "A",
                "text": "Build Amazon RDS read replicas."
            },
            {
                "option": "B",
                "text": "Build the database as a larger instance type."
            },
            {
                "option": "C",
                "text": "Build a database cache using Amazon ElastiCache."
            },
            {
                "option": "D",
                "text": "Build a database cache using Amazon Elasticsearch Service (Amazon ES)."
            }
        ],
    },
    {
        "question": "A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity. Which architecture offers the HIGHEST availability?",
        "options": [
            {
                "option": "A",
                "text": "Add a second ActiveMQ server to another Availability Zone. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone."
            },
            {
                "option": "B",
                "text": "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Replicate the MySQL database to another Availability Zone."
            },
            {
                "option": "C",
                "text": "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an additional consumer EC2 instance in another Availability Zone. Use Amazon RDS for MySQL with Multi-AZ enabled."
            },
            {
                "option": "D",
                "text": "Use Amazon MQ with active/standby brokers configured across two Availability Zones. Add an Auto Scaling group for the consumer EC2 instances across two Availability Zones. Use Amazon RDS for MySQL with Multi-AZ enabled."
            }
        ],
    },
    {
        "question": "A company has an on-premises application that exports log files about users of a website. These log files range from 20 GB to 30 GB in size. A solutions architect has created an Amazon S3 bucket to store these files. The files will be uploaded directly from the application. The network connection experiences intermittent failures, and the upload sometimes fails. A solutions architect must design a solution that resolves this problem. The solution must minimize operational overhead. Which solution will meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Enable S3 Transfer Acceleration."
            },
            {
                "option": "B",
                "text": "Copy the files to an Amazon EC2 instance in the closest AWS Region. Use S3 Lifecycle policies to copy the log files to Amazon S3."
            },
            {
                "option": "C",
                "text": "Use multipart upload to Amazon S3."
            },
            {
                "option": "D",
                "text": "Upload the files to two AWS Regions simultaneously. Enable two-way Cross-Region Replication between the two Regions."
            }
        ],
    },
    {
        "question": "A company wants to use a custom distributed application that calculates various profit and loss scenarios. To achieve this goal, the company needs to provide a network connection between its Amazon EC2 instances. The connection must minimize latency and must maximize throughput. Which solution will meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Provision the application to use EC2 Dedicated Hosts of the same instance type."
            },
            {
                "option": "B",
                "text": "Configure a cluster placement group for EC2 instances that have the same instance type."
            },
            {
                "option": "C",
                "text": "Use multiple AWS elastic network interfaces and link aggregation."
            },
            {
                "option": "D",
                "text": "Configure AWS PrivateLink for the EC2 instances."
            }
        ],
    },
    {
        "question": "A media company is designing a new solution for graphic rendering. The application requires up to 400 GB of storage for temporary data that is discarded after the frames are rendered. The application requires approximately 40,000 random IOPS to perform the rendering. What is the MOST cost-effective storage option for this rendering application?",
        "options": [
            {
                "option": "A",
                "text": "A storage optimized Amazon EC2 instance with instance store storage"
            },
            {
                "option": "B",
                "text": "A storage optimized Amazon EC2 instance with a Provisioned IOPS SSD (io1 or io2) Amazon Elastic Block Store (Amazon EBS) volume"
            },
            {
                "option": "C",
                "text": "A burstable Amazon EC2 instance with a Throughput Optimized HDD (st1) Amazon Elastic Block Store (Amazon EBS) volume"
            },
            {
                "option": "D",
                "text": "A burstable Amazon EC2 instance with Amazon S3 storage over a VPC endpoint"
            }
        ],
    },
    {
        "question": "A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones. Amazon EC2 instances for the application tier running in private subnets need to download software patches from the internet. However, the EC2 instances cannot be directly accessible from the internet. Which actions should be taken to allow the EC2 instances to download the needed patches? (Select TWO.)",
        "options": [
            {
                "option": "A",
                "text": "Configure a NAT gateway in a public subnet."
            },
            {
                "option": "B",
                "text": "Define a custom route table with a route to the NAT gateway for internet traffic and associate it with the private subnets for the application tier."
            },
            {
                "option": "C",
                "text": "Assign Elastic IP addresses to the EC2 instances."
            },
            {
                "option": "D",
                "text": "Define a custom route table with a route to the internet gateway for internet traffic and associate it with the private subnets for the application tier."
            },
            {
                "option": "E",
                "text": "Configure a NAT instance in a private subnet."
            }
        ],
    },
    {
        "question": "A solutions architect needs to host a high performance computing (HPC) workload in the AWS Cloud. The workload will run on hundreds of Amazon EC2 instances and will require parallel access to a shared file system to enable distributed processing of large datasets. Datasets will be accessed across multiple instances simultaneously. The workload requires access latency within 1 ms. After processing has completed, engineers will need access to the dataset for manual postprocessing. Which solution will meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Use Amazon Elastic File System (Amazon EFS) as a shared file system. Access the dataset from Amazon EFS."
            },
            {
                "option": "B",
                "text": "Mount an Amazon S3 bucket to serve as the shared file system. Perform postprocessing directly from the S3 bucket."
            },
            {
                "option": "C",
                "text": "Use Amazon FSx for Lustre as a shared file system. Link the file system to an Amazon S3 bucket for postprocessing."
            },
            {
                "option": "D",
                "text": "Configure AWS Resource Access Manager to share an Amazon S3 bucket so that it can be mounted to all instances for processing and postprocessing."
            }
        ],
    },
    {
        "question": "A company wants to migrate its accounting system from an on-premises data center to the AWS Cloud in a single AWS Region. Data security and an immutable audit log are the top priorities. The company must monitor all AWS activities for compliance auditing. The company has enabled AWS CloudTrail but wants to make sure it meets these requirements. Which actions should a solutions architect take to protect and secure CloudTrail? (Choose two.)",
        "options": [
            {
                "option": "A",
                "text": "Enable CloudTrail log file validation."
            },
            {
                "option": "B",
                "text": "Install the CloudTrail Processing Library."
            },
            {
                "option": "C",
                "text": "Enable logging of Insights events in CloudTrail."
            },
            {
                "option": "D",
                "text": "Enable custom logging from the on-premises resources."
            },
            {
                "option": "E",
                "text": "Create an AWS Config rule to monitor whether CloudTrail is configured to use server-side encryption with AWS KMS managed encryption keys (SSE-KMS)."
            }
        ],
    },
    {
        "question": "A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy that maximizes security without increasing operational overhead. What should the solutions architect do to meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Deploy a NAT instance in the VPC. Route all the internet-based traffic through the NAT instance."
            },
            {
                "option": "B",
                "text": "Deploy a NAT gateway in the public subnets. Modify the private subnet route table to direct all internet-bound traffic to the NAT gateway."
            },
            {
                "option": "C",
                "text": "Configure an internet gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the internet gateway."
            },
            {
                "option": "D",
                "text": "Configure a virtual private gateway and attach it to the VPC. Modify the private subnet route table to direct internet-bound traffic to the virtual private gateway."
            }
        ],
    },
    {
        "question": "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
        "options": [
            {
                "option": "A",
                "text": "Use existing Python libraries to extract the text from the reports and to identify the PHI from the extracted text."
            },
            {
                "option": "B",
                "text": "Use Amazon Textract to extract the text from the reports. Use Amazon SageMaker to identify the PHI from the extracted text."
            },
            {
                "option": "C",
                "text": "Use Amazon Textract to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
            },
            {
                "option": "D",
                "text": "Use Amazon Rekognition to extract the text from the reports. Use Amazon Comprehend Medical to identify the PHI from the extracted text."
            }
        ],
    },
    {
        "question": "A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort. Which solution meets these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Use an AWS CloudFormation template to deploy the complete solution. Redeploy the CloudFormation stack every 30 days, and delete the original stack."
            },
            {
                "option": "B",
                "text": "Use an EC2 instance that runs a monitoring application from AWS Marketplace. Configure the monitoring application to use Amazon DynamoDB Streams to store the timestamp when a new item is created in the table. Use a script that runs on the EC2 instance to delete items that have a timestamp that is older than 30 days."
            },
            {
                "option": "C",
                "text": "Configure Amazon DynamoDB Streams to invoke an AWS Lambda function when a new item is created in the table. Configure the Lambda function to delete items in the table that are older than 30 days."
            },
            {
                "option": "D",
                "text": "Extend the application to add an attribute that has a value of the current timestamp plus 30 days to each new item that is created in the table. Configure DynamoDB to use the attribute as the TTL attribute."
            }
        ],
    },
    {
        "question": "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Turn on S3 Transfer Acceleration on the destination S3 bucket. Use multipart uploads to directly upload site data to the destination S3 bucket."
            },
            {
                "option": "B",
                "text": "Upload the data from each site to an S3 bucket in the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket. Then remove the data from the origin S3 bucket."
            },
            {
                "option": "C",
                "text": "Schedule AWS Snowball Edge Storage Optimized device jobs daily to transfer data from each site to the closest Region. Use S3 Cross-Region Replication to copy objects to the destination S3 bucket."
            },
            {
                "option": "D",
                "text": "Upload the data from each site to an Amazon EC2 instance in the closest Region. Store the data in an Amazon Elastic Block Store (Amazon EBS) volume. At regular intervals, take an EBS snapshot and copy it to the Region that contains the destination S3 bucket. Restore the EBS volume in that Region."
            }
        ],
    },
    {
        "question": "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations. Which solution meets these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Migrate the databases to Amazon Aurora Serverless for Aurora MySQL."
            },
            {
                "option": "B",
                "text": "Migrate the databases to Amazon Aurora Serverless for Aurora PostgreSQL."
            },
            {
                "option": "C",
                "text": "Combine the databases into one larger MySQL database. Run the larger database on larger EC2 instances."
            },
            {
                "option": "D",
                "text": "Create an EC2 Auto Scaling group for the database tier. Migrate the existing databases to the new environment."
            }
        ],
    },
    {
        "question": "A company has a custom application with embedded credentials that retrieves information from an Amazon RDS MySQL DB instance. Management says the application must be made more secure with the least amount of programming effort. What should a solutions architect do to meet these requirements?",
        "options": [
            {
                "option": "A",
                "text": "Use AWS Key Management Service (AWS KMS) customer master keys (CMKs) to create keys. Configure the application to load the database credentials from AWS KMS. Enable automatic key rotation."
            },
            {
                "option": "B",
                "text": "Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Create an AWS Lambda function that rotates the credentials in Secrets Manager."
            },
            {
                "option": "C",
                "text": "Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Secrets Manager. Configure the application to load the database credentials from Secrets Manager. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Secrets Manager."
            },
            {
                "option": "D",
                "text": "Create credentials on the RDS for MySQL database for the application user and store the credentials in AWS Systems Manager Parameter Store. Configure the application to load the database credentials from Parameter Store. Set up a credentials rotation schedule for the application user in the RDS for MySQL database using Parameter Store."
            }
        ],
    },
    {
        "question": "A company is preparing to migrate its on-premises application to AWS. The application consists of application servers and a Microsoft SQL Server database. The database cannot be migrated to a different engine because SQL Server features are used in the application's NET code. The company wants to attain the greatest availability possible while minimizing operational and management overhead. What should a solutions architect do to accomplish this?",
        "options": [
            {
                "option": "A",
                "text": "Install SQL Server on Amazon EC2 in a Multi-AZ deployment."
            },
            {
                "option": "B",
                "text": "Migrate the data to Amazon RDS for SQL Server in a Multi-AZ deployment."
            },
            {
                "option": "C",
                "text": "Deploy the database on Amazon RDS for SQL Server with Multi-AZ Replicas."
            },
            {
                "option": "D",
                "text": "Migrate the data to Amazon RDS for SQL Server in a cross-Region Multi-AZ deployment."
            }
        ],
    },
    {
        "question": "A company is backing up on-premises databases to local file server shares using the SMB protocol. The company requires immediate access to 1 week of backup files to meet recovery objectives. Recovery after a week is less likely to occur, and the company can tolerate a delay in accessing those older backup files. What should a solutions architect do to meet these requirements with the LEAST operational effort?",
        "options": [
            {
                "option": "A",
                "text": "Deploy Amazon FSx for Windows File Server to create a file system with exposed file shares with sufficient storage to hold all the desired backups."
            },
            {
                "option": "B",
                "text": "Deploy an AWS Storage Gateway file gateway with sufficient storage to hold 1 week of backups. Point the backups to SMB shares from the file gateway."
            },
            {
                "option": "C",
                "text": "Deploy Amazon Elastic File System (Amazon EFS) to create a file system with exposed NFS shares with sufficient storage to hold all the desired backups."
            },
            {
                "option": "D",
                "text": "Continue to back up to the existing file shares. Deploy AWS Database Migration Service (AWS DMS) and define a copy task to copy backup files older than 1 week to Amazon S3, and delete the backup files from the local file store."
            }
        ],
    },
    {
        "question": "A company is transitioning its Amazon EC2 based MariaDB database to Amazon RDS. The company has already identified a database instance type that will meet the company's CPU and memory requirements. The database must provide at least 40 GiB of storage capacity and 1,000 IOPS. Which storage configuration for the Amazon RDS for MariaDB instance is MOST cost-effective?",
        "options": [
            {
                "option": "A",
                "text": "Provision 350 GiB of magnetic storage for the RDS instance."
            },
            {
                "option": "B",
                "text": "Provision 50 GiB of General Purpose SSD storage for the RDS instance."
            },
            {
                "option": "C",
                "text": "Provision 334 GiB of General Purpose SSD storage for the RDS instance."
            },
            {
                "option": "D",
                "text": "Provision 50 GiB of Provisioned IOPS storage with 1,000 IOPS for the RDS instance."
            }
        ],
    }
]
