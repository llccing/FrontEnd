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

