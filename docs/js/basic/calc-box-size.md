# 计算盒模型的各种尺寸

上来一张图

![经典图](http://llccing.cn:8000/files/size/size1.png)

## offsetWidth/offsetHeight/offsetLeft/offsetTop

offsetWidth/offsetHeight

返回元素的宽度/高度，不包含滚动内容的宽度/高度包括元素的边框、内边距和滚动条。


offsetLeft/offsetTop

只读属性，首先需要确定offsetParent。offsetParent指的是距离该元素最近的position不为static的祖先元素，如果没有则指向body元素。确定了offsetParent，offsetLeft指的是元素左侧距离offsetParent的距离，offsetTop则指上侧偏移的距离。


## scrollWidth/scrollHeight/scrollLeft/scrollTop

scrollWidth/scrollHeight

返回元素的整体尺寸，包括滚动部分。包括padding，但不包含margin和border。

scrollLeft/scrollTop

元素发生滚动时的滚动距离

## clientWidth/clientHeight/clientLeft/clientTop

clientWidth/clientHeight

包括padding，但不包括border、margin和滚动条。

clientLeft/clientTop

指的是元素边框的宽度。

## pageX/pageY

鼠标点击的位置，相对body，包含被滚动的body内容的距离

## cilentX/clientY

点击位置距离当前body可视区域的x，y轴坐标

## x,y

= pageX、pageY，点击位置，相对body，包含滚动的body的内容的距离

## offsetX/offsetY

相对于带有定位的父盒子的x，y坐标（描述有些模糊）

## screenX/screenY

点击的位置，距离当前电脑屏幕的x，y坐标

## 实践

<iframe height="265" style="width: 100%;" scrolling="no" title="calc-size" src="https://codepen.io/llccing/embed/OJJwJYx?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/OJJwJYx'>calc-size</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 参考
- [stackoverflow understanding-offset-clientwidth-scrollwidth](https://stackoverflow.com/questions/21064101/understanding-offsetwidth-clientwidth-scrollwidth-and-height-respectively)

- [一张图彻底掌握scrollTop/offsetTop/scrollTop ...](https://github.com/pramper/blog/issues/10)

- [segmentfault](https://segmentfault.com/a/1190000017254887)
