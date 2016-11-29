/**
 *
 *  Routes module expose route information used in home feature
 *
 *  @author  llccing
 *  @date    Nov 28, 2016
 *
 */

import tpl from './partials/home.html';

export default [
    {
        id: 'home',
        isDefault: false,
        when: '/home',
        controller: 'HomeController',
        controllerAs: 'home',
        template: tpl
    }
];
