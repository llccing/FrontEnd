## AWS Database Caching

The speed and throughput of your database can be the most impactful factor for overall application performance.

https://aws.amazon.com/caching/database-caching/


In-memory data caching can be one of the most effective strategies to improve your overall application performance and to reduce your database costs.

Caching can be applied to any type of database including relational databases such as Amazon RDS or NoSQL databases such as Amazon DynamoDB, MongoDB and Apache Cassandra. The best part of caching is that it’s minimally invasive to implement and by doing so, your application performance regarding both scale and speed is dramatically improved.

Below you will find some of the caching strategies and implementation approaches that can be taken to address the limitations and challenges associated with disk-based databases.

### Types of Caching

#### Database Integration Caches

Database Integrated Caches: Some databases such as Amazon Aurora offer an integrated cache that is managed within the database engine and has built-in write-through capabilities. When the underlying data changes on the database table, the database updates its cache automatically, which is great. There is nothing within the application tier required to leverage this cache. Where integrated caches fall short is in their size and capabilities. Integrated caches are typically limited to the available memory allocated to the cache by the database instance and cannot be leveraged for other purposes, such as sharing data with other instances.

#### Local Caches

Local Caches: A local cache stores your frequently used data within your application. This not only speeds up your data retrieval but also removes network traffic associated with retrieving data, making data retrieval faster than other caching architectures. A major disadvantage is that among your applications, each node has its own resident cache working in a disconnected manner. The information stored within an individual cache node, whether its database cached data, web sessions or user shopping carts cannot be shared with other local caches. This creates challenges in a distributed environment where information sharing is critical to support scalable dynamic environments. And since most applications utilize multiple app servers, if each server has its own cache, coordinating the values across these becomes a major challenge.

In addition, when outages occur, the data in the local cache is lost and will need to be rehydrated effectively negating the cache. The majority of these cons are mitigated with remote caches. A remote cache (or “side cache”) is a separate instance (or multiple instances) dedicated for storing the cached data in-memory.

When network latency is of concern, a two-tier caching strategy can be applied that leverages a local and remote cache together. We won’t discuss this strategy in detail, but it is used typically used only when absolutely needed as it adds complexity. For most applications, the added network overhead associated with a remote cache is of little concern given that a request to it is generally fulfilled in sub-millisecond performance.


#### Remote Caches

Remote caches: Remote caches are stored on dedicated servers and typically built upon key/value NoSQL stores such as Redis and Memcached. They provide hundreds of thousands to up-to a million requests per second per cache node. Many solutions such as Amazon ElastiCache for Redis also provide the high availability needed for critical workloads.

Also, the average latency of a request to a remote cache is fulfilled in sub-millisecond latency, orders of magnitude faster than a disk-based database. At these speeds, local caches are seldom necessary. And since the remote cache works as a connected cluster that can be leveraged by all your disparate systems, they are ideal for distributed environments.