# Virtual DOM

直接操作DOM会影响性能，所以才产生了虚拟DOM。

## 什么是虚拟DOM
    一个对象，两个前提，三个步骤。
    Virtual DOM是一个基本的JavaScript对象，也是整个Virtual DOM数的基本。
    两个前提：JavaScript可以很快、直接操作DOM很慢，这是Virtual DOM得以实现的两个基本前提。得益于V8引擎的出现，让JavaScript可以高效的运行，在性能上有很大提高。直接操作DOM会引起性能问题。
    三个步骤：实现Virtual DOM的三个步骤，生成Virtual DOM树，对比两棵树的差异，更新视图。


```js
export default class VNode {
  tag: string | void;
  data: VNodeData | void;
  children: ?Array<VNode>;
  text: string | void;
  elm: Node | void;
  ns: string | void;
  context: Component | void; // rendered in this component's scope
  key: string | number | void;
  componentOptions: VNodeComponentOptions | void;
  componentInstance: Component | void; // component instance
  parent: VNode | void; // component placeholder node

  // strictly internal
  raw: boolean; // contains raw HTML? (server only)
  isStatic: boolean; // hoisted static node
  isRootInsert: boolean; // necessary for enter transition check
  isComment: boolean; // empty comment placeholder?
  isCloned: boolean; // is a cloned node?
  isOnce: boolean; // is a v-once node?
  asyncFactory: Function | void; // async component factory function
  asyncMeta: Object | void;
  isAsyncPlaceholder: boolean;
  ssrContext: Object | void;
  fnContext: Component | void; // real context vm for functional nodes
  fnOptions: ?ComponentOptions; // for SSR caching
  devtoolsMeta: ?Object; // used to store functional render context for devtools
  fnScopeId: ?string; // functional scope id support

  constructor (
    tag?: string,
    data?: VNodeData,
    children?: ?Array<VNode>,
    text?: string,
    elm?: Node,
    context?: Component,
    componentOptions?: VNodeComponentOptions,
    asyncFactory?: Function
  ) {
    this.tag = tag
    this.data = data
    this.children = children
    this.text = text
    this.elm = elm
    this.ns = undefined
    this.context = context
    this.fnContext = undefined
    this.fnOptions = undefined
    this.fnScopeId = undefined
    this.key = data && data.key
    this.componentOptions = componentOptions
    this.componentInstance = undefined
    this.parent = undefined
    this.raw = false
    this.isStatic = false
    this.isRootInsert = true
    this.isComment = false
    this.isCloned = false
    this.isOnce = false
    this.asyncFactory = asyncFactory
    this.asyncMeta = undefined
    this.isAsyncPlaceholder = false
  }

```

Vue Virtual DOM实现时参考的项目
[https://github.com/snabbdom/snabbdom](https://github.com/snabbdom/snabbdom)


## 总结
Virtual DOM除了数据结构的定义，映射到真实的DOM上要经历VNode的crate、diff、patch等过程。那么在Vue.js中，VNode的crate是通过之前提到的crateElement方法创建的，接下来顺着文章往下看。


## 参考资料

实现一个Virtual DOM
[https://segmentfault.com/a/1190000016129036](https://segmentfault.com/a/1190000016129036)

为什么DOM操作昂贵呢
[https://www.kancloud.cn/digest/liao-js/149473](https://www.kancloud.cn/digest/liao-js/149473)

理解Virtual DOM
[https://github.com/y8n/blog/issues/5](https://github.com/y8n/blog/issues/5)

