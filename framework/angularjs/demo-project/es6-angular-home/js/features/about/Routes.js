/**
 *
 *  Routes module expose route information used in about feature
 *
 *  @author  llccing
 *  @date    Nov 29, 2016
 *
 */

import tpl from './partials/about.html';

export default [
    {
        id: 'about',
        isDefault: false,
        when: '/about',
        controller: 'AboutController',
        controllerAs: 'about',
        template: tpl
    }
];
