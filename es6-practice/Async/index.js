'use strict';

// 演变 demo
// 一个回调函数时，还算正常
fs.readFile('/etc/passwd', function (err, data) {
    if (err)throw err;
    console.log(data);
});

// 多个回调时，就很糟糕
fs.readFile(fileA, function (err, data) {
    fs.readFile(fileB, function (err, data) {
        // ...
    });
});

// Promise解决方案
// 引入fs-readfile-promise模块的作用返回一个Promise版本的readFile函数。
// Promise提供then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。
var readFile = require('fs-readfile-promise');
readFile(fileA)
    .then(function (data) {
        console.log(data.toString());
    })
    .then(function () {
        return readFile(fileB);
    })
    .then(function (data) {
        console.log(data.toString());
    })
    .catch(function (err) {
        console.log(err);
    });

// Generator解决方案
function* asyncJob() {
    // ... other operation
    var f = yield readFile(fileA);
    // ... other operation
}


// Generator函数 回顾
function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
g.next();
g.next();

// Generator函数的数据交换和错误处理
function* gen(x) {
    var y = yield x + 2;
    return y;
}

var g = gen(1);
g.next();
g.next(2);// 此处的2，可以作为上个阶段异步任务的返回结果，被函数体内的变量y接收。

// Generator函数内的错误处理
function* get(x) {
    try {
        var y = yield x + 2;
    } catch (e) {
        console.log(e);
    }
    return y;
}

var g = gen(2);
g.next();
g.throw('出错了!=');

// 异步任务的封装
var fetch = require('node-fetch');
function* gen() {
    var url = 'http://ww.baidu.com/api';
    var result = yield feach(url);
    console.log(result.bio);
}

// 异步任务的执行
var g = gen();
var result = g.next();
result.value.then(function (data) {
    return data.json();
}).then(function () {
    g.next(data);
});

// 异步任务的封装 test1
//var fetch = require('node-fetch');
function* gen() {
    var url = 'http://ww.baidu.com/api';
    var result = yield fetch(url);
    console.log(result.bio);
}

function fetch(url) {
    return new Promise(function (resolve, reject) {
        resolve({
            bio: 123, name: 'name111', json: function () {
                setTimeout(()=>console.log('json function'), 2000);
            }
        })
    });
}

// 异步任务的执行
var g = gen();
var result = g.next();
console.log(result);
result.value.then(function (data) {
    return data.json();
}).then(function (data) {
    g.next(data);
});

//