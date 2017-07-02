'use strict';

// 异步任务的封装
//var fetch = require('node-fetch');
function* gen(){
    var url = 'http://ww.baidu.com/api';
    var result = yield fetch(url);
    console.log(result.bio);
}

function fetch(url){
   return new Promise(function(resolve,reject){
        resolve({bio:123,name:'name111',json:function(){
            setTimeout(()=>console.log('json function'),2000);
        }})
    });
}

// 异步任务的执行
var g = gen();
var result = g.next();
console.log(result);
result.value.then(function(data){
    return data.json();
}).then(function(data){
    g.next(data);
});