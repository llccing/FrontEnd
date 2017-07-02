// 和传统的try catch方法相比，如果没有catch的处理，那么Promise对象
// 抛出的错误就不会传递到外层代码，即不会有任何反应。

var soemAsyncThing = function(){
	return new Promise(function(resolve,reject){
		// x未声明就使用会报错。
		resolve(x + 2);
	});
};

soemAsyncThing().then(function(){
	console.log('everything is great');
});