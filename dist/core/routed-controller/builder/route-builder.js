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
const controller_activator_1 = require("../activator/controller-activator");
let RouteBuilder = class RouteBuilder {
    constructor(middlewareReader, activator) {
        this.middlewareReader = middlewareReader;
        this.activator = activator;
    }
    buildRoute(router) {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(router);
        route.information = this.information;
        return route;
    }
    buildRouteMiddleware(router) {
        var builders = this.middlewareReader.readRouteMiddleware(router, this.target, this.propertyKey);
        var middleware = builders.map((builder) => builder.buildMiddleware(router));
        var activatorMiddleware = this.activator.buildControllerActivatonMiddleware(this.target, this.propertyKey, router);
        middleware.push(activatorMiddleware);
        return middleware.sort(middleware => middleware.priority);
    }
};
RouteBuilder = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.unmanaged()),
    __param(1, inversify_1.unmanaged()),
    __metadata("design:paramtypes", [Object, controller_activator_1.ControllerActivator])
], RouteBuilder);
exports.RouteBuilder = RouteBuilder;
//# sourceMappingURL=route-builder.js.map