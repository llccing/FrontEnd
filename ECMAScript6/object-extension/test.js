'use strict';

// demo5
// CommonJS模块输出变量
// 可以据此修改项目的common.js，以及require的return方法
var model = {};
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
//model.exports = {getItem,setItem,clear};
// 等同于
model.exports = {
    getItem:getItem,
    setItem:setItem,
    clear:clear
};

console.log(model);