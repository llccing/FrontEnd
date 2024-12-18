## Amazon DynamoDB

Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.

DynamoDB is a fast and flexible nonrelational database service for any scale. DynamoDB enables customers to offload the administrative burdens of operating and scaling distributed databases to AWS so that they don’t have to worry about hardware provisioning, setup and configuration, throughput capacity planning, replication, software patching, or cluster scaling.

https://aws.amazon.com/dynamodb/faqs/


### What is the difference between RDS and DynamoDB?

RDS is a relational database service that supports SQL and NoSQL databases. DynamoDB is a NoSQL database service that supports key-value and document data structures.

https://www.qa.com/resources/blog/amazon-rds-vs-dynamodb-12-differences/

### Backup and Restore

DynamoDB offers on-demand backups and point-in-time recovery (PITR) backups to help protect your DynamoDB data from disaster events and offers data archiving for long-term retention. You can back up tables from a few megabytes to hundreds of terabytes of data, with no impact on performance and availability to your production applications. All backups are automatically encrypted, cataloged, and easily discoverable.

With on-demand backups, you can create a snapshot backup of your table that DynamoDB stores and manages. You're charged based on the size and duration of your backups. Using on-demand backup, you can restore your entire DynamoDB table to the exact state it was in when the backup was created.

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Backup-and-Restore.html

### DynamoDB Global Table use cases
You can evacuate a Region (move away some or all requests going to that Region) should the Region have degraded performance or a full outage, with a Recovery Point Objective (RPO) and Recovery Time Objective (RTO) measured in seconds. Using global tables also increases the DynamoDB SLA from 99.99% to 99.999%.

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/bp-global-table-design.html#bp-global-table-design.prescriptive-guidance.usecases

### tips from Questions
1. DynamoDB. Q71, Configure DynamoDB point-in-time recovery. For RPO recovery, restore to the desired point in time.

