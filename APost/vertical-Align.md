# 垂直居中的几种实现方式。

	利用CSS进行元素的水平居中，比较简单，行内元素设置其父元素的text-align:center，块级元素设置其本身的
	margin-left和margin-right为auto即可。设置垂直居中则有些麻烦，现整理记录如下。

## line-height方法

[demo](https://jsfiddle.net/qmzm6nyu/1/)

通过设置子容器的line-height, 让line-height的高度大于font-size来实现垂直居中。或者设置子容器的height与line-height相等来解决。

__注意：line-height方法适用于一行文字的垂直居中，多行会有问题。__

## 垂直居中图片

[demo](https://jsfiddle.net/qmzm6nyu/2/)

给父容器一个line-height，然后设置子容器vertical-align:middle;即可实现图片的垂直居中。

## CSS Table方法

[demo](https://jsfiddle.net/qmzm6nyu/3/)

父容器设置display: table; 子容器设置display: table-cell; vertical-align: middle;
即可实现居中，且内容为多行也可以居中。据说ie7的bug，子容器要用display: inline-block;解决。

## 绝对定位和负外边距

[demo](https://jsfiddle.net/qmzm6nyu/4/)

父容器相对定位，子容器绝对定位，子元素的left、top为50%，这时中心是子元素的左上角，所以要向top、left移动元素宽、高的一半。设置margin为负值即可。若知道子元素的固定宽高更适合。这种方式设置了子元素的水平垂直都居中。

## 绝对定位和拉伸

[demo](https://jsfiddle.net/qmzm6nyu/5/)

子绝父相，记得曾经稀里糊涂面试了几个前端开发后学会了这个词。通过设子元素top, left, right, bottom都为0，
不仅实现了垂直居中，水平方向也居中了。（不支持ie7及以下，难道还有人用IE7 #_#）

## 等上下的padding

[demo](https://jsfiddle.net/qmzm6nyu/6/)

很有意思的方法，都留出padding值，使内容居中，还不用定位。
在CSS中设置的顶部和底部的两个等高距离的填充。确保在子容器的内容将是垂直的。

## 兄弟元素浮动

[demo](https://jsfiddle.net/qmzm6nyu/7/)

兄弟元素浮动，高度为50%，设置负margin值，为居中元素高度的一半，即可垂直居中。不过引入了空标签.floater;

## Flexbox布局

[demo](https://jsfiddle.net/qmzm6nyu/9/)

最简单的一种布局方式，在写法上。之前工作中写过flex，留下了阴影，导致至今听到flex就不寒而栗。Flexbox为CSS3属性，
对于旧式浏览器兼容性不好，慢慢会流行，手机端的布局貌似已经用上了。

