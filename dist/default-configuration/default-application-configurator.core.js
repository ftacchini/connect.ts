"use strict";
const bodyParser = require("body-parser");
const routing_module_1 = require("../core/routing/routing.module");
class DefaultApplicationConfigurator {
    configure(app, config) {
        app.use(bodyParser());
        config.port = 8080;
        config.routerConfig.controllerLoaders = [routing_module_1.DefaultControllerLoader];
        config.routerConfig.routeBuilder = routing_module_1.DefaultRouteBuilder;
    }
    ;
}
exports.DefaultApplicationConfigurator = DefaultApplicationConfigurator;
//# sourceMappingURL=default-application-configurator.core.js.map