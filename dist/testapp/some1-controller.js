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
const controller_information_1 = require("../core/controller-information");
require("reflect-metadata");
let SomeController1 = class SomeController1 {
    constructor() { }
    foo() {
        console.log("foo being called");
    }
};
__decorate([
    controller_information_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SomeController1.prototype, "foo", null);
SomeController1 = __decorate([
    controller_information_1.Controller({ name: "someName" }),
    __metadata("design:paramtypes", [])
], SomeController1);
exports.SomeController1 = SomeController1;
//# sourceMappingURL=some1-controller.js.map