'use strict';


// Promise demo1
function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done');
    });
}

timeout(100).then((value) => {
    console.log(value);
})

// Promise demo2
var promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    // resolve();

    // 假设请求后台，设置延迟返回时间。
    setTimeout(function () {
        resolve()
    }, 2000);

});

promise.then(function () {
    console.log('Resolve.');
});

console.log('Hi!');

// Promise demo3
// 异步加载图片
// 程序没有正常运行起来，new Image(),这种写法是第一次见。
function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        var image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at' + url));
        };

        image.src = url;
    });
}

loadImageAsync('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png');

// Promise demo4
// 实现Ajax
var getJSON = function (url) {
    var promise = new Promise(function (resolve, reject) {
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();

        function handler() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        }
    });

    return promise;
};

// 访问本地的json数据，提示Cross origin requests are only supported 
// for protocol schemes: http, data, chrome, chrome-extension, 
// https, chrome-extension-resource.
// 前台跨域请求还需要学习、实践。
// 查找了部分资料，前台模拟数据用来
getJSON('posts.json').then(function (json) {
    console.log('Contents:' + json)
}, function (error) {
    console.log('出错了' + error);
});


// Promise demo5
// 有先后顺序的执行
// test1
var p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('test1 success');
    }, 2000);
});

var p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('test1 error....');
    }, 1000);
});

p1.then(result => console.log(result));
p2.then(result => console.log(result), error => console.log(error));

var p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('test2 success'), 2000);
});

var p4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(p3), 3000);
});

p4.then(result => console.log(result), error => console.log(error));


// Promise then方法 demo6
// then方法返回新的Promise实例，so可以采用链式写法。
getJSON('posts.json').then(function (json) {
    return json.post;
}).then(function (post) {
    // 第一个回调函数执行后的返回结果作为下一个then的参数。
    // 
});

// 链式then的第二个用途，指定一组按照顺序调用的回调函数。
getJSON('post.json').then((post) => {
    return getJSON(post.commentURL);
}).then(
    (comments) => console.log('Resolve: ', comments),
    (error) => console.log('Reject: ' + error)
);


// Promise catch demo7
// Promise.prototype.catch方法是.then(null,rejection)的别名，用于指定
// 发生错误时的回调函数。

getJSON('posts.json').then(post => {

}).catch(error => {
    console.log('发生错误! ', error);
})

// 一个测试例子
var promise = new Promise(function (resolve, reject) {
    throw new Error('test');
});
promise.catch(function (error) {
    console.log(error);
});

// 等价 try catch -- catch
// 写法一
var promise = new Promise(function (resolve, reject) {
    try {
        throw new Error('test');
    } catch (e) {
        reject(e);
    }
});
promise.catch(function (error) {
    console.log(error);
})
// 写法二
var promise = new Promise(function (resolve, reject) {
    reject(new Error('test'));
});
promise.catch(function (error) {
    console.log(error);
});

// 若Promise的状态已经变为Resolved，再抛出错误是无效的。
var promise = new Promise(function (resolve, reject) {
    resolve('ok');
    throw new Error('test');
});
promise.then(function (data) {
    console.log('Success: ' + data);
}).catch(function (error) {
    console.log('Error: ' + error);
})

// Promise对象的错误具有"冒泡"性质，会一直向后传递，知道捕获为止。
getJSON('posts.json').then(function (post) {
    return getJSON(post.commentURL);
}).then(function (comments) {
    //
}).catch(function (error) {
    //
})
// 这段代码中一共有三个Promise对象，getJSON产生一个，
// then产生两个(待实践)，任何一个抛出错误都会被最后一个catch捕获。

// * 一般来说，不在then方法中定义Reject状态的回调函数(then的第二个参数)
// * 而是用catch方法。

// bad
promise.then(
        post => {
    },
        error => {
    });
// good
promise.then(post=> {
})
    .catch(error=> {
    })

// 和传统的try catch方法相比，如果没有catch的处理，那么Promise对象
// 抛出的错误就不会传递到外层代码，即不会有任何反应。
var soemAsyncThing = function () {
    return new Promise(function (resolve, reject) {
        // x未声明就使用会报错。
        resolve(x + 2);
    });
};

soemAsyncThing().then(function () {
    console.log('everything is great');
});
// chrome浏览器会报错，ReferenceError： x is not defined


// Promise.all()
//Promise.all方法用于将多个Promise实例，包装成一个新的Promise实例。
var p = Promise.all([p1, p2, p3]);
