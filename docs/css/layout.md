# 常用的布局实现

- 左右布局
- 上左右布局
- 上左中右布局


## 流体布局（是不是也称为流式布局）

<iframe height="265" style="width: 100%;" scrolling="no" title="layout-float" src="https://codepen.io/llccing/embed/vYYyoQM?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/vYYyoQM'>layout-float</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

左右模块各自左右浮动，中间模块的margin值使中间模块宽度自适应。缺点是主要内容无法预先加载，当页面内容过多时影响用户体验。

## [BFC](http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)三栏布局

<iframe height="265" style="width: 100%;" scrolling="no" title="layout-float-BFC" src="https://codepen.io/llccing/embed/zYYogeW?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/zYYogeW'>layout-float-BFC</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

缺点是主要内容不能最先加载，当页面内容过多时影响用户体验。为了解决这个问题才用到双飞翼布局。

## 双飞翼布局

<iframe height="265" style="width: 100%;" scrolling="no" title="双飞翼" src="https://codepen.io/llccing/embed/JzZEPv?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/JzZEPv'>双飞翼</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

利用浮动元素margin负值的应用。主体内容可以先加载，HTML代码结构稍微复杂点。

## 圣杯布局

<iframe height="265" style="width: 100%;" scrolling="no" title="圣杯" src="https://codepen.io/llccing/embed/oVyzYj?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/oVyzYj'>圣杯</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

跟双飞翼布局很像，细节上有区别，HTML的结构相对简单，但是样式定义就稍微复杂，也是优先加载主体内容。

## Flex布局

<iframe height="265" style="width: 100%;" scrolling="no" title="layout-flex" src="https://codepen.io/llccing/embed/qBBqeGQ?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/qBBqeGQ'>layout-flex</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

需要考虑[兼容性](http://caniuse.com/#feat=flexbox)。

## Table布局

<iframe height="265" style="width: 100%;" scrolling="no" title="layout-table" src="https://codepen.io/llccing/embed/wvvoVVG?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/wvvoVVG'>layout-table</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Table布局的缺点是无法设置栏间距。不能设置margin值，有padding值。

## 绝对定位布局

<iframe height="265" style="width: 100%;" scrolling="no" title="layout-absolute" src="https://codepen.io/llccing/embed/xxxRvva?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/xxxRvva'>layout-absolute</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

简单实用，主要内容可以先加载。

## Bootstrap布局

<iframe height="265" style="width: 100%;" scrolling="no" title="layout-bootstrap" src="https://codepen.io/llccing/embed/NWWdKKR?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/NWWdKKR'>layout-bootstrap</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

上面的例子是简化了bootstrap4的 album这个demo的部分代码，其实要是熟悉bootstrap的语法，所有的样式都通过bootstrap来做，也会非常统一。

## 参考
1. [详解CSS七种三栏布局技巧](https://zhuanlan.zhihu.com/p/25070186?refer=learncoding)
