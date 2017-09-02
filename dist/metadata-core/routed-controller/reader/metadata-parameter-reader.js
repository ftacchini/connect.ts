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
const types_1 = require("./../../../core/container/types");
const helper_1 = require("./../../helper");
const inversify_1 = require("inversify");
let MetadataParameterReader = class MetadataParameterReader {
    constructor(container) {
        this.container = container;
        this.metadataTags = [helper_1.ControllerMetadataKeys.PARAMETER_BUILDER];
    }
    readParameters(target, propertyKey, router) {
        var builders = helper_1.ControllerMetadataReader.instance
            .readArgumentLevelMetadata(this.metadataTags, target, propertyKey);
        return builders.filter(builderFactory => builderFactory)
            .map(builderFactory => builderFactory(this.container))
            .filter(param => param && param.supportsRouter(router));
    }
    readParameterType(target, propertyKey, arg) {
        return Reflect.getMetadata("design:paramtypes", target, propertyKey)[arg];
    }
};
MetadataParameterReader = __decorate([
    inversify_1.injectable(),
    __param(0, inversify_1.inject(types_1.Types.Container)),
    __metadata("design:paramtypes", [Object])
], MetadataParameterReader);
exports.MetadataParameterReader = MetadataParameterReader;
//# sourceMappingURL=metadata-parameter-reader.js.map