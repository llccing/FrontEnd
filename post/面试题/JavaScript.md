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
10. b继承a的方法
```
function A(age, name){
  this.age = age;
  this.name = name;
}

A.prototype.show = function(){
  alert('父级方法');
}

function B(age,name,job){
  A.apply(this,arguments);
  this.job = job;
}
B.prototype = new A();
var b = new A(14,'侠客行');
var a = new B(14,'狼侠','侠客');
a.show();
b.show();
console.log(b);
console.log(a);
```
11. 如何阻止事件冒泡
```
IE cancelBubble();
其他 stopPropagation();
阻止默认事件 preventDefault();

return false;
```
12. JavaScript的本地对象，内置对象和宿主对象
```
本地对象：Array Object Regexp等可以new实例化
内置对象：global Math等不可以实例化
宿主对象：浏览器自带的 document window等
```
13. 添加、插入、替换、删除某个节点的方法
  ```
    btn.appendChild(btnNew);
    target.insertBefore(newNode,indexElement);
    btn.replaceChild(newNode, oldNode);
    btn.removeChild(childNode);
  ```

14. window.onload 和 document ready 的区别
  ```
    window.onload是在DOM文档树都加载完和所有文件加载完之后执行的函数。
    document ready在原生js中没有这种写法，jQuery中有
    $(document).ready(function(){});
    $().ready(function(){});
    $(function(){});
    以上3种写法相同。

    jQuery的方法会在DOM文档树加载完之后执行的一个函数(这里的文档树加载完不表示全部资源加载完)。
    $(function(){});要比window.onload先执行，window.onload只能执行一次，$(function(){});可以出现多次。
  ```
    [$(function(){});和window.onload的区别](http://www.php100.com/html/program/jquery/2013/0905/5954.html)

15. "=="和"==="
  ```
    == 会进行类型转换
    === 直接比较，不会转换类型
  ```
16. JavaScript是一门什么样的语言，它有哪些特点？
  ```
    javaScript一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML网页上使用，用来给HTML网页增加动态功能。JavaScript兼容于ECMA标准，因此也称为ECMAScript。
    基本特点
    1．是一种解释性脚本语言（代码不进行预编译）。
    2．主要用来向HTML（标准通用标记语言下的一个应用）页面添加交互行为。
    3．可以直接嵌入HTML页面，但写成单独的js文件有利于结构和行为的分离。
    跨平台特性，在绝大多数浏览器的支持下，可以在多种平台下运行（如Windows、Linux、Mac、Android、iOS等）。
  ```
17. JavaScript的数据类型都有什么？
  ```
    基本数据类型：string、number、boolean、null、undefined
    引用数据类型：Object Array Date Regexp Function

    如何判断是否为数组类型：
    1. slice();数组专有的方法。但是要是变量有该方法，则会失效。
    2. obj instanceof Array ,在IE中不正确？
    3. ECMA Script5中新方法。Array.isArray();但是兼容性不好。

    为了兼容性
    if(typeof Array.isArray === 'undefined'){
      Array.isArray == function(arg){
        return Object.prototype.toString.call(arg) ===  '[Object Array]';
      };
    }
  ```




# 高级
