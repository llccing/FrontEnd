/**
 *  Defines the Autofocus Module.
 *  This module used to override the original `autofocus` attribute since it doesn't work properly with ngRoute
 *
 *  @author  llccing
 *  @date    Nov 29, 2016
 *
 */

import FeatureBase from 'lib/FeatureBase';

class Feature extends FeatureBase {

    constructor() {
        super('AutofocusModule');
    }

    _autoFocus() {
        return {
            restrict: 'A',
            link: function($scope, element) {
                element[0].focus();
            }
        };
    }

    execute() {
        this.directive('autofocus', this._autoFocus);
    }
}

export default Feature;
