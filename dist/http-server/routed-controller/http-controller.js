"use strict";
const express_1 = require("express");
class HttpController {
    constructor() {
        this.router = express_1.Router();
    }
    attachToServer(server) {
        var handlers = this.middleware
            .map(middleware => middleware.getRequestHandler());
        this.router.use(handlers);
        server.application.use(this.information.name, this.router);
        this.routes.forEach(route => route.attachToServer(this.router));
        return this.router;
    }
}
exports.HttpController = HttpController;
//# sourceMappingURL=http-controller.js.map