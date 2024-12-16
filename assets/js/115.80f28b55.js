(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{400:function(e,t,r){"use strict";r.r(t);var a=r(14),v=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"vue-3-的开发进展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-3-的开发进展"}},[e._v("#")]),e._v(" Vue 3 的开发进展")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://increment.com/frontend/making-vue-3/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://increment.com/frontend/making-vue-3/"),t("OutboundLink")],1),e._v(" 原文地址")]),e._v(" "),t("p",[e._v("来自重写中的下一个版本的 Vue.js 课程。")]),e._v(" "),t("p",[e._v("在去年，Vue 团队一直在 Vue.js 的下一个主要版本工作，我们希望在 2020 年上半年能够发布。（在写这篇文章的时候工作仍在继续）。在 2018 年底 Vue 新版本的想法就已经成型，当时 Vue 2 代码库已经有两年半的历史了。在通用软件的生命周期中这可能不是一个很长的时间，但是这期间前端环境已经发生剧烈的变化。")]),e._v(" "),t("p",[e._v("两个关键注意事项让我们能够着眼于新版本的（和重写）Vue：第一个，在主流浏览器中新的 JavaScript 语言的通用能力的提升，第二点，当前代码库的设计和结构问题随时间流逝而暴露出来。")]),e._v(" "),t("h2",{attrs:{id:"为啥重写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为啥重写"}},[e._v("#")]),e._v(" 为啥重写")]),e._v(" "),t("h3",{attrs:{id:"利用新的语言的功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#利用新的语言的功能"}},[e._v("#")]),e._v(" 利用新的语言的功能")]),e._v(" "),t("p",[e._v("随着 ES2015 标准化，JavaScript（正式的称为 ECMAScript，缩写是 ES）获得了重大改进，主流浏览器终于开始为这些新增功能提供不错的支持。特别是其中一些为我们提供了极大提升 Vue 能力的机会。")]),e._v(" "),t("p",[e._v("其中最值得注意的是 "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Proxy"),t("OutboundLink")],1),e._v("，它允许框架去监听对象操作。Vue 的一个核心功能是监听对用户定义的状态所做的更改和响应式的更新 DOM。Vue 2 通过使用 getters 和 setters 替换状态对象上的属性来实现响应式。切换到 Proxy 将允许我们消除 Vue 中已经存在的限制，例如不能检测新属性的添加，以及提供更好的性能。")]),e._v(" "),t("p",[e._v("然而，Proxy 是原生的语言功能，在旧版浏览器中不能完全的 polyfill。为了使用它，我们知道我们不得不调整框架的浏览器支持范围 -- 在下一个新版本中，一个巨大的 break change 只能被送达。")]),e._v(" "),t("h3",{attrs:{id:"解决结构性问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决结构性问题"}},[e._v("#")]),e._v(" 解决结构性问题")]),e._v(" "),t("p",[e._v("在维护 Vue 2 期间，我们积累了大量的问题，他们很难去解决因为已经存在的结构限制。例如，以一种方式实现模板编译器，达到合适的 source-map 支持，是非常有挑战性的。此外，虽然 Vue 2 从技术上能够构建针对非 DOM 平台的更高级别的渲染器，但我们不得不 fork 代码库，以及重复许多代码为了实现这个可能。在当前的代码库中修复这些问题需要巨大的、危险的重构，这几乎相当于重写。")]),e._v(" "),t("p",[e._v("同时，我们已经积累了技术债 -- 在内部各种模块和那些似乎不属于任何地方的漂流的代码之间形成了隐含的耦合。这使得非常难以理解代码库中一部分隔离的代码，我们注意到了贡献者很少有信心做出重大改变。重写将给我们机会在脑中去重新思考代码组织这些事情。")]),e._v(" "),t("h2",{attrs:{id:"初始原型阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始原型阶段"}},[e._v("#")]),e._v(" 初始原型阶段")]),e._v(" "),t("p",[e._v("在 2018 年底我们开始了 Vue 3 的原型制作，初步的目标是验证这些问题的解决方案。这个期间，我们大部分专注于创建一个能够长远开发的基础。")]),e._v(" "),t("h3",{attrs:{id:"切换到-typescript"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换到-typescript"}},[e._v("#")]),e._v(" 切换到 TypeScript")]),e._v(" "),t("p",[e._v("Vue 2 本来是通过原生 ES 写的。原型制作阶段不久，我们意识到类型系统对于我们这个量级的项目来说将会很有帮助。类型检查极大的减少在重构期间意外引入 bug 的机会，并且能够帮助贡献者在做出重大改变时更加自信。我们采用了 Facebook 的"),t("a",{attrs:{href:"https://flow.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Flow 类型检查"),t("OutboundLink")],1),e._v("，因为他能够逐渐的添加到已经存在的原生 ES 项目中。Flow 在一定程度上有所帮助，但是我们没有获得像我们期望的那么多好处；尤其是，不断的 break change 使升级非常痛苦。集成开发环境的支持与 TypeScript 在 VS Code 中的深度集成相比也并不理想。")]),e._v(" "),t("p",[e._v("我们也注意到了用户更多将 Vue 和 TypeScript 一起使用。为了支持他们的使用情况，我们不得不在源代码中分开编写和维护 TypeScript 声明，它使用了不同的类型系统。切换到 Typescript 将允许我们自动生成类型文件，减轻维护负担。")]),e._v(" "),t("h3",{attrs:{id:"解耦内部-package"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解耦内部-package"}},[e._v("#")]),e._v(" 解耦内部 package")]),e._v(" "),t("p",[e._v("我们也采用了 monorepo 设置，其中框架由内部 package 组成，每一个有单独的 API、类型定义和测试。我们希望使这些模块间的依赖更加清晰，使它对开发者来说更加容易阅读、理解和对它们做出改变。这是我们降低项目贡献者的理解障碍和提高项目的长期可维护性的关键。")]),e._v(" "),t("h3",{attrs:{id:"设置-rfc-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-rfc-流程"}},[e._v("#")]),e._v(" 设置 RFC 流程")]),e._v(" "),t("p",[e._v("到 2018 年底，关于新的类型系统和虚拟 DOM 渲染器，我们已经有一个能够工作的原型。我们验证了我们想要做到的内部结构的调整，但是仅仅有一个粗糙的面向公众的 API 变化草稿。是时候去将他们变为具体的设计了。")]),e._v(" "),t("p",[e._v("我们知道我们不得不更早、更加小心的做这个事。Vue 的广泛使用意味着 break change 将导致对用户来说巨大的迁移成本和生态系统碎片化。为了确保用户能够在 break change 方面提供反馈，在2019年初，我们采用了 RFC(request for comments 征求意见) 流程，每个 RFC 遵循一个模板，包含几个重点部分，动机、设计细节、权衡、采用策略。自从这个流程以一个 GitHub 仓库形式开展，提案通过 pull request 的方式提交，讨论在评论中就自然的展开了。")]),e._v(" "),t("p",[e._v("事实证明 RFC 流程非常有用，作为一个想法的框架，它强制我们充分考虑各个方面的潜在改变，以及允许我们的社区成员参与到设计过程中和提交经过深思熟虑的功能请求。")]),e._v(" "),t("h2",{attrs:{id:"更快、更小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更快、更小"}},[e._v("#")]),e._v(" 更快、更小")]),e._v(" "),t("p",[e._v("性能对于前端框架来说至关重要。尽管 Vue 2 具有出色的性能，但是重写提供了一个走的更远的机会，通过使用新的渲染策略进行实验。")]),e._v(" "),t("h3",{attrs:{id:"克服-virtual-dom-的瓶颈"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克服-virtual-dom-的瓶颈"}},[e._v("#")]),e._v(" 克服 Virtual DOM 的瓶颈")]),e._v(" "),t("p",[e._v("Vue 有相当独特的渲染策略：它提供了类似 HTML 的渲染语法，然后将模板渲编译为渲染函数，再返回 Virtual DOM 树。框架能够通过递归地遍历两个 Virtual DOM 树和比较每个节点的每个属性来搞清楚真实 DOM 的那部分需要更新。得益于现代 JavaScript 引擎的高级优化，这个有些蛮力的算法通常运行非常快，但是更新通常涉及许多非必要的 CPU 工作。当你看到一个有非常多的内容和很少动态绑定的模板 -- 全部的 Virtual DOM 树仍然需要递归遍历来找出哪些发生了变化，这非常明显的效率低下。")]),e._v(" "),t("p",[e._v("幸运的是，模板编译步骤给我们一个机会去执行模板的静态分析和提取动态部分的信息。Vue 2 通过跳过静态子树做到了一定程度，但是由于过度简单的编译器架构，更多的高级优化实现起来非常困难。在 Vue 3 中，我们使用一个合适的 AST 转换管道重写了编译器，它允许我们能够以转换插件的形式编写编译时优化。")]),e._v(" "),t("p",[e._v("有了新的架构，我们希望找到一个渲染策略，以尽可能减少开销。一个选项是放弃 virtual DOM 直接生成命令式 DOM 操作，但是这将会去掉了直接编写 Virtual DOM 渲染函数的能力 -- 我们发现对于高级用户或者库的作者是非常有价值的。此外，它将是一个巨大的 break change。")]),e._v(" "),t("p",[e._v("下一个好的事情是去掉无用的 Virtual DOM 树遍历和属性比较，在更新的过程中他们往往会产生最大的性能开销。为了达到这个目的，编译器和运行时需要同时工作：编译器分析模板、生成带有优化提示的代码，同时运行时获取这个提示并且采用尽可能快的路径。这里有三个主要的优化工作：")]),e._v(" "),t("p",[e._v("首先，在树的层级，我们注意到，在没有动态修改节点结构的模板指令（例如：v-if 和 v-for）存在时，节点结构是保持完全静态的。如果我们将模板拆分为由结构指令分隔的嵌套的“块”，每个块的节点结构将还是完全静态的。当我们更新块内的节点时，不需要递归的遍历树 -- 块内的动态绑定能够以扁平的数组形式被跟踪。这个优化通过将我们需要执行的树遍历数量减少到一个数量级，从而避免了Virtual DOM 的大部分开销。")]),e._v(" "),t("p",[e._v("第二点，在生成代码时，编译器积极检测模板中的静态节点、子树甚至数据对象，将他们保持在渲染函数的外边。这避免了在每个渲染中重新创建这些对象，极大的改善内存使用和减少了频繁的垃圾收集。")]),e._v(" "),t("p",[e._v("第三点，在元素层级，编译器也会基于需要去执行的更新类型，针对每个动态绑定的元素生成优化标志。例如，一个有动态 class 绑定和一个数字的静态属性的元素将得到一个标志，它强调仅仅 class 的检查是需要的。运行时将获取这个提示并采用专用的快速路径。")]),e._v(" "),t("p",[e._v("结合起来，这些技术已经明确的提高了我们的渲染更新基准，有时 Vue 3 占用的 CPU 时间不到 Vue 2 的10分之一。")]),e._v(" "),t("h3",{attrs:{id:"最小化构建包大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最小化构建包大小"}},[e._v("#")]),e._v(" 最小化构建包大小")]),e._v(" "),t("p",[e._v("框架的大小也会影响它的性能，这个对于 web 应用程序来说尤其重要，因为资源需要即时下载，在浏览器解析必须的 JavaScript 之前，APP 将是不可交互的。单页应用尤其是这样。当然 Vue 现在已经相当轻量了 -- Vue 2 的运行时大小 gzipped 后大约 23 KB -- 我们注意到两个问题：")]),e._v(" "),t("p",[e._v("首先，不是每个人都会使用全部的框架功能。例如，一个不使用过渡功能的 APP，仍然需要付出下载和解析过渡相关代码的代价。")]),e._v(" "),t("p",[e._v("第二点，当我们添加新功能时，框架将无限的增长。当我们考虑权衡一个新的功能添加时，给了构建包一个不成比例的这大小。结果，我们更加倾向于仅仅添加针对大多数用户的功能。")]),e._v(" "),t("p",[e._v("理想情况下，用户应该能够在构建时移除不用的框架功能 -- 正如我们知道的 “tree-shaking” -- 仅仅为我们使用的付出。这也将允许我们能够发布一部分用户觉得有用的功能，而不会增加其他用户的载入成本。")]),e._v(" "),t("p",[e._v("在 Vue 3 中，我们通过移动大部分的全局 API 和内部帮助库到 ES 模块导出，来达到这个目标。这让现代打包器能够去静态分析模块依赖和删除不使用的导出相关的代码。模板编译器也会生成对 tree-shaking 友好的代码，仅仅导入模板中真正使用的功能的 helper 库。")]),e._v(" "),t("p",[e._v("框架的某些部分能从不 tree-shaken，因为他们对任何类型的 APP 都非常重要。我们将这些必不可少的度量标准称为基准尺寸。Vue 3 的基准尺寸是 gzip 后约 10KB -- 比 Vue 2 的一半还少，尽管添加了许多额外的功能。")]),e._v(" "),t("h2",{attrs:{id:"满足规模需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#满足规模需求"}},[e._v("#")]),e._v(" 满足规模需求")]),e._v(" "),t("p",[e._v("我们也想要改善 Vue 处理大型应用程序的能力。我们初始化的 Vue 设计专注于更低的入门障碍和更平缓的学习曲线。但是随着 Vue 被更加大范围的采用，我们了解到更多的项目需求，他们包函了数以百计的模块和随着时间推移被数十名开发者维护。对于这个类型的项目，一个像 TypeScript 的类型系统和清晰的组织、重用代码的能力是非常急迫的，但是 Vue 2 在这些方面的支持并不理想。")]),e._v(" "),t("p",[e._v("在设计 Vue 3 的早期阶段，我们试图通过提供一个内置的，使用类编写组件的支持，来提高 TypeScript 的集成。挑战是需要使类能够使用的语言功能，例如类的字段和装饰器，仍在提案阶段 -- 在正式的成为 JavaScript 一部分之前仍然是可以调整的。这个涉及的复杂性和不确定性使我们怀疑增加的 Class API 是否真的合适，因为它除了提供 TypeScript 集成稍好之外，没有其他功能。")]),e._v(" "),t("p",[e._v("我们决定去调查其他的方式去应对扩展问题。受到 React Hooks 的启发，我们想要暴露更底层的响应式和组件生命周期 API 来更加自由编写组件逻辑，称为 "),t("a",{attrs:{href:"https://vue-composition-api-rfc.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Composition（合成） API"),t("OutboundLink")],1),e._v("。与通过一条很长的选项定义组件不同，合成 API 让用户更加自由的表达、导出和重用有状态的组件逻辑，就像写一个函数，同时提供出色的 TypeScript 支持。")]),e._v(" "),t("p",[e._v("关于这个想法我们非常兴奋。尽管合成 API 是被设计来解决一个特定类别的问题，它的技术仅仅可能在编写组件的时候使用。在提案的初稿中，我们有所进步，并暗示我们可能会在将来的版本中使用合成 API替换已经存在的选项 API。这导致了大量的来自社区成员的回击，这给我们上了一节很有价值的课 -- 关于沟通长期计划和明确的意图，和了解用户需求。在听到了社区的反馈后，我们完全重写了提案，明确一点，合成 API 是额外添加的且是选项 API 的补充。这个修订版提案的接受程度更积极，并且收到了许多建设性建议。")]),e._v(" "),t("h2",{attrs:{id:"寻求平衡"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#寻求平衡"}},[e._v("#")]),e._v(" 寻求平衡")]),e._v(" "),t("p",[e._v("Vue 的超过 100 万的开发者之中，有仅仅有 HTML/CSS 基础知识的初学者，从 jQuery 迁移的专业开发者，从一个框架迁移的退伍军人，寻找前端解决方案的后端工程师，和大型处理软件的软件架构师。开发者的多样性和使用情况的多样性相对应：一些开发者可能想要在旧版应用中增加交互性，其他的可能工作在更快迭代但是更少关注维护的一次性项目中。 在项目周期内，架构师可能需要处理大型的、多年的项目和一个不断变化的开发者团队。")]),e._v(" "),t("p",[e._v("在我们寻求各种折衷方案之间取得平衡时，Vue 的设计不断受到这些需求的影响，并不断适应这些需求。Vue 的口号，“渐进式框架”，封装由此过程产生的分层 API 设计。初学者能够享受平缓的学习曲线通过 CDN script，基于 HTML 的模板，和直觉的选项 API，当然专家能够通过全功能的 CLI，渲染函数和合成 API 来处理“雄心勃勃的（ambitious）”用例")]),e._v(" "),t("p",[e._v("为了实现我们的愿景仍有许多工作需要做 -- 最重要的，更新支持库、文档和工具，确保一个平滑的迁移。在接下来的几个月中我们将努力工作，我们迫不及待的想看到社区将通过 Vue 3 创造什么。")]),e._v(" "),t("h2",{attrs:{id:"感谢阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#感谢阅读"}},[e._v("#")]),e._v(" 感谢阅读")]),e._v(" "),t("p",[e._v("感谢你阅读到这里，翻译的不好的地方，还请指点。希望我的内容能让你受用，再次感谢。"),t("a",{attrs:{href:"https://llccing.github.io/FrontEnd/",target:"_blank",rel:"noopener noreferrer"}},[e._v("by llccing 千里"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=v.exports}}]);