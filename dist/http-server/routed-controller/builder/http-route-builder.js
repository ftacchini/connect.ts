"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../../core");
const information_1 = require("../information");
const express_1 = require("express");
const http_route_1 = require("../http-route");
const _ = require("lodash");
require("reflect-metadata");
class HttpRouteBuilder extends core_1.RouteBuilder {
    constructor(middlewareReader, controllerActivator) {
        super(middlewareReader, controllerActivator);
    }
    supportsRouter(router) {
        return router instanceof express_1.Router;
    }
    buildRoute() {
        var information = new information_1.HttpRouteInformation();
        this.information = (this.information && _.merge(information, this.information)) || information;
        this.information.path || (this.information.path = this.propertyKey);
        this.information.type || (this.information.type = this.getDefaultRouteType());
        return super.buildRoute();
    }
    createRouteInstance() {
        return new http_route_1.HttpRoute();
    }
}
exports.HttpRouteBuilder = HttpRouteBuilder;
//# sourceMappingURL=http-route-builder.js.map