
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
gen().next(); // 返回一个对象{done：false|true，value：xxx}


// demo3
var arr = [1,[[2,3],4],[5,6]];

var flat = function* (a){
    a.forEach(function(item){
        if(typeof item !== 'number'){
            yield* flat(item);// 此处报错，原因是不能在普通函数中使用yield。
        }else{
            yield item;
        }
    });
};

for(var f of flat(arr)){
    console.log(f);
}
// demo3 修改1
var arr = [1,[[2,3],4],[5,6]];

var flat = function* (a){
    var l = a.length;
    for(var i=0;i<l;i++){
        var item = a[i];
        if(typeof item !== 'number'){
            yield* flat(item);
        }else{
            yield item;
        }
    }
};

for(var f of flat(arr)){
    console.log(f);
}


// demo4 不用写回调函数
function showLoadingScreen() {
    console.log('show loading Screen');
}

function loadUIDataAsynchronously() {
    setTimeout(()=> {
        console.log('loadUIDataAsynchronously');
        // 模仿载入完成后，清楚loading的状态框
        loader.next();
    },2000);
}

function hideLoadingScreen() {
    console.log('hideLoadingScreen');
}

function* loadUI(){
    showLoadingScreen();
    yield loadUIDataAsynchronously();
    hideLoadingScreen();
}
var loader = loadUI();
// 加载UI
loader.next();


// demo5 通过Generator函数部署Ajax操作。
function* main(){
    var result = yield request('http://www.baidu.com');
    var resp = JSON.parse(result);
    console.log(resp.value);
}
//请求函数
function request(url) {
    $.get(url,function(response){
        it.next(response);
    });
}

var it = main();
it.next();
