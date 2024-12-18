(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{334:function(e,a,t){"use strict";t.r(a);var r=t(14),n=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"aws-athena"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-athena"}},[e._v("#")]),e._v(" AWS Athena")]),e._v(" "),a("p",[e._v("AWS Athena is a serverless, interactive query service provided by Amazon Web Services (AWS) that allows you to analyze data directly in Amazon S3 using standard SQL. Here's an overview of its features and how to use it:")]),e._v(" "),a("p",[e._v("Athena is an interactive analytics service that makes it simple to analyze data in Amazon Simple Storage Service (S3) using SQL. Athena is serverless, so there is no infrastructure to set up or manage, and you can start analyzing data immediately. You don’t even need to load your data into Athena; it works directly with data stored in Amazon S3. Amazon Athena for SQL uses Trino and Presto with full standard SQL support and works with various standard data formats, including CSV, JSON, Apache ORC, Apache Parquet, and Apache Avro. Athena for Apache Spark supports SQL and allows you to use Apache Spark, an open-source, distributed processing system used for big data workloads. To get started, log in to the Athena Management Console and start interacting with your data using the query editor or notebooks.")]),e._v(" "),a("p",[e._v("Features:")]),e._v(" "),a("ol",[a("li",[e._v("Serverless: No infrastructure to manage or set up.")]),e._v(" "),a("li",[e._v("Pay-per-query: You only pay for the queries you run.")]),e._v(" "),a("li",[e._v("SQL-based: Uses standard ANSI SQL for querying data.")]),e._v(" "),a("li",[e._v("Supports various data formats: CSV, JSON, ORC, Avro, and Parquet.")]),e._v(" "),a("li",[e._v("Integration with other AWS services: Glue Data Catalog, QuickSight, etc.")]),e._v(" "),a("li",[e._v("Security: Integrates with IAM for access control and supports encryption.")]),e._v(" "),a("li",[e._v("Performance optimization: Supports partitioning and compression.")]),e._v(" "),a("li",[e._v("Federated queries: Can query data from various sources beyond S3.")])]),e._v(" "),a("p",[e._v("How to use AWS Athena:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Set up your data in Amazon S3:")]),e._v(" "),a("ul",[a("li",[e._v("Organize your data in a structured format (e.g., CSV, JSON).")]),e._v(" "),a("li",[e._v("Consider partitioning your data for better performance.")])])]),e._v(" "),a("li",[a("p",[e._v("Create a database in Athena:")]),e._v(" "),a("ul",[a("li",[e._v("Go to the Athena console.")]),e._v(" "),a("li",[e._v('Click on "Create database" and provide a name.')])])]),e._v(" "),a("li",[a("p",[e._v("Create a table:")]),e._v(" "),a("ul",[a("li",[e._v("In the Athena query editor, use CREATE TABLE statement.")]),e._v(" "),a("li",[e._v("Define the schema and specify the S3 location of your data.")])])]),e._v(" "),a("li",[a("p",[e._v("Run queries:")]),e._v(" "),a("ul",[a("li",[e._v("Use standard SQL to query your data.")]),e._v(" "),a("li",[e._v("Results are stored in an S3 bucket you specify.")])])]),e._v(" "),a("li",[a("p",[e._v("Optimize performance:")]),e._v(" "),a("ul",[a("li",[e._v("Use partitioning and compression.")]),e._v(" "),a("li",[e._v("Convert data to columnar formats like Parquet for better performance.")])])]),e._v(" "),a("li",[a("p",[e._v("Integrate with other services:")]),e._v(" "),a("ul",[a("li",[e._v("Use with QuickSight for visualization.")]),e._v(" "),a("li",[e._v("Integrate with Glue for ETL and metadata management.")])])])]),e._v(" "),a("p",[e._v("Example SQL query in Athena:")]),e._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SELECT")]),e._v(" column1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" column2\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FROM")]),e._v(" your_table\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("WHERE")]),e._v(" condition\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("LIMIT")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("p",[e._v("Remember to set up an S3 bucket for query results before running queries. Athena is particularly useful for ad-hoc querying of large datasets stored in S3, log analysis, and data exploration without the need for complex ETL processes or data warehousing setups.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://aws.amazon.com/athena/faqs/?nc=sn&loc=6",target:"_blank",rel:"noopener noreferrer"}},[e._v("AWS Athena FAQs"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);