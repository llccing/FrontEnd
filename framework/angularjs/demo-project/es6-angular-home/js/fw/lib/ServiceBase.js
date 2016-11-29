/**
 *  ServiceBase class
 *
 *
 *  @author  llccing
 *  @date    Nov 29, 2016
 *
 */

class ServiceBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.factory = app.factory;
        this.service = app.service;
    }

    execute() {}
}

export default ServiceBase;
