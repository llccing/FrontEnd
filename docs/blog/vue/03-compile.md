# Vue.js源码构建

Vue.js源码是通过Rollup构建的，配置在build目录下。

## Runtime only VS Runtime + Compiler

使用Runtime only时，需要借助如webpack的vue-loader工具把.vue文件编译成JavaScript，因为这是在编译阶段做的，所以Runtime only只包含运行时的Vue.js代码，因此代码体积也更轻量。

Runtime+Compiler的使用
如果我们没有对代码做预编译，但又使用了Vue的template属性并传入了一个字符串，则需要在客户端编译模板。
```js
// 需要编译器的版本
new Vue({
  template: '<div>{{ hi }}</div>'
})

```

```js
// 不需要编译的版本
new Vue({
  render(h){
    return h('div', this.hi)
  }
})

```

## 总结
通过这节，我们了解了Vue.js的构建过程。也知道了Vue.js的Runtime Only和Runtime Compiler的区别。