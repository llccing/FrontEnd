## AWS Storage Gateway

Provide on-premises applications with access to virtually unlimited cloud storage. You can deploy Storage Gateway as a virtual machine (VM) within your VMware, Hyper-V, or Linux KVM virtual environment, or as an Amazon EC2 instance within your Amazon Virtual Private Cloud (Amazon VPC).

### Types of Storage Gateway

- **S3 File Gateway**
S3 File Gateway presents Server Message Block (SMB) or Network File System (NFS) based access to data in Amazon S3. 
Store and access objects in Amazon S3 from NFS or SMB file data with local caching.
[AWS Storage Gateway - S3 File Gateway](https://aws.amazon.com/storagegateway/file/s3/)

- **Tape Gateway**
Tape Gateway presents virtual tapes to leading to backup applications that you can store in Amazon S3 or Amazon S3 Glacier.
Tape Gateway enables you to replace using physical tapes on premises with virtual tapes in AWS without changing existing backup workflows. 
[AWS Storage Gateway - Tape Gateway](https://aws.amazon.com/storagegateway/vtl/?nc=sn&loc=2&dn=3)

- **Volume Gateway**
Volume Gateway presents iSCSI block storage volumes to your on-premises applications that you can store in Amazon S3 or migrate to Amazon EBS.
Hybrid cloud block storage with local caching.
[AWS Storage Gateway - Volume Gateway](https://aws.amazon.com/storagegateway/volume/?nc=sn&loc=2&dn=4)


[AWS Storage Gateway](https://aws.amazon.com/storagegateway/)


### iSCSI
iSCSI is a protocol that allows you to access block storage volumes from your on-premises applications.

Network File System (NFS) and Internet Small Computer System Interface (iSCSI) are data sharing protocols. Sharing data effectively over a network is essential for any organization’s day-to-day operations. NFS enables remote data sharing at the file level. A user (or client device) can use NFS to connect to a network server and access files on the server. Multiple client machines (users) can share the same file without data conflicts. Similarly, iSCSI also allows remote data sharing but at the block level. It enables data exchange between multiple client machines and a block storage device (or block server), which is accessed similarly to a local disk drive.

[The difference between NFS and iSCSI](https://aws.amazon.com/compare/the-difference-between-nfs-and-iscsi/)
