> 样式、布局是我的短板，面试官真的会可着你的短板问你问题……

## 1.三列布局：

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

4.  // todo



## 2.冒泡排序

[for写法](https://jsfiddle.net/408o74u5/) 

[while写法](https://jsfiddle.net/408o74u5/1/)


原理：
1. 比较相邻的两个元素。如果第一个比第二个大，就交换他们两个。
2. 对每一对相邻的元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该是最大的数。
3. 针对所有元素重复以上步骤，除了最后一个。
4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

平均复杂度：O(n2)

## 3.数组排序

[普通数组排序](https://jsfiddle.net/0rudag2q/)

[对象数组排序](https://jsfiddle.net/0rudag2q/1/)

## 4.用css实现菜单的三条横线、和关闭的X按钮。

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


## 5.样式问题之-img元素是块级的还是行内的。

[inline-block](https://segmentfault.com/q/1010000001862222)

貌似是行内-块级的，那么这样的元素设置垂直水平居中时，可以用vertical-align 和 text-align 吗，可以试一下。

## js的prototype 和 __proto__ 区别和关系

[细致答案](https://www.zhihu.com/question/34183746)

