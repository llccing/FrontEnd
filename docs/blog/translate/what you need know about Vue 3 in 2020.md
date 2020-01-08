# 2020年关于 Vue 3 你需要知道的事

> [https://medium.com/swlh/what-you-need-to-know-about-vue3-in-2020-b36a2feb5dad](https://medium.com/swlh/what-you-need-to-know-about-vue3-in-2020-b36a2feb5dad) 原文链接

现在 VueJS 是最热的框架之一，它在2019的周下载量翻了一倍。

![下载量对比](https://miro.medium.com/max/2048/0*GZppDplldb75ajvg.png)

2020年Vue3发布时，它将更加流行。

现在Vue团队的重点在使它能够适合所有开发者，新版本将更强大、更有效率。同时有很多的内部优化将让我们用的更爽。

Vue3也给开发者更多的控制方法（如果你想要），它让我们能够使用直接暴露的Vue响应式API准确控制我们项目，编写自定义编译和渲染方法。

下面是一些重大变化，来自尤雨溪的几次演讲和RFC（request for comments）[Github 仓库](https://github.com/vuejs/rfcs)

## Vue3 使用基于Proxy的观察者

响应式是VueJS的核心，它需要数据有依赖，观察、更新数据来反应任何变化。

Vue2使用 [Object.defineProperty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) 去创建getters 和 setters 实现响应式。

使用 Object.defineProperty 这里有两个主要的问题，事实上，他们足够了，甚至在[官方文档](https://vuejs.org/v2/guide/reactivity.html#Change-Detection-Caveats)中也提到了

1. 响应式属性不能够动态添加、删除
2. 这里有两个关于动态数组的问题
    - 通过下标设置元素不是响应式的
    - 修改数组长度是非响应式的

```js
// 通过下标设置数组元素 - 非响应式
vm.items[itemOfItem] = newVal

// 修改数组长度 - 非响应式
vm.items.length = newLength
```

## 为什么使用基于Proxy的观察者

Vue3的解决方案是基于 [Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 的观察者，避免了原来的功能限制。

老版本和新版本的关键区别，Vue2中Object.defineProperty改变原始数据但是Proxy没有。它使用虚拟化的目标数据，设置不同的处理方法来监听数据的getters和setters。

这个新的方式意味着响应式属性能够在不使用[vm.$set](https://vuejs.org/v2/api/#Vue-set)的情况下添加、删除属性。它也消除了Vue2中关于数组的无效极端情况。

根据尤雨溪在 [Medium Post](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf)的最好的总结，基于Proxy的观察者能够支持一下方面：

- 监测属性的添加、删除
- 监测数组下标和长度的变化
- 支持 Map、Set、WeakMap、WeakSet

在[VueMaster](https://www.vuemastery.com/courses/advanced-components/evan-you-on-proxies/)有一份关于如何实现基于Proxy的观察者的很棒的总结。

## 介绍下 Composition API

在Vue3中这是迄今为止最著名的变化，它能够帮助我们组织、重用代码。

现在如果你在工作中使用Vue，你应该应该用过 **Options Api**，Options API通过：data、computed、methods等等属性来组织我们的代码。

这是一个非常直观的系统，吸引了成千上万的人尝试VueJS，但是它让维护一个巨大的组件非常困难。针对一个功能的代码被分散到几个地方，每个地方相隔数百行。

**可维护性、可读性变成了主要的问题**

让我们看下 Composition API 是如何工作的。

```js
import { reactive, computed } from 'vue'
export default {
  setup(){
    // vue composition api 暴露vue的核心响应式能力
    let state = reactive({
      input: '',
      groceries: [],
      groceriesLeft: computed(() => groceries.length)
    });

    function addGrocery() {
      state.groceries.push(state.input);
      state.input = '';
    }

    function deleteGrocery(index) {
      state.groceries,splice(index, 1);
    }

    return {
      state,
      addGrocery,
      deleteGrocery
    }
  }
}
```

**让我们逐步分解发生了什么**

```js
import { reactive, computed } from 'vue'
```

Vue Composition API暴露了Vue中的很多核心能力，比如响应式、组件方法，所以我们来引入他们。

```js
export default {
  setup() {
```

[setup方法](https://vue-composition-api-rfc.netlify.com/#api-introduction)是Vue3中最大的变化之一，本质上，它能够让我们确定将哪些传递给模板，无论返回什么都可以在模板中访问。

我们能够设置响应式数据、生命周期钩子、计算属性、定义方法，返回任何我们想要的东西。

```js
let state = reactive({
  input: '',
  groceries: [],
  groceriesLeft: computed(() => groceries.length)
});
```

通过将所有数据包装在响应式方法里，内部所有的都变成了响应式的。这个状态模式来自 [Composition API 文档](https://vue-composition-api-rfc.netlify.com/#api-introduction)。

一个值得注意的是我们声明 groceriesLeft 变量的方式，你能看到，它是一个计算属性，并且定义在setup方法中。不再有分开声明的计算属性了。

```js
function addGrocery() {
  state.groceries.push(state.input);
  state.input = '';
}

function deleteGrocery(index) {
  state.groceries,splice(index, 1);
}
```

这是典型的函数，唯一独特的事我们需要通过状态对象访问所有定义在状态对象中的响应式数据。但是这不是Vue3特有的，它就是普通JavaScript对象。

```js
return {
  state,
  addGrocery,
  deleteGrocery
}
```

最后，我们想要在setup方法返回这些函数，这让属性和方法能够在模板中被访问。谢天谢地，模板还和原来一样，没啥变化。

第一次听说这些时，有很多反对声音，因为人们不想被迫重新考虑他们的开发策略。然而我们听说这将是纯净的添加，人们仍然可以没有任何问题的使用Options API。

