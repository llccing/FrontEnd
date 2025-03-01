## AWS Global Accelerator

AWS Global Accelerator is a networking service that helps you improve the availability and performance of the applications that you offer to your global users. AWS Global Accelerator is easy to set up, configure, and manage. It provides static IP addresses that provide a fixed entry point to your applications and eliminate the complexity of managing specific IP addresses for different AWS Regions and Availability Zones. AWS Global Accelerator always routes user traffic to the optimal endpoint based on performance, reacting instantly to changes in application health, your user’s location, and policies that you configure. You can test the performance benefits from your location with a speed comparison tool. Like other AWS services, AWS Global Accelerator is a self-service, pay-per-use offering, requiring no long term commitments or minimum fees.

AWS Global Accelerator 是一种联网服务，可以帮助您提高为全球用户提供的应用程序的可用性和性能。AWS Global Accelerator 可以轻松设置、配置和管理。它可以提供静态 IP 地址，从而为您的应用程序提供固定的入口点，并消除了为不同 AWS 区域和可用区管理特定 IP 地址的复杂性。AWS Global Accelerator 始终根据性能将用户流量路由到最佳终端节点，即时针对应用程序运行状况、用户位置和您配置的策略的变化做出反应。您可以从自己的位置使用速度比较工具测试性能优势。与其他 AWS 服务一样，AWS Global Accelerator 也是一种按用量付费的自助服务，无需长期承诺或最低费用。

[AWS Global Accelerator 常见问题](https://aws.amazon.com/global-accelerator/faqs/)

### What can I do with AWS Global Accelerator?

借助 AWS Global Accelerator，您可以：

将 AWS Global Accelerator 提供的静态 IP 地址关联到区域性 AWS 资源或终端节点，例如网络负载均衡器、Application Load Balancer、EC2 实例和弹性 IP 地址。IP 地址是来自 AWS 边缘站点的任播地址，因此它们可以提供接近用户的 AWS 全球网络的引导流程。
轻松在可用区或 AWS 区域之间移动终端节点，无需更新 DNS 配置或更改面向客户端的应用程序。
通过为终端节点组配置流量调配百分比，为特定 AWS 区域调高或调低流量。这对于测试性能和发布更新而言，尤为有用。
通过在终端节点之间分配权重来控制被引导至终端节点组内每个终端节点的流量比例。

### How to use AWS Global Accelerator?

您可以使用 API 或通过 AWS 管理控制台开始设置 AWS Global Accelerator，也可以使用 AWS CloudFormation 模板进行设置。AWS Global Accelerator 是一项全球服务，因此它不与任何特定 AWS 区域绑定。以下是为您的应用程序设置 AWS Global Accelerator 的三个简单步骤：

创建加速器：在创建加速器时，AWS Global Accelerator 会为它预置两个静态 IP 地址。然后，根据您指定的协议和端口，配置一个或多个侦听器来处理从终端客户端到加速器的入站连接。
 
配置终端节点组：通过指定要将流量分配到的 AWS 区域，选择一个或多个区域终端节点组来与加速器的侦听器相关联。侦听器将请求路由到此终端节点组中已注册的终端节点。AWS Global Accelerator 使用为每个终端节点定义的运行状况检查设置监控组内终端节点的运行状况。您可以为每个终端节点组配置流量调配百分比，从而控制终端节点组接受的流量。默认情况下，所有区域终端节点组的流量调配都设置为 100%。
 
为终端节点组注册终端节点：您可以在每个终端节点组中注册一个或多个区域资源，比如 Application Load Balancer、网络负载均衡器、EC2 实例或弹性 IP 地址。然后，您可以设置权重，以选择路由到每个终端节点的流量。


