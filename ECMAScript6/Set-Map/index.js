'use strict';

// Set demo1
var s = new Set();
[2,3,5,4,3,4,1,7].map(x=>s.add(x));
console.log(s);

for(let i of s){
    console.log(i);
}

// 初始化 demo2
var set = new Set([1,2,3,1,2,3,4,5,5,6]);
[...set]
set.size();

// Map
var m = new Map();
var o = {p:'Hello World'};
m.set(o,'content');
m.get(o);

m.has(o);
m.delete(o);
m.has(o);