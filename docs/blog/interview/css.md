# css

[[toc]]

> 写个淘宝首页需要几天

## 垂直居中

:::tip
利用CSS进行元素的水平居中，比较简单，行内元素设置其父元素的text-align:center，块级元素设置其本身的
margin-left和margin-right为auto即可。设置垂直居中则有些麻烦，现整理记录如下。
:::


### line-height方法

[demo](https://jsfiddle.net/qmzm6nyu/1/)

通过设置子容器的line-height, 让line-height的高度大于font-size来实现垂直居中。或者设置子容器的height与line-height相等来解决。

__注意：line-height方法适用于一行文字的垂直居中，多行会有问题。__

### 垂直居中图片

[demo](https://jsfiddle.net/qmzm6nyu/2/)

给父容器一个line-height，然后设置子容器vertical-align:middle;即可实现图片的垂直居中。

### CSS Table方法

[demo](https://jsfiddle.net/qmzm6nyu/3/)

父容器设置display: table; 子容器设置display: table-cell; vertical-align: middle;
即可实现居中，且内容为多行也可以居中。据说ie7的bug，子容器要用display: inline-block;解决。

### 绝对定位和负外边距

[demo](https://jsfiddle.net/qmzm6nyu/4/)

父容器相对定位，子容器绝对定位，子元素的left、top为50%，这时中心是子元素的左上角，所以要向top、left移动元素宽、高的一半。设置margin为负值即可。若知道子元素的固定宽高更适合。这种方式设置了子元素的水平垂直都居中。

### 绝对定位和拉伸

[demo](https://jsfiddle.net/qmzm6nyu/5/)

子绝父相，记得曾经稀里糊涂面试了几个前端开发后学会了这个词。通过设子元素top, left, right, bottom都为0，
不仅实现了垂直居中，水平方向也居中了。（不支持ie7及以下，难道还有人用IE7 #_#）

### 等上下的padding

[demo](https://jsfiddle.net/qmzm6nyu/6/)

很有意思的方法，都留出padding值，使内容居中，还不用定位。
在CSS中设置的顶部和底部的两个等高距离的填充。确保在子容器的内容将是垂直的。

### 兄弟元素浮动弟元素浮动

[demo](https://jsfiddle.net/qmzm6nyu/7/)

兄弟元素浮动，高度为50%，设置负margin值，为居中元素高度的一半，即可垂直居中。不过引入了空标签.floater;

### Flexbox布局

[demo](https://jsfiddle.net/qmzm6nyu/9/)

最简单的一种布局方式，在写法上。之前工作中写过flex，留下了阴影，导致至今听到flex就不寒而栗。Flexbox为CSS3属性，
对于旧式浏览器兼容性不好，慢慢会流行，手机端的布局貌似已经用上了。


## 垂直水平居中


### CSS布局分块：

- 盒子内部的布局
    - 文本的布局
    - 盒模型本身的布局
- 盒子之间的布局 [visual-formatting](http://www.cnblogs.com/chuangweili/p/5166206.html)
    - 脱离正常流（normal flow）的盒子布局
        - absolute布局
        - float布局
    - 正常流（normal flow）的盒子布局
        - BFC布局
        - IFC布局
        - FFC布局
        - table布局
        - CSS grid布局

所有的CSS布局其实都是围绕着这些布局模块来的，水平垂直居中也是一样。

### 1. 文本的垂直水平居中

line-height + text-align: center;

[demo](https://jsfiddle.net/rv469vn8/)

__仅适合单行__

### 2.利用盒模型的垂直水平居中

<!-- ![理解图](./imgs/vertical-horizontal/box.png) -->

一般我们说的盒模型指的是块级盒的盒模型，也只有块级盒的盒模型用的多一点，块级盒的block-level box又是分别由margin-box, border-box, padding-box, content-box。

#### padding填充 

[给个链接](https://codepen.io/Dudy/pen/EjRvgp?editors=110)

[calc()计算的方式](https://codepen.io/Dudy/pen/RPJZVw?editors=110)

我觉得用padding来设置边距有点问题，实际不应这么做，当然这也只是我现在的想法。

#### margin填充

[水平居中靠谱](https://codepen.io/Dudy/pen/jPKxYL?editors=110)

使用margin填充需要知道元素的宽度，这点不灵活，CSS3 width: fix-content，可动态计算元素的宽度，可以解决问题。

[fix-content](https://codepen.io/Dudy/pen/yNEZVQ)


## 双飞翼、圣杯布局

### 双飞翼
```html
<div class="header">header</div>

<div class="content">
  <div class="middle">
    <div class="inner">inner</div>
  </div>

  <div class="left">left</div>
  <div class="right">right</div>
</div>

<div class="footer" >footer</div>

```

```css
.content {
  overflow: hidden;
}

.middle,
.left,
.right {
  float: left;
}

.middle {
  width: 100%;
}

.inner {
  margin: 0 100px;
}

.left,
.right {
  width: 100px;
}

.left {
  margin-left: -100%
}

.right {
  margin-left: -100px;
}
```

### 圣杯布局
```html
<div class="header">header</div>
<div class="content">
  <div class="middle">middle</div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
<div class="footer">footer</div>
```

```css
.content {
  overflow: hidden;
  padding: 0 100px;
}

.middle,
.left,
.right {
  float: left;
}

.middle {
  width: 100%
}

.left,
.right {
  width: 100px;
}

.left {
  position: relative;
  margin-left: -100%;
  left: -100px;
}

.right {
  margin-right: -100px;
}
```

## 三列布局

1. [绝对定位法](https://jsfiddle.net/u66f9agk/3/)

2. [流体布局](https://jsfiddle.net/u66f9agk/1/)

3. [BFC三栏布局](https://jsfiddle.net/wuzahhcc/)

    BFC，Block Formatting Context，块级格式上下文。是一个独立渲染的区域,与外部区域互不影响。

    BFC规则：

    1. 内部的Box在垂直方向，一个接一个的放置。
    2. Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻的Box的margin会发生重叠。
    3. 每个元素的marginbox的左边，与包含块border box的左边相接触（对于从左往右的格式化,否则相反）。即使存在浮动也是如此。
    4. BFC区域不会与float box重叠。
    5. BFC就是页面上一个隔离的独立容器，容器里面的元素不会影响到外边的元素。反之亦如此。
    6. 计算BFC高度时，浮动元素也参与计算。

    如何生成BFC:

    1. 根元素？
    2. float属性值不为none
    3. position为absolute或者fixed
    4. display为inline-block, table-cell, table-caption, flex, inline-flex
    5. overflow不为visible

    用处：（稍后补例子）
    1. 两栏布局
    2. 清除内部浮动
    3. 防止垂直margin重叠

> 绝对定位布局、流体布局、BFC三栏布局的共性缺点，就是主体内容放在最后加载，影响了用户体验。


## 布局题：高度为宽度的一半

:::tip
实现一个布局，div宽度占80%，高度为宽度的一半。
:::

### 高度为宽度的一半
```html
<div class="con">
  <div class="box">
    this is page 1
  </div>
</div>
```

方式一
```css
.con {
  width: 80%;
  height: 0;
  padding-bottom: 40%;

  /* 此处为了展示形象，和题目本身无关 */
  margin: auto;
  background: #777;
}
```

方式二
```css
 .con{
  width: 80vw;
  height: 40vw;

  /* 此处为了展示方便 */
  background-color: #999;
  margin: 0 auto;
}
```

### 实现正方形布局

```html
<body>
  <div class="con">
    <span>6666</span>
  </div>
  <div class="con">
    <span>6666</span>
  </div>
</body>
```

```css
body {
  font-size: 0;
  text-align: center;
}

.con {
  display: inline-block;
  width: 50%;
  background-color: #ddd;
  font-size: 12px;
  position: relative;
  vertical-align: middle;
}

.con:nth-child(2) {
  background: orange;
}

.con::before {
  content: '';
  display: inline-block;
  padding-bottom: 100%;
  width: .1px;
  vertical-align: middle;
}

span {
  display: inline-block;
  vertical-align: middle;
  font-size: 4em;
  color: #fff;
}
```

## 用css实现菜单的三条横线、和关闭的X按钮

> 一般的情况怎么可能会自己去实现3条横线或者关闭按钮，不过作为知识点，可能还是要了解一下。

[三线菜单](https://jsfiddle.net/4n2qpn8d/1/)

结合着网上的资料，试着做了一下，其实这里面主要是background-clip这个属性的应用，以这个作为面试题的我只能说，你是在考验面试者的道德吗，考验他他们的百度提取关键词的能力吗。

background-clip: border-box|padding-box|content-box;

- boder-box: 背景到边框
- padding-box: 背景到内边距框
- content-box: 背景到内容框


默认值 border-box

[w3school demo](http://www.w3school.com.cn/tiy/c.asp?f=css_background-clip)

CSS3的属性，规定了背景显示到的区域。

## img元素是块级的还是行内的

[inline-block](https://segmentfault.com/q/1010000001862222)

貌似是行内-块级的，那么这样的元素设置垂直水平居中时，可以用vertical-align 和 text-align 吗，可以试一下。
