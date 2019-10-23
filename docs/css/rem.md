# rem

## 什么是rem

rem和em都是相对单位，CSS3引入rem。

:::tip
em作为font-size的单位时，代表父元素的字体大小。**em作为其他属性的单位时，代表自身字体大小。**
:::

<iframe height="265" style="width: 100%;" scrolling="no" title="css-em" src="https://codepen.io/llccing/embed/zYYZKVE?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/zYYZKVE'>css-em</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

使用em做弹性布局时，有两个缺点:
- 层层嵌套，导致计算复杂。
- 牵一发而动全身，一旦某个节点字体大小变化，后代元素都得重新计算。


:::tip
rem作用于非根元素时，相对于根元素字体大小；rem作用于根元素时，相对于其初始字体大小。
:::

<iframe height="265" style="width: 100%;" scrolling="no" title="css-em" src="https://codepen.io/llccing/embed/mddWObg?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/mddWObg'>css-em</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## rem布局原理

rem布局的本质是什么？是等比缩放，一般是基于宽度。


使用sass来写rem布局。
<iframe height="265" style="width: 100%;" scrolling="no" title="css-em" src="https://codepen.io/llccing/embed/Vwwpmag?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/Vwwpmag'>css-em</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

颜海镜大佬的demo中用的是scss语法，sass语法是没有分号、大括号的。

## 比rem更好的布局方案 vw/vh

:::tip
vw -- 视口宽度的1/100；vh -- 视口高度的1/100。
:::

<iframe height="265" style="width: 100%;" scrolling="no" title="css-vw-vh" src="https://codepen.io/llccing/embed/xxxqdKW?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/xxxqdKW'>css-vw-vh</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### rem/vw兼容性

rem ios@4.1+ android@2.1+

vw  ios@6.1+ android@4.4+

## rem使用场景



>内容型的网站不适合rem，比如百度知道、百度经验。偏app类、图标类、图片类，如淘宝、活动页面，比较适合rem。

[但是有个问题是bootstrap4默认采用了rem布局](https://github.com/twbs/bootstrap/issues/19943)

### rem的问题

- 字体大小不能用rem。由于设置了根元素的字体和大小，会影响所有没有设置字体的元素，因为字体大小会被继承。所以我们可以再body元素上做修正

<iframe height="265" style="width: 100%;" scrolling="no" title="css-rem-fix-body" src="https://codepen.io/llccing/embed/BaaWZvx?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/BaaWZvx'>css-rem-fix-body</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- 如果PC端浏览，页面过宽需要再次修正。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-rem-max-width" src="https://codepen.io/llccing/embed/wvvJeOx?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/wvvJeOx'>css-rem-max-width</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## 参考
- [rem布局原理解析](https://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/) - 颜海镜