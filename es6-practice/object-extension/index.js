'use strict';
// demo1 属性简写
var foo = 'bar';
var baz1 = {foo};
console.log(baz);

// 等同于
var baz2 = {foo:foo};
console.log(baz);


// demo2
function f(x,y){
    return {x,y}
}

// 旧的写法
function f1(x,y){
    return {x:x,y:y};
}

f(1,2);


// demo3 方法简写
var o1 = {
    method(){
        return 'hello';
    }
};

// 等同于
var o2 = {
    method:function(){
        return 'hello';
    }
};

// 实例1
var birth = '2016/11/7';
var person = {
    name:'tom',
    birth,
    hello(){
        console.log('name is', this.name);
    }
};

// demo4 简写函数返回值
function getPoint(){
    var x = 1;
    var y = 10;
    return {x,y}
}

getPoint();

// demo5
// CommonJS模块输出变量
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