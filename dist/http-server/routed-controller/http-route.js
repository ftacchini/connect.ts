"use strict";
class HttpRoute {
    attachToServer(server) {
        var handlers = this.middleware.map(middleware => middleware.getRequestHandler());
        var route = server[this.information.type](this.information.path, handlers);
        return route;
    }
}
exports.HttpRoute = HttpRoute;
//# sourceMappingURL=http-route.js.map