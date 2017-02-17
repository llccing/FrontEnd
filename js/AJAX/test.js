// 原生ajax封装
var ajax = (function(){
    var ajax = {
        self:this,
        init: function () {
            return new XMLHttpRequest();
        },
        // 对象转换
        convertObj:function(obj){
            var str = '';
            for(var prop in obj){
                str += prop + '=' + obj[prop]+'&';
            }
            return str;
        },
        get: function (url, data, callback) {
            var xhr = ajax.init();
            // 参数3 表示是否异步执行，true为异步，false为同步。
            xhr.open('GET',url, true);
            xhr.setRequestHeader('Content-Type','text/html;charset=utf-8');
            xhr.onreadystatechange = function(){
                if(xhr.status===200 && xhr.readyState===4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(ajax.convertObj(data));
        },
        post: function (url, data, callback) {
            var xhr = ajax.init();
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.open('POST',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.status === 200 && xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(this.convertObj(data));
        },
        put: function (url, data, callback) {
            var xhr = ajax.init();
            xhr.setRequestHeader('Content-Type','application/json');
            xhr.open('POST',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.status === 200 && xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(this.convertObj(data));
        },
        delete: function (url, data, callback) {
            var xhr = this.init();
            xhr.setRequestHeader('Content-Type','text/html;charset=utf-8');
            xhr.open('PUT',url,true);
            xhr.onreadystatechange = function(){
                if(xhr.status === 200 && xhr.readyState === 4){
                    callback(xhr.responseText);
                }
            };
            xhr.send(this.convertObj(data));
        }
    };
    return {
        get:ajax.get,
        post:ajax.post,
        put:ajax.put,
        delete:ajax.delete
    };
})();


ajax.get('config.json',{},function(data){
    console.log(data);
});