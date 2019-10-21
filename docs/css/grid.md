# Grid

## [兼容性](https://caniuse.com/#feat=css-grid)

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

auto关键字表示由浏览器自己决定长度，基本上等于该列单元格的最大宽度。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid-auto" src="https://codepen.io/llccing/embed/gOOgaMG?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/gOOgaMG'>css-grid-auto</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- 网格线的名称

可以使用方括号指定每一根网格线的名称，方便以后的引用。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid-rows-columns-name" src="https://codepen.io/llccing/embed/gOOgagX?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/gOOgagX'>css-grid-rows-columns-name</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

三行三列，有4根垂直网格线，4个水平网格线。方括号中依次是这八根的名字。

网格布局允许同一根线有多个名字，比如[fifth-line row-5]。

- 布局实例

下面使用网格布局实现，左侧固定，右侧自适应。还实现了传统的12网格布局，很方便。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid-layout" src="https://codepen.io/llccing/embed/zYYNvdG?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/zYYNvdG'>css-grid-layout</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### row-gap/column-gap/gap

row-gap属性设置行间距，column-gap属性设置列间距。
gap属性是缩写，```grid-gap: <grid-row-gap> <grid-column-gap>```

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid-rows-columns-name" src="https://codepen.io/llccing/embed/YzzNyvr?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/YzzNyvr'>css-grid-rows-columns-name</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

曾经的写法有
```
grid-row-gap/grid-column-gap/grid-gap
```

### grid-template-areas

网格允许指定区域（area），一个区域由单个或多个单元格组成。grid-template-areas属性用于定义区域。

搭配grid-area属性使用。

能够将多个单元格合并成一个区域。

同时能够使用很少的元素实现布局实例。

某些区域不使用，可以用点（.）表示。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid-template-areas" src="https://codepen.io/llccing/embed/zYYNvyB?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/zYYNvyB'>css-grid-template-areas</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

注意，区域的命名会影响网格线。每个区域的起始网格线自动命名为 区域名-start，终止网格线命名为 区域名-end。

### grid-auto-flow

grid-auto-flow: row | column | row dense | column dense

row dense 表示先行后列，并且尽可能紧凑。

表示网格放置顺序，默认是row，先行后列。

<iframe height="265" style="width: 100%;" scrolling="no" title="css-grid-auto-flow" src="https://codepen.io/llccing/embed/wvvgMJV?height=265&theme-id=0&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/wvvgMJV'>css-grid-auto-flow</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

以上代码的实现需要用到后面讲到的属性，grid-column-start/grid-column-end;

## 参考

- [阮一峰 - Gird网格布局教程](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)