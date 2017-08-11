"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpAllBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "all";
    }
}
exports.HttpAllBuilder = HttpAllBuilder;
//# sourceMappingURL=http-all-builder.js.map