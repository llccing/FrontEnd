## Amazon EBS
Amazon Elastic Block Store（Amazon EBS）提供了可扩展、高性能的数据块存储资源，以与 Amazon Elastic Compute Cloud（Amazon EC2）实例一起使用。使用 Amazon Elastic Block Store 时，您可以创建和管理以下数据块存储资源：

- Amazon EBS 卷 – 挂载到 Amazon EC2 实例的存储卷。将卷挂载到实例后，您可以像使用挂载到计算机上的本地硬盘一样使用卷，例如用于存储文件或安装应用程序。
- Amazon EBS 快照 – 独立于卷本身持续存在的 Amazon EBS 卷的时间点备份。您可以通过创建快照来备份 Amazon EBS 卷上的数据。而后可以随时从这些快照还原新卷。


Amazon EBS 提供以下功能和优势：

- 多种卷类型 – Amazon EBS 提供多种卷类型，可优化各种应用程序的存储性能和成本。卷类型分为两大类：用于交易工作负载的 SSD 支持型存储，以及用于吞吐量密集型工作负载的 HDD 支持型存储。

- 可扩展性 – 您可以创建容量和性能规范都满足需求的 Amazon EBS 卷。随着需求的变化，您可以在不必停机的情况下使用弹性卷操作来动态增加容量或调整性能。

- 备份和恢复 – 使用 Amazon EBS 快照来备份存储在卷上的数据。然后，您可以使用这些快照立即还原卷或跨 AWS 账户、AWS 区域或可用区迁移数据。

- 数据保护 – 使用 Amazon EBS 加密来加密 Amazon EBS 卷和 Amazon EBS 快照。加密操作在托管 Amazon EC2 实例的服务器上进行，用于确保静态数据的安全性，以及在实例和其挂载的卷与后续快照之间的传输中数据的安全性。

- 数据可用性和持久性 – io2 Block Express 卷持久性为 99.999%，年故障率为 0.001%。其他卷类型持久性为 99.8% 到 99.9%，年故障率为 0.1% 到 0.2%。另外，卷的数据可在可用区内多个服务器间进行自动复制，以防任何单个组件故障导致数据丢失。

- 数据存档 – EBS 快照归档提供了低成本的存储层，用于存档 EBS 快照的完整时间点副本，留存出于监管和合规原因或为了发布未来版本必须保留 90 天或更长时间的 EBS 快照。

[More information](https://docs.aws.amazon.com/zh_cn/ebs/latest/userguide/what-is-ebs.html)

### diff between EBS and EFS

EFS is network file system, so it can be mounted to multiple EC2 instances across different AZs.
EBS is block storage, so it can only be mounted to one EC2 instance.

### EBS fast snapshot restore

#### 我何时应使用快速快照还原（FSR）？
如果您担心将数据从快照还原到卷时存在数据访问延迟，并且希望在初始化过程中避免初始性能下降，则应对快照启用 FSR。FSR 适合在多种使用案例中提供帮助，例如虚拟桌面基础设施 (VDI)、备份和还原、测试/开发卷副本以及从自定义 AMI 启动。通过在您的快照上启用 FSR，当您需要从该快照还原数据时，将会获得提高且可预测的性能。

#### 快速快照还原（FSR）如何工作？

快速快照还原（FSR）通过在创建卷时预先初始化卷来提高性能。在创建卷时，FSR 会预先初始化卷，以便在卷创建后立即提供全额性能。

#### 快速快照还原（FSR）有哪些优势？

- 提高性能：通过预先初始化卷，FSR 可以立即提供全额性能，而无需等待卷初始化。
- 减少延迟：FSR 可以减少从快照还原卷所需的时间，从而提高应用程序的响应速度。
- 提高可用性：FSR 可以提高应用程序的可用性，因为卷在创建后立即可用。
- 减少成本：FSR 可以减少从快照还原卷所需的时间，从而减少应用程序的停机时间。

### Data Lifecycle Manager (DLM)

Automate lifecycle management of EBS Snapshots and EBS-backed AMIs

https://aws.amazon.com/ebs/data-lifecycle-manager/


You can use Amazon Data Lifecycle Manager to automate the creation, retention, and deletion of EBS snapshots and EBS-backed AMIs. When you automate snapshot and AMI management, it helps you to:

- Protect valuable data by enforcing a regular backup schedule.
- Create standardized AMIs that can be refreshed at regular intervals.
- Retain backups as required by auditors or internal compliance.
- Reduce storage costs by deleting outdated backups.
- Create disaster recovery backup policies that back up data to isolated Regions or accounts.

### is EBS HA and why?

EBS is not HA, because it is block storage, so it can only be mounted to one EC2 instance.

