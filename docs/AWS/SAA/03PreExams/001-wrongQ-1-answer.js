const answers = [
    {
        "question": "A company is hosting its website by using Amazon EC2 instances behind an Elastic Load Balancer across multiple Availability Zones. The instances run in an EC2 Auto Scaling group. The website uses Amazon Elastic Block Store (Amazon EBS) volumes to store product manuals for users to download. The company updates the product content often, so new instances launched by the Auto Scaling group often have old data. It can take up to 30 minutes for the new instances to receive all the updates. The updates also require the EBS volumes to be resized during business hours. The company wants to ensure that the product manuals are always up to date on all instances and that the architecture adjusts quickly to increased user demand. A solutions architect needs to meet these requirements without causing the company to update its application code or adjust its website. What should the solutions architect do to accomplish this goal?",
        "correctOption": "C"
    },
    {
        "question": "A solutions architect plans to convert a company's monolithic web application into a multi-tier application. The company wants to avoid managing its own infrastructure. The minimum requirements for the web application are high availability, scalability, and regional low latency during peak hours. The solution should also store and retrieve data with millisecond latency using the application's API. Which solution meets these requirements?",
        "correctOption": "B"
    },
    {
        "question": "A company with facilities in North America, Europe, and Asia is designing a new distributed application to optimize its global supply chain and manufacturing process. The orders booked on one continent should be visible to all Regions in a second or less. The database should be able to support failover with a short Recovery Time Objective (RTO). The uptime of the application is important to ensure that manufacturing is not impacted. What should a solutions architect recommend?",
        "correctOption": "A"
    },
    {
        "question": "A company has a production workload that runs on 1,000 Amazon EC2 Linux instances. The workload is powered by third-party software. The company needs to patch the third-party software on all EC2 instances as quickly as possible to remediate a critical security vulnerability. What should a solutions architect do to meet these requirements?",
        "correctOption": "B"
    },
    {
        "question": "An online learning company is migrating to the AWS Cloud. The company maintains its student records in a PostgreSQL database. The company needs a solution in which its data is available and online across multiple AWS Regions at all times. Which solution will meet these requirements with the LEAST amount of operational overhead?",
        "correctOption": "C"
    },
    {
        "question": "A company is designing a new application that runs in a VPC on Amazon EC2 instances. The application stores data in Amazon S3 and uses Amazon DynamoDB as its database. For compliance reasons, the company prohibits all traffic between the EC2 instances and other AWS services from passing over the public internet. What can a solutions architect do to meet this requirement?",
        "correctOption": "A"
    },
    {
        "question": "A company's packaged application dynamically creates and returns single-use text files in response to user requests. The company is using Amazon CloudFront for distribution but wants to further reduce data transfer costs. The company cannot modify the application's source code. What should a solutions architect do to reduce costs?",
        "correctOption": "A"
    },
    {
        "question": "A company is using a VPC peering strategy to connect its VPCs in a single Region to allow for cross-communication. A recent increase in account creations and VPCs has made it difficult to maintain the VPC peering strategy, and the company expects to grow to hundreds of VPCs. There are also new requests to create site-to-site VPNs with some of the VPCs. A solutions architect has been tasked with creating a centrally managed networking setup for multiple accounts, VPCs, and VPNs. Which networking solution meets these requirements?",
        "correctOption": "D"
    },
    {
        "question": "A company is running an application on Amazon EC2 instances. Traffic to the workload increases substantially during business hours and decreases afterward. The CPU utilization of an EC2 instance is a strong indicator of end-user demand on the application. The company has configured an Auto Scaling group to have a minimum group size of 2 EC2 instances and a maximum group size of 10 EC2 instances. The company is concerned that the current scaling policy that is associated with the Auto Scaling group might not be correct. The company must avoid over-provisioning EC2 instances and incurring unnecessary costs. What should a solutions architect recommend to meet these requirements?",
        "correctOption": "B"
    },
    {
        "question": "A company has an ecommerce application that stores data in an on-premises SQL database. The company has decided to migrate this database to AWS. However, as part of the migration, the company wants to find a way to attain sub-millisecond responses to common read requests. A solutions architect knows that the increase in speed is paramount and that a small percentage of stale data returned in the database reads is acceptable. What should the solutions architect recommend?",
        "correctOption": "C"
    },
    {
        "question": "A company recently migrated a message processing system to AWS. The system receives messages into an ActiveMQ queue running on an Amazon EC2 instance. Messages are processed by a consumer application running on Amazon EC2. The consumer application processes the messages and writes results to a MySQL database running on Amazon EC2. The company wants this application to be highly available with low operational complexity. Which architecture offers the HIGHEST availability?",
        "correctOption": "D"
    },
    {
        "question": "A company has an on-premises application that exports log files about users of a website. These log files range from 20 GB to 30 GB in size. A solutions architect has created an Amazon S3 bucket to store these files. The files will be uploaded directly from the application. The network connection experiences intermittent failures, and the upload sometimes fails. A solutions architect must design a solution that resolves this problem. The solution must minimize operational overhead. Which solution will meet these requirements?",
        "correctOption": "C"
    },
    {
        "question": "A company wants to use a custom distributed application that calculates various profit and loss scenarios. To achieve this goal, the company needs to provide a network connection between its Amazon EC2 instances. The connection must minimize latency and must maximize throughput. Which solution will meet these requirements?",
        "correctOption": "B"
    },
    {
        "question": "A media company is designing a new solution for graphic rendering. The application requires up to 400 GB of storage for temporary data that is discarded after the frames are rendered. The application requires approximately 40,000 random IOPS to perform the rendering. What is the MOST cost-effective storage option for this rendering application?",
        "correctOption": "A"
    },
    {
        "question": "A company runs a public-facing three-tier web application in a VPC across multiple Availability Zones. Amazon EC2 instances for the application tier running in private subnets need to download software patches from the internet. However, the EC2 instances cannot be directly accessible from the internet. Which actions should be taken to allow the EC2 instances to download the needed patches? (Select TWO.)",
        "correctOption": "AB"
    },
    {
        "question": "A solutions architect needs to host a high performance computing (HPC) workload in the AWS Cloud. The workload will run on hundreds of Amazon EC2 instances and will require parallel access to a shared file system to enable distributed processing of large datasets. Datasets will be accessed across multiple instances simultaneously. The workload requires access latency within 1 ms. After processing has completed, engineers will need access to the dataset for manual postprocessing. Which solution will meet these requirements?",
        "correctOption": "C"
    },
    {
        "question": "A company wants to migrate its accounting system from an on-premises data center to the AWS Cloud in a single AWS Region. Data security and an immutable audit log are the top priorities. The company must monitor all AWS activities for compliance auditing. The company has enabled AWS CloudTrail but wants to make sure it meets these requirements. Which actions should a solutions architect take to protect and secure CloudTrail? (Choose two.)",
        "correctOption": "AE"
    },
    {
        "question": "A company has created a multi-tier application for its ecommerce website. The website uses an Application Load Balancer that resides in the public subnets, a web tier in the public subnets, and a MySQL cluster hosted on Amazon EC2 instances in the private subnets. The MySQL database needs to retrieve product catalog and pricing information that is hosted on the internet by a third-party provider. A solutions architect must devise a strategy that maximizes security without increasing operational overhead. What should the solutions architect do to meet these requirements?",
        "correctOption": "B"
    },
    {
        "question": "A hospital recently deployed a RESTful API with Amazon API Gateway and AWS Lambda. The hospital uses API Gateway and Lambda to upload reports that are in PDF format and JPEG format. The hospital needs to modify the Lambda code to identify protected health information (PHI) in the reports. Which solution will meet these requirements with the LEAST operational overhead?",
        "correctOption": "C"
    },
    {
        "question": "A company runs an application on a large fleet of Amazon EC2 instances. The application reads and writes entries into an Amazon DynamoDB table. The size of the DynamoDB table continuously grows, but the application needs only data from the last 30 days. The company needs a solution that minimizes cost and development effort. Which solution meets these requirements?",
        "correctOption": "D"
    },
    {
        "question": "A company collects data for temperature, humidity, and atmospheric pressure in cities across multiple continents. The average volume of data that the company collects from each site daily is 500 GB. Each site has a high-speed Internet connection. The company wants to aggregate the data from all these global sites as quickly as possible in a single Amazon S3 bucket. The solution must minimize operational complexity. Which solution meets these requirements?",
        "correctOption": "A"
    },
    {
        "question": "A company manages its own Amazon EC2 instances that run MySQL databases. The company is manually managing replication and scaling as demand increases or decreases. The company needs a new solution that simplifies the process of adding or removing compute capacity to or from its database tier as needed. The solution also must offer improved performance, scaling, and durability with minimal effort from operations. Which solution meets these requirements?",
        "correctOption": "A"
    },
    {
        "question": "A company has a custom application with embedded credentials that retrieves information from an Amazon RDS MySQL DB instance. Management says the application must be made more secure with the least amount of programming effort. What should a solutions architect do to meet these requirements?",
        "correctOption": "C"
    },
    {
        "question": "A company is preparing to migrate its on-premises application to AWS. The application consists of application servers and a Microsoft SQL Server database. The database cannot be migrated to a different engine because SQL Server features are used in the application's NET code. The company wants to attain the greatest availability possible while minimizing operational and management overhead. What should a solutions architect do to accomplish this?",
        "correctOption": "B"
    },
    {
        "question": "A company is backing up on-premises databases to local file server shares using the SMB protocol. The company requires immediate access to 1 week of backup files to meet recovery objectives. Recovery after a week is less likely to occur, and the company can tolerate a delay in accessing those older backup files. What should a solutions architect do to meet these requirements with the LEAST operational effort?",
        "correctOption": "B"
    },
    {
        "question": "A company is transitioning its Amazon EC2 based MariaDB database to Amazon RDS. The company has already identified a database instance type that will meet the company's CPU and memory requirements. The database must provide at least 40 GiB of storage capacity and 1,000 IOPS. Which storage configuration for the Amazon RDS for MariaDB instance is MOST cost-effective?",
        "correctOption": "C"
    }
]