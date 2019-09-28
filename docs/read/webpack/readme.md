# 3个星

书籍的作者是个[孩子](http://resume.wuhaolin.cn/)，像我一样的孩子，不过比我小一岁，大家同是16年毕业，人家是真的优秀。

这本书知识点是挺全的，就是过于简单，没有深入的内容，字里行间透露着青涩，像我一样的青涩。

## 目录概览
1. 入门（27）
2. 配置（32）
3. 实战（91）
4. 优化（73）
5. 原理（32）

一共五章内容，除了附录外265页内容。大部分的篇幅放在了实战和优化部分，真正有内容的原理部分涉及的较少。

## 知识点

### Plugin实现

```js
class BasicPlugin{
  constructor(options){
    // 在插件实例化时，获取用户设置的配置
  }

  apply(compiler){
    compiler.plugin('emit', ()=> {
      // 处理
    })
  }
}
```

在构建过程中，webpack在不同时机会触发各种事件，通过给plugin传递的compiler参数，监听插件感兴趣的事件。
通过```compiler.plugin('eventName', ()=>{})，监听事件。```

通过```compiler.plugin```能够监听事件，那事件触发是通过```compiler```


插件的执行逻辑，既可以是同步，也可以异步执行，如果是异步，那么当异步逻辑执行万，主动调用回调函数```function(compilation, cb)```的第二个参数，```cb()```即可继续执行。

### Loader实现

    webpack能够处理各种资源的核心就是Loader，通过各种各样的Loader来处理各种资源。

```js
// source是处理前的内容
module.exports = function(source){
  // 执行各种处理逻辑
  return source
}
```
这个处理函数的```this```指向的compiler对象，所以能够那种各种配置，在Loader中处理。