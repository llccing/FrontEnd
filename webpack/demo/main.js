
function demo1(argument) {
    let a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function() {
            console.log(i);
        }
    }
    a[6](); // var命令 存在变量提升。let不存在变量提升。


}

demo1();