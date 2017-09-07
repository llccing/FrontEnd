# ajax

## ajax的核心对象 XMLHttpRequest

> XMLHttpRequest对象开启了web2.0时代。

那么什么是web1.0时代呢，就是当用户点击了查询按钮时，后端返回的是整个页面的html，会有闪屏的问题，同时性能上也有问题。

### XMLHttpRequest的几个方法和属性。
 
- open();
    
    open方法的几个参数
    - type: GET | POST等
    - url: 
    - async: 是否异步，默认是true

- send();
- abort();
- readyState();
- responseText

[demo]()