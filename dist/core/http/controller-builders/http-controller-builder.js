"use strict";
const http_router_1 = require("../http-router");
const MetadataKeys = require("../http-metadata");
const _ = require("lodash");
class HttpControllerBuilder {
    constructor(target, information) {
        this.target = target;
        this.information = information;
        this.information || (this.information = {
            name: this.target.constructor.name
        });
    }
    buildRouter(controllerActivator) {
        var router = new http_router_1.HttpRouter();
        router.routerName = this.information.name;
        router.middleware = this.buildControllerMiddleware();
        router.routes = this.buildControllerRoutes(controllerActivator);
        return router;
    }
    buildControllerMiddleware() {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_CONTROLLER_MIDDLEWARE, this.target), target => {
            var middlewareBuilder = target;
            return middlewareBuilder.buildRequestHandler();
        });
    }
    buildControllerRoutes(controllerActivator) {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_ROUTE_BUILDER, this.target), target => {
            var routeBuilder = target;
            return routeBuilder.buildRoute(controllerActivator);
        });
    }
}
exports.HttpControllerBuilder = HttpControllerBuilder;
//# sourceMappingURL=http-controller-builder.js.map