# Node.js 架构和 12 个 Node.js 开发最佳实践

> [原文在此，也可以看原文哦](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development)

![地址](https://cdn.buttercms.com/3FHJ3r3KT9iWbj2k6a7T)

虽然 Node.js 才诞生 11 年，但是已经是过去 10 年来最流行的 web 开发框架之一。我是一个终极粉丝，感谢 Node.js，让我能够在浏览器外部写 JavaScript 代码，去创建一个非阻塞的、流畅的、快速的、健壮的、可扩展的服务端应用程序。

这篇文章中，我将讲述一下 Node.js 的两个方面 - 关于框架的内部机制和关于创建高效、可持续的 Node.js 应用程序的最佳开发实践。

通过有意识的努力理解框架的内部工作原理，我们不仅可以了解框架本身的方式方法，还可以了解流行的编程范式及其设计决策。随着时间推移，这些底层思想和知识会反应到我们写代码的方式中和也会使我们明白如何在速度和性能上优化我们的应用。Node.js 在底层如何工作的一个组成部分是它是单线程、基于事件循环的装置，用于实现异步行为。我们将在本文的前半部分更深入的探讨这一点。

这篇文章的第二个部分将专门讨论范围的另一端 - 重点介绍 12 个最佳实践，当开始新的 Node.js 项目是需要记住的。这些构成了创建一个健壮应用的各个方面，包括项目架构、目录结构、模块化、整洁代码书写、管理依赖等等。在某种程度上，这将是我们对 Node.js 构建块的理解的一种推断，以建立某些基本规则和指导方针，为我们的项目创建坚如磐石的基础。

通过这篇文章，我希望回答下面这些问题 -

- Node.js 在底层是如何工作的？
- 如何实现并发？
- 与其他多线程 web 框架相比，区别是什么？
- 一个好的 Node.js 项目看起来应该是什么样？
- 当开始一个 Node.js 应用时，什么是应该记在脑中的最重要的实践？

使用下面的链接切换到或者跳过教程：

- [Node.js简史](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#abriefhistory)
- [背景：关于 Node.js 底层工作原理的入门](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#background)
    - [传统的多线程处理的 web 框架](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#traditionalmultithread)
    - [Node.js 单线程事件循环架构](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#singlethread)
- [为什么一个良好的设置对 Node.js 应用很重要](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#whyagoodsetupmatters)
- [12 个 Node.js 开发的最佳实践](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#bestpractices)
    - [最佳实践 #1: 采取分层方法](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice1)
    - [最佳实践 #2: 目录结构](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice2)
    - [最佳实践 #3: 发布订阅模型](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice3)
    - [最佳实践 #4: 整洁代码和易读性](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice4)
    - [最佳实践 #5: 写异步代码](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice5)
    - [最佳实践 #6: 配置文件和环境变量](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice6)
    - [最佳实践 #7: 测试、日志和错误处理](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice7)
    - [最佳实践 #8: 代码压缩和文件大小](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice8)
    - [最佳实践 #9: 依赖注入](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice9)
    - [最佳实践 #10: 第三方解决方案](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice10)
    - [最佳实践 #11: 遵守编程原则](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice11)
    - [最佳实践 #12: 使用应用监控工具](https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development#practice12)

让我们开始吧！

## Node.js 简史
Just to give you a sense of the timeline here, the World Wide Web started around 30 years back. Javascript was born about 25 years ago and about the same goes for PHP (26 years). Node.js, on the other hand, is only 11 years old. Despite its relatively short run, Node.js has done wonders for developer organizations around the world.

![timeline](https://cdn.buttercms.com/FEhzXv3S5QoRkb1qpgYg)

Ever since Javascript has launched, there have been attempts to utilize Javascript for the back-end, for example, Netscape tried to do something similar with Netscape Livewire. These however turned out to be unsuccessful. Around 2004 onwards, when the first waves of Web 2.0 were starting out, Javascript started getting a lot of traction owing to the visions of a modern web experience. Since Javascript was (and is) the most widely used client-side programming language, browsers competed and pushed to create the most optimized Javascript engines for best performance. One of these engines was Chrome V8, on top of which Node.js was later built. As a result of this momentum, Javascript flourished, and so did the V8 engine. 

In 2009, in the right place, at the right time, Node.js was born. Ever since then, Node.js development has skyrocketed. Despite competition from pioneers like PHP and Advance Java, Node.js has emerged to be the more preferred server-side choice for many applications today, thanks to it’s asynchronous I/O, event-driven architecture, light-weightedness, speed, scalability and the fact that it uses the most popular programming language i.e. Javascript. Today, Node.js servers are used in production for applications and enterprises that cater to hundreds of millions of users worldwide - Netflix, Linkedin, Microsoft, GoDaddy, Paypal and many more. To give you an estimate of it’s popularity, Node’s package manager, NPM, registers billions of downloads each week.

Node.js is very actively maintained, thanks to its enormous community of users and developers. This means that there’s abundant support on the internet if you get stuck somewhere and need some help with your code, or any web development advice in general.

Now let us look at what gives Node.js its edge - how it works under the hood.
## 背景：关于 Node.js 底层工作原理的入门

Node.js 因为 __“异步事件驱动、非阻塞 I/O”__ 处理而受欢迎，它从 JavaScript 的 __单线程事件循环__ 模型中获得了大部分并发性和异步性。

其他大部分 web 开发可选的如 ASP.NET，JSP，Spring 使用多线程处理架构来处理并发的客户端请求。在对比他们和Node.js带来的东西之前，让我们更多了解多线程处理模型。

### 传统的多线程处理的 web 框架

多线程处理模型的设置中，每个服务器有个有限的线程池可供使用

### Node.js 单线程事件循环架构

## 为什么一个良好的设置对 Node.js 应用很重要

## Node.js 开发的最佳实践

### 最佳实践 #1: 采取分层方法

### 最佳实践 #2: 目录结构

### 最佳实践 #3: 发布订阅模型
### 最佳实践 #4: 整洁代码和易读性

### 最佳实践 #5: 写异步代码
### 最佳实践 #6: 配置文件和环境变量

### 最佳实践 #7: 测试、日志和错误处理
### 最佳实践 #8: 代码压缩和文件大小

### 最佳实践 #9: 依赖注入
### 最佳实践 #10: 第三方解决方案

### 最佳实践 #11: 遵守编程原则
### 最佳实践 #12: 使用应用监控工具
