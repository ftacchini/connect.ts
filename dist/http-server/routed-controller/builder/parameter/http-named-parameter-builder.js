"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const js_helper_1 = require("./../../../../core/helper/js-helper");
const http_named_parameter_information_1 = require("./../../information/http-named-parameter-information");
const inversify_1 = require("inversify");
const express_1 = require("express");
const core_1 = require("../../../../core");
const _ = require("lodash");
let HttpNamedParameterBuilder = class HttpNamedParameterBuilder extends core_1.ParameterBuilder {
    buildParam() {
        var information = new http_named_parameter_information_1.HttpNamedParameterInformation();
        this.information = (this.information && _.merge(information, this.information)) || information;
        this.information.name || (this.information.name = this.getParameterName());
        return super.buildParam();
    }
    getParameterName() {
        var names = js_helper_1.JsHelper.instance.readFunctionParamNames(this.target[this.propertyKey]);
        return names[this.index];
    }
    supportsRouter(router) {
        return Object.getPrototypeOf(router) == express_1.Router;
    }
};
HttpNamedParameterBuilder = __decorate([
    inversify_1.injectable()
], HttpNamedParameterBuilder);
exports.HttpNamedParameterBuilder = HttpNamedParameterBuilder;
//# sourceMappingURL=http-named-parameter-builder.js.map