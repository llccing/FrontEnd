## AWS Glue

AWS Glue is a serverless, scalable data integration service that makes it easier to discover, prepare, move, and integrate data from multiple sources for analytics, machine learning, and application development. AWS Glue provides all the capabilities needed for data integration, so you can gain insights and put your data to use in minutes instead of months. With AWS Glue, there is no infrastructure to set up or manage. You pay only for the resources consumed while your jobs are running.


Preparing your data to obtain quality results is the first step in an analytics or ML project. AWS Glue is a serverless data integration service that makes data preparation simpler, faster, and cheaper. You can discover and connect to over 100 diverse data sources, manage your data in a centralized data catalog, and visually create, run, and monitor ETL pipelines to load data into your data lakes. With built-in generative AI capabilities, you can modernize Spark jobs and develop faster with intelligent assistance for ETL authoring and Spark troubleshooting.

[AWS Glue Features](https://aws.amazon.com/glue/features/)

### job bookmarks

AWS Glue tracks data that has already been processed during a previous run of an ETL job by persisting state information from the job run. This persisted state information is called a job bookmark. Job bookmarks help AWS Glue maintain state information and prevent the reprocessing of old data. With job bookmarks, you can process new data when rerunning on a scheduled interval. A job bookmark is composed of the states for various elements of jobs, such as sources, transformations, and targets. For example, your ETL job might read new partitions in an Amazon S3 file. AWS Glue tracks which partitions the job has processed successfully to prevent duplicate processing and duplicate data in the job's target data store.

https://docs.aws.amazon.com/glue/latest/dg/monitor-continuations.html

