"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteBuilder {
    constructor(middlewareReader, activator) {
        this.middlewareReader = middlewareReader;
        this.activator = activator;
    }
    buildRoute(router) {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(router);
        route.information = this.information;
        return route;
    }
    buildRouteMiddleware(route) {
        var builders = this.middlewareReader.readRouteMiddleware(route, this.target, this.propertyKey);
        var middleware = builders.map((builder) => builder.buildMiddleware(route));
        var activatorMiddleware = this.activator.buildControllerActivationFunction(this.target, this.propertyKey);
        middleware.push(activatorMiddleware);
        return middleware.sort(middleware => middleware.priority);
    }
}
exports.RouteBuilder = RouteBuilder;
//# sourceMappingURL=route-builder.js.map