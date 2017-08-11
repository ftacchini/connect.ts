"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpPutBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "put";
    }
}
exports.HttpPutBuilder = HttpPutBuilder;
//# sourceMappingURL=http-put-builder.js.map