/**
 *  ConfiguratorBase class
 *
 *
 *  @author  llccing
 *  @date    Nov 29, 2016
 *
 */

class ConfiguratorBase {

    constructor(features, app) {
        this.features = features;
        this.app = app;

        this.config = app.config;
        this.constant = app.constant;
        this.value = app.value;
    }

    execute() {}
}

export default ConfiguratorBase;
