# 响应式Web设计

主要是应用在官网的设计，

## 实现方式

### 媒体查询

CSS3媒体查询可以让我们针对不同的媒体类型定义不同的样式，当浏览器窗口变化的过程中，页面会根据浏览器的宽度和高度重新渲染页面。

定义浏览器的分隔点，可以参考bootstrap或者其他更细致的方案。

移动优先还是pc优先，暂时还没有看到有实质的区别。

<iframe height="265" style="width: 100%;" scrolling="no" title="responsive-layout-media query" src="https://codepen.io/llccing/embed/abbZJXr?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/abbZJXr'>responsive-layout-media query</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 百分比布局

Bootstrap的栅格布局原理就是百分比，CSS3支持最大最小长度值，可以将百分比和max(min)一起结合使用。

<iframe height="265" style="width: 100%;" scrolling="no" title="responsive-layout-percent" src="https://codepen.io/llccing/embed/QWWEvZo?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/QWWEvZo'>responsive-layout-percent</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


#### 缺点

- 计算困难，如果按照设计稿定义元素宽高，必须换算成百分比单位。
- 各个属性中如果使用百分比，相对父元素的属性并不是唯一的。比如width和height相对父元素的width和height，儿margin和padding无论垂直还是水平方向都是相对父元素的宽度、border-radius则是相对自身宽度，造成我们使用百分比单位容易造成布局问题变得复杂。

### rem布局

### 视口单位

## 参考

- [知乎响应式布局释疑](https://www.zhihu.com/question/20976405)
- [前端响应式布局原理与方案](https://juejin.im/post/5caaa230e51d452b672f9703)
- [responsive web design: 50 examples and best practices](https://designmodo.com/responsive-design-examples/)
- [张鑫旭 vm-viewport-responsive-layout](https://www.zhangxinxu.com/wordpress/2016/08/vw-viewport-responsive-layout-typography/)
- [张鑫旭 pseudo-response-layout](https://www.zhangxinxu.com/wordpress/2016/06/pseudo-response-layout-base-on-screen-width/)