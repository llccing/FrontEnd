# Promise

## Promise 的含义

异步编程的解决方案，比传统的回调函数和事件更合理和强大。
Promise 最早由社区提出、实现，ES6 将其写入了语言标准，统一了用法，原生提供了 Promise 对象。
Promise 简单说是一个容器，里面保存着未来才会结束的事件（通常是异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。
Promise 提供统一的 API，各种异步操作都可以用同样的方法来处理。

Promise 的两个特点

1. 对象的状态不受外界影响。Promise 对象代表异步操作，有三种状态，pending(进行中)、fulfilled(已成功)、reject(已失败)。只有异步操作的结果
   可以决定当前是哪一种状态，任何其他操作都无法改变这个状态，这也是 Promise 这个名字的由来，它的英语意思是“承诺”，表示其他手段无法改变。

2. 一旦状态改变，就不会再变。pending->fulfilled 或者 pending->reject，状态的转变只有这两种可能。如果改变已经发生了，你再对 Promise 对象添加回调函数，
   也会立即得到这个结果。

有了 Promise 对象，就可以将异步操作以同步操作的流程表达出来，避免了层层函数嵌套的回调函数。

Promise 也有缺点。

1.  无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
2.  如果不设置回调函数，Promise 内部抛出错误，不会反映到外部。
3.  pending 状态时，无法得知当前进展到哪一段（刚刚开始还是即将完成）。

        一般来说某些事件不断反复发生，使用Stream模式比Promise更好。

## 基本用法

```js
const promise = new Promise(function(resolve, reject) {
  if (false) {
    setTimeout(function() {
      resolve(666)
    }, 500)
  } else {
    setTimeout(function() {
      reject(555)
    }, 2000)
  }
})

promise.then(
  function(data) {
    console.log(666)
  },
  function(error) {
    console.log(error)
  },
)
```

使用 Promise 的一个例子，主要是觉得 setTimeout 的写法比较有新意。

```js
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done')
  })
}

timeout(2000).then(data => {
  console.log(data)
})
```

记住 Promise 新建后就会执行

```js
const aPromise = new Promise((resolve, reject) => {
  console.log('Promise是立即执行，不是调用才执行，知道不！')
  resolve(666)

  console.log('其实，你虽然 resolve 了，但是我还是会执行！')

  return
  console.log('这里就不会执行了，因为前面已经return了')
})

aPromise
  .then(data => {
    console.log('Promise执行结束了！', data)
  })
  .catch(e => {
    console.log(e)
  })

console.log('我就是一个普通的输出！')
```

使用 Promise 来做异步加载图片

```js
const loadingImageAsync = url => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      resolve(image)
    }

    image.onerror = error => {
      reject(new Error('图片打不开，小主！' + url))
    }

    image.src = url
  })
}

loadingImageAsync('http://frontend.llccing.cn/poweredby.png')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })

// 第二个例子，errr是一个不存在的图片，会触发reject，同时被catch捕获。
loadingImageAsync('http://frontend.llccing.cn/errr.png')
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log(error)
  })
```

使用Promise对象实现Ajax操作
```js
const getJSON = (url) => {
  const promise = new Promise((resolve, reject) => {

    const handler = function () {
      if (this.readyState !== 4) {
        return;
      }

      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.satusText))
      }
    }

    const client = new XMLHttpRequest();
    client.open('get', url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept', 'application/json');
    client.send();
  })

  return promise
}

// 因为实际不存在这个url，所以代码会执行到catch
getJSON('/api/name/zhangsan').then(resp => {
  console.log(resp)
}).catch(error => {
  console.log(error)
})
```

如下p1和p2都是Promise实例，p2的resolve方法将p1作为参数，即一个异步操作的结果返回另一个异步操作。

那么这是p1的状态就会传给p2，就是说，p1的状态决定了p2的状态。如果p1是pending，那么p2的回调函数就会等待p1的状态变化；如果p1的状态是resolved或者rejected，那么p2的回调函数就会立刻执行。

```js
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('fail'))
  }, 3000)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(p1)
  }, 1000);
})


p2.then(result => {
  console.log(result)
}).catch(error => {
  console.log(error)
})
```

再次注意，调用resolve或者reject并不会终结Promise的函数执行。

一般来说，resolve或者reject后，Promise的是使命就完成了，所以最好在resolve或者reject前面加上return，如下面的第二个例子。
```js
new Promise((resolve, reject) => {
	resolve(1)
	// 这里的2还是会输出的
  console.log(2)  
}).then(res => {
  console.log(res)
})


// 这样直接return
new Promise((resolve, reject) => {
  return resolve(1)
  console.log(2)  
}).then(res => {
  console.log(res)
})

```

## Promise.prototype.then()

Promise实例具有then方法，也就是说then方法是定义在原型对象Promise.prototype上的。then方法的第一个参数resolved状态的回调函数，第二个参数（可选）是rejected状态的回调函数。

then方法返回的是新的Promise实例，所以可以采用链式写法，即then方法后面再调用一个then方法。
```js

getJSON('./data.json').then(function (json) {
  console.log(json)
  return json.data
}).then(function (data) {
  console.log(data)
})
```

采用链式的then，可以指定一组按照顺序调用的回调函数。这时前一个回调函数有可能返回的还是一个Promise对象（即有异步操作），这时后一个回调函数就会等待该Promise对象的状态发生变化，才会被调用。
```js

getJSON('./data.json')
  .then(function(json) {
    console.log(json.url)
    return getJSON(json.url)
  })
  .then(
    function funcA(data) {
      console.log('resolved', data)
    },
    function funcB(err) {
      console.log('rejected', err)
    },
  )
```

改为箭头函数，则更为简洁
```js
getJSON('./data.json')
  .then(function(json) {
    console.log(json.url)
    return getJSON(json.url)
  })
  .then(
    function funcA(data) {
      console.log('resolved', data)
    },
    function funcB(err) {
      console.log('rejected', err)
    },
  )

```

## Promise.prototype.catch()

Promise.prototype.catch方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。

```js
promise.then(data => console.log(data)).catch(err => console.log(55, err))

promise
  .then(data => console.log(data))
  .then(null, error => {
    console.log(66, error)
  })

promise
  .then(data => console.log(data))
  .then(undefined, error => {
    console.log(77, error)
  })

```

Promise抛出一个错误，就会被catch方法指定的回调函数捕获。下面的两种写法是等价的
```js
const promise = new Promise((resolve, reject) => {
  try {
    throw new Error('reject test')
  } catch (e) {
    reject(e)
  }
})

promise.catch(error => console.log(1, error))

const promise2 = new Promise((resolve, reject) => {
  reject(new Error('reject test2'))
})

promise2.catch(error => console.log(2, error))
```
比较上面两种写法，可以发现reject方法的作用，等同于抛出错误。

如果Promise状态已经是resolved，再抛出错误时无效的。
```js
const promise = new Promise((resolve, reject) => {
  resolve(666)
  throw new Error('error test')
})

promise.then(data=>console.log(1, data)).catch(error=> console.log(2, error))
```

Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获。
一般来说建议在then方法中定义rejected状态的回调函数，总是使用catch方法。


跟传统的try/catch不同的是，Promise对象如果没有指定catch方法的回调函数进行错误处理，那么抛出的错误不会传递到外层代码，即没有任何反应。
```js
const someAsyncThing = function () {
  return new Promise((resolve, reject) => {
    // 此处会报错，因为x没有声明
    resolve(x+2)
  })
}

someAsyncThing().then(() => {
  console.log('everything is fine! ')
})

setTimeout(() => {
  console.log(666)
}, 2000);

```
上述代码，setTimeout函数间隔2s后还是会执行，证明Promise会吃掉错误。

node中有一个unhandleRejection事件，专门监听未捕获的rejected事件，
```js
process.on('unhandledRejection', (error, p) => {
  console.log('wow', error)
})
```

如果catch处理中还是有报错，那么可以再进行catch处理
```js
const promise = new Promise((resolve, reject) => {
  resolve(x + 2)
})

promise
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.log('捕获, ', error)
    console.log('捕获, ', y + 2)
  })
  .catch(error => {
    console.log('再捕获, ', error)
  })

```

## Promise.prototype.finally()

finally方法用于指定不管Promise对象最后状态如何，都会执行的操作。该方法是ES2018引入的。

finally方法不接受任何参数。所以不知道Promise的状态是fulfilled还是rejected。这表明finally里的操作应该是状态无关的，不依赖Promise的执行结果。
```js
const promise = new Promise((resolve, reject) => {
  resolve(666)
})

// 注意，finally 在node环境中，提示没有该方法，可能与node版本有关系，但是Chrome浏览器下正常。
promise
  .then(data => console.log(data))
  .finally(() => {
    console.log('always do things')
  })

```
finally本质是then的特例

## Promise.all()

Promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例。
```js
const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2)
  }, 2000)
})

const p3 = new Promise((resolve, reject) => {
  resolve(3)
})

const p = Promise.all([p1, p2, p3]).then(data => {
  console.log(data)
})

```
p的状态有p1、p2、p3决定：
1. p123都是fulfilled，p是fulfilled。此时p123的返回值组成数组，传递给p的回调函数。
2. p123有一个是rejected状态，p就是rejected。支持第一个被rejected的实例返回值，会传递给p的回调函数。

注意，要是作为Promise.all的参数的Promise自己定义了catch函数，那么Promise.all的catch不会再次捕获，而会执行 Promise.all.then方法
```js
const p1 = new Promise((resolve, reject) => {
  resolve(1)
})

const p2 = new Promise((resolve, reject) => {
  reject(new Error('test error'))
}).catch(error => error)

const p = Promise.all([p1, p2])
  .then(data => console.log(data))
  .catch(error => {
    console.log(2, error)
  })

```
如果p2不定义catch，那么则会执行 Promise.all的catch方法。

## Promise.race()
