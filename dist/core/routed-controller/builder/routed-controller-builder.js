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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
require("reflect-metadata");
let RoutedControllerBuilder = class RoutedControllerBuilder {
    constructor(middlewareReader, routeReader) {
        this.middlewareReader = middlewareReader;
        this.routeReader = routeReader;
    }
    buildController() {
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware(controller);
        controller.routes = this.buildControllerRoutes(controller);
        return controller;
    }
    buildControllerMiddleware(controller) {
        var builders = this.middlewareReader.readControllerMiddleware(controller.router, this.target);
        return builders.map((builder) => builder.buildMiddleware())
            .sort(middleware => middleware.priority);
    }
    buildControllerRoutes(controller) {
        var builders = this.routeReader.readRoutes(controller.router, this.target);
        return builders.map((builder) => builder.buildRoute());
    }
};
RoutedControllerBuilder = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.unmanaged()),
    __param(1, inversify_1.unmanaged()),
    __metadata("design:paramtypes", [Object, Object])
], RoutedControllerBuilder);
exports.RoutedControllerBuilder = RoutedControllerBuilder;
//# sourceMappingURL=routed-controller-builder.js.map