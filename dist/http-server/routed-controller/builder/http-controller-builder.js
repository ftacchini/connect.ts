"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("../../../core");
const information_1 = require("../information");
const http_controller_1 = require("../http-controller");
const http_server_1 = require("../../server/http-server");
require("reflect-metadata");
const inversify_1 = require("inversify");
let HttpControllerBuilder = class HttpControllerBuilder extends core_1.RoutedControllerBuilder {
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
};
HttpControllerBuilder = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [Object, Object])
], HttpControllerBuilder);
exports.HttpControllerBuilder = HttpControllerBuilder;
//# sourceMappingURL=http-controller-builder.js.map