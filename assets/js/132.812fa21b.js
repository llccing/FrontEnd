(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{382:function(e,t,a){"use strict";a.r(t);var o=a(14),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"q151"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q151"}},[e._v("#")]),e._v(" Q151")]),e._v(" "),t("p",[e._v("A company wants to migrate its on-premises data center to AWS. According to the company's compliance requirements, the company can use only the ap-northeast-3 Region. Company administrators are not permitted to connect VPCs to the internet.\nWhich solutions will meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Use AWS Control Tower to implement data residency guardrails to deny internet access and deny access to all AWS Regions except ap-northeast-3.\nB. Use rules in AWS WAF to prevent internet access. Deny access to all AWS Regions except ap-northeast-3 in the AWS account settings.\nC. Use AWS Organizations to configure service control policies (SCPS) that prevent VPCs from gaining internet access. Deny access to all AWS Regions except ap-northeast-3.\nD. Create an outbound rule for the network ACL in each VPC to deny all traffic from 0.0.0.0/0. Create an IAM policy for each user to prevent the use of any AWS Region other than ap-northeast-3.\nE. Use AWS Config to activate managed rules to detect and alert for internet gateways and to detect and alert for new resources deployed outside of ap-northeast-3.")]),e._v(" "),t("h2",{attrs:{id:"q152"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q152"}},[e._v("#")]),e._v(" Q152")]),e._v(" "),t("p",[e._v("A company uses a three-tier web application to provide training to new employees. The application is accessed for only 12 hours every day. The company is using an Amazon RDS for MySQL DB instance to store information and wants to minimize costs.\nWhat should a solutions architect do to meet these requirements?")]),e._v(" "),t("p",[e._v("A. Configure an IAM policy for AWS Systems Manager Session Manager. Create an IAM role for the policy. Update the trust relationship of the role. Set up automatic start and stop for the DB instance.\nB. Create an Amazon ElastiCache for Redis cache cluster that gives users the ability to access the data from the cache when the DB instance is stopped. Invalidate the cache after the DB instance is started.\nC. Launch an Amazon EC2 instance. Create an IAM role that grants access to Amazon RDS. Attach the role to the EC2 instance. Configure a cron job to start and stop the EC2 instance on the desired schedule.\nD. Create AWS Lambda functions to start and stop the DB instance. Create Amazon EventBridge (Amazon CloudWatch Events) scheduled rules to invoke the Lambda functions. Configure the Lambda functions as event targets for the rules.")]),e._v(" "),t("h2",{attrs:{id:"q153"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q153"}},[e._v("#")]),e._v(" Q153")]),e._v(" "),t("p",[e._v("A company sells ringtones created from clips of popular songs. The files containing the ringtones are stored in Amazon S3 Standard and are at least 128 KB in size. The company has millions of files, but downloads are infrequent for ringtones older than 90 days. The company needs to save money on storage while keeping the most accessed files readily available for its users.\nWhich action should the company take to meet these requirements MOST cost-effectively?")]),e._v(" "),t("p",[e._v("A. Configure S3 Standard-Infrequent Access (S3 Standard-IA) storage for the initial storage tier of the objects.\nB. Move the files to S3 Intelligent-Tiering and configure it to move objects to a less expensive storage tier after 90 days.\nC. Configure S3 inventory to manage objects and move them to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.\nD. Implement an S3 Lifecycle policy that moves the objects from S3 Standard to S3 Standard-Infrequent Access (S3 Standard-1A) after 90 days.")]),e._v(" "),t("h2",{attrs:{id:"q154"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q154"}},[e._v("#")]),e._v(" Q154")]),e._v(" "),t("p",[e._v("A company needs to save the results from a medical trial to an Amazon S3 repository. The repository must allow a few scientists to add new files and must restrict all other users to read-only access. No users can have the ability to modify or delete any files in the repository. The company must keep every file in the repository for a minimum of 1 year after its creation date.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use S3 Object Lock in governance mode with a legal hold of 1 year.\nB. Use S3 Object Lock in compliance mode with a retention period of 365 days.\nC. Use an IAM role to restrict all users from deleting or changing objects in the S3 bucket. Use an S3 bucket policy to only allow the IAM role.\nD. Configure the S3 bucket to invoke an AWS Lambda function every time an object is added. Configure the function to track the hash of the saved object so that modified objects can be marked accordingly.")]),e._v(" "),t("h2",{attrs:{id:"q155"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q155"}},[e._v("#")]),e._v(" Q155")]),e._v(" "),t("p",[e._v("A large media company hosts a web application on AWS. The company wants to start caching confidential media files so that users around the world will have reliable access to the files. The content is stored in Amazon S3 buckets. The company must deliver the content quickly, regardless of where the requests originate geographically.\nWhich solution will meet these requirements?")]),e._v(" "),t("p",[e._v("A. Use AWS DataSync to connect the S3 buckets to the web application.\nB. Deploy AWS Global Accelerator to connect the S3 buckets to the web application.\nC. Deploy Amazon CloudFront to connect the S3 buckets to CloudFront edge servers.\nD. Use Amazon Simple Queue Service (Amazon SQS) to connect the S3 buckets to the web application")]),e._v(" "),t("h2",{attrs:{id:"q156"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q156"}},[e._v("#")]),e._v(" Q156")]),e._v(" "),t("p",[e._v("A company produces batch data that comes from different databases. The company also produces live stream data from network sensors and application APIs. The company needs to consolidate all the data into one place for business analytics. The company needs to process the incoming data and then stage the data in different Amazon S3 buckets. Teams will later run one-time queries and import the data into a business intelligence tool to show key performance indicators (KPIs).\nWhich combination of steps will meet these requirements with the LEAST operational overhead? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Use Amazon Athena for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.\nB. Use Amazon Kinesis Data Analytics for one-time queries. Use Amazon QuickSight to create dashboards for KPIs.\nC. Create custom AWS Lambda functions to move the individual records from the databases to an Amazon Redshift cluster.\nD. Use an AWS Glue extract, transform, and load (ETL) job to convert the data into JSON format. Load the data into multiple Amazon OpenSearch Service (Amazon Elasticsearch Service) clusters.\nE. Use blueprints in AWS Lake Formation to identify the data that can be ingested into a data lake. Use AWS Glue to crawl the source, extract the data, and load the data into Amazon S3 in Apache Parquet format.")]),e._v(" "),t("h2",{attrs:{id:"q157"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q157"}},[e._v("#")]),e._v(" Q157")]),e._v(" "),t("p",[e._v("A company stores data in an Amazon Aurora PostgreSQL DB cluster. The company must store all the data for 5 years and must delete all the data after 5 years. The company also must indefinitely keep audit logs of actions that are performed within the database. Currently, the company has automated backups configured for Aurora.")]),e._v(" "),t("p",[e._v("Which combination of steps should a solutions architect take to meet these requirements? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Take a manual snapshot of the DB cluster.\nB. Create a lifecycle policy for the automated backups.\nC. Configure automated backup retention for 5 years.\nD. Configure an Amazon CloudWatch Logs export for the DB cluster.\nE. Use AWS Backup to take the backups and to keep the backups for 5 years.")]),e._v(" "),t("h2",{attrs:{id:"q158"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q158"}},[e._v("#")]),e._v(" Q158")]),e._v(" "),t("p",[e._v("A solutions architect is optimizing a website for an upcoming musical event. Videos of the performances will be streamed in real time and then will be available on demand. The event is expected to attract a global online audience.")]),e._v(" "),t("p",[e._v("Which service will improve the performance of both the real-time and on-demand streaming?")]),e._v(" "),t("p",[e._v("A. Amazon CloudFront\nB. AWS Global Accelerator\nC. Amazon Route 53\nD. Amazon S3 Transfer Acceleration")]),e._v(" "),t("h2",{attrs:{id:"q159"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q159"}},[e._v("#")]),e._v(" Q159")]),e._v(" "),t("p",[e._v("A company is running a publicly accessible serverless application that uses Amazon API Gateway and AWS Lambda. The application’s traffic recently spiked due to fraudulent requests from botnets.")]),e._v(" "),t("p",[e._v("Which steps should a solutions architect take to block requests from unauthorized users? (Choose two.)")]),e._v(" "),t("p",[e._v("A. Create a usage plan with an API key that is shared with genuine users only.\nB. Integrate logic within the Lambda function to ignore the requests from fraudulent IP addresses.\nC. Implement an AWS WAF rule to target malicious requests and trigger actions to filter them out.\nD. Convert the existing public API to a private API. Update the DNS records to redirect users to the new API endpoint.\nE. Create an IAM role for each user attempting to access the API. A user will assume the role when making the API call.")]),e._v(" "),t("h2",{attrs:{id:"q160"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q160"}},[e._v("#")]),e._v(" Q160")]),e._v(" "),t("p",[e._v("An ecommerce company hosts its analytics application in the AWS Cloud. The application generates about 300 MB of data each month. The data is stored in JSON format. The company is evaluating a disaster recovery solution to back up the data. The data must be accessible in milliseconds if it is needed, and the data must be kept for 30 days.")]),e._v(" "),t("p",[e._v("Which solution meets these requirements MOST cost-effectively?")]),e._v(" "),t("p",[e._v("A. Amazon OpenSearch Service (Amazon Elasticsearch Service)\nB. Amazon S3 Glacier\nC. Amazon S3 Standard\nD. Amazon RDS for PostgreSQL")])])}),[],!1,null,null,null);t.default=n.exports}}]);