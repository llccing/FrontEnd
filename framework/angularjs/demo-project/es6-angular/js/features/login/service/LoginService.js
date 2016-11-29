/**
 * LoginService
 * @Author 刘春峰
 * @Date 2016年11月29日
 */

class LoginService{
    /**@ngInject */
    constructor($http,utils){
        this.$http = $http;
        this.utils = utils;
    }

    post(user){
        return new Promise((resolve,reject) =>{
            // this.$http({
            //     // url:'http://192.168.0.47:8080/ycsf/api/user/login',
            //     url:'http://192.168.0.48:8080/yd-natural/api/codes/area?type=XZQH',
            //     data:JSON.stringify(user),
            //     type:'GET',
            //     'Content-type':'application/x-www-form-urlencoded',
            //     dataType:'json'
            // })
            // .success((data)=>{
            //     resolve(data);
            // })
            // .error((e)=>{console.log(e)});
            
            // try 2
            // this.$http.jsonp("http://192.168.0.47:8080/ycsf/api/user/login?jsonp=JSON_CALLBACK&siteid=137bd406")
            // .success(function(data){resolve(data)});

        });
    }
}

export default LoginService;