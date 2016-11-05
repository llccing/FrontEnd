'use strict';


// Promise demo1
function timeout(ms){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,ms,'done');
	});
}

timeout(100).then((value)=>{
	console.log(value);
})

// Promise demo2
let promise = new Promise(function(resolve,reject){
	console.log('Promise');
	// resolve();

	// 假设请求后台，设置延迟返回时间。
	setTimeout(function(){resolve()},2000);
	
});

promise.then(function(){
	console.log('Resolve.');
});

console.log('Hi!');

// Promise demo3
// 异步加载图片
// 程序没有正常运行起来，new Image(),这种写法是第一次见。
function loadImageAsync(url){
	return new Promise(function (resolve,reject) {
		var image = new Image();

		image.onload = function () {
			resolve(image);
		};

		image.onerror = function(){
			reject(new Error('Could not load image at' + url));
		};

		image.src = url;
	});
}

loadImageAsync('https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white_fe6da1ec.png');

// Promise demo4
// 实现Ajax
var getJSON = function(url){
	var promise = new Promise(function(resolve,reject){
		var client = new XMLHttpRequest();
		client.open('GET',url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader('Accept','application/json');
		client.send();

		function handler(){
			if(this.readyState !== 4){
				return;
			}
			if(this.status === 200){
				resolve(this.response);
			}else{
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
getJSON('posts.json').then(function(json){
	console.log('Contents:'+ json)
},function(error){
	console.log('出错了'+error);
});


// Promise demo5
// 有先后顺序的执行
// test1
var p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('test1 success');
	},2000);
});

var p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		reject('test1 error....');
	},1000);
});

p1.then(result=>console.log(result));
p2.then(result=>console.log(result),error=>console.log(error));

var p3 = new Promise((resolve,reject)=>{
	setTimeout(()=>resolve('test2 success'),2000);
});

var p4 = new Promise((resolve,reject)=>{
	setTimeout(()=>resolve(p3),3000);
});

p4.then(result=>console.log(result),error=>console.log(error));