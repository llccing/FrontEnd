(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{504:function(e,t,a){"use strict";a.r(t);var s=a(14),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"q81"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q81"}},[e._v("#")]),e._v(" Q81")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("decoupled = SQS\nLaunch template = AMI\nLaunch configuration = EC2")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("This design follows the best practices for loosely coupled and scalable architecture. By using SQS, the jobs are durably stored in the queue, ensuring they are not lost. The processor application is stateless, which aligns with the design requirement. The AMI allows for consistent deployment of the application. The launch template and ASG facilitate the dynamic scaling of the application based on the number of items in the SQS, ensuring parallel processing of jobs.")]),e._v(" "),t("p",[e._v("Options A and D suggest using SNS, which is a publish/subscribe messaging service and may not provide the durability required for job storage.")]),e._v(" "),t("p",[e._v("Option B suggests using network usage as a scaling metric, which may not be directly related to the number of jobs to be processed. The number of items in the SQS provides a more accurate metric for scaling based on the workload.")]),e._v(" "),t("h2",{attrs:{id:"q82"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q82"}},[e._v("#")]),e._v(" Q82")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("B\nAWS Config has a managed rule\nnamed acm-certificate-expiration-check\nto check for expiring certificates\n(configurable number of days)")]),e._v(" "),t("p",[e._v("https://repost.aws/knowledge-center/acm-certificate-expiration")]),e._v(" "),t("h2",{attrs:{id:"q83"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q83"}},[e._v("#")]),e._v(" Q83")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" C")]),e._v(" "),t("p",[e._v("The key reasons are:")]),e._v(" "),t("p",[e._v("CloudFront can cache static content close to European users using edge locations, improving site performance.\nThe custom origin feature allows seamlessly integrating the CloudFront CDN with existing on-premises servers.\nNo changes are needed to the site backend or servers. CloudFront just acts as a globally distributed cache.\nThis can be set up very quickly, meeting the launch deadline.\nOther options like migrating to EC2 or S3 would require more time and changes. CloudFront is an easier lift.\nRoute 53 geoproximity routing alone would not improve performance much without a CDN.")]),e._v(" "),t("h2",{attrs:{id:"q84"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q84"}},[e._v("#")]),e._v(" Q84")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Option B, would indeed be the most cost-effective solution. Reserved Instances provide cost savings for instances that run consistently, such as the production environment in this case, while On-Demand Instances offer flexibility and are suitable for instances with variable usage patterns like the development and test environments. This combination ensures cost optimization based on the specific requirements and usage patterns described in the question.")]),e._v(" "),t("h2",{attrs:{id:"q85"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q85"}},[e._v("#")]),e._v(" Q85")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("You can use S3 Object Lock to store objects using a write-once-read-many (WORM) model. Object Lock can help prevent objects from being deleted or overwritten for a fixed amount of time or indefinitely. You can use S3 Object Lock to meet regulatory requirements that require WORM storage, or add an extra layer of protection against object changes and deletion.\nVersioning is required and automatically activated as Object Lock is enabled.\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-overview.html")]),e._v(" "),t("h2",{attrs:{id:"q86"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q86"}},[e._v("#")]),e._v(" Q86")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Secrets Manager enables you to replace hardcoded credentials in your code, including passwords, with an API call to Secrets Manager to retrieve the secret programmatically. This helps ensure the secret can't be compromised by someone examining your code, because the secret no longer exists in the code. Also, you can configure Secrets Manager to automatically rotate the secret for you according to a specified schedule. This enables you to replace long-term secrets with short-term ones, significantly reducing the risk of compromise.\nhttps://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("B. SSM OpsCenter is primarily used for managing and resolving operational issues. It is not designed to securely store and manage credentials like AWS Secrets Manager.")]),e._v(" "),t("p",[e._v("C. Storing credentials in an S3 bucket may provide some level of security, but it lacks the additional features and security controls offered by AWS Secrets Manager.")]),e._v(" "),t("p",[e._v("D. While using KMS for encryption is a good practice, managing credentials directly on the web server file system can introduce complexities and potential security risks. It can be challenging to securely manage and rotate credentials across multiple web servers, especially when considering scalability and automation.")]),e._v(" "),t("p",[e._v("In summary, option A is the recommended solution as it leverages AWS Secrets Manager, which is purpose-built for securely storing and managing secrets, and provides the necessary IAM permissions to allow the web servers to access the credentials securely.")]),e._v(" "),t("h2",{attrs:{id:"q87"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q87"}},[e._v("#")]),e._v(" Q87")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" D")]),e._v(" "),t("p",[e._v('Ans D - as excellently explained by SaurabhTiwari1 (9 mth ago) "The original question was about handling a situation where the database is unavailable due to an upgrade, not a failover situation. During a database upgrade, the database instance is not available, and RDS Proxy would not be able to connect to a new database instance because there isn’t one."')]),e._v(" "),t("p",[e._v("In this specific scenario, using Amazon SQS as described in option D provides a buffer for the incoming data during the period when the database is unavailable. This ensures that no data is lost, and it can be written to the database once the upgrade is complete.")]),e._v(" "),t("h2",{attrs:{id:"q88"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q88"}},[e._v("#")]),e._v(" Q88")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v('"Typically, you configure buckets to be Requester Pays buckets when you want to share data but not incur charges associated with others accessing the data. For example, you might use Requester Pays buckets when making available large datasets, such as zip code directories, reference data, geospatial information, or web crawling data."\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/RequesterPaysBuckets.html')]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Option A. When you use S3 Cross-Region Replication (CRR), you will incur data transfer costs. These costs include a fee for transferring data between regions, which is approximately $0.02 per GB.")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Why Not the Other Options?\nB. S3 Cross-Region Replication:\nCross-Region Replication (CRR) copies data between S3 buckets in different AWS Regions but incurs data transfer costs for replication, which does not minimize costs for the survey company.\nIt is also unnecessary if the marketing firm can directly access the bucket.\nC. Cross-Account Access:\nGranting cross-account access allows the marketing firm to read data directly, but the data transfer costs would still be borne by the survey company, which contradicts the goal of minimizing the company’s costs.\nD. S3 Intelligent-Tiering:\nS3 Intelligent-Tiering optimizes storage costs for infrequently accessed data but does not address the need to minimize data transfer costs during sharing. Syncing the bucket to the marketing firm’s bucket would also incur transfer costs.")]),e._v(" "),t("h2",{attrs:{id:"q89"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q89"}},[e._v("#")]),e._v(" Q89")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" A")]),e._v(" "),t("p",[e._v("Same as Question #44")]),e._v(" "),t("hr"),e._v(" "),t("p",[e._v("Enable the versioning to ensure restoration in case of accidental deletion and MFA Delete for double verification before deletion.")]),e._v(" "),t("h2",{attrs:{id:"q90"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#q90"}},[e._v("#")]),e._v(" Q90")]),e._v(" "),t("p",[t("strong",[e._v("Answer:")]),e._v(" B")]),e._v(" "),t("p",[e._v("Just read from read replica.\nA: This will make it HA but won't solve any problems\nC: We want an AWS solution not change the development team's ways of working\nD: Elasticache is cache of read queries when data doesn't change. It's useless for finding new data.")])])}),[],!1,null,null,null);t.default=n.exports}}]);