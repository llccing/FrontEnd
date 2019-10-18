# inline-block

> “-”表示前缀，意思是block具备inline的性质，让块级元素在一行内显示的性质。

## 需要留意的点
1. 能够设置宽高
2. inline-block各个元素，高度不同时，以文本基线对齐，通过vertical-align:top;实现顶部对齐

## float与display: inline-block 对比

### 共性：

实现元素再一行展示，同时可以自由设置元素大小。

### 区别：

- 使用float时，要有一个元素包裹float元素，来避免接下来的元素仅仅靠近他。 inline-block 就没有这个问题。
- inline-block会有空白符，设置margin-left: -4px;可以解除。
- inline-block水平排列一行，即使高度不同也会高度最大的元素高度为行高，即使高度小的元素周围留空，也不会有第二个元素补位。可以设置默认的垂直对齐基线。inline-block元素仍然再文档流中占据位置。
- float元素脱离当前文档流，呈环绕状排列，如遇上行有空白并且当前元素能够挤进去，这个元素会补位。默认顶部对齐。

### 使用场景

- inline-block，当我们需要设置某些元素再一行展示，并且排列方向一致的情况下，尽可能使用inline-block。因为inline-block的元素仍然再文档流中占据位置，减少了程序对DOM的更改操作，因为DOM每次更改，浏览器就会重绘DOM树，增加性能消耗，同时也不用因为float而清除浮动。

- float，inline-block作为首选，但是仍有float使用的场景，比如两个元素，一个左排列，一个右排列。这时只能用float实现。浏览器的解析顺序是逐行解析，当设置两个元素右浮动时，代码顺序在前的元素会被先解析。



## 参考

- [display:inline-block一些注意点](https://zhuanlan.zhihu.com/p/31856017)
- [float 与 display: inline-block 区别](https://github.com/mynane/web-problem/issues/3)
- [inline-block 与 float的共性与区别](https://www.jianshu.com/p/05c48bf43b1a)
