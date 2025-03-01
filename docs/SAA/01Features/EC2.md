## Amazon EC2

Amazon EC2 is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

Just as Amazon Simple Storage Service (Amazon S3) enables storage in the cloud, Amazon EC2 enables “compute” in the cloud.  The Amazon EC2 simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use.

[Amazon EC2 FAQs](https://aws.amazon.com/ec2/faqs/?nc=sn&loc=5)


### What is the difference between On-Demand Instances and Reserved Instances?

On-Demand and Reserved Instances are two pricing models for Amazon Elastic Compute Cloud (EC2) instances you can provision in the AWS cloud. Functionally, both types are the same. You can choose from several different compute and memory configurations for different workloads. The difference exists only in pricing. With On-Demand Instances, you pay for computing capacity by the hour or second (with a minimum of 60 seconds) with no long-term commitment. You pay only for what you use, and the instance automatically scales up or down with changing workloads. In contrast, Reserved Instances provide a discounted rate and an optional capacity reservation for your instances. You rent the Reserved Instance for a fixed period at a lower per-second or per-hour rate than the equivalent On-Demand Instance. Spot Instances provide an additional instance pricing model with strict conditions.

https://aws.amazon.com/compare/the-difference-between-on-demand-instances-and-reserved-instances/

### What is the Spot Instances?

竞价实例, 运行容错工作负载，节省高达 90%. Amazon EC2 Spot Instances let you take advantage of unused EC2 capacity in the AWS cloud and are available at up to a 90% discount compared to On-Demand prices. You can use Spot Instances for various stateless, fault-tolerant, or flexible applications such as big data, containerized workloads, CI/CD, web servers, high-performance computing (HPC), and test & development workloads development workloads.  

Amazon EC2 Auto Scaling is a fully managed service designed to launch or terminate Amazon EC2 instances automatically to help ensure you have the correct number of Amazon EC2 instances available to handle the load for your application. Amazon EC2 Auto Scaling helps you maintain application availability through fleet management for EC2 instances, which detects and replaces unhealthy instances, and by scaling your Amazon EC2 capacity up or down automatically according to conditions you define. You can use Amazon EC2 Auto Scaling to automatically increase the number of Amazon EC2 instances during demand spikes to maintain performance and decrease capacity during lulls to reduce costs.

### What is the On-Demand Instances?

On-Demand Instances are a pricing model for Amazon Elastic Compute Cloud (EC2) instances you can provision in the AWS cloud. With On-Demand Instances, you pay for computing capacity by the hour or second (with a minimum of 60 seconds) with no long-term commitment. You pay only for what you use, and the instance automatically scales up or down with changing workloads. In contrast, Reserved Instances provide a discounted rate and an optional capacity reservation for your instances. You rent the Reserved Instance for a fixed period at a lower per-second or per-hour rate than the equivalent On-Demand Instance. Spot Instances provide an additional instance pricing model with strict conditions.

### What is the Dedicated Instances?

Dedicated Instances are physical servers with a single tenant model. Dedicated Instances are available with On-Demand, Reserved, and Spot Instance pricing. Dedicated Instances are available in the following instance families: C5, C5a, C5ad, C5d, C5n, H1, I3, I3en, M5, M5a, M5ad, M5d, M5n, R5, R5a, R5ad, R5d, R5n, T3, T3a, and X1.

[Amazon EC2 Auto Scaling FAQs](https://aws.amazon.com/ec2/autoscaling/faqs/)

### Storage

#### Amazon Elastic Block Store (Amazon EBS)

SSD由支持的卷针对涉及频繁read/write operations with small I/O大小的事务性工作负载进行了优化，其中占主导地位的性能属性是。IOPSSSD-支持的卷类型包括通用卷SSD和预配置IOPSSSD卷。以下是SSD支持卷的用例和特征的摘要。

HDD由支持的卷针对以吞吐量为主要性能属性的大型流媒体工作负载进行了优化。HDD卷类型包括吞吐量优化卷HDD和冷卷HDD。以下是HDD支持卷的用例和特征的摘要。

https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html

存储于本地实例存储中的数据仅在实例有效期间保留。不过，存储在 Amazon EBS 卷上的数据将独立于实例的生命周期保留下来。因此，我们建议您将本地实例存储用于临时数据，而对于需要保存较长时间的数据，我们建议您使用 Amazon EBS 卷，或将数据备份到 Amazon S3。如果将 Amazon EBS 卷用作根分区，而您希望在实例生命周期外保留 Amazon EBS 卷，则需要将 Delete On Terminate 旗标设为“N”。

Amazon EBS 提供当前一代的四种卷类型，且被分为两大类：
- 适用于交易型工作负载的 SSD 型存储 (io1, io2, gp2, gp3)
- 适用于吞吐量密集型工作负载的 HDD 型存储 (st1, sc1)

#### Amazon Elastic File System (Amazon EFS)

#### NVMe Instance Store

### Instance Storage

实例存储为您的 EC2 实例提供临时块级存储。此存储由已物理附加到主机的磁盘提供。实例存储非常适合临时存储频繁更改的信息，例如缓冲区、缓存、Scratch 数据和其他临时内容。它还可用于存储您在一组实例中复制的临时数据，例如负载均衡的 Web 服务器池。

实例存储由一个或多个显示为块储存设备的实例存储卷组成。实例存储的大小以及可用设备的数量因实例类型和实例大小而异。例如，并非每种实例类型都提供实例存储卷。

[Amazon EC2 实例存储](https://docs.aws.amazon.com/zh_cn/AWSEC2/latest/UserGuide/InstanceStorage.html)

### 数据持久性

只有在实例启动时才会附加实例存储卷。无法在启动实例后附加实例存储卷。您无法将实例存储卷与一个实例分离并将该卷附加到另一个实例。

实例存储卷仅在其连接的实例的生命周期内存在。您无法将实例存储卷的生命周期配置为在其关联实例的生命周期之后保留。

即使实例重启，实例存储卷上的数据仍会保留。但是，如果实例停止、休眠或终止，则数据不会保留。当实例停止、休眠或终止后，实例存储卷的每个块都会通过加密方式删除。

因此，切勿依赖实例存储卷来存储珍贵且需要长期保存的数据。如果您需要在实例的生命周期之后保留存储在实例存储卷上的数据，需要手动将该数据复制到更持久的存储中，例如 Amazon EBS 卷、Amazon S3 存储桶或 Amazon EFS 文件系统。


### What is the difference between Reserved Instances and On-Demand Capacity Reservation?


- Reserved Instances

Reserved Instances (RIs) are a pricing model offered by cloud providers like AWS, allowing you to commit to using a specific instance type in a particular region for a one- or three-year term. By doing so, you receive a significant discount compared to On-Demand pricing. RIs are ideal for predictable workloads and can help reduce costs if you know you'll need certain resources long-term. They do not guarantee capacity but offer cost savings.

- On-Demand Capacity Reservations

On-Demand Capacity Reservations allow you to reserve compute capacity for your instances in a specific Availability Zone for any duration. This ensures that you have the capacity you need when you need it, without a long-term commitment. You pay the On-Demand rate, and capacity is available immediately and guaranteed for as long as the reservation is active.

- Key Differences

1. **Commitment**:
   - **Reserved Instances**: Require a one- or three-year commitment.
   - **On-Demand Capacity Reservations**: No long-term commitment; you can reserve capacity as needed.

2. **Pricing**:
   - **Reserved Instances**: Offer lower pricing due to the long-term commitment.
   - **On-Demand Capacity Reservations**: Charged at the On-Demand rate.

3. **Capacity Guarantee**:
   - **Reserved Instances**: Do not guarantee capacity.
   - **On-Demand Capacity Reservations**: Guarantee capacity in the specified Availability Zone.

4. **Flexibility**:
   - **Reserved Instances**: Less flexible due to the commitment period.
   - **On-Demand Capacity Reservations**: More flexible, as they can be created and canceled at any time.

In summary, choose Reserved Instances for cost savings with predictable workloads and On-Demand Capacity Reservations for guaranteed capacity without long-term commitments.


### Placement Groups

Placement groups are a way to group EC2 instances together in a single Availability Zone or across multiple Availability Zones.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html


### Hibernation

Hibernation is a feature that allows you to save the state of your instance and resume it later.

When you hibernate an instance, Amazon EC2 signals the operating system to perform hibernation (suspend-to-disk). Hibernation saves the contents from the instance memory (RAM) to your Amazon Elastic Block Store (Amazon EBS) root volume. Amazon EC2 persists the instance's EBS root volume and any attached EBS data volumes. When your instance is started:

- The EBS root volume is restored to its previous state
- The RAM contents are reloaded
- The processes that were previously running on the instance are resumed
- Previously attached data volumes are reattached and the instance retains its instance ID

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html#enabling-hibernation


### Placement groups 

To meet the needs of your workload, you can launch a group of interdependent EC2 instances into a placement group to influence their placement.

Depending on the type of workload, you can create a placement group using one of the following placement strategies:

- Cluster – Packs instances close together inside an Availability Zone. This strategy enables workloads to achieve the low-latency network performance necessary for tightly-coupled node-to-node communication that is typical of high-performance computing (HPC) applications.

- Partition – Spreads your instances across logical partitions such that groups of instances in one partition do not share the underlying hardware with groups of instances in different partitions. This strategy is typically used by large distributed and replicated workloads, such as Hadoop, Cassandra, and Kafka.

- Spread – Strictly places a small group of instances across distinct underlying hardware to reduce correlated failures.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html#placement-groups-cluster

### Instance Recovery

If AWS detects that an instance is unavailable due to an underlying hardware or software issue, there are two mechanisms that can automatically restore instance availability—simplified automatic recovery and Amazon CloudWatch action based recovery. Restoring instance availability is also known as instance recovery.

During the instance recovery process, AWS will attempt to move your instance from the host with the underlying hardware or software issue to a different host. If successful, the instance recovery process will appear to the instance as an unplanned reboot. 

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-recover.html

#### Relates questions: is EC2 default High Availability?

No, EC2 is not default High Availability.


there are several possibilities to achieve HA with EC2:

create an autoscaling group with min capacity=1 and max capacity=1. So whenever your instance fails, the autoscaling group will create a new one. The autoscaling group comes for free, so this is not a bad solution depending on your SLA.
use ec2 auto-recovery feature by creating a cloudwatch alarm that would replace your instance if failed.
create two EC2 instances and use Route 53 DNS failover to resolve to an healthy instance
Last but not least: the best solution is definitely to create several instances across several availability zones and to use an elastic load balancer to distribute the traffic. This way, even if an instance fails, you already have other ones available. AWS recommends this solution as they have an SLA of 99.95% for their instance in an AZ. By putting in several AZs you can have 100% availability.

----
EDIT: adding information why there is no such native feature for EC2.

there is no native HA feature in EC2 compared to RDS, because EC2 is pure IaaS when RDS is more PaaS. So for RDS when you select HA, behind the scene it actually spawns a slave database in another availabilty zone and replicates your master. Whenever the master fails, you have an automatic DNS failover to the slave database, which is elected master, and a new slave database is getting created.

https://stackoverflow.com/questions/36709830/ec2-amazon-high-availability-always-on