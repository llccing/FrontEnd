## Amazon Aurora

Amazon Aurora is a modern relational database service offering performance and high availability at scale, fully open-source MySQL- and PostgreSQL-compatible editions, and a range of developer tools for building serverless and machine learning (ML)-driven applications.

Aurora features a distributed, fault-tolerant, and self-healing storage system that is decoupled from compute resources and auto-scales up to 128 TiB per database instance. It delivers high performance and availability with up to 15 low-latency read replicas, point-in-time recovery, continuous backup to Amazon Simple Storage Service (Amazon S3), and replication across three Availability Zones (AZs).

Aurora is also a fully managed service that automates time-consuming administration tasks such as hardware provisioning, database setup, patching, and backups while providing the security, availability, and reliability of commercial databases at one-tenth of the cost.

### Aurora Serverless

Amazon Aurora Serverless is an on-demand, autoscaling configuration for Amazon Aurora. It automatically starts up, shuts down, and scales capacity up or down based on your application's needs. You can run your database in the cloud without managing any database instances. You can also use Aurora Serverless v2 instances along with provisioned instances in your existing or new database clusters.

Manually managing database capacity can take up valuable time and can lead to inefficient use of database resources. With Aurora Serverless, you create a database, specify the desired database capacity range, and connect your applications. You pay on a per-second basis for the database capacity that you use when the database is active, and migrate between standard and serverless configurations with a few steps in the Amazon Relational Database Service (Amazon RDS) console.

https://aws.amazon.com/rds/aurora/serverless/?nc2=type_a


### Using switchover or failover in Amazon Aurora Global Database

https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/aurora-global-database-disaster-recovery.html

The Aurora Global Database feature provides more business continuity and disaster recovery (BCDR) protection than the standard high availability provided by an Aurora DB cluster in a single Amazon Web Services Region. By using Aurora Global Database, you can plan for faster recovery from rare, unplanned Regional disasters or complete service-level outages quickly.

