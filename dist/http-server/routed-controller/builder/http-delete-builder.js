"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpDeleteBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "delete";
    }
}
exports.HttpDeleteBuilder = HttpDeleteBuilder;
//# sourceMappingURL=http-delete-builder.js.map