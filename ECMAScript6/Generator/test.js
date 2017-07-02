'use strict';


// demo4 不用写回调函数
function showLoadingScreen() {
    console.log('show loading Screen');
}

function loadUIDataAsynchronously() {
    setTimeout(()=> {
        console.log('loadUIDataAsynchronously');
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

