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
      Array.isArray = function(arg){
        return Object.prototype.toString.call(arg) ===  '[object Array]';
      };
    }
  ```
  [Object.prototype.toString.call(arg) 理解](http://www.zhufengpeixun.cn/JavaScriptmianshiti/2014-02-28/271.html)

18. 已知id的input输入框，希望获取这个输入框的输入值，用原生js实现。
  ```
    var value = document.getElementById('id').value;
  ```
19. 原生js获取页面所有的checkbox
  ```
    var domList = document.getElementsByTagName('input');
    var len = domList.length;
    var checkboxs = [];
    while (len--) {
      if(domList[len].type === 'checkbox'){
        checkboxs.push(domList[len])
      }
    }
  ```
20. 设置一个已知id的div的html内容为xxxx，字体颜色为黑色，用原生js实现。
  ```
    var dom = document.getElementById('id');
    dom.innerHTML = 'xxxx';
    dom.style.color = '#000';
  ```
21. 当一个DOM节点被点击时，我们希望其能够执行一个函数，如何实现。
  ```
    1. 直接在DOM里绑定事件：<div onclick="test()"></div>
    2. js中通过onclick绑定：xxx.onclick = test
    3. 通过事件添加进行绑定：xxx.addEventListener('click',test);

    JavaScript事件流模型有什么？
    1.事件冒泡：事件开始有最具体的元素开始接受，然后逐级向上传播。
    2.事件捕获，事件由最不具体的节点先接收，然后逐级向下，一直到最具体的。
    3.DOM事件流，三个阶段：事件捕获、目标阶段、事件冒泡
  ```
22. 下面代码输出为何？解释原因
  ```
    var a;
    alert(typeof a); //undefined
    alert(b); // Uncaught ReferenceError: b is not defined

    undefined是一个只有一个值的数据类型，这个值就是undefined，在使用var变量声明变量但未对其进行赋值初始化时，这个变量的值就是
    undefined。而b由于未声明将报错。注意未声明的变量和声明了但未赋值的变量是不一样的。
  ```
23. 下面代码输出为何？解释原因
  ```
    var a = null;
    alert(typeof a); // object

    null是只有一个值的数据类型，这个值就是null。表示一个空指针对象，所以用typeof检测会返回"object";
  ```
24. 下面代码输出为何？解释原因
  ```
    var undefined;
    undefined == null; // true
    1 == true; // true
    2 == true; // false
    0 == false; // false
    0 == ''; // true
    NaN == NaN; // false
    [] == false; // true
    [] == []; // false
    [] == ![]; // true 

    undefined与null相等，但不恒等（===）
    一个是number一个是string时，会尝试将string转换为number，
    尝试将boolean转换成number，0或1
    在将Object转换为number或string时，取决于另外一个对比量的类型，
    所以，对于0、空字符串的判断，建议用"==="，"==="会先判断两边的值类型，类型不匹配时为false。

    下面代码输出什么？
    console.log(typeof foo);
    var foo = '11'+2-'1';
    console.log(foo); 
    console.log(typeof foo);

    执行完后，foo的值为111，但是foo的值为number，不是string
  ```
25. 看代码给答案。
  ```
    var a = new Object();
    a.value = 1;
    b = a;
    b.value = 2;
    alert(a.value); // 2
    引用类型细节
  ```
26. 已知数组 var stringArray = ['this', 'is', 'Baidu', 'Campus'];alert()出"this is Baidu Campus".
  ```
    alert(stringArray.join(' '));
  ```
27. 已知有字符串foo = "get-element-by-id"; 写一个function将其转化成驼峰表示法"getElementById".
  ```
    function split(str){
       var strArr = str.split('-');
       for(var i=1;i<strArr.length;i++){
         strArr[i] = strArr[i].charAt(0).toUpperCase()+strArr[i].substr(1,strArr[i].length-1);
       }
       return strArr.join('');
    }
  ```
28. var numberArray = [3,6,2,4,1,5];
  ```
    1.实现对该数组的倒序，输出[5,1,4,2,6,3];
    numberArray.reverse();
    2.实现对数组的降序排列：输出[6,5,4,3,2,1]
    numberArray.sort(function(a,b){
      return b-a;
    });
  ```
29. 输出今天的日期，以YYYY-MM-DD的形式，比如今天是2017年3月19日，则输出2017-03-19
  ```
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth()+1;          
    m = m.toString().length==2?m:'0'+m;
    // m = m<10?'0'+m:m; // 换个角度
    var day = d.getDate();
    day = day.toString().length == 2 ? day:'0'+day;
    var res = y+'-'+m+'-'+day;
    console.log(res);
  ```
30. 将字符串"<tr><td>{$id}</td><td>{$name}</td></tr>"中的{$id}换成10，{$name}换成Tony(使用正则表达式)
  ```
    "<tr><td>{$id}</td><td>{$name}</td></tr>".replace(/{\$id}/g,10).replace(/{\$name}/g,'Tony');

    g 表示全局替换
    i 表示忽略大小写
    m 表示多行匹配
  ```
31. 为了保证页面输出安全，我们经常需要对一些特殊字符进行转义，请写一个函数escapeHtml, 将<,>,&,"进行转义。
  ```
    function escapeHtml(){
      return str.replace(/[<>"&]/g,function(match){
          console.log(match);
          switch(match){
            case '<':
              return '&lt;';
            case '>':
              return '&gt;';
            case '\"':
              return '&quot;'
            case '&':
              return '&amp;';
          }
        });
    }
  ```
32. foo = foo||bar， 这行代码是什么意思？为什么要这样写？
  ```
  if(!foo)foo = bar; // 如何foo存在，值不变，否则把bar的值赋给foo。

  短路表达式，作为 "&&" 和 "||" 操作符的操作数表达式，这些表达式在进行求值时，只要最终的结果已经可以确定是真或者假，求值过程便告终止，
  这称之为短路求值。
  ```
33. 看下列代码，将会输出什么？
  ```
    var foo = 1;
    (function(){
      console.log(foo);  // undefined
      var foo = 2;
      console.log(foo); // 2
    })();

    // 上面的代码相当于
    var foo = 1;
    (function(){
      var foo;
      console.log(foo);
      foo = 2;
      console.log(foo);
    })();

    函数声明与变量声明会被JavaScript引擎隐式的提升到当前作用域的顶部，但是只提升名称，不会提升赋值部分。
  ```
34. 用js实现随机选取10-100之间的10个数字，存入一个数组，并排序。
  ```
    var arr = [];
    for(var i=0;i<10;i++){
      arr.push(Math.random()*90+10);
    }
    console.log(arr.sort());

    // 上面的考虑不完善，可以更加周全，细致。

  ```
35. 把两个数组合并，并删除第二个元素。
  ```
    var a = [2,3,4];
    var b = [9,5,4];
    var c = a.concat(b);
    // console.log(c.shift());
    console.log(c.splice(0,1));
    console.log(c);
  ```
36. 怎样添加、移除、复制、创建和查找节点（原生js）
  ```
    1.创建新节点
      createDocumentFragment();
      createElement();
      createTextNode();
    2.添加、移除、替换、插入
      appendChild();
      removeChild();
      replaceChild();
      insertBefore();
    3.查找
      getElementsByTagName(); // 标签名
      getElementsByName(); // 通过元素name
      getElementById(); // 通过id，唯一

  ```
37. 解析url中的参数。url: URL：http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e, 
请写一段JS程序提取URL中的各个GET参数(参数名和参数个数不确定)，将其按key-value形式返回到一个json结构中，
如{a:’1′, b:’2′, c:”, d:’xxx’, e:undefined}。
  ```
    function randomNum(url){
        var arr = url.substr(url.indexOf('?')+1,url.length).split('&');
        console.log(arr);
        var obj = {};
        for(var i=0;i<arr.length;i++){
          var subArr = arr[i].split('=');
          obj[subArr[0]] = subArr[1];
        }
        console.log(obj);
    }

    // 有可以完善的地方
  ```
38. 正则表达式构造函数var reg = new Regexp('xxx)与正则表达式字面量var reg = //有什么不同，匹配邮箱的正则表达式？
  ```
    使用RegExp()构造函数时，不仅需要转义引号(即 \" 表示 "), 还需要双反斜杠 (即\\ 表示一个\)。使用正则表达式字面量的效率更高。

    匹配邮箱的正则：
    var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
  ```
39. 看下面的代码，给输出结果。
  ```
    for(var i=1;i<=3;i++){
      setTimeout(function(){
        console.log(i);
      },0);
    }
    // 结果输出 4,4,4
    原因：JavaScript事件处理程序在线程空闲之前不会运行。如何让上述代码输出1,2,3

    for(var i=1;i<=3;i++){
      setTimeout((function(){
        console.log(i);
      })(i),0);
    }
    改成立即执行函数
        
  ```
40. 写一个function, 清除字符串前后的空格(兼容所有浏览器)
  ```
    if(!String.prototype.trim){
        String.prototype.trim = function(){
            return this.replace(/^\s+/,'').replace(/\s+&/,'');
        }
    }

    var str = " \t\n test string ";
    console.log(str);
    var str = " \t\n test string ".trim(); 
    console.log(str);
        
    alert(str == "test string"); // alerts "true"
  ```
# 高级
