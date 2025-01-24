## Amazon FSx File Gateway

Fast, low-latency access on premises to fully managed file shares.

Amazon FSx File Gateway optimizes on-premises access to Windows file shares on Amazon FSx, making it easy for users to access FSx for Windows File Server data with low latency and conserving shared bandwidth. Users benefit from a local cache of frequently used data that they can access, enabling faster performance and reduced data transfer traffic. File system operations, such as reading and writing files, are all performed against the local cache, while Amazon FSx File Gateway synchronizes changed data to FSx for Windows File Server in the background. With these capabilities, you can consolidate all of your on-premises file share data in AWS on FSx for Windows File Server and benefit from protected, resilient, fully managed file systems.

### How does Amazon FSx File Gateway solve these problems for on-premises applications?

Amazon FSx File Gateway provides an SMB file protocol server for clients to connect to, and an on-premises cache of the frequently used data that they can access with the same low latency as they would experience inside AWS. File system operations, such as reading and writing files, are all performed against the local cache, while Amazon FSx File Gateway synchronizes changed data to Amazon FSx for Windows File Server in the background. Amazon FSx File Gateway also helps minimize the amount of data transfer, while optimizing the usage of network bandwidth to AWS.

https://aws.amazon.com/storagegateway/faqs/?nc=sn&loc=6