"use strict";
const core_1 = require("../../../core");
const information_1 = require("../information");
const http_controller_1 = require("../http-controller");
const http_server_1 = require("../../server/http-server");
class HttpControllerBuilder extends core_1.RoutedControllerBuilder {
    constructor(middlewareReader, routeReader) {
        super(middlewareReader, routeReader);
    }
    buildController() {
        this.information || (this.information = new information_1.HttpControllerInformation());
        this.information.name || (this.information.name = this.target.constructor.name);
        return super.buildController();
    }
    supportsServer(server) {
        return server instanceof http_server_1.HttpServer;
    }
    buildRoutedController() {
        return new http_controller_1.HttpController();
    }
}
exports.HttpControllerBuilder = HttpControllerBuilder;
//# sourceMappingURL=http-controller-builder.js.map