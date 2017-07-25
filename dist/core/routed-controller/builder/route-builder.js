"use strict";
class RouteBuilder {
    constructor(middlewareReader) {
        this.middlewareReader = middlewareReader;
    }
    buildRoute() {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(route);
        route.information = this.information;
        return null;
    }
    buildRouteMiddleware(router) {
        var builders = this.middlewareReader.readRouteMiddleware(router, this.target, this.propertyKey);
        return builders.map((builder) => builder.buildMiddleware());
    }
}
exports.RouteBuilder = RouteBuilder;
//# sourceMappingURL=route-builder.js.map