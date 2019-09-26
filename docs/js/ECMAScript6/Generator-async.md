# Generator异步应用

    异步操作，一个任务不是连续完成的，先执行一段，转而执行其他任务，等做好了准备，再回过头执行第二段。

ES6之前的异步操作，大致以下四种：

- 回调函数
- 事件监听
- 发布/订阅
- Promise对象

## 回调函数

```js
const fs = require('fs');

// 回调函数
fs.readFile('./data1.json', 'utf-8', function (err, data) {
  console.log(err)
  console.log(data)
})


// 回调地狱出现 callback hell
fs.readFile('./data1.json', 'utf-8', function (err, data) {
  console.log(err)
  console.log(data)

  fs.readFile('data2.json', 'utf-8', function (err2, data2) { 
    console.log(err2)
    console.log(data2)
  })
})
```

## Promise

Promise的出现是为了解决回调地狱，将函数回调改为链式调用。采用Promise连续读取多个文件。

```js
const readFilePromise = require('fs-readfile-promise')

// 返回promise的readFile
readFilePromise('data1.json', 'utf-8').then(function(data) {
  console.log('readFilePromise-1', data)
}).then(function () { 
  return readFilePromise('data21.json', 'utf-8')
}).then(function (data) {
  console.log(data.toString())
}).catch(function (err) {
  console.log(1, err)
})

```
用Promise写要将原来的代码包上一层Promise，会显得有些冗余，同时会出现一堆then的处理。

## Generator函数 

```js
function* gen(x) {
  var y = yield x + 2;
  return y;
}
 
var g = gen(1)
console.log(g.next())
console.log(g.next())

```
上面的代码中，调用Generator函数会返回一个指针（即遍历器）g，调用g.next方法，指针指向第一个遇到的yield语句。


```js
const readFilePromise = require('fs-readfile-promise');
const fs = require('fs')

function* asyncJob() {
  var data = yield readFilePromise('data1.json', 'utf-8');
  return data
}

var job = asyncJob();
var res1 = job.next()
// res1返回{value: Promise{<pending>, done: false}}
res1.value.then(function (data) {
  console.log(data)
})

var res2 = job.next();
console.log(res1)
console.log(res2)

```

> Generator函数是协程在ES6的实现，最大的特点就是可以交出函数的执行权（即暂停执行）。

整个Generator函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。

> Generator函数的数据交换和错误处理。Generator函数可以暂停执行和恢复执行，这是它能封装异步任务的根本原因。

除此之外，它还有两个特性，使他可以作为异步编程的完整解决方案：
- 函数体内外的数据交换
- 错误处理机制

```js
// 数据交换
function* genV2(x) {
  var y = yield x + 2;
  return y;
}

var g2 = genV2(1);
console.log(g2.next())
console.log(g2.next(20000))

```

```js
// 错误处理
function* genV3(x) {
    try {
    // throw new Error()
    var y = yield x + 2;
  } catch (e) {
    console.log(1, e)
  }
}

var g3 = genV3(1)
console.log(g3.next())
console.log(g3.throw('出错了！！'))
```