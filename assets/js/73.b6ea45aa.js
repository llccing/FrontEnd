(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{321:function(e,a,t){"use strict";t.r(a);var s=t(14),i=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"amazon-kinesis-data-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-kinesis-data-streams"}},[e._v("#")]),e._v(" Amazon Kinesis Data Streams")]),e._v(" "),a("p",[e._v("可以使用 Amazon Kinesis Data Streams 实时收集和处理大型数据记录流。可以创建称为 Kinesis Data Streams 应用程序的数据处理应用程序。典型 Kinesis Data Streams 应用程序会将数据流中的数据作为数据记录读取。这些应用程序可使用 Kinesis Client Library，并且可在 Amazon EC2 实例上运行。可以将处理后的记录发送到控制面板，使用这些记录生成警报，动态更改定价和广告战略，或将数据发送给其他各个 AWS 服务。")]),e._v(" "),a("h3",{attrs:{id:"what-we-can-do-with-kinesis-data-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-we-can-do-with-kinesis-data-streams"}},[e._v("#")]),e._v(" what we can do with Kinesis Data Streams")]),e._v(" "),a("p",[e._v("您可以使用 Kinesis Data Streams 实现快速而持续的数据引入和聚合。使用的数据类型可以包括 IT 基础设施日志数据、应用程序日志、社交媒体、市场数据源和 Web 点击流数据。由于数据引入和处理的响应时间是实时的，因此处理通常是轻量级的。")]),e._v(" "),a("p",[e._v("以下是使用 Kinesis Data Streams 的典型场景：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("加速的日志和数据源引入和处理\n您可以让创建者直接将数据推入流。例如，推送系统和应用程序日志，它们可在几秒内就绪，以用于处理。这可以防止因前端或应用程序服务器故障而造成日志数据丢失。Kinesis Data Streams 可加快数据源接收速度，因为在提交数据以进行引入之前，数据不会在服务器上进行批处理。")])]),e._v(" "),a("li",[a("p",[e._v("实时指标和报告\n您可以使用收集到 Kinesis Data Streams 中的数据进行实时的简单数据分析和报告。例如，您的数据处理应用程序可以处理系统和应用程序日志的指标和报告，因为数据将流入而不是等待接收批量数据。")])]),e._v(" "),a("li",[a("p",[e._v("实时数据分析\n这可将并行处理的强大功能与实时数据的价值相结合。例如，实时处理网站点击流，然后使用多个并行运行的不同的 Kinesis Data Streams 应用程序来分析站点可用性参与度。")])]),e._v(" "),a("li",[a("p",[e._v("复杂流处理\n可以创建 Kinesis Data Streams 应用程序和数据流的有向无环图（DAG）。这通常会涉及将数据从多个 Kinesis Data Streams 应用程序放入其他流，以供其他 Kinesis Data Streams 应用程序进行下游处理。")])])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/streams/latest/dev/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("more about Kinesis Data Streams"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"explain-how-to-use-kinesis-data-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#explain-how-to-use-kinesis-data-streams"}},[e._v("#")]),e._v(" explain how to use Kinesis Data Streams")]),e._v(" "),a("p",[e._v("Amazon Kinesis is a powerful service for real-time data streaming and processing, enabling businesses to collect, process, and analyze large volumes of data in real time. While user click events are a common type of data transmitted to Kinesis, the platform supports a wide variety of data types across different industries and use cases. Below are several examples of the types of data that can be transmitted to Kinesis, along with illustrative scenarios:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("User Interaction and Click Events")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Tracking user behavior on a website or mobile app, such as clicks, page views, navigation paths, and form submissions. This data helps in understanding user engagement, optimizing user experience, and personalizing content.")])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[e._v("Transactional Data")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Real-time processing of sales transactions in an e-commerce platform. This includes details like purchase amounts, product IDs, customer information, and payment methods, enabling immediate inventory updates and fraud detection.")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[e._v("Application and System Logs")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Streaming logs from web servers, databases, or microservices to monitor system performance, detect errors, and perform root cause analysis. This is crucial for maintaining system reliability and uptime.")])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("strong",[e._v("Internet of Things (IoT) Sensor Data")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Collecting data from connected devices such as temperature sensors, smart meters, or wearable health trackers. This data can be used for real-time monitoring, predictive maintenance, and automated control systems.")])]),e._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("strong",[e._v("Social Media and User-Generated Content")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Ingesting real-time feeds from social media platforms like Twitter or Facebook to analyze trends, sentiment, and engagement. This information can inform marketing strategies and customer outreach programs.")])]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("strong",[e._v("Real-Time Metrics and Monitoring Data")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Gathering metrics from various sources such as application performance monitoring (APM) tools, network devices, and business KPIs. This data supports live dashboards and real-time decision-making processes.")])]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[a("strong",[e._v("Gaming Telemetry and Real-Time Game Data")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Streaming player actions, game state information, and in-game purchases in online multiplayer games. This data enhances player experience through real-time updates, matchmaking, and targeted offers.")])]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[a("strong",[e._v("Financial Market Data Streams")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Processing live stock prices, trading volumes, and financial news feeds to support algorithmic trading, real-time risk assessment, and market analytics.")])]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[a("strong",[e._v("Multimedia Streaming Data")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Ingesting live video or audio streams for real-time processing tasks such as content moderation, live analytics, or immediate distribution to end-users.")])]),e._v(" "),a("ol",{attrs:{start:"10"}},[a("li",[a("strong",[e._v("Fraud Detection and Security Data")])])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Example:")]),e._v(" Streaming transactional and behavioral data to identify and respond to fraudulent activities in real time. This includes monitoring login attempts, transaction patterns, and unusual user behavior.")])]),e._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[a("strong",[e._v("Use Cases Leveraging Kinesis:")])])]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Real-Time Analytics Dashboards:")]),e._v(" Visualizing data as it flows in to provide up-to-the-minute insights for business stakeholders.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Immediate Alerting Systems:")]),e._v(" Triggering alerts based on predefined conditions, such as system outages, security breaches, or threshold violations.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Personalized Content Delivery:")]),e._v(" Utilizing real-time user data to serve personalized recommendations, advertisements, or content adjustments.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Operational Efficiency:")]),e._v(" Automating responses to specific data events, such as scaling infrastructure based on traffic patterns or rerouting data flows during peak times.")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Machine Learning Integration:")]),e._v(" Feeding real-time data into machine learning models for instant predictions, anomaly detection, or adaptive learning systems.")])])]),e._v(" "),a("p",[a("strong",[e._v("Conclusion")])]),e._v(" "),a("p",[e._v("Amazon Kinesis is versatile and can handle a broad spectrum of real-time data types beyond just user click events. Its ability to ingest, process, and analyze data in motion makes it an invaluable tool for businesses aiming to gain immediate insights, respond swiftly to changes, and maintain a competitive edge in their respective markets. Whether it's enhancing user experiences, ensuring system reliability, or driving data-driven decision-making, Kinesis provides the infrastructure necessary to support a wide array of real-time data applications.")]),e._v(" "),a("h3",{attrs:{id:"kinesis-data-streams-with-interface-vpc-endpoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kinesis-data-streams-with-interface-vpc-endpoint"}},[e._v("#")]),e._v(" Kinesis Data Streams with interface VPC endpoint")]),e._v(" "),a("p",[e._v("You can use an interface VPC endpoint to prevent traffic between your Amazon VPC and Kinesis Data Streams from leaving the Amazon network. Interface VPC endpoints don't require an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection. Interface VPC endpoints are powered by AWS PrivateLink, an AWS technology that enables private communication between AWS services using an elastic network interface with private IPs in your Amazon VPC.")]),e._v(" "),a("p",[e._v("https://docs.aws.amazon.com/streams/latest/dev/vpc.html")])])}),[],!1,null,null,null);a.default=i.exports}}]);