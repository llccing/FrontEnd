
## AWS Snow Family

AWS Snow Family 可为需要在严峻的非数据中心环境中以及在缺乏一致网络连接的站点运行操作的客户提供帮助。Snow 系列由 AWS Snowcone、AWS Snowball 和 AWS Snowmobile 组成，可以提供各种物理设备和容量点，其中大部分设备还内置有计算功能。这些服务可帮助用户以物理方式将高达 EB 级的数据传入和传出 AWS。Snow Family 设备由 AWS 拥有和管理，并与 AWS 的各种安全、监控、存储管理和计算功能集成。

### Amazon Snowcone

AWS Snowcone 是 AWS Snow 系列边缘计算和数据传输设备中尺寸最小的成员。Snowcone 便携、耐用且安全。您可以使用 Snowcone 收集、处理数据，并通过运送设备的离线方式或利用 AWS DataSync 的在线方式将数据移动到 AWS。

### AWS Snowball

AWS Snowball 是一种数据迁移和边缘计算设备，具有两个设备选项：计算优化和存储优化。

Snowball Edge Storage Optimized 设备提供了 40 个 vCPU 的计算容量，以及 80TB 的可用数据块或与 Amazon S3 兼容的对象存储。它非常适合本地存储和大规模数据传输。Snowball Edge Compute Optimized 提供了 52 个 vCPU、42TB 可用数据块或对象存储，以及适用于断开连接的环境中高级机器学习和完全动态视频分析等使用案例的可选 GPU。客户可使用这两个选项在连接时断时续的环境（例如制造业、工业和运输）或在极其偏远的位置（例如军事或海事作业）进行数据收集、机器学习、处理和存储，然后再将其发送回 AWS。这些设备也可以安装在机架上并通过集群化一起使用，以构建更大型的临时安装设施。

### Amazon Snowmobile

AWS Snowmobile 是一个 45 英尺长的坚固集装箱，可迁移高达 100PB 的数据，非常适合数 PB 级或 EB 级数字媒体迁移和数据中心关闭的情况。Snowmobile 在抵达客户站点后显示为网络连接数据存储，可实现更加安全的高速数据传输。将数据传输到 Snowmobile 后，Snowmobile 会被运回 AWS 区域，而您的数据会加载到 Amazon S3 中。

[more about Snow Family](https://docs.aws.amazon.com/zh_cn/whitepapers/latest/how-aws-pricing-works/aws-snow-family.html)
