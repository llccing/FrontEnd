'use strict';

// demo1
// ES5
function log(x,y){
    y = y || 'World';
    console.log(x, y);
}

console.log('Hello');
console.log('Hello','China');
console.log('Hello','');

// ES6
function log(x,y = 'World'){
    console.log(x,y);
}
log('Hello');
log('Hello','China');
log('Hello',false);

// 实例1
function Point(x=0,y=0){
    this.x  = x;
    this.y = y;
}

var p= new Point();
console.log(p);

// 与解构赋值默认值结合使用
function foo({x,y=5}){
    console.log(x,y);
}

foo({});
foo({x: 1});
foo({x:1,y:2});
foo();


// rest参数
// demo1
function add(...values){
    let sum=0;
    for(var val of values){
        sum+=val;
    }
    return sum;
}

add(2,3,4,5);


// demo2 rest代替arguments
// 数组排序 arguments变量的写法
function sortNumbers1(){
    return Array.prototype.slice.call(arguments).sort();
}

// 数组排序 rest参数的写法
const sortNumbers2 = (...numbers)=>numbers.sort();

// demo3 替代数组的apply方法
function f(x,y,z){
    //...
}
var args = [0,1,2];
f.apply(null,args);

//ES6的写法
function f1(x,y,z){
    //...
}
var args1 = [1,2,3];
f1(...args1)

// demo3 数组合并
var arr1 = [0,2,4];
var arr2 = [1,3,4];
Array.prototype.push.apply(arr1,arr2);

// ES6的写法
var arr3 = [9,8,7];
var arr4 = [6,5,4];
arr3.push(...arr4);

