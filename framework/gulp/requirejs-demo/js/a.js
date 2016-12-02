define(['jquery'], function($) {
    // $(document).ready(function(){
    //    	fun2();
    //    });
    alert("fun222222222");
    
    function fun2(){
    	alert("fun222222222");
    }

    var module = {},
        urls = { update: 'fadf' };
    module.show = function() {
        alert("show method");
    }

    return {
        module: module,
        urls: urls
    }
});
