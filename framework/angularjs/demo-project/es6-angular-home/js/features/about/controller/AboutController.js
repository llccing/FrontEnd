/**
 *  Defines the AboutController controller
 *
 *  @author  llccing
 *  @date    Nov 28, 2016
 *
 */

class AboutController {

    /*@ngInject*/
    constructor($scope) {
        this.$scope = $scope;

        this._init_();
        this._destroy_();
    }

    _init_() {}

    _destroy_() {
        this.$scope.$on('$destroy', function() {});
    }
}

export default AboutController;
