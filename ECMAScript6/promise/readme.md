## Promise

异步编程的解决方案，比传统的回调函数和事件更合理和强大。

```

var promise = new Promise(function(resolve,reject){
	// ...some code


	if(/*****/)}{
		resolve(value); // Promise的状态从未完成到成功。
	}else{
		reject(error); // Promise的状态从未完成到失败。
	}

});

promise.then(function(value){
	// success
},function(error){
	// error
});

```