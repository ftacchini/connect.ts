"use strict";
const http_route_builder_1 = require("./http-route-builder");
class HttpPostBuilder extends http_route_builder_1.HttpRouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    getDefaultRouteType() {
        return "post";
    }
}
exports.HttpPostBuilder = HttpPostBuilder;
//# sourceMappingURL=http-post-builder.js.map