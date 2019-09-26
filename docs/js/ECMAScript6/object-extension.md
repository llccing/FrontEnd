# 对象的扩展

ES6 允许直接写入变量和函数，作为对象的属性和方法，这样的书写更加简洁。


## 属性简写
```js
var foo = 'bar';
var baz1 = { foo };
console.log(baz);

// 等同于
var baz2 = { foo: foo };
console.log(baz);
```

## 返回值简写
```js 
// demo2
function f(x, y) {
  return { x, y };
}

// 旧的写法
function f1(x, y) {
  return { x: x, y: y };
}

f(1, 2);
```

## 方法简写
```js
var o1 = {
  method() {
    return 'hello';
  },
};

// 等同于
var o2 = {
  method: function() {
    return 'hello';
  },
};

// 实例
var birth = '2016/11/7';
var person = {
  name: 'tom',
  birth,
  hello() {
    console.log('name is', this.name);
  },
};
```

## 调整CommonJS模块输出变量写法
```js
// 可以据此修改项目的common.js，以及require的return方法
var ms = {};
function getItem(key){
    return key in ms? ms[key]:null;
}

function setItem(key,value){
    ms[key] = value;
}

function clear(){
    ms = {};
}
model.exports = {getItem,setItem,clear};
// 等同于
model.exports = {
    getItem:getItem,
    setItem:setItem,
    clear:clear
};
```