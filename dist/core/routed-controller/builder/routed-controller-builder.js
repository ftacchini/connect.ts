"use strict";
class RoutedControllerBuilder {
    constructor(middlewareReader, routeReader) {
        this.middlewareReader = middlewareReader;
        this.routeReader = routeReader;
    }
    buildController() {
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware(controller);
        controller.routes = this.buildControllerRoutes(controller);
        return controller;
    }
    buildControllerMiddleware(controller) {
        var builders = this.middlewareReader.readControllerMiddleware(controller.router, this.target);
        return builders.map((builder) => builder.buildMiddleware());
    }
    buildControllerRoutes(controller) {
        var builders = this.routeReader.readRoutes(controller.router, this.target);
        return builders.map((builder) => builder.buildRoute());
    }
}
exports.RoutedControllerBuilder = RoutedControllerBuilder;
//# sourceMappingURL=routed-controller-builder.js.map