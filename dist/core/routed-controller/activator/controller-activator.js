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
const js_helper_1 = require("./../../helper/js-helper");
const inversify_1 = require("inversify");
const inversify_2 = require("inversify");
let ControllerActivator = class ControllerActivator {
    constructor(functionReader, paramsReader) {
        this.functionReader = functionReader;
        this.paramsReader = paramsReader;
    }
    buildControllerActivationFunction(target, propertyKey, router, paramBuilders = []) {
        paramBuilders = paramBuilders.concat(this.paramsReader.readParameters(target, propertyKey, router));
        let paramsArray = null;
        return this.turnIntoMiddleware((...args) => {
            var activatorFunction = this.functionReader.readFunction(target, propertyKey);
            if (!paramsArray) {
                var paramName = js_helper_1.JsHelper.instance.readFunctionParamNames(target[propertyKey]);
                paramsArray = [];
                for (let index = 0; index < paramName.length; index++) {
                    paramsArray[index] = paramBuilders.find(x => x.arg == index)
                        || this.createDefaultParameterBuilder(target, propertyKey, paramName[index], index);
                }
            }
            return activatorFunction(...paramsArray.map(param => param.buildParam().getValue(...args)));
        });
    }
};
ControllerActivator = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_2.unmanaged()),
    __param(1, inversify_2.unmanaged()),
    __metadata("design:paramtypes", [Object, Object])
], ControllerActivator);
exports.ControllerActivator = ControllerActivator;
//# sourceMappingURL=controller-activator.js.map