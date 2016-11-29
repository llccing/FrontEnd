/**
 * Routes
 * @Author 刘春峰
 * @Date 2016年11月29日
 */

import tpl from './partials/login.html';

export default [
    {
        id:'login',
        isDefault: true,
        when: '/login',
        controller: 'LoginController',
        controllerAs: 'login',
        template: tpl
    }
];