"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpPatchBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "patch";
    }
}
exports.HttpPatchBuilder = HttpPatchBuilder;
//# sourceMappingURL=http-patch-builder.js.map