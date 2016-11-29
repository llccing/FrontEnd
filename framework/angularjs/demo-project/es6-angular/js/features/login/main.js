/**
 * Defines a login feature
 * 
 * @Author 刘春峰
 * @Date 2016年11月29日
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import LoginController from './controller/LoginController';
import LoginService from './service/LoginService';

class Feature extends FeatureBase {
    constructor(){
        super('login');
        this.routes = Routes;
    }

    // 名字写错，提示LoginController is not a function
    execute(){
        this.controller('LoginController',LoginController);
        this.service('LoginService',LoginService);
    }
}

export default Feature;