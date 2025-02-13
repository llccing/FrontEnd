(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{508:function(t,o,a){"use strict";a.r(o);var e=a(14),s=Object(e.a)({},(function(){var t=this,o=t._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h2",{attrs:{id:"cloudwatch"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cloudwatch"}},[t._v("#")]),t._v(" CloudWatch")]),t._v(" "),o("p",[t._v("您可以使用 Amazon CloudWatch Logs 监控、存储和访问来自 Amazon Elastic Compute Cloud (Amazon EC2) 实例、AWS CloudTrail、Route 53 和其他来源的日志文件。")]),t._v(" "),o("p",[t._v("CloudWatch Logs 使您能够将所有系统、应用程序和AWS服务中的日志集中在一个高度可扩展的单个服务中。您可以轻松地查看日志、在日志中搜索特定错误代码或模式、根据特定字段筛选日志，或者安全地将这些日志归档以供将来分析。CloudWatch Logs 让您能够按照时间顺序将所有日志（无论它们来自哪里）作为单一且一致的事件流来查看。")]),t._v(" "),o("p",[t._v("此外，CloudWatch Logs 还支持使用强大的查询语言查询日志、审计和屏蔽日志中的敏感数据，以及使用筛选条件或嵌入式日志格式从日志中生成指标。")]),t._v(" "),o("p",[t._v("CloudWatch Logs 支持两个日志类。CloudWatch Logs 标准日志类中的日志组支持所有 CloudWatch Logs 功能。CloudWatch Logs 不频繁访问日志类中的日志组产生较低的提取费用，并且支持一部分标准类功能。有关更多信息，请参阅 日志类。")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/AmazonCloudWatch/latest/logs/WhatIsCloudWatchLogs.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("More information"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Amazon CloudWatch is an AWS monitoring service for cloud resources and the applications that you run on AWS. You can use Amazon CloudWatch to collect and track metrics, collect and monitor log files, and set alarms. Amazon CloudWatch can monitor AWS resources, such as Amazon EC2 instances, Amazon DynamoDB tables, and Amazon RDS DB instances, in addition to custom metrics generated by your applications and services, and any log files that your applications generate, hosted on premises, hybrid, or on other clouds. You can use Amazon CloudWatch to gain system-wide visibility into resource utilization, application performance, and operational health. You can use these insights to react and keep your application running smoothly.")]),t._v(" "),o("p",[t._v("To get started with monitoring, you can use Automatic Dashboards with built-in AWS best practices, explore account and resource-based view of metrics and alarms, and easily drill down to understand the root cause of performance issues.")]),t._v(" "),o("p",[o("a",{attrs:{href:"https://aws.amazon.com/cloudwatch/faqs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("AWS CloudWatch FAQs"),o("OutboundLink")],1)]),t._v(" "),o("h3",{attrs:{id:"combining-alarms"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#combining-alarms"}},[t._v("#")]),t._v(" Combining alarms")]),t._v(" "),o("p",[t._v("With CloudWatch, you can combine several alarms into one composite alarm to create a summarized, aggregated health indicator over a whole application or group of resources. Composite alarms are alarms that determine their state by monitoring the states of other alarms. You define rules to combine the status of those monitored alarms using Boolean logic.")]),t._v(" "),o("p",[t._v("https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Composite_Alarm.html")]),t._v(" "),o("h3",{attrs:{id:"cloudwatch-custom-metrics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#cloudwatch-custom-metrics"}},[t._v("#")]),t._v(" CloudWatch custom metrics")]),t._v(" "),o("p",[t._v("CloudWatch stores data about a metric as a series of data points. Each data point has an associated time stamp. You can even publish an aggregated set of data points called a statistic set.")]),t._v(" "),o("p",[t._v("https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html")]),t._v(" "),o("h3",{attrs:{id:"subscription-filters-log-group-level-subscription"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#subscription-filters-log-group-level-subscription"}},[t._v("#")]),t._v(" Subscription filters - Log group-level subscription")]),t._v(" "),o("p",[t._v("https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/SubscriptionFilters.html#FirehoseExample")]),t._v(" "),o("p",[t._v("In this example, you'll create a CloudWatch Logs subscription that sends any incoming log events that match your defined filters to your Amazon Data Firehose delivery stream. Data sent from CloudWatch Logs to Amazon Data Firehose is already compressed with gzip level 6 compression, so you do not need to use compression within your Firehose delivery stream. You can then use the decompression feature in Firehose to automatically decompress the logs.")])])}),[],!1,null,null,null);o.default=s.exports}}]);