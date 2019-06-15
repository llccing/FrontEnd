# Generator函数

    Generator函数是ES6提供的一种异步变成解决方案,语法行为与传统函数完全不同。

Generator函数有多种理解角度，语法上，可以将Generator函数理解为状态机，封装了多个内部状态。

执行Generator函数会返回一个遍历器对象，可以依次遍历Generator函数中的每一个状态。

Generator函数有两个特征：一是，function关键字紧跟一个*号；二是，函数体内部使用yield表达式，定义不同的内部状态。

yield能返回跟在语句后面的表达式的值。

```js
function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'ending'
}

var it = helloWorldGenerator()

console.log(it.next())
console.log(it.next())
console.log(it.next())

```
如果helloWorldGenerator函数没有return 'ending'，那么第三次调用next函数的返回值中,value = undefined.


```js
// 星号位置，都可以
function* generator() { }
function *generator() { }
function * generator() { }
function*generator() { }
```

## yield 表达式
  
  yield表达式就是Generator函数暂停执行的标志。

遍历器的next方法运行如下：
- 第一次执行next(),遇到yield表达式，就暂停后面的操作，并将紧跟yield后的表达式的值，作为返回对象value的值。
- 下一次调用next方法时，再继续执行，直到遇到下一个yield表达式。
- 如果没有遇到yield表达式，就一直运行到函数结束，直到return语句为止，并将return后的表达式的值，作为返回对象的value属性的值。
- 如果没有return语句，那么返回对象的value属性的值为undefined。

## 与Iterator接口的关系
对于任意一个对象的System.iterator方法，等于该对象的遍历器生成函数，调用该函数
会返回该对象的一个遍历器对象。

```js
var myIterator = {};
myIterator[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

console.log([...myIterator])
```

## next方法的参数

yield表达式本身没有返回值，或者说总是undefined。next()方法可以带一个参数，该参数就会被当做**上一个**yield表达式的返回值。

该例子可以证明，yield返回值总是undefined，除非next方法传参。
```js
function* f() {
  for (var i = 0; true; i++){
    var reset = yield i;

    console.log(reset)
    if (reset) {
      i = -1;
    }
  }
}

var g = f();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
// console.log(g.next(true));
```

下面这个例子说明 yield表达式本身是返回undefined的，除非next方法传参
```js
function* foo(x) {
  var y = 2 * (yield x + 1)
  var z = yield y / 3
  return x + y + z
}

var a = foo(5)
// 6
console.log(a.next())
NaN
console.log(a.next())
NaN
console.log(a.next())

var b = foo(5)
// 6
console.log(b.next())
8
console.log(b.next(12))
// 42 y=24 z=13 x=5 
console.log(b.next(13))

```

下面再来一个面试题，看看结果是什么
```js
function* dataConsumer() {
  console.log('started');
  console.log(`1. ${yield}`)
  console.log(`2. ${yield}`)
  return 'result'
}

var it = dataConsumer();

// started
console.log(it.next())

// 1. a
console.log(it.next('a'))
// 1. b
console.log(it.next('b'))
```

## for...of 循环

for...of循环能够遍历Generator函数运行时生成的Iterator对象，并且不需要调用next方法。

```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
  return 6;
}

let it = foo();

for (let key of it) {
  console.log(key)
}
```
如果你运行这个代码就会发现，return的6没有输出，这是因为next方法返回对象的done属性为true时，for...of就会停止执行。


除了for...of外，扩展运算符（...），解构赋值和Array.form方法内部调用的，都是遍历器接口。这意味着他们都可以将Generator函数返回的遍历器对象作为参数。
```js
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
  yield 5;
}

// 扩展运算符
console.log([...foo()])

// Array.from
console.log(Array.from(foo()))

// 解构赋值
var [a, ...b] = foo()

console.log(a)
console.log(b)

```

## Generator.prototype.throw()

Generator函数返回的遍历器对象，都有一个throw方法，可以在函数体外跑出错误，然后在Generator函数体内部捕获。

```js
function* g() {
  try {
    yield;
  } catch (e) {
    console.log('函数内部捕获错误', e)
  }
  return 123123
}

var it = g();
console.log(it.next()) 

try {
  it.throw('a');
  it.throw('b');

  it.throw(new Error('记住，这么抛错误！'))
} catch (e) {
  console.log('函数体外捕获错误', e)
}

```

## Generator.prototype.return()

Generator函数返回的遍历器对象，还有个return()方法，可以返回给定的值，并且终结遍历Generator函数。

```js
function* foo() {
  yield 1;
  yield 1;
  yield 1;
  return 4;
}

var it = foo();

console.log(it.next())
console.log(it.return(666))
```


如果Generator函数内部有try...finally代码块，且正在执行try块，那么return方法会推迟到finally块执行完后再执行
```js

// 即使return 也会先执行finally 
function* foo2() {
  yield 1
  try {
    yield 2
    yield 3
  } finally {
    yield 4;
    yield 5;
  }
}


var it2 = foo2();

console.log(it2.next())
// 此处注意，要是没有执行到try内部，则finally不会执行。
// console.log(it2.next())
console.log(it2.return(555))
console.log(it2.next())

```

## next()、throw()、return() 的共同点

他们的作用都是让Generator函数恢复执行，并且使用不同的语句替换yield表达式。

next()是将yield表达式替换为一个值。
```js
function* foo() {
  let res =  yield 1;
  return res
}

var it = foo()
console.log(it.next())
console.log(it.next(123123))

```
第二个next(123123)相当于把yield表达式的值替换为123123，如果next参数为空，相当于替换为undefined;


throw()是将yield表达式替换成一个throw语句。


return()是将yield表达式替换成一个return语句。
