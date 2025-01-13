(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{361:function(e,t,a){"use strict";a.r(t);var o=a(14),n=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"s3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3"}},[e._v("#")]),e._v(" S3")]),e._v(" "),t("p",[e._v("Amazon Simple Storage Service (Amazon S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance. Customers of all sizes and industries can use Amazon S3 to store and protect any amount of data for a range of use cases, such as data lakes, websites, mobile applications, backup and restore, archive, enterprise applications, IoT devices, and big data analytics. Amazon S3 provides management features so that you can optimize, organize, and configure access to your data to meet your specific business, organizational, and compliance requirements.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("more about S3"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"s3-transfer-acceleration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-transfer-acceleration"}},[e._v("#")]),e._v(" S3 Transfer Acceleration")]),e._v(" "),t("p",[e._v("Amazon S3 Transfer Acceleration can speed up content transfers to and from Amazon S3 by as much as 50-500% for long-distance transfer of larger objects. Customers who have either web or mobile applications with widespread users or applications hosted far away from their S3 bucket can experience long and variable upload and download speeds over the Internet. S3 Transfer Acceleration (S3TA) reduces the variability in Internet routing, congestion and speeds that can affect transfers, and logically shortens the distance to S3 for remote applications. S3TA improves transfer performance by routing traffic through Amazon CloudFront’s globally distributed Edge Locations and over AWS backbone networks, and by using network protocol optimizations. You can turn on S3TA with a few clicks in the S3 console, and test its benefits from your location with a speed comparison tool. With S3TA, you pay only for transfers that are accelerated.")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/transfer-acceleration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("more about S3 Transfer Acceleration"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bucket"}},[e._v("#")]),e._v(" Bucket")]),e._v(" "),t("p",[e._v("要向 Amazon S3 上传数据（照片、视频、文档等），您必须首先在其中一个 AWS 区域 中创建 S3 存储桶。存储桶是 Amazon S3 中用于存储对象的容器。您可以在存储桶中存储任意数量的对象，并且账户中最多可以有 100 个存储桶。要查看存储桶利用率、存储桶配额或请求增加配额，请访问服务配额控制台。")]),e._v(" "),t("p",[e._v("Amazon S3 支持全局存储桶，这意味着每个存储桶名称在分区内的所有AWS 区域中所有AWS 账户内都必须是唯一的。分区是一组区域。AWS 目前有三个分区：aws（标准区域）、aws-cn（中国区域）和 aws-us-gov（AWS GovCloud (US)）。")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/AmazonS3/latest/userguide/UsingBucket.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("more about Bucket"),t("OutboundLink")],1)]),e._v(" "),t("h3",{attrs:{id:"s3-file-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-file-gateway"}},[e._v("#")]),e._v(" S3 File Gateway")]),e._v(" "),t("p",[e._v("Store and access objects in Amazon S3 from NFS or SMB file data with local caching\n"),t("a",{attrs:{href:"https://aws.amazon.com/storagegateway/file/s3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Storage Gateway - S3 File Gateway"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://aws.amazon.com/compare/the-difference-between-nfs-smb/",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Difference Between NFS and SMB"),t("OutboundLink")],1),e._v("\nNetwork File System (NFS) and Server Message Block (SMB) are file access storage protocols or rules for efficient file sharing over a network. The ability to communicate, collaborate, and share files effectively is essential for any organization’s day-to-day operations. With NFS, a user (or client device) can connect to a network server and access files on the server. It has rules that allow multiple users to share the same file without data conflicts. Similarly, SMB also allows users to read files on the server. However, it offers more flexibility, so clients can share files with each other as well. Clients can use SMB to establish connections with any other networked devices—like printers or file servers. The client can then access the device’s files as if it were local to the client.")]),e._v(" "),t("h3",{attrs:{id:"s3-intelligent-tiering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-intelligent-tiering"}},[e._v("#")]),e._v(" S3 Intelligent-Tiering")]),e._v(" "),t("h4",{attrs:{id:"什么是-s3-intelligent-tiering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-s3-intelligent-tiering"}},[e._v("#")]),e._v(" 什么是 S3 Intelligent-Tiering？")]),e._v(" "),t("p",[e._v("S3 Intelligent-Tiering 是首个云存储，它可以根据访问频率自动将数据移至最经济实惠的访问层，从而自动在细粒度对象级别降低您的存储成本，并且不会产生性能影响、取回费用或运营开销。S3 Intelligent-Tiering 可以为频繁、不频繁和归档即时访问层中的频繁、不频繁以及很少访问的数据提供毫秒级延迟和提高吞吐量性能。每月只需支付少量的对象监控和自动化费用，S3 Intelligent-Tiering 即可监控访问模式并将对象从一个访问层自动移动到另一个访问层。S3 Intelligent-Tiering 没有任何取回费用，因此在访问模式发生变化时存储账单不会意外增加。")]),e._v(" "),t("p",[e._v("现在，您可以通过虚拟方式将 S3 Intelligent-Tiering 用作任何工作负载（尤其是数据湖、数据分析、机器学习、新应用程序和用户生成的内容）的默认存储类。")]),e._v(" "),t("h3",{attrs:{id:"standard-infrequent-access-s3-standard-ia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#standard-infrequent-access-s3-standard-ia"}},[e._v("#")]),e._v(" Standard-Infrequent Access (S3 Standard-IA)")]),e._v(" "),t("p",[e._v("S3 Standard-Infrequent Access (S3 Standard-IA) 是一种 Amazon S3 存储类，用于不常访问但在需要时要求快速访问的数据。S3 Standard-IA 提供了 Amazon S3 Standard 存储类的高持久性、高吞吐量和低延迟，每 GB 存储价格和每 GB 取回费用都比较低。成本较低且性能出色使得 S3 Standard-IA 成为长期存储和备份的理想选择，也非常适用于灾难恢复的数据存储。S3 Standard-IA 存储类是在对象级别进行设置的，并且可以与 S3 Standard 或 S3 One Zone-IA 存储类存在于同一个存储桶中，从而让您可以使用 S3 生命周期策略在存储类之间自动转移对象，而无需更改任何应用程序。")]),e._v(" "),t("h4",{attrs:{id:"why-choose-s3-ia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-choose-s3-ia"}},[e._v("#")]),e._v(" why choose s3 ia")]),e._v(" "),t("p",[e._v("S3 Standard-IA 适用于不常访问但在需要时要求快速访问的数据。S3 Standard-IA 非常适合长期文件存储、较旧的同步和共享存储以及其他老化数据。")]),e._v(" "),t("h3",{attrs:{id:"common-questions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#common-questions"}},[e._v("#")]),e._v(" Common Questions")]),e._v(" "),t("p",[e._v("AWS Regions\nQ:  Where is my data stored?")]),e._v(" "),t("p",[e._v("您在创建 Amazon S3 存储桶时指定一个 AWS 区域。对于 S3 Standard、S3 Standard-IA、S3 Intelligent-Tiering、S3 Glacier Instant Retrieval、S3 Glacier Flexible Retrieval 和 S3 Glacier Deep Archive 存储类别，您的对象会自动存储在跨越至少三个可用区 (AZ) 的多个设备上。可用区之间相隔有意义的距离，通常是几公里，尽管它们都在 100 公里 (60 英里) 以内。存储在 S3 One Zone-IA 存储类别中的对象会在您选择的 AWS 区域内的单个可用区中冗余存储。对于 S3 on Outposts，您的数据存储在您本地的 Outpost 环境中，除非您手动选择将其转移到 AWS 区域。有关 Amazon S3 服务在 AWS 区域内可用性的详细信息，请参阅 AWS 区域服务列表。")]),e._v(" "),t("p",[e._v("Q:  What is an AWS Region?")]),e._v(" "),t("p",[e._v("An AWS Region is a physical location around the world where AWS cluster data centers.  Each group of logical data centers within a Region is know as an Availability Zone (AZ). Each AWS Region consists of a minimum of three, isolated, and physically separate AZs within a geographic area. Unlike other cloud providers, who often define a Region as a single data center, the multiple AZ design of every AWS Region offers advantages for customers. Each AZ has independent power, cooling, and physical security and is connected via redundant, ultra-low-latency networks.")]),e._v(" "),t("p",[e._v("Chinese version:\nAWS 区域是 AWS 集群数据中心的物理位置。每个区域内的逻辑数据中心组称为可用区 (AZ)。每个 AWS 区域至少包含三个独立、物理隔离的可用区。与将区域定义为单个数据中心的其他云提供商不同，每个 AWS 区域的多可用区设计为 AWS 客户提供了优势。每个可用区都有独立电源、冷却和物理安全，并通过冗余的超低延迟网络连接。")]),e._v(" "),t("p",[e._v("Q:  What is an AWS Availability Zone (AZ)?")]),e._v(" "),t("p",[e._v("An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs give customers the ability to operate production applications and databases that are more highly available, fault tolerant, and scalable than would be possible from a single data center. All AZs in an AWS Region are interconnected with high-bandwidth, low-latency networking, over fully redundant, dedicated metro fiber providing high-throughput, low-latency networking between AZs.")]),e._v(" "),t("p",[e._v("Amazon S3 Standard, S3 Standard-Infrequent Access, S3 Intelligent-Tiering, S3 Glacier Instant Retrieval, S3 Glacier Flexible Retrieval, and S3 Glacier Deep Archive storage classes replicate data across a minimum of three AZs to protect against the loss of one entire AZ. This remains true in Regions where fewer than three AZs are publicly available. Objects stored in these storage classes are available for access from all of the AZs in an AWS Region.")]),e._v(" "),t("p",[e._v("The Amazon S3 One Zone-IA storage class replicates data within a single AZ. The data stored in S3 One Zone-IA is not resilient to the physical loss of an Availability Zone resulting from disasters, such as earthquakes, fires, and floods.")]),e._v(" "),t("p",[e._v("Chinese version:\nAWS 的可用区（AZ）是一个或多个独立的数据中心，具有冗余的电力、网络和连接，位于一个 AWS 区域内。可用区使客户能够运行生产应用程序和数据库，这些应用程序和数据库比单个数据中心更高可用性、更具容错性和可扩展性。一个 AWS 区域内的所有可用区通过高带宽、低延迟的网络互连，使用完全冗余的专用地铁光纤提供高吞吐量、低延迟的网络连接。")]),e._v(" "),t("p",[e._v("Amazon S3 Standard、S3 Standard-Infrequent Access、S3 Intelligent-Tiering、S3 Glacier Instant Retrieval、S3 Glacier Flexible Retrieval 和 S3 Glacier Deep Archive 存储类别将数据复制到至少三个可用区，以防止整个可用区丢失。在少于三个可用区公开的区域中，这一点仍然适用。这些存储类别中的对象可以从 AWS 区域内的所有可用区进行访问。")]),e._v(" "),t("p",[e._v("Amazon S3 One Zone-IA 存储类别在单个可用区内复制数据。存储在 S3 One Zone-IA 中的数据不具备应对地震、火灾和洪水等灾害导致的可用区物理损失的弹性。")]),e._v(" "),t("h2",{attrs:{id:"s3-object-lock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-object-lock"}},[e._v("#")]),e._v(" S3 Object Lock")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("S3 Object Lock"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("S3 Object Lock is a feature that allows you to store objects in Amazon S3 in a way that prevents them from being deleted or overwritten for a specified period of time. This feature is useful for scenarios where you need to ensure that objects are not deleted or modified accidentally, such as when storing sensitive data or important business documents.")]),e._v(" "),t("p",[e._v("S3 Object Lock provides two modes: Governance and Compliance.")]),e._v(" "),t("p",[e._v("In compliance mode, a protected object version can't be overwritten or deleted by any user, including the root user in your AWS account. When an object is locked in compliance mode, its retention mode can't be changed, and its retention period can't be shortened. Compliance mode helps ensure that an object version can't be overwritten or deleted for the duration of the retention period.")]),e._v(" "),t("p",[e._v("note: The only way to delete an object under the compliance mode before its retention date expires is to delete the associated AWS account.")]),e._v(" "),t("p",[e._v("In governance mode, users can't overwrite or delete an object version or alter its lock settings unless they have special permissions. With governance mode, you protect objects against being deleted by most users, but you can still grant some users permission to alter the retention settings or delete the objects if necessary. You can also use governance mode to test retention-period settings before creating a compliance-mode retention period.")]),e._v(" "),t("h3",{attrs:{id:"s3-object-lock-legal-hold"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#s3-object-lock-legal-hold"}},[e._v("#")]),e._v(" S3 Object Lock legal hold")]),e._v(" "),t("p",[e._v("You can use Amazon S3 Batch Operations to perform large-scale batch operations on Amazon S3 objects. You can use the Object Lock legal hold operation to place a legal hold on an object version. Like setting a retention period, a legal hold prevents an object version from being overwritten or deleted. However, a legal hold doesn't have an associated retention period and remains in effect until it's removed.")]),e._v(" "),t("p",[e._v("https://docs.amazonaws.cn/en_us/AmazonS3/latest/userguide/batch-ops-legal-hold.html")]),e._v(" "),t("h3",{attrs:{id:"how-do-i-use-my-cloudfront-distribution-to-restrict-access-to-an-amazon-s3-bucket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-use-my-cloudfront-distribution-to-restrict-access-to-an-amazon-s3-bucket"}},[e._v("#")]),e._v(" How do I use my CloudFront distribution to restrict access to an Amazon s3 bucket?")]),e._v(" "),t("p",[e._v("Option 1 (Best practice): Create a CloudFront OAC\nOption 2: Create a legacy CloudFront OAI")]),e._v(" "),t("h3",{attrs:{id:"multipart-uploads"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#multipart-uploads"}},[e._v("#")]),e._v(" Multipart Uploads")]),e._v(" "),t("p",[e._v("Multipart upload allows you to upload a single object to Amazon S3 as a set of parts. Each part is a contiguous portion of the object's data. You can upload these object parts independently, and in any order. For uploads, your updated AWS client automatically calculates a checksum of the object and sends it to Amazon S3 along with the size of the object as a part of the request. If transmission of any part fails, you can retransmit that part without affecting other parts. After all parts of your object are uploaded, Amazon S3 assembles them to create the object. It's a best practice to use multipart upload for objects that are 100 MB or larger instead of uploading them in a single operation.")]),e._v(" "),t("p",[e._v("Using multipart upload provides the following advantages:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Improved throughput – You can upload parts in parallel to improve throughput.")])]),e._v(" "),t("li",[t("p",[e._v("Quick recovery from any network issues – Smaller part size minimizes the impact of restarting a failed upload due to a network error.")])]),e._v(" "),t("li",[t("p",[e._v("Pause and resume object uploads – You can upload object parts over time. After you initiate a multipart upload, there is no expiry; you must explicitly complete or stop the multipart upload.")])]),e._v(" "),t("li",[t("p",[e._v("Begin an upload before you know the final object size – You can upload an object as you create it.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);