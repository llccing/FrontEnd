## 常用的布局实现

- 左右布局
- 上左右布局
- 上左中右布局


1. 流体布局（是不是也称为流式布局）

左右模块各自左右浮动，中间模块的margin值使中间模块宽度自适应。

缺点是主要内容无法预先加载，当页面内容过多时影响用户体验。


2. [BFC](http://www.cnblogs.com/lhb25/p/inside-block-formatting-ontext.html)三栏布局

缺点是主要内容不能最先加载，当页面内容过多时影响用户体验。为了解决这个问题才用到双飞翼布局。

3. 双飞翼布局

利用浮动元素margin负值的应用。
主体内容可以先加载，HTML代码结构稍微复杂点。

4. 圣杯布局

跟双飞翼布局很像，细节上有区别，HTML的结构相对简单，但是样式定义就稍微复杂，也是优先加载主体内容。

5. Flex布局

需要考虑[兼容性](http://caniuse.com/#feat=flexbox)。

## 参考
1. [详解CSS七种三栏布局技巧](https://zhuanlan.zhihu.com/p/25070186?refer=learncoding)
