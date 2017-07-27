"use strict";
class RouteBuilder {
    constructor(middlewareReader, activator) {
        this.middlewareReader = middlewareReader;
        this.activator = activator;
    }
    buildRoute() {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(route);
        route.information = this.information;
        return route;
    }
    buildRouteMiddleware(router) {
        var builders = this.middlewareReader.readRouteMiddleware(router, this.target, this.propertyKey);
        var middleware = builders.map((builder) => builder.buildMiddleware());
        var activatorFunction = this.activator.buildControllerActivationFunction(this.target, this.propertyKey);
        middleware.push(this.createActivatorMiddleware(activatorFunction));
        return middleware.sort(middleware => middleware.priority);
    }
}
exports.RouteBuilder = RouteBuilder;
//# sourceMappingURL=route-builder.js.map