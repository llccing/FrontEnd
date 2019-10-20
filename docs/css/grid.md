# Grid

## 概述
网格布局是最强大的CSS布局方案。

它将网页分成一个个网格，可以任意组合不同的网格，做出各种各样的布局。

Grid布局与Flex布局有一定的相似性，都可以指定容器内部多个项目的位置。但是，也存在重大区别，

Flex布局是轴线布局，只能指定“项目”针对轴线的位置，可以看作是一维布局。Grid布局则是将容器划分为“行”和“列”，产生单元格，然后指定“项目所在”的单元格，可以看做是而为布局。Grid布局远比Flex布局强大。

## 基本概念


### 容器和项目

采用网格布局的区域，称为“容器”（container）。 容器内部采用网格定位的子元素，称为“项目”（item）。

```html
<div>
  <div><p>1</p></div>
  <div><p>2</p></div>
  <div><p>3</p></div>
</div>
```
上面代码段中，最外层div为容器，内层div为项目，p元素是子元素而不是项目。

Grid布局只对项目生效。

### 行和列

容器中，水平区域称为“行”（row），垂直区域称为“列”（column）。

![row and column](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032502.png)

### 单元格

行和列的交叉区域，称为“单元格”（cell）。
正常情况下，n行和m列会产生n*m个单元格。

### 网格线
划分网格的线，称为“网格线”。水平网格线划分出行，垂直网格线划分出列。

n行有n+1根水平网格线，m列有m+1根垂直网格线。

![row lines and column lines](https://www.wangbase.com/blogimg/asset/201903/1_bg2019032503.png)


## 容器属性

Grid布局属性分为两类，根据定义对象的不同分为容器属性和项目属性。

### display

```display: grid```指定一个容器采用网格布局。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid" src="https://codepen.io/llccing/embed/mddOLYd?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/mddOLYd'>css-grid</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

默认情况下，容器元素都是块级元素，但是也可以设置成行内元素。

```css
div{
  display: inline-block;
}
```

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid" src="https://codepen.io/llccing/embed/vYYyjwo?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/vYYyjwo'>css-grid</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### grid-template-columns、grid-template-rows

grid-template-columns属性定义每一列的列宽，grid-template-rows定义每一行的行高.

这两个属性的属性值的单位支持px、百分比，同时可以使用简写方式```repeat(3, 33%)```

- repeat(次数，长度)

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="css,result" data-user="llccing" data-slug-hash="LYYbmKq" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="css-grid">
  <span>See the Pen <a href="https://codepen.io/llccing/pen/LYYbmKq">
  css-grid</a> by llccing (<a href="https://codepen.io/llccing">@llccing</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

- auto-fill 关键字

如下设置好100px宽度，然后自动填充，直到填满一行后换行继续。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid" src="https://codepen.io/llccing/embed/VwwmdXv?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/VwwmdXv'>css-grid</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- fr关键字

为了方便表示比例，网格布局提供fr关键字（fraction 的缩写，表示“片段”）。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid" src="https://codepen.io/llccing/embed/OJJbEZm?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/OJJbEZm'>css-grid</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- minmax()

minmax(最小值，最大值) 函数产生一个长度范围，表示长度就在这个范围之中。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid" src="https://codepen.io/llccing/embed/WNNoyyM?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/WNNoyyM'>css-grid</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- auto 关键字



## 参考

- [阮一峰 - Gird网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)