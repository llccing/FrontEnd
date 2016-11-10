load('config.json', function (xhr) {
    document.body.innerHTML = xhr.responseText;
});

/**
 * 载入
 * @param url
 * @param callback
 */
function load(url, callback) {
    var xhr;
    // 此处是针对ie6及以下
    //if (typeof XMLHttpRequest !== 'undefined') {
    //    xhr = new XMLHttpRequest();
    //} else {
    //    // 考虑XMLHttpRequest的支持性
    //    var versions = [
    //        'MSXML2.XmlHttp.5.0',
    //        'MSXML2.XmlHttp.4.0',
    //        'MSXML2.XmlHttp.3.0',
    //        'MSXML2.XmlHttp.2.0',
    //        'Microsoft.XmlHttp'
    //    ];
    //
    //    for (var i = 0, len = versions.length; i < len; i++) {
    //        try {
    //            xhr = new ActiveXObject(versions[i]);
    //        } catch (e) {
    //
    //        }
    //    }
    //}

    //xhr = new XMLHttpRequest();

    xhr.onreadystatechange = ensureReadiness;

    function ensureReadiness() {
        if (xhr.readyState < 4) {
            return;
        }

        if (xhr.status !== 200) {
            return;
        }

        if (xhr.readyState === 4) {
            callback(xhr);
        }
    }

    xhr.open('GET', url, true);
    xhr.send();
}

// 原生ajax封装
var ajax = {
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
        var xhr = this.init();
        // 参数3 表示是否异步执行，true为异步，false为同步。
        xhr.open('GET',url, true);
        xhr.setRequestHeader('text/html;charset=utf-8');
        xhr.onreadystatechange = function(){
            if(xhr.status===200 && xhr.readyState===4){
                callback(xhr.responseText);
            }
        };
        xhr.send(this.convertObj(data));
    },
    post: function (url, data, callback) {
        var xhr = this.init();
        xhr.setRequestHeader('application/json');
        xhr.open('POST',url,true);
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState === 4){
                callback(xhr.responseText);
            }
        };
        xhr.send(this.convertObj(data));
    },
    put: function (url, data, callback) {
        var xhr = this.init();
        xhr.setRequestHeader('application/json');
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
        xhr.setRequestHeader('text/html;charset=utf-8');
        xhr.open('PUT',url,true);
        xhr.onreadystatechange = function(){
            if(xhr.status === 200 && xhr.readyState === 4){
                callback(xhr.responseText);
            }
        };
        xhr.send(this.convertObj(data));
    }
};