/**
 *  Defines the Toolbar of whole application.
 *
 *  @author  llccing
 *  @date    Nov 29, 2016
 *
 */

import FeatureBase from 'lib/FeatureBase';
import HeaderTpl from './Header.html';
import {element} from 'angular';

class Feature extends FeatureBase {

    constructor() {
        super('HeaderModule');
        this.$body = element(document.body);
    }

    beforeStart() {
        this.$body.prepend(HeaderTpl);
    }

    _HeaderController($scope, $rootScope) {
        'ngInject';

        $scope.route = 'home';

        $scope.activeRoute = function(name) {
            $scope.route = name;
        };

        $rootScope.$on('$routeChangeSuccess', function(e, next) {
            if (next.$$route && next.$$route.id) {
                $scope.route = next.$$route.id;
            }
        });
    }

    execute() {
        this.controller('HeaderController', this._HeaderController);
    }
}

export default Feature;
