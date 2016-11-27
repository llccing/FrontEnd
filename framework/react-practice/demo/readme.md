## 跟着阮一峰大神学习React[教程](http://www.ruanyifeng.com/blog/2015/03/react.html)

一共用到了3个库：
- react.js React的核心库
- react-dom.js 提供与DOM相关的功能
- Browser.js 将JSX语法转为JavaScript语法。（引入它的作用是使浏览器支持babel，你可以使用ES2015（ES6）进行编码,用ES5就不用这个js文件。）

用ES6和ES5写React时的区别：

```
// The ES5 way
var Photo = React.createClass({
    handleDoubleTap:function(e){...},
    render:function(){...},
});

// The ES6 way
class Photo extends React.Component{
    handlerDoubleTap(e){...}
    render(){...}
}

```