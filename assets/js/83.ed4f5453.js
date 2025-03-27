(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{334:function(a,e,t){"use strict";t.r(e);var n=t(14),o=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"amazon-rds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#amazon-rds"}},[a._v("#")]),a._v(" Amazon RDS")]),a._v(" "),e("p",[a._v("Amazon Relational Database Service (Amazon RDS) is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity, while managing time-consuming database administration tasks, freeing you to focus on your applications and business.")]),a._v(" "),e("p",[a._v("Amazon RDS gives you access to the capabilities of a familiar RDS for PostgreSQL, RDS for MySQL, RDS for MariaDB, RDS for SQL Server, RDS for Oracle, or RDS for Db2 database. This means that the code, applications, and tools you already use today with your existing databases should work seamlessly with Amazon RDS. Amazon RDS can automatically back up your database and keep your database software up to date with the latest version. You benefit from the flexibility of being able to scale the compute resources or storage capacity associated with your relational database instance. In addition, Amazon RDS makes it easy to use replication to enhance database availability, improve data durability, or scale beyond the capacity constraints of a single database instance for read-heavy database workloads. As with all AWS services, there are no upfront investments required, and you pay only for the resources you use.")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://aws.amazon.com/rds/faqs/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Amazon RDS FAQs"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"rds-proxy-for-aurora"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rds-proxy-for-aurora"}},[a._v("#")]),a._v(" RDS Proxy for Aurora")]),a._v(" "),e("p",[a._v("By using Amazon RDS Proxy, you can allow your applications to pool and share database connections to improve their ability to scale. RDS Proxy makes applications more resilient to database failures by automatically connecting to a standby DB instance while preserving application connections. By using RDS Proxy, you can also enforce AWS Identity and Access Management (IAM) authentication for databases, and securely store credentials in AWS Secrets Manager.")]),a._v(" "),e("p",[a._v("https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html")]),a._v(" "),e("h3",{attrs:{id:"fast-database-cloning"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fast-database-cloning"}},[a._v("#")]),a._v(" Fast Database Cloning")]),a._v(" "),e("p",[a._v("Amazon Aurora MySQL supports fast database cloning, which allows you to create a clone of an existing database in seconds. You can create a clone of a clone while you still work on your own clone, which allows the development team to continue working during the cloning step.")]),a._v(" "),e("p",[a._v("https://aws.amazon.com/blogs/aws/amazon-aurora-fast-database-cloning/")]),a._v(" "),e("h3",{attrs:{id:"multi-az-deployments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multi-az-deployments"}},[a._v("#")]),a._v(" Multi-AZ Deployments")]),a._v(" "),e("h4",{attrs:{id:"what-does-it-mean-to-run-a-db-instance-as-a-multi-az-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-mean-to-run-a-db-instance-as-a-multi-az-deployment"}},[a._v("#")]),a._v(" What does it mean to run a DB instance as a Multi-AZ deployment?")]),a._v(" "),e("p",[a._v("When you create or modify your DB instance to run as a Multi-AZ deployment, Amazon RDS automatically provisions and maintains a synchronous “standby” replica in a different Availability Zone. Updates to your DB Instance are synchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB instance failure.")]),a._v(" "),e("p",[a._v("During certain types of planned maintenance, or in the unlikely event of DB instance failure or Availability Zone failure, Amazon RDS will automatically failover to the standby so that you can resume database writes and reads as soon as the standby is promoted. Since the name record for your DB instance remains the same, your application can resume database operation without the need for manual administrative intervention. With Multi-AZ deployments, replication is transparent. You do not interact directly with the standby, and it cannot be used to serve read traffic. More information about Multi-AZ deployments is in the Amazon RDS User Guide.")]),a._v(" "),e("h4",{attrs:{id:"what-do-primary-and-standby-mean-in-the-context-of-a-multi-az-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-do-primary-and-standby-mean-in-the-context-of-a-multi-az-deployment"}},[a._v("#")]),a._v(" What do “primary” and “standby” mean in the context of a Multi-AZ deployment?")]),a._v(" "),e("p",[a._v("When you run a DB instance as a Multi-AZ deployment, the “primary” serves database writes and reads. In addition, Amazon RDS provisions and maintains a “standby” behind the scenes, which is an up-to-date replica of the primary. The standby is “promoted” in failover scenarios. After failover, the standby becomes the primary and accepts your database operations. You do not interact directly with the standby (e.g. for read operations) at any point prior to promotion. If you are interested in scaling read traffic beyond the capacity constraints of a single DB instance, please see the FAQs on Read Replicas.")]),a._v(" "),e("h3",{attrs:{id:"read-replicas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#read-replicas"}},[a._v("#")]),a._v(" Read Replicas")]),a._v(" "),e("h4",{attrs:{id:"what-does-it-mean-to-run-a-db-instance-as-a-read-replica"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#what-does-it-mean-to-run-a-db-instance-as-a-read-replica"}},[a._v("#")]),a._v(" What does it mean to run a DB Instance as a read replica?")]),a._v(" "),e("p",[a._v("Read replicas make it easier to take advantage of supported engines' built-in replication functionality to elastically scale out beyond the capacity constraints of a single DB instance for read-heavy database workloads.")]),a._v(" "),e("p",[a._v("You can create a read replica with a few clicks in the AWS Management Console or using the CreateDBInstanceReadReplica API. Once the read replica is created, database updates on the source DB instance will be replicated using a supported engine's native, asynchronous replication. You can create multiple read replicas for a given source DB Instance and distribute your application’s read traffic amongst them.")]),a._v(" "),e("p",[a._v("Since read replicas use supported engines' built-in replication, they are subject to its strengths and limitations. In particular, updates are applied to your read replica(s) after they occur on the source DB instance, and replication lag can vary significantly. Read replicas can be associated with Multi-AZ deployments to gain read scaling benefits in addition to the enhanced database write availability and data durability provided by Multi-AZ deployments.")]),a._v(" "),e("h4",{attrs:{id:"when-would-i-want-to-consider-using-an-amazon-rds-read-replica"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-would-i-want-to-consider-using-an-amazon-rds-read-replica"}},[a._v("#")]),a._v(" When would I want to consider using an Amazon RDS read replica?")]),a._v(" "),e("p",[a._v("There are a variety of scenarios where deploying one or more read replicas for a given source DB instance may make sense. Common reasons for deploying a read replica include:")]),a._v(" "),e("ul",[e("li",[a._v("Scaling beyond the compute or I/O capacity of a single DB instance for read-heavy database workloads. This excess read traffic can be directed to one or more read replicas.")]),a._v(" "),e("li",[a._v("Serving read traffic while the source DB instance is unavailable. If your source DB Instance cannot take I/O requests (e.g. due to I/O suspension for backups or scheduled maintenance), you can direct read traffic to your read replica(s). For this use case, keep in mind that the data on the read replica may be “stale” since the source DB Instance is unavailable.")]),a._v(" "),e("li",[a._v("Business reporting or data warehousing scenarios. You may want business reporting queries to run against a read replica rather than your primary, production DB Instance.")]),a._v(" "),e("li",[a._v("You may use a read replica for disaster recovery of the source DB instance either in the same AWS Region or in another Region.")])]),a._v(" "),e("h3",{attrs:{id:"tips-from-questoins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips-from-questoins"}},[a._v("#")]),a._v(" tips from Questoins")]),a._v(" "),e("ol",[e("li",[a._v("RDS Proxy for Aurora. Q69, configure the Auto Scaling group to use multiple Availability Zones. Configure the database as Multi-AZ. Configure an Amazon RDS Proxy instance for the database.")])]),a._v(" "),e("h3",{attrs:{id:"restoring-from-a-snapshot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#restoring-from-a-snapshot"}},[a._v("#")]),a._v(" Restoring from a snapshot")]),a._v(" "),e("p",[a._v("https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_RestoreFromSnapshot.html")]),a._v(" "),e("p",[a._v("you can create a DB snapshot from a DB instance or a DB cluster. Then this will save costs and don't reduce the capacity of the DB instance, when your requirement is only for a short period. such as continuous running about 48 hours once a month.")])])}),[],!1,null,null,null);e.default=o.exports}}]);