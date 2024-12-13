(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{330:function(e,s,a){"use strict";a.r(s);var t=a(14),r=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"amazon-efs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-efs"}},[e._v("#")]),e._v(" Amazon EFS")]),e._v(" "),s("h3",{attrs:{id:"what-is-efs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-efs"}},[e._v("#")]),e._v(" What is EFS")]),e._v(" "),s("p",[e._v("Amazon Elastic File System (EFS) is designed to provide serverless, fully elastic file storage that lets you share file data without provisioning or managing storage capacity and performance. With a few selections in the AWS Management Console, you can create file systems that are accessible to Amazon Elastic Compute Cloud (EC2) instances, Amazon container services (Amazon Elastic Container Service  [ECS], Amazon Elastic Kubernetes Service  [EKS], and AWS Fargate ), and AWS Lambda  functions through a file system interface (using standard operating system file I/O APIs). They also support full file system access semantics, such as strong consistency and file locking.")]),e._v(" "),s("p",[e._v("Amazon EFS file systems can automatically scale from gigabytes to petabytes of data without needing to provision storage. Tens, hundreds, or even thousands of compute instances can access an Amazon EFS file system at the same time, and Amazon EFS provides consistent performance to each compute instance. Amazon EFS is designed to be highly durable and highly available. With Amazon EFS, there is no minimum fee or setup costs, and you pay only for what you use.")]),e._v(" "),s("h3",{attrs:{id:"when-should-i-use-amazon-efs-vs-amazon-elastic-block-store-amazon-ebs-vs-amazon-s3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-should-i-use-amazon-efs-vs-amazon-elastic-block-store-amazon-ebs-vs-amazon-s3"}},[e._v("#")]),e._v(" When should I use Amazon EFS vs. Amazon Elastic Block Store (Amazon EBS) vs. Amazon S3?")]),e._v(" "),s("p",[e._v("AWS offers cloud storage services to support a wide range of storage workloads.\nEFS is a file storage service  for use with Amazon compute (EC2, containers, serverless) and on-premises servers. EFS provides a file system interface, file system access semantics (such as strong consistency and file locking), and concurrently accessible storage for up to thousands of EC2 instances.\nAmazon EBS  is a block-level storage service for use with EC2. EBS can deliver performance for workloads that require the lowest-latency access to data from a single EC2 instance.\nAmazon S3  is an object storage service. S3 makes data available through an internet API that can be accessed anywhere.")]),e._v(" "),s("h4",{attrs:{id:"next-result-from-ai"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#next-result-from-ai"}},[e._v("#")]),e._v(" Next Result from AI")]),e._v(" "),s("p",[e._v("In AWS, Elastic Block Store (EBS) and Elastic File System (EFS) are both storage solutions, but they serve different purposes and have distinct characteristics:")]),e._v(" "),s("h3",{attrs:{id:"amazon-ebs-elastic-block-store"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-ebs-elastic-block-store"}},[e._v("#")]),e._v(" Amazon EBS (Elastic Block Store)")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Type")]),e._v(": Block storage.")]),e._v(" "),s("li",[s("strong",[e._v("Use Case")]),e._v(": Ideal for use as the primary storage for file systems, databases, or any application that requires granular updates and access to raw, unformatted, and block-level storage.")]),e._v(" "),s("li",[s("strong",[e._v("Attachment")]),e._v(": Can be attached to a single Amazon EC2 instance at a time.")]),e._v(" "),s("li",[s("strong",[e._v("Persistence")]),e._v(": Data persists independently of the life of the instance.")]),e._v(" "),s("li",[s("strong",[e._v("Performance")]),e._v(": Offers different performance options, such as General Purpose SSD (gp3, gp2), Provisioned IOPS SSD (io1, io2), and magnetic volumes (st1, sc1).")]),e._v(" "),s("li",[s("strong",[e._v("Scalability")]),e._v(": Must manually resize volumes.")]),e._v(" "),s("li",[s("strong",[e._v("Backup")]),e._v(": Supports snapshots for backups, which can be used to create new volumes.")])]),e._v(" "),s("h3",{attrs:{id:"amazon-efs-elastic-file-system"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#amazon-efs-elastic-file-system"}},[e._v("#")]),e._v(" Amazon EFS (Elastic File System)")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Type")]),e._v(": File storage.")]),e._v(" "),s("li",[s("strong",[e._v("Use Case")]),e._v(": Designed for applications that require shared file access, such as content management, web serving, and home directories.")]),e._v(" "),s("li",[s("strong",[e._v("Attachment")]),e._v(": Can be mounted concurrently by multiple Amazon EC2 instances across different availability zones.")]),e._v(" "),s("li",[s("strong",[e._v("Persistence")]),e._v(": Data is stored redundantly across multiple Availability Zones.")]),e._v(" "),s("li",[s("strong",[e._v("Performance")]),e._v(": Offers two performance modes: General Purpose and Max I/O. Also provides two throughput modes: Bursting and Provisioned.")]),e._v(" "),s("li",[s("strong",[e._v("Scalability")]),e._v(": Automatically scales up or down as you add or remove files.")]),e._v(" "),s("li",[s("strong",[e._v("Backup")]),e._v(": Supports AWS Backup for file-level backups.")])]),e._v(" "),s("h3",{attrs:{id:"key-differences"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-differences"}},[e._v("#")]),e._v(" Key Differences")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Accessibility")]),e._v(": EBS is limited to a single EC2 instance, while EFS can be accessed by multiple instances simultaneously.")]),e._v(" "),s("li",[s("strong",[e._v("Use Case Suitability")]),e._v(": EBS is suited for high-performance applications requiring block storage, whereas EFS is optimal for shared file storage across multiple instances.")]),e._v(" "),s("li",[s("strong",[e._v("Scalability")]),e._v(": EBS requires manual scaling, while EFS automatically scales.")])]),e._v(" "),s("p",[e._v("These differences make EBS and EFS suitable for different scenarios depending on your specific storage needs.")]),e._v(" "),s("h4",{attrs:{id:"the-difference-between-block-storage-and-file-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-difference-between-block-storage-and-file-storage"}},[e._v("#")]),e._v(" the difference between block storage and file storage")]),e._v(" "),s("p",[e._v("Block storage and file storage are two different storage architectures that serve distinct purposes:")]),e._v(" "),s("h3",{attrs:{id:"block-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-storage"}},[e._v("#")]),e._v(" Block Storage")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Structure")]),e._v(": Data is stored in fixed-size blocks. Each block has a unique address, and the storage system does not manage a file system structure.")]),e._v(" "),s("li",[s("strong",[e._v("Use Case")]),e._v(": Suitable for applications requiring high-performance and low-latency access, such as databases and virtual machine file systems.")]),e._v(" "),s("li",[s("strong",[e._v("Flexibility")]),e._v(": Offers more granular control over data storage, allowing the client to manage the file system.")]),e._v(" "),s("li",[s("strong",[e._v("Performance")]),e._v(": Typically provides higher performance and efficiency for transactional data and I/O-intensive applications.")]),e._v(" "),s("li",[s("strong",[e._v("Example")]),e._v(": AWS Elastic Block Store (EBS).")])]),e._v(" "),s("h3",{attrs:{id:"file-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#file-storage"}},[e._v("#")]),e._v(" File Storage")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Structure")]),e._v(": Data is stored as files in a hierarchical structure (directories and subdirectories).")]),e._v(" "),s("li",[s("strong",[e._v("Use Case")]),e._v(": Ideal for shared access scenarios, such as collaboration tools, content management systems, and home directories.")]),e._v(" "),s("li",[s("strong",[e._v("Accessibility")]),e._v(": Allows multiple clients to access and share files concurrently.")]),e._v(" "),s("li",[s("strong",[e._v("Simplicity")]),e._v(": Easier to manage for applications that naturally work with files and directories.")]),e._v(" "),s("li",[s("strong",[e._v("Example")]),e._v(": AWS Elastic File System (EFS).")])]),e._v(" "),s("h3",{attrs:{id:"key-differences-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#key-differences-2"}},[e._v("#")]),e._v(" Key Differences")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Data Management")]),e._v(": Block storage requires the client to manage the file system, while file storage manages the file system for you.")]),e._v(" "),s("li",[s("strong",[e._v("Performance")]),e._v(": Block storage generally offers better performance for high I/O operations, while file storage is better for shared access and simpler use cases.")]),e._v(" "),s("li",[s("strong",[e._v("Accessibility")]),e._v(": File storage supports concurrent access by multiple clients, whereas block storage is typically accessed by a single client at a time.")])]),e._v(" "),s("p",[e._v("These differences make block storage and file storage suitable for different types of applications and workloads.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://aws.amazon.com/efs/faq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Amazon EFS FAQs"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);