
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