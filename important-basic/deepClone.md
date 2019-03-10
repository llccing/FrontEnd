# 深拷贝
    
两种方式
1. 迭代递归
2. 序列化反序列化

## 序列化、反序列化
```js
JSON.stringify()
JSON.parse()
```
对象的存储就是序列化的过程。

结构化是指数据有从属、依赖关系的，常见的结构有链、树、图。

因此想要存储一个对象。需要：
- 在存储之前按某种方式将对象变成一串连续数据 ---- 序列化
- 取数据时再恢复成原始的对象结构 ---- 反序列化

## 迭代递归
```js
function isObject (obj){
  return (typeof obj === 'function' || typeof obj === 'object') && obj !== null;
}

function cloneDeep(obj){
  if(!isObject(obj)){
    return ;
  }
  const isArray = Array.isArray(obj)
  let cloneObj = isArray?[]:{}

  for(let key in obj){
    if(isObject(obj[key])){
      cloneObj[key] = cloneDeep(obj[key])
    }else{
      cloneObj[key] = obj[key]
    }
  }

  return cloneObj
}
```

## 参考

[https://juejin.im/post/5ad6b72f6fb9a028d375ecf6](https://juejin.im/post/5ad6b72f6fb9a028d375ecf6)

[为什么叫序列化、反序列化](https://github.com/simongong/js-stackoverflow-highest-votes/blob/master/questions21-30/object-serialization-in-javascript.md)