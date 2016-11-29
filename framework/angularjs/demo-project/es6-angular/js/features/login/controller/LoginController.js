/**
 * LoginController
 * 
 * @Author 刘春峰
 * @Date 2016年11月29日
 */

class LoginController {
    
    /**@ngInject */
    constructor($scope,LoginService){
        this.$scope = $scope;
        this.LoginService = LoginService;

        this._init_();
        this._destroy_();
    }

    _init_(){
        this.name = '';
        this.pass = '';
    }

    login(){
        this.LoginService.post({name:this.name,pass:this.pass}).then(data=>{
            alert(data);
        })
    }

    _destroy_(){
        this.$scope.$on('$destroy',function(){});
    }
}

export default LoginController;