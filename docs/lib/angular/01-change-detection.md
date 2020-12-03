# 变更监测

浏览器渲染：模型 -> 视图。

模型可以是JavaScript中的原始数据类型、对象、数组或其他数据对象。视图可以是页面的表单、段落、按钮，这些页面元素使用 DOM 来表示。

![看图知意](https://segmentfault.com/img/bVKRzW?w=729&h=207)

变化监测器的任务：

- 监测模型变化
- 通知视图更新

## 变化和事件

- Events: click/mouseover/keyup
- Timers: setInterval/setTimeout
- XHRs: Ajax(GET/POST...)

所有的异步操作都可能引起模型的变化


## Zones

Zone.js 最初是 ECMAScript 规范建议之一，后面被撤回了。Angular 团队实现了 JavaScript 版本的 zone.js，它是用于拦截和跟踪异步工作的机制。

Zone.js 的能力

- 拦截异步任务调度

<!-- TODO -->

## 参考

- [https://segmentfault.com/a/1190000008747225](https://segmentfault.com/a/1190000008747225) change detection 1

- [https://segmentfault.com/a/1190000008754052](https://segmentfault.com/a/1190000008754052) change detection 2

- [https://github.com/angular/angular/tree/master/packages/zone.js](https://github.com/angular/angular/tree/master/packages/zone.js) Zone.js