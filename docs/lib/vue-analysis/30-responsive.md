
# 深入响应式原理

## 介绍

```js
<input v-model="message"/>

export default {
  data(){
    message: ''
  }
}
```

修改message的值，DOM就会改变，究竟如何做到的呢。

## 响应式对象
    Vue.js不兼容IE8及以下。

### Object.defineProperty

```js
// obj 要在其上定义属性的对象
// prop 定义或修改属性的名称
// descriptor 将被定义或修改的属性描述符
Object.defineProperty(obj, prop, descriptor);
```

```descriptor```是比较核心的，有很多可选值。其中```get```、```set```是我们最关心的，
get是给obj一个属性提供的getter方法，当我们访问属性时就会触发getter方法，
set是給obj一个属性提供的setter方法，当我们对该属性做修改的时候就会触发setter方法。

一个对象拥有了``getter```、```setter````，我们可以简单地把这个对象称为响应式对象。

### initState
