"use strict";
const http_route_1 = require("../http-route");
const middleware_module_1 = require("../../middleware/middleware-module");
const http_default_middleware_builder_1 = require("../middleware/http-default-middleware-builder");
const http_data_parameters_reader_1 = require("../parameters/http-data-parameters-reader");
const MetadataKeys = require("../http-metadata");
const _ = require("lodash");
class HttpRouteBuilder {
    constructor(target, property, information) {
        this.target = target;
        this.property = property;
        this.information = information;
        this.information || (this.information = {
            route: this.target.constructor.name,
            type: "all"
        });
    }
    buildRoute(controllerActivator) {
        var route = new http_route_1.HttpRoute();
        route.middleware = _.union(this.buildRouteMiddleware(), [this.buildControllerActivatorMiddleware(controllerActivator)]);
        route.routeName = this.information.route;
        route.routeType = this.information.type;
        return route;
    }
    buildControllerActivatorMiddleware(controllerActivator) {
        var activatorFunction = controllerActivator.buildControllerActivationFunction(this.target, this.property);
        var middlewareBuilder = new http_default_middleware_builder_1.HttpDefaultMiddlewareBuilder(this.target, this.property);
        return middlewareBuilder.setMiddleware(new middleware_module_1.DefaultMiddleware(activatorFunction))
            .setParamsReader(new http_data_parameters_reader_1.HttpDataParametersReader())
            .setPriority(0)
            .buildRequestHandler();
    }
    buildRouteMiddleware() {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_ROUTE_MIDDLEWARE, this.target), target => {
            var middlewareBuilder = target;
            return middlewareBuilder.buildRequestHandler();
        });
    }
}
exports.HttpRouteBuilder = HttpRouteBuilder;
//# sourceMappingURL=http-route-builder.js.map