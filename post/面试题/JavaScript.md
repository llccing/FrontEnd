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

5.
# 高级
