"use strict";
class HttpRoute {
    attachToRouter(router) {
        router[this.routeType](this.routeName, this.middleware);
    }
}
exports.HttpRoute = HttpRoute;
//# sourceMappingURL=http-route.js.map