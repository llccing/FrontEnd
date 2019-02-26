# ajax

    Asynchronous JavaScript + XML, while not a technology in itself,
    is a term coined in 2005 by Jesse James Garrett, that describes a "new" approach to using a number of existing technologies together,
    including HTML or XHTML, Cascading Style Sheets, JavaScript, The Document Object Model, XML, XSLT, and most importantly the XMLHttpRequest object.
    When these technologies are combined in the Ajax model, web applications are able to make quick, incremental updates to the user interface without reloading the entire browser page.
    This makes the application faster and more responsive to user actions.

总结一句话，ajax本身不是技术，他是各种技术的集合（最重要的是XMLHttpRequest Object）来实现无刷新的加载页面，是应用程序更快速的相应用户操作。

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

[demo](https://codepen.io/llccing/pen/wOvpOO?editors=0010)

## 发送ajax请求
```js
function ajax() {
  var request = new XMLHttpRequest();
  var url = 'http://localhost:3000/';
  request.open('GET', url, true);
  request.onreadystatechange = function (data) {
    console.log(data);
  }
  request.send();
}
```

## [jQuery的ajax封装](https://github.com/jquery/jquery/blob/master/src/ajax.js)

部分代码展示
```js
jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );
```

## 我的封装

```js
var ajax = (function(){
    var ajax = {
        init: function () {
            return new XMLHttpRequest();
        },
        // 对象转换
        convertObj:function(obj){
            var str = '';
            for(var prop in obj){
                str += prop + '=' + obj[prop]+'&';
            }
            return str;
        },
        get: function (url, data, callback) {
            var xhr = ajax.init();
            // 参数3 表示是否异步执行，true为异步，false为同步。
            xhr.open('GET',url, true);
            xhr.setRequestHeader('Content-Type','text/html;charset=utf-8');
            xhr.onreadystatechange = function(){
                if(xhr.status===200 && xhr.readyState===4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(ajax.convertObj(data));
        },
        post: function (url, data, callback) {
            var xhr = ajax.init();
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.open('POST',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.status === 200 && xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(this.convertObj(data));
        },
        put: function (url, data, callback) {
            var xhr = ajax.init();
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.open('POST',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.status === 200 && xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(this.convertObj(data));
        },
        delete: function (url, data, callback) {
            var xhr = this.init();
            xhr.setRequestHeader('Content-Type','text/html;charset=utf-8');
            xhr.open('PUT',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.status === 200 && xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(this.convertObj(data));
        }
    };
    return {
        get:ajax.get,
        post:ajax.post,
        put:ajax.put,
        delete:ajax.delete
    };
})();

```

## 附demo地址

[https://github.com/llccing/FrontEnd/tree/master/demo/ajax](https://github.com/llccing/FrontEnd/tree/master/demo/ajax)