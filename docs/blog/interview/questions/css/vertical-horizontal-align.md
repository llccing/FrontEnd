# 垂直水平居中

<!-- ![理解图](./imgs/vertical-horizontal/vertical-horizontal.png) -->

## CSS布局分块：

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


## 1. 文本的垂直水平居中

line-height + text-align: center;

[demo](https://jsfiddle.net/rv469vn8/)

__仅适合单行__

## 2.利用盒模型的垂直水平居中

<!-- ![理解图](./imgs/vertical-horizontal/box.png) -->

一般我们说的盒模型指的是块级盒的盒模型，也只有块级盒的盒模型用的多一点，块级盒的block-level box又是分别由margin-box, border-box, padding-box, content-box。

### padding填充 

[给个链接](https://codepen.io/Dudy/pen/EjRvgp?editors=110)

[calc()计算的方式](https://codepen.io/Dudy/pen/RPJZVw?editors=110)

我觉得用padding来设置边距有点问题，实际不应这么做，当然这也只是我现在的想法。

### margin填充

[水平居中靠谱](https://codepen.io/Dudy/pen/jPKxYL?editors=110)

使用margin填充需要知道元素的宽度，这点不灵活，CSS3 width: fix-content，可动态计算元素的宽度，可以解决问题。

[fix-content](https://codepen.io/Dudy/pen/yNEZVQ)

// todo 



