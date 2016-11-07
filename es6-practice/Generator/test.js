'use strict';

// demo2 yield
// 惰性求值
function* gen(){
    yield 123+456;
}
console.log(gen().next());
console.log(gen().next());