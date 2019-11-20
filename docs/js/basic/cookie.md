# cookie

## what is cookie

一个cookie就是存储在用户浏览器中的一小段文本文件。cookie是纯文本的形式。浏览器将其储存并且根据一系列规则在每个请求中将该信息返回致服务器。web服务器可以用cookie来识别用户（定向投放广告）。多数需要登录的站点通通常会在认证通过后设置一个cookie，之后通过这个cookie做校验。

## 设置cookie

```js
document.cookie = newCookie;
```

- newCookie是一个键值对形式的字符串。这个方法一次只能对一个cookie进行设置或更新。
    - 以下可选的cookie属性值可以跟在键值对后，用来具体化cookie的设定和更新，使用分号做分隔；
        - ;path=path（例如'/', '/mydir'）如果没有定义，默认为当前文档位置的路径。
        - ;domain=domain（例如'example.com', 'subdomain.example.com'）如果没有定义，默认为当前文档位置的路径的域名部分。如果在域名前加.符将会被忽视，因为浏览器也许会拒绝设置这样的cookie。如果指定一个与，那么子域也包含在内。
        - ;max-age=max-age-in-seconds（例如一年为60*60*24*365）
        - ;expires=date-in-GMTString=format（如果没有定义，cookie会在对话结束时过期）
            - 这个值得格式参见[Date.toUTCString](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/toUTCString)
        - ;sesure（cookie只通过HTTPS协议传输）
    - cookie的值字符串可以用encodeURIComponent()来保证它不包含任何逗号、分号或空格（cookie值中禁止使用这些值）。

## 实践 [js-cookie](https://github.com/js-cookie/js-cookie)



## 参考
- [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)
- [MDN cookie](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/cookie)