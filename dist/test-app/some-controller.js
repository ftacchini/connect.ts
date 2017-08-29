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
const http_server_1 = require("../http-server");
require("reflect-metadata");
let SomeController = class SomeController {
    constructor() { }
    foo(param, param2) {
        console.log("foo being called " + param + param2);
    }
};
__decorate([
    http_server_1.HttpGet({ path: "foorecopada" }),
    __param(1, http_server_1.FromHttpRequest()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], SomeController.prototype, "foo", null);
SomeController = __decorate([
    http_server_1.HttpHandler({ name: "someName" }),
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], SomeController);
exports.SomeController = SomeController;
//# sourceMappingURL=some-controller.js.map