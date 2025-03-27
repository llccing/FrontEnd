(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{530:function(e,a,t){"use strict";t.r(a);var s=t(14),o=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"amazon-ebs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-ebs"}},[e._v("#")]),e._v(" Amazon EBS")]),e._v(" "),a("p",[e._v("Amazon Elastic Block Store（Amazon EBS）提供了可扩展、高性能的数据块存储资源，以与 Amazon Elastic Compute Cloud（Amazon EC2）实例一起使用。使用 Amazon Elastic Block Store 时，您可以创建和管理以下数据块存储资源：")]),e._v(" "),a("ul",[a("li",[e._v("Amazon EBS 卷 – 挂载到 Amazon EC2 实例的存储卷。将卷挂载到实例后，您可以像使用挂载到计算机上的本地硬盘一样使用卷，例如用于存储文件或安装应用程序。")]),e._v(" "),a("li",[e._v("Amazon EBS 快照 – 独立于卷本身持续存在的 Amazon EBS 卷的时间点备份。您可以通过创建快照来备份 Amazon EBS 卷上的数据。而后可以随时从这些快照还原新卷。")])]),e._v(" "),a("p",[e._v("Amazon EBS 提供以下功能和优势：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("多种卷类型 – Amazon EBS 提供多种卷类型，可优化各种应用程序的存储性能和成本。卷类型分为两大类：用于交易工作负载的 SSD 支持型存储，以及用于吞吐量密集型工作负载的 HDD 支持型存储。")])]),e._v(" "),a("li",[a("p",[e._v("可扩展性 – 您可以创建容量和性能规范都满足需求的 Amazon EBS 卷。随着需求的变化，您可以在不必停机的情况下使用弹性卷操作来动态增加容量或调整性能。")])]),e._v(" "),a("li",[a("p",[e._v("备份和恢复 – 使用 Amazon EBS 快照来备份存储在卷上的数据。然后，您可以使用这些快照立即还原卷或跨 AWS 账户、AWS 区域或可用区迁移数据。")])]),e._v(" "),a("li",[a("p",[e._v("数据保护 – 使用 Amazon EBS 加密来加密 Amazon EBS 卷和 Amazon EBS 快照。加密操作在托管 Amazon EC2 实例的服务器上进行，用于确保静态数据的安全性，以及在实例和其挂载的卷与后续快照之间的传输中数据的安全性。")])]),e._v(" "),a("li",[a("p",[e._v("数据可用性和持久性 – io2 Block Express 卷持久性为 99.999%，年故障率为 0.001%。其他卷类型持久性为 99.8% 到 99.9%，年故障率为 0.1% 到 0.2%。另外，卷的数据可在可用区内多个服务器间进行自动复制，以防任何单个组件故障导致数据丢失。")])]),e._v(" "),a("li",[a("p",[e._v("数据存档 – EBS 快照归档提供了低成本的存储层，用于存档 EBS 快照的完整时间点副本，留存出于监管和合规原因或为了发布未来版本必须保留 90 天或更长时间的 EBS 快照。")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/ebs/latest/userguide/what-is-ebs.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("More information"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"ebs-volume-types"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ebs-volume-types"}},[e._v("#")]),e._v(" EBS Volume Types")]),e._v(" "),a("h4",{attrs:{id:"ssd-backed-volumes-iops-intensive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ssd-backed-volumes-iops-intensive"}},[e._v("#")]),e._v(" SSD-backed volumes (IOPS-intensive)")]),e._v(" "),a("ul",[a("li",[e._v("io2, io1")]),e._v(" "),a("li",[e._v("gp3, gp2, general purpose")])]),e._v(" "),a("h4",{attrs:{id:"hdd-backed-volumes-mb-s-effective"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hdd-backed-volumes-mb-s-effective"}},[e._v("#")]),e._v(" HDD-backed volumes (MB/s-effective)")]),e._v(" "),a("ul",[a("li",[e._v("st1, sc1; sc1 is Cold HDD(sc1).")])]),e._v(" "),a("h4",{attrs:{id:"ebs-magnetic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ebs-magnetic"}},[e._v("#")]),e._v(" EBS Magnetic")]),e._v(" "),a("p",[e._v("EBS Magnetic volumes are backed by hard disk drives (HDDs) and can be used for workloads with smaller datasets where data is accessed infrequently or when performance consistency isn't of primary importance. EBS Magnetic volumes provide approximately 100 IOPS on average, with an ability to burst to hundreds of IOPS, and support volumes from 1GB to 1TB in size. If you need higher performance or performance consistency than EBS Magnetic can provide, we recommend that you consider Amazon EBS General Purpose SSD (gp2) or other volume types.")]),e._v(" "),a("p",[e._v("https://aws.amazon.com/ebs/previous-generation/")]),e._v(" "),a("h3",{attrs:{id:"diff-between-ebs-and-efs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#diff-between-ebs-and-efs"}},[e._v("#")]),e._v(" diff between EBS and EFS")]),e._v(" "),a("p",[e._v("EFS is network file system, so it can be mounted to multiple EC2 instances across different AZs.\nEBS is block storage, so it can only be mounted to one EC2 instance.")]),e._v(" "),a("h3",{attrs:{id:"ebs-fast-snapshot-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ebs-fast-snapshot-restore"}},[e._v("#")]),e._v(" EBS fast snapshot restore")]),e._v(" "),a("h4",{attrs:{id:"我何时应使用快速快照还原-fsr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#我何时应使用快速快照还原-fsr"}},[e._v("#")]),e._v(" 我何时应使用快速快照还原（FSR）？")]),e._v(" "),a("p",[e._v("如果您担心将数据从快照还原到卷时存在数据访问延迟，并且希望在初始化过程中避免初始性能下降，则应对快照启用 FSR。FSR 适合在多种使用案例中提供帮助，例如虚拟桌面基础设施 (VDI)、备份和还原、测试/开发卷副本以及从自定义 AMI 启动。通过在您的快照上启用 FSR，当您需要从该快照还原数据时，将会获得提高且可预测的性能。")]),e._v(" "),a("h4",{attrs:{id:"快速快照还原-fsr-如何工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速快照还原-fsr-如何工作"}},[e._v("#")]),e._v(" 快速快照还原（FSR）如何工作？")]),e._v(" "),a("p",[e._v("快速快照还原（FSR）通过在创建卷时预先初始化卷来提高性能。在创建卷时，FSR 会预先初始化卷，以便在卷创建后立即提供全额性能。")]),e._v(" "),a("h4",{attrs:{id:"快速快照还原-fsr-有哪些优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速快照还原-fsr-有哪些优势"}},[e._v("#")]),e._v(" 快速快照还原（FSR）有哪些优势？")]),e._v(" "),a("ul",[a("li",[e._v("提高性能：通过预先初始化卷，FSR 可以立即提供全额性能，而无需等待卷初始化。")]),e._v(" "),a("li",[e._v("减少延迟：FSR 可以减少从快照还原卷所需的时间，从而提高应用程序的响应速度。")]),e._v(" "),a("li",[e._v("提高可用性：FSR 可以提高应用程序的可用性，因为卷在创建后立即可用。")]),e._v(" "),a("li",[e._v("减少成本：FSR 可以减少从快照还原卷所需的时间，从而减少应用程序的停机时间。")])]),e._v(" "),a("h3",{attrs:{id:"data-lifecycle-manager-dlm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-lifecycle-manager-dlm"}},[e._v("#")]),e._v(" Data Lifecycle Manager (DLM)")]),e._v(" "),a("p",[e._v("Automate lifecycle management of EBS Snapshots and EBS-backed AMIs")]),e._v(" "),a("p",[e._v("https://aws.amazon.com/ebs/data-lifecycle-manager/")]),e._v(" "),a("p",[e._v("You can use Amazon Data Lifecycle Manager to automate the creation, retention, and deletion of EBS snapshots and EBS-backed AMIs. When you automate snapshot and AMI management, it helps you to:")]),e._v(" "),a("ul",[a("li",[e._v("Protect valuable data by enforcing a regular backup schedule.")]),e._v(" "),a("li",[e._v("Create standardized AMIs that can be refreshed at regular intervals.")]),e._v(" "),a("li",[e._v("Retain backups as required by auditors or internal compliance.")]),e._v(" "),a("li",[e._v("Reduce storage costs by deleting outdated backups.")]),e._v(" "),a("li",[e._v("Create disaster recovery backup policies that back up data to isolated Regions or accounts.")])]),e._v(" "),a("h3",{attrs:{id:"is-ebs-ha-and-why"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#is-ebs-ha-and-why"}},[e._v("#")]),e._v(" is EBS HA and why?")]),e._v(" "),a("p",[e._v("EBS is not HA, because it is block storage, so it can only be mounted to one EC2 instance.")])])}),[],!1,null,null,null);a.default=o.exports}}]);