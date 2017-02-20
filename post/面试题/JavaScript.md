# 基础

1. JavaScript的typeof返回的数据类型

  ```
  a(typeof[1,2]); // object
  a(typeof 'string'); // string
  var f = true;
  a(typeof f); // boolean
  a(typeof 1); // number
  var aa;
  a(typeof aa); // undefined

  a(typeof a); // function
  function a() {
    alert(arguments[0]);
  }
  ```  
2. 例举3种强制类型转换和2种隐式类型转护
  ```
  强制: parseInt() parseFloat() Number()
  隐式: == !!
  ```
    [两个叹号的使用](http://blog.csdn.net/qq_27093465/article/details/50628283)

3. split()和join()的区别
```
  split()是将字符串拆成数组，join()是将数组转成字符串的形式。
```

4. 数组方法 pop() push() unshift() shift()
```
  push()向数组尾部添加元素。
  pop()从数组尾部删除元素。
  unshift()向数组头部添加元素。
  shift()从数组头部删除元素。
```

5. 事件绑定和普通事件有什么区别

  ```
  普通事件的添加方法：
  var btn = document.getElementById('btn');
  btn.onclick = function(){
    alert(1);
  };

  btn.onclick = function(){
    alert(2);
  };
  上面代码最终只会输出2，后面的事件覆盖前面的事件。

  事件绑定方式添加事件
  var btn = document.getElementById('btn');
  btn.addEventListener('click',function(){
    alert(1);
  });
  btn.addEventListener('click',function(){
    alert(2);
  });
  这样绑定后，会依次输出1，2。
  这样的方式添加
  ```
addEventListener不兼容低版本IE，普通事件无法取消，addEventListener还支持事件冒泡和事件捕获

6. IE和DOM事件流的区别
```
IE采用冒泡型事件，Netscape使用捕获型事件，DOM采用先捕获后冒泡型事件。
<body>
  <div>
    <button>click</button>
  </div>
</body>
冒泡型事件：button div body(IE事件流)
捕获型事件：body div button(Netscape事件流)
DOM事件类型：body div button button div body(先捕获后冒泡)
```
7. 事件监听函数的区别
```
IE使用：
[Object].attachEvent('name_of_event', fnHandler); // 绑定函数
[Object].detachEvent('name_of_event', fnHandler); // 移除绑定

DOM使用：
[Object].addEventListener('name_of_event', fnHandler, bCapture); // 绑定函数
[Object].removeEventListener('name_of_event', fnHandler, bCapture); // 移除绑定
bCapture参数用于设置事件的绑定阶段，true为捕获阶段，false为冒泡阶段。

```
8. IE和标准下的兼容性的写法(先将这点列在这，具体的用法不太理解)
```
var ev = ev||window.event;
document.documentElement.clientWidth || document.clientWidth;
var target = ev.srcElement||ev.target;
```
9. call()和apply()的区别
```
call()方法：
语法：call(thisObj,object1,object2...);
定义：调用一个对象的一个方法，以另一个对象替换当前对象。
说明：call方法可以代替一个对象调用一个方法。call()方法可以将一个函数的上下文从初始的
上下文改变为thisObj指定的新对象的上下文。
如果没有提供thisObj参数，那么Global对象将被用作thisObj。

apply()方法：
语法：apply(thisObj,[argArray])
定义：调用某个对象的一个方法，用另一个对象替换当前对象。
说明：如果argArray不是一个有效数组或者不是arguments对象，那么将导致一个typeError
如果没有提供一个argArray和thisObj任何一个参数，那么Global对象将被用作thisObj,并且无法被传递任何参数。
```


# 高级
