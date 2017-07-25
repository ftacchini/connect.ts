"use strict";
const Express_1 = require("Express");
const http_server_1 = require("./http-server");
class HttpRouter {
    attachToServer(server) {
        var router = Express_1.Router();
        router.use(this.middleware);
        server.application.use(this.routerName, router);
        this.routes.forEach(route => {
            route.attachToRouter(router);
        });
        return router;
    }
    supportsServer(server) {
        return server.application instanceof http_server_1.HttpServer;
    }
}
exports.HttpRouter = HttpRouter;
//# sourceMappingURL=http-router.js.map