# arguments

> arguments 是一个对应于传递给函数的参数的类数组对象

## 描述

箭头函数中不可用，可以使用arguments对象在函数中引用函数的参数。

<iframe height="265" style="width: 100%;" scrolling="no" title="js-basic-argumetns" src="https://codepen.io/llccing/embed/abbKpPb?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/abbKpPb'>js-basic-argumetns</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 属性

### arguments.callee

表示函数本身

### arguments.caller 已经弃用

```js
function foo(){
  // 通过这样的方式
  foo.caller()
  // 或者这样，能够获取调用者
  arguments.callee.caller();
}
```

### arguments.length

很好理解的属性，输出传入函数内的参数的个数。

### arguments[@@iterator]

<iframe height="265" style="width: 100%;" scrolling="no" title="js-basic-arguments-2" src="https://codepen.io/llccing/embed/WNNyMNN?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/WNNyMNN'>js-basic-arguments-2</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 场景

### 剩余参数、默认参数和解构赋值参数



## 参考

- [MDN arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments)
- [JavaScript arguments 对象全面介绍](https://zhuanlan.zhihu.com/p/23007032)
- [argument[@@iterator]](https://s0developer0mozilla0org.icopy.site/en-US/docs/Web/JavaScript/Reference/Functions/arguments/@@iterator)