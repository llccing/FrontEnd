
define(['jquery','a'],function($,a){
    $(document).ready(function(){
    	fun4();
    	fun2();
    });


    fun3();
    function fun1(){
      alert("it works1");
    }

     function fun2(){
      alert("it works2");
    }

     function fun3(){
      alert("it works3");
    }

     function fun4(){
      alert("it works4");
    }
    
    $("button").on("click",function(){
    	alert("button click");
    });

})