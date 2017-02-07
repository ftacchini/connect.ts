"use strict";
const _ = require("lodash");
class RouteLoader {
    static get instance() {
        return this._instance || (this._instance = new RouteLoader());
    }
    loadRoutes(container, configuration, application) {
        let controllers = [];
        _.each(configuration.routerConfig.controllerLoaders, (loader) => {
            controllers = _.union(controllers, new loader(configuration.routerConfig, container).loadControllers());
        });
        if (controllers.length) {
            let routers = _.map(configuration.routerConfig.routeMappers, (router) => {
                return new router(configuration.routerConfig, container);
            });
            let routeBuilder = new configuration.routerConfig.routeBuilder(configuration.routerConfig, container);
            _.each(controllers, (controller) => {
                let controllerRouters = _.map(routers, (router) => {
                    return router.mapController(controller);
                });
                routeBuilder.buildRoutes(controllerRouters, container, application);
            });
        }
    }
}
exports.RouteLoader = RouteLoader;
//# sourceMappingURL=route-loader.core.js.map