(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{314:function(a,e,t){"use strict";t.r(e);var n=t(14),o=Object(n.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"q31"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q31"}},[a._v("#")]),a._v(" Q31")]),a._v(" "),e("p",[a._v("A company that hosts its web application on AWS wants to ensure all Amazon EC2 instances. Amazon RDS DB instances. and Amazon Redshift\nclusters are congured with tags. The company wants to minimize the effort of conguring and operating this check.\nWhat should a solutions architect do to accomplish this?")]),a._v(" "),e("p",[a._v("A. Use AWS Config rules to define and detect resources that are not properly tagged.\nB. Use Cost Explorer to display resources that are not properly tagged. Tag those resources manually.\nC. Write API calls to check all resources for proper tag allocation. Periodically run the code on an EC2 instance.\nD. Write API calls to check all resources for proper tag allocation. Schedule an AWS Lambda function through Amazon CloudWatch to periodically run the code.")]),a._v(" "),e("p",[a._v("Chinese Version:\n一家公司在其 AWS 上托管其 Web 应用程序，希望确保所有 Amazon EC2 实例、Amazon RDS DB 实例和 Amazon Redshift 集群都已配置标签。公司希望最大限度地减少配置和操作此检查的工作量。\n解决方案架构师应采取什么措施来完成此任务？")]),a._v(" "),e("p",[a._v("A. 使用 AWS Config 规则定义并检测未正确配置标签的资源。\nB. 使用 Cost Explorer 显示未正确配置标签的资源。手动为这些资源添加标签。\nC. 编写 API 调用来检查所有资源的标签分配情况。在 EC2 实例上定期运行代码。\nD. 编写 API 调用来检查所有资源的标签分配情况。通过 Amazon CloudWatch 调度 AWS Lambda 函数，定期运行代码。")]),a._v(" "),e("h2",{attrs:{id:"q32"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q32"}},[a._v("#")]),a._v(" Q32")]),a._v(" "),e("p",[a._v("A development team needs to host a website that will be accessed by other teams. The website contents consist of HTML, CSS, client-side JavaScript, and images.\nWhich method is the MOST cost-effective for hosting the website?")]),a._v(" "),e("p",[a._v("A. Containerize the website and host it in AWS Fargate.\nB. Create an Amazon S3 bucket and host the website there.\nC. Deploy a web server on an Amazon EC2 instance to host the website.\nD. Congure an Application Load Balancer with an AWS Lambda target that uses the Express.js framework.")]),a._v(" "),e("p",[a._v("Chinese Version:\n一个开发团队需要托管一个将被其他团队访问的网站。该网站的内容包括 HTML、CSS、客户端 JavaScript 和图像。\n哪种方法最符合成本效益？\nA. 将网站容器化并托管在 AWS Fargate 中。\nB. 创建一个 Amazon S3 存储桶并托管该网站。\nC. 在 Amazon EC2 实例上部署一个 Web 服务器以托管该网站。\nD. 配置一个使用 Express.js 框架的 AWS Lambda 目标的应用程序负载均衡器。")]),a._v(" "),e("h2",{attrs:{id:"q33"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q33"}},[a._v("#")]),a._v(" Q33")]),a._v(" "),e("p",[a._v("A company runs an online marketplace web application on AWS. The application serves hundreds of thousands of users during peak hours.The company needs a scalable, near-real-time solution to share the details of millions of nancial transactions with several other internal applications. Transactions also need to be processed to remove sensitive data before being stored in a document database for low-latency retrieval.")]),a._v(" "),e("p",[a._v("What should a solutions architect recommend to meet these requirements?")]),a._v(" "),e("p",[a._v("A. Store the transactions data into Amazon DynamoDB. Set up a rule in DynamoDB to remove sensitive data from every transaction upon write. Use DynamoDB Streams to share the transactions data with other applications.")]),a._v(" "),e("p",[a._v("B. Stream the transactions data into Amazon Kinesis Data Firehose to store data in Amazon DynamoDB and Amazon S3. Use AWS Lambda integration with Kinesis Data Firehose to remove sensitive data. Other applications can consume the data stored in Amazon S3.")]),a._v(" "),e("p",[a._v("C. Stream the transactions data into Amazon Kinesis Data Streams. Use AWS Lambda integration to remove sensitive data from every")]),a._v(" "),e("p",[a._v("transaction and then store the transactions data in Amazon DynamoDB. Other applications can consume the transactions data off the Kinesis data stream.")]),a._v(" "),e("p",[a._v("D. Store the batched transactions data in Amazon S3 as les. Use AWS Lambda to process every le and remove sensitive data before updating the les in Amazon S3. The Lambda function then stores the data in Amazon DynamoDB. Other applications can consume transaction les stored in Amazon S3.")]),a._v(" "),e("p",[a._v("Chinese Version:\n一家公司在其 AWS 上运行一个在线市场 Web 应用程序。该应用程序在高峰时段为数百万用户提供服务。公司需要一个可扩展的、近乎实时的解决方案，以将数百万笔财务交易的数据与几个内部应用程序共享。交易数据还需要经过处理，以删除敏感数据，然后存储在文档数据库中以实现低延迟检索。\n解决方案架构师应推荐什么来满足这些要求？")]),a._v(" "),e("p",[a._v("A. 将交易数据存储到 Amazon DynamoDB 中。在 DynamoDB 中设置一个规则，以在每次写入时删除敏感数据。使用 DynamoDB Streams 与其他应用程序共享交易数据。\nB. 将交易数据流式传输到 Amazon Kinesis Data Firehose 中，以将数据存储在 Amazon DynamoDB 和 Amazon S3 中。使用 Amazon Kinesis Data Firehose 与 AWS Lambda 的集成来删除敏感数据。其他应用程序可以消费存储在 Amazon S3 中的数据。\nC. 将交易数据流式传输到 Amazon Kinesis Data Streams 中。使用 AWS Lambda 集成来删除每笔交易中的敏感数据，然后将交易数据存储在 Amazon DynamoDB 中。其他应用程序可以消费从 Kinesis 数据流中获取的交易数据。\nD. 将批量处理的交易数据存储在 Amazon S3 中作为文件。使用 AWS Lambda 处理每个文件并删除敏感数据，然后更新 Amazon S3 中的文件。Lambda 函数然后将数据存储在 Amazon DynamoDB 中。其他应用程序可以消费存储在 Amazon S3 中的交易文件。")]),a._v(" "),e("h2",{attrs:{id:"q34"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#q34"}},[a._v("#")]),a._v(" Q34")]),a._v(" "),e("p",[a._v("A company hosts its multi-tier applications on AWS. For compliance, governance, auditing, and security, the company must track configuration changes on its AWS resources and record a history of API calls made to these resources.\nWhat should a solutions architect do to meet these requirements?")]),a._v(" "),e("p",[a._v("A. Use AWS CloudTrail to track configuration changes and AWS Config to record API calls.\nB. Use AWS Config to track configuration changes and AWS CloudTrail to record API calls.\nC. Use AWS Config to track configuration changes and Amazon CloudWatch to record API calls.\nD. Use AWS CloudTrail to track configuration changes and Amazon CloudWatch to record API calls.")]),a._v(" "),e("p",[a._v("Chinese Version:\n一家公司在其 AWS 上托管其多层应用程序。为了合规、治理、审计和安全，公司必须跟踪其 AWS 资源上的配置更改并记录对这些资源所做的 API 调用历史。\n解决方案架构师应采取什么措施来满足这些要求？")]),a._v(" "),e("p",[a._v("A. 使用 AWS CloudTrail 跟踪配置更改并使用 AWS Config 记录 API 调用。\nB. 使用 AWS Config 跟踪配置更改并使用 AWS CloudTrail 记录 API 调用。\nC. 使用 AWS Config 跟踪配置更改并使用 Amazon CloudWatch 记录 API 调用。\nD. 使用 AWS CloudTrail 跟踪配置更改并使用 Amazon CloudWatch 记录 API 调用。")])])}),[],!1,null,null,null);e.default=o.exports}}]);