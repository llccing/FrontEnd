## Amazon EC2

Amazon EC2 is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale computing easier for developers.

Just as Amazon Simple Storage Service (Amazon S3) enables storage in the cloud, Amazon EC2 enables “compute” in the cloud.  The Amazon EC2 simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment. Amazon EC2 reduces the time required to obtain and boot new server instances to minutes, allowing you to quickly scale capacity, both up and down, as your computing requirements change. Amazon EC2 changes the economics of computing by allowing you to pay only for capacity that you actually use.

[Amazon EC2 FAQs](https://aws.amazon.com/ec2/faqs/?nc=sn&loc=5)


### auto scaling

Amazon EC2 Auto Scaling is a fully managed service designed to launch or terminate Amazon EC2 instances automatically to help ensure you have the correct number of Amazon EC2 instances available to handle the load for your application. Amazon EC2 Auto Scaling helps you maintain application availability through fleet management for EC2 instances, which detects and replaces unhealthy instances, and by scaling your Amazon EC2 capacity up or down automatically according to conditions you define. You can use Amazon EC2 Auto Scaling to automatically increase the number of Amazon EC2 instances during demand spikes to maintain performance and decrease capacity during lulls to reduce costs.

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
