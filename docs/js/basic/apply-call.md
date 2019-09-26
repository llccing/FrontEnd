# apply、call

    call方法使用一个指定的this值和单独给出的一个或多个参数来调用一个函数。 apply使用一个指定的this值和一个参数数组或类数组来调用一个函数。

这两个函数的第一个参数都是指定的this值，apply的第二个参数是array，而call的第二个到第N个参数就是第二个到第N个参数。

## 语法
```
func.apply(thisArg, [argsArray])

func.apply(thisArg, arg1, arg2, ...)
```

注意，this值不一定是该函数执行真正的this值，如果函数在非严格模式下，则指定null和undefined的this值会自动指向全局对象（浏览器环境就是window对象），同时值为原始值（数字、字符串、布尔值）的this值会指向该原始值的自动包装对象。

## call的用法

### 1. [调用父构造函数](https://codepen.io/llccing/pen/MdROJb?editors=0010#result-box)
```js
function Product(name, price){
  this.name = name;
  this.price = price;
}

function Food(name, price){
  Product.call(this, name, price);
  this.category = 'food';
}

var food = new Food('西红柿', 3.5, 'food')

document.write(`名字：${food.name} | 价格: ${food.price} | 类别： ${food.category}`)

```

## 参考

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)

[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Parameters](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Parameters)

[https://github.com/lin-xin/blog/issues/7](https://github.com/lin-xin/blog/issues/7)