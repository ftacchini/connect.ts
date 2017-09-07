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
Object.defineProperty(exports, "__esModule", { value: true });
const cast_parameter_types_1 = require("./../metadata-core/helper/cast-parameter-types");
const inversify_1 = require("inversify");
const http_server_1 = require("./../http-server");
const metadata_core_1 = require("./../metadata-core");
require("reflect-metadata");
class MiddlewareInfo {
}
let SomeMiddleware = class SomeMiddleware {
    handleRequest(info, extraParam) {
        console.log("middlewareBeingCalled");
    }
};
__decorate([
    cast_parameter_types_1.CastParameterTypes(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MiddlewareInfo, String]),
    __metadata("design:returntype", Object)
], SomeMiddleware.prototype, "handleRequest", null);
SomeMiddleware = __decorate([
    inversify_1.injectable()
], SomeMiddleware);
exports.SomeMiddleware = SomeMiddleware;
exports.MiddlewareHandler = metadata_core_1.ControllerMiddlewareMetadataBuilder
    .instance
    .buildServerSpecificMiddleware(http_server_1.HttpConstructorMiddlewareBuilder, SomeMiddleware);
//# sourceMappingURL=some-middleware.js.map