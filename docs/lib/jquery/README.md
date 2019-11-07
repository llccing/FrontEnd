# jQuery一个在JavaScript基础之上封装的函数库。

## 简介

最开始用jQuery是在第一份实习工作时，那个时候感觉jQuery非常nb，$()选择器简直不要特别方便。

现在的工作中也一直在使用，不过在前端框架（Angular、React）异常崛起的现在，加之ES6标准的实施，
jQuery的处境不得不说有点尴尬了。虽然说大趋势可能是去jQuery，但是起码现在我们公司还是一直在使用它，
并且有种打算发扬光大的打算。

最近公司的一个项目，必须要用ie8，据说是这个项目的视频播放控件仅仅支持ie8，所以jQuery版本的问题就要解决了。
了解了一下，网上的资料，据说jQuery1.X支持ie8，现在着手测试一下jQuery在ie8上的兼容性。

这是到目前为止jQuery所有的[版本](https://code.jquery.com/jquery/)。
现在的jQuery主要是3.x，2.x，1.x，而且每一个版本都是在维护的。如果说1.x支持ie8，那么是不是说所有的1.x
都支持ie8呢，这个还有待验证。

还有一个就是jQuery Migrate，参考[知乎网友](http://www.oschina.net/question/264729_141663)
的回答1.9支持ie8/7/6，但是回答时间是13年，那个时候貌似还没1.12呢，所以可以分开验证1.9和1.12。

- [百度介绍](https://zhidao.baidu.com/question/560628474.html)
- [官网对于jQuery Migrate的说明](http://blog.jquery.com/2013/01/31/jquery-migrate-1-1-0-released/)
- [Github Migrate](https://github.com/jquery/jquery-migrate/)

## jquery生态库

### [noty](https://github.com/needim/noty)

一个jQuery提示插件

#### [实践](https://github.com/llccing-demo/jquery-repo/tree/master/packages/noty)


### [jqPagination](https://github.com/beneverard/jqPagination)

一个jQuery系的分页插件，优点是代码量较少，方便修改。

#### [实践](https://github.com/llccing-demo/jquery-repo/tree/master/packages/jpPagination)

### [gulp](https://gulpjs.com/)

压缩构建工具

#### [实践](https://github.com/llccing-demo/jquery-repo/tree/master/packages/gulp)


### [jQuery validate](https://github.com/jquery-validation/jquery-validation)

jQuery表单验证库

<iframe height="265" style="width: 100%;" scrolling="no" title="jQuery validation" src="https://codepen.io/llccing/embed/mddxgrj?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/mddxgrj'>jQuery validation</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### [lightbox2](https://github.com/lokesh/lightbox2)

图片弹窗展示

<iframe height="265" style="width: 100%;" scrolling="no" title="pooLmad" src="https://codepen.io/llccing/embed/pooLmad?height=265&theme-id=0&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/pooLmad'>pooLmad</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### [Mock.js](https://github.com/nuysoft/Mock)

[文档位置](http://mockjs.com/examples.html)

<iframe height="265" style="width: 100%;" scrolling="no" title="ExxLRZE" src="https://codepen.io/llccing/embed/ExxLRZE?height=265&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/llccing/pen/ExxLRZE'>ExxLRZE</a> by llccing
  (<a href='https://codepen.io/llccing'>@llccing</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 参考资料

1. [jQuery发布1.9正式版，最后支持ie6/7/8](http://www.zreading.cn/ican/2013/01/jquery-1-9/)
2. [ie8兼容经验小结](http://www.cnblogs.com/ruomeng/p/5332814.html)
3. [ie8兼容html5](https://github.com/aFarkas/html5shiv)
4. [ie兼容css3](http://css3pie.com/)
5. [Jquery IE8兼容性](http://www.cnblogs.com/xcxcxcxc/p/5541134.html)