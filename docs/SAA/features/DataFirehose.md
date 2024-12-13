## AWS Kinesis Data Firehose

Reliably load real-time streams into data lakes, warehouses, and analytics services

more: https://aws.amazon.com/firehose/faqs/?refid=c872bb0f-1005-4485-98e2-683e87dd4d95

### What is Steaming ETL?

Streaming ETL is the processing and movement of real-time data from one place to another. ETL is short for the database functions extract, transform, and load. Extract refers to collecting data from some source. Transform refers to any processes performed on that data. Load refers to sending the processed data to a destination, such as a warehouse, a datalake, or an analytical tool.


### What is Kinesis Data Firehose?

Data Firehose is a streaming ETL solution. It is the easiest way to load streaming data into data stores and analytics tools. It can capture, transform, and load streaming data into Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Snowflake, Apache Iceberg tables and Splunk, enabling near real-time analytics with existing business intelligence tools and dashboards you’re already using today. It is a fully managed service that automatically scales to match the throughput of your data and requires no ongoing administration. It can also batch, compress, and encrypt the data before loading it, minimizing the amount of storage used at the destination and increasing security.

### What is a source in Firehost?
A source is where your streaming data is continuously generated and captured. For example, a source can be a logging server running on Amazon EC2 instances, an application running on mobile devices, or a sensor on an IoT device. You can connect your sources to Firehose using 1) Amazon Data Firehose API, which uses the AWS SDK for Java, .NET, Node.js, Python, or Ruby. 2) Kinesis Data Stream, where Firehose reads data easily from an existing Kinesis data stream and load it into Firehose destinations. 3) Amazon MSK, where Firehose reads data easily from an existing Amazon MSK cluster and load it into Amazon S3 buckets. 4) AWS natively supported Service like AWS Cloudwatch, AWS EventBridge, AWS IOT, or AWS Pinpoint. For complete list, see the Amazon Data Firehose developer guide. 5) Kinesis Agents, which is a stand-alone Java software application that continuously monitors a set of files and sends new data to your stream. 6) Fluentbit, which an open source Log Processor and Forwarder. 7) AWS Lambda, which is a serverless compute service that lets you run code without provisioning or managing servers. You can use write your Lambda function to send traffic from S3 or DynamoDB to Firehose based on a triggered event.

### What is a destination in Firehost?

A destination is the data store where your data will be delivered. Firehose currently supports Amazon S3, Amazon Redshift, Amazon OpenSearch Service, Snowflake, Apache Iceberg tables, Splunk, Datadog, NewRelic, Dynatrace, Sumo Logic, LogicMonitor, MongoDB, and HTTP End Point as destinations.
