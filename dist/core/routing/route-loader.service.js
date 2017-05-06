"use strict";
const _ = require("lodash");
const controller_information_module_1 = require("../controller-information/controller-information.module");
class RouteLoader {
    constructor() {
    }
    static get instance() {
        return this._instance || (this._instance = new RouteLoader());
    }
    loadRoutes(container, configuration, application) {
        let controllers = [];
        _.each(configuration.routerConfig.controllerLoaders, (loader) => {
            controllers = _.union(controllers, new loader(configuration.routerConfig, container).loadControllerBuilders());
        });
        if (controllers.length) {
            let routers = _.map(configuration.routerConfig.routeMappers, (router) => {
                return new router(configuration.routerConfig, container);
            });
            let routeBuilder = new configuration.routerConfig.routeBuilder(configuration.routerConfig, container);
            _.each(controllers, (controller) => {
                let controllerRouters = _.map(routers, (router) => {
                    let metadata = controller_information_module_1.ControllerMetadataBuilder.instance.controllerInformation(controller.prototype);
                    console.log(metadata);
                    return router.mapController(metadata);
                });
                routeBuilder.buildRoutes(controllerRouters, container, application);
            });
        }
    }
}
exports.RouteLoader = RouteLoader;
//# sourceMappingURL=route-loader.service.js.map