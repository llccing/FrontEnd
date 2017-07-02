'use strict';

// demo3 数组合并
var arr1 = [0,2,4];
var arr2 = [1,3,4];
Array.prototype.push.apply(arr1,arr2);
console.log(arr1);

// ES6的写法
var arr3 = [9,8,7];
var arr4 = [6,5,4];
arr3.push(...arr4);
console.log(arr3);