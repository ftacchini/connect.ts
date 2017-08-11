"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpHeadBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "head";
    }
}
exports.HttpHeadBuilder = HttpHeadBuilder;
//# sourceMappingURL=http-head-builder.js.map