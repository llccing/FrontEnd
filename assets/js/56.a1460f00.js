(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{339:function(e,a,s){"use strict";s.r(a);var t=s(14),v=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"amazon-simple-queue-service-sqs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#amazon-simple-queue-service-sqs"}},[e._v("#")]),e._v(" Amazon Simple Queue Service (SQS)")]),e._v(" "),a("p",[e._v("Amazon SQS 是一种分布式消息队列系统，可让您在应用程序之间可靠地传递消息。SQS 提供了一种简单的方式来解耦应用程序，使它们能够独立地扩展和运行。")]),e._v(" "),a("h3",{attrs:{id:"sqs-sns-mq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqs-sns-mq"}},[e._v("#")]),e._v(" SQS SNS MQ")]),e._v(" "),a("p",[e._v("Amazon SQS、Amazon SNS easy-to-use 和 Amazon MQ 提供高度可扩展的托管消息服务，每种服务都是为分布式系统中的特定角色设计的。以下是对这些服务之间差异的增强概述：")]),e._v(" "),a("p",[e._v("Amazon SQS 将分布式软件系统和组件分离并扩展为队列服务。它通常通过单个订阅者处理消息，非常适合订单和丢失防护至关重要的工作流程。为了实现更广泛的分发，将 Amazon SQS 与 Amazon SNS 集成，可以实现分发消息传送模式，有效地同时向多个订阅者推送消息。")]),e._v(" "),a("p",[e._v("Amazon SNS 允许发布者通过主题向多个订阅者发送消息，主题充当沟通渠道。订阅者使用支持的终端节点类型接收已发布的消息，例如 Amazon SQS Amazon Data Firehose、Lamb da、HTTP、电子邮件、移动推送通知和移动短信 (SMS)。该服务非常适合需要即时通知的场景，例如实时用户参与或警报系统。为了防止订阅者离线时消息丢失，将 Amazon SNS 与 Amazon SQS 队列消息集成，可确保一致传送。")]),e._v(" "),a("p",[e._v("Amazon MQ 最适合希望从传统消息代理迁移的企业，这些代理支持 AMQP 和 MQTT 等标准消息传递协议，以及 Apache ActiveMQ 和 RabbitMQ。它与需要稳定、可靠消息传递的传统系统兼容，而无需进行大量重新配置。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/AWSSimpleQueueService/latest/SQSDeveloperGuide/welcome.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("more about SQS"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"sqs-fifo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqs-fifo"}},[e._v("#")]),e._v(" SQS FIFO")]),e._v(" "),a("p",[e._v("FIFO（First-In-First-Out）队列具有标准队列的所有功能，但旨在在操作和事件顺序至关重要或不能容忍重复时增强应用程序之间的消息传递。")]),e._v(" "),a("p",[e._v("FIFO队列最重要的功能是 FIFO（先进先出）交付和精确一次处理：")]),e._v(" "),a("ul",[a("li",[e._v("严格保留消息的发送和接收顺序，消息只传送一次，在消费者处理和删除消息之前一直不可用。")]),e._v(" "),a("li",[e._v("不会将重复项引入到队列中。")])]),e._v(" "),a("p",[e._v("此外，FIFO队列支持允许在单个队列中使用多个有序消息组的消息组。FIFO队列中的消息组数量没有配额。")]),e._v(" "),a("p",[e._v("可能使用FIFO队列的情况示例如下：")]),e._v(" "),a("ol",[a("li",[e._v("订单至关重要的电子商务订单管理系统")]),e._v(" "),a("li",[e._v("与需要按顺序处理事件的第三方系统集成")]),e._v(" "),a("li",[e._v("按输入顺序处理用户输入的内容")]),e._v(" "),a("li",[e._v("通信和联网 - 按相同的顺序发送和接收数据与信息")]),e._v(" "),a("li",[e._v("计算机系统 - 确保用户输入的命令按正确的顺序运行")]),e._v(" "),a("li",[e._v("教育学院 - 防止学员在注册账户之前参加课程")]),e._v(" "),a("li",[e._v("在线售票系统 - 票按先到先得的原则分发")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-fifo-queues.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQS FIFO"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"sqs-standard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sqs-standard"}},[e._v("#")]),e._v(" SQS Standard")]),e._v(" "),a("p",[e._v("Amazon SQS 提供标准队列作为默认队列类型，每秒支持、和等SendMessage操作的 API 调用次数几乎不受限制。ReceiveMessage DeleteMessage标准队列可确保 at-least-once 消息传送，但由于高度分散的架构，可能会传送一条消息的多个副本，而且消息偶尔会出现乱序的情况。尽管如此，标准队列还是会尽最大努力保持消息的发送顺序。")]),e._v(" "),a("p",[e._v("当您使用发送消息时SendMessage，Amazon SQS 会在确认消息之前将其冗余存储在多个可用区 (AZ) 中。这种冗余可确保任何一台计算机、网络或可用区故障都不会导致消息无法访问。")]),e._v(" "),a("p",[e._v("标准消息队列适用于各种场景，前提是您的应用程序可以处理可能多次到达或不按顺序到达的消息。示例包括：")]),e._v(" "),a("ul",[a("li",[e._v("将实时用户请求与密集的后台工作分开 — 用户可以在系统在后台调整大小或编码媒体时上传媒体。")]),e._v(" "),a("li",[e._v("将任务分配给多个工作节点-例如，处理大量的信用卡验证请求。")]),e._v(" "),a("li",[e._v("批量处理消息以备将来处理-安排多个条目稍后添加到数据库中。")])]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.aws.amazon.com/zh_cn/AWSSimpleQueueService/latest/SQSDeveloperGuide/standard-queues.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQS Standard"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=v.exports}}]);