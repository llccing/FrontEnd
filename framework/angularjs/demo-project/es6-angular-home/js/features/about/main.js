/**
 * ******************************************************************************************************
 *
 *   Defines a about feature
 *
 *  @author  llccing
 *  @date    Nov 28, 2016
 *
 * ******************************************************************************************************
 */

import FeatureBase from 'lib/FeatureBase';
import Routes from './Routes';
import AboutController from './controller/AboutController';

class Feature extends FeatureBase {

    constructor() {
        super('about');
        this.routes = Routes;
    }

    execute() {
        this.controller('AboutController', AboutController);
    }
}

export default Feature;
