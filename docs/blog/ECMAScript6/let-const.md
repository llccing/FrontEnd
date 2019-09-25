# let和const

```js
'use strict'; 

{
    let a = 10;
    var b = 1;
}
console.log(a); // Uncaught ReferenceError: a is not defined
console.log(b);

```

```js
function demo1(argument) {
    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function() {
            console.log(i);
        }
    } 
    a[6](); // var命令 存在变量提升。let不存在变量提升。
}

demo1();
```