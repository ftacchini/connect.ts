"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpGetBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "get";
    }
}
exports.HttpGetBuilder = HttpGetBuilder;
//# sourceMappingURL=http-get-builder.js.map