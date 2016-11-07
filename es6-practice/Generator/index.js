
// demo1
function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
var hw = helloWorldGenerator();


// demo2 yield
// 惰性求值
function* gen(){
    yield 123+456;
}
gen().next();