
# Vue.js源码目录设计

src下的源码
```js
src
|-- compiler
|-- core 
|-- platforms
|-- server
|-- sfc
|-- shared
```

## compiler
编译，把模板改成ast语法树、ast语法树优化，代码生成等。

## core
核心代码，包含内置组件、全局API封装、Vue实例化、观察者（什么意思）、虚拟DOM、工具函数等。

重点

## platform
区分平台，web、weex。

## server 
服务端渲染相关。

## sfc
解析.vue单文件组件为一个JavaScript对象

## shared
Vue.js的工具方法，可以在client和server的Vue.js共享。

## 总结
写的好。
……