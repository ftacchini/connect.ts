"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerMetadataBuilder {
    static get instance() {
        return this._instance || (this._instance = new ControllerMetadataBuilder());
    }
    constructor() {
    }
    buildControllerLevelMetadata(constructor, metadataTags) {
        return function attributeDefinition(information) {
            return function (target) {
                var controllerBuilder = (container) => {
                    var instance = container.bindAndGet(constructor);
                    instance.target = target;
                    instance.information = information;
                    return instance;
                };
                metadataTags && metadataTags.forEach((metadata) => {
                    if (!Reflect.hasMetadata(metadata, target)) {
                        Reflect.defineMetadata(metadata, [], target);
                    }
                    var builders = Reflect.getMetadata(metadata, target);
                    builders.push(controllerBuilder);
                });
            };
        };
    }
    buildMethodLevelMetadata(constructor, metadataTags, extraSetters = null) {
        return function attributeDefinition(information) {
            return function (target, propertyKey) {
                var controllerBuilder = (container) => {
                    var instance = container.bindAndGet(constructor);
                    instance.target = target;
                    instance.information = information;
                    instance.propertyKey = propertyKey;
                    extraSetters && extraSetters(instance);
                    return instance;
                };
                metadataTags && metadataTags.forEach((metadata) => {
                    if (!Reflect.hasMetadata(metadata, target, propertyKey)) {
                        Reflect.defineMetadata(metadata, [], target, propertyKey);
                    }
                    var builders = Reflect.getMetadata(metadata, target, propertyKey);
                    builders.push(controllerBuilder);
                });
            };
        };
    }
    buildArgumentLevelMetadata(constructor, metadataTags) {
        return function attributeDefinition(information) {
            return function (target, propertyKey, arg) {
                var controllerBuilder = (container) => {
                    var instance = container.bindAndGet(constructor);
                    instance.target = target;
                    instance.information = information;
                    instance.propertyKey = propertyKey;
                    instance.arg = arg;
                    return instance;
                };
                metadataTags && metadataTags.forEach((metadata) => {
                    if (!Reflect.hasMetadata(metadata, target, propertyKey)) {
                        Reflect.defineMetadata(metadata, [], target, propertyKey);
                    }
                    var builders = Reflect.getMetadata(metadata, target, propertyKey);
                    builders.push(controllerBuilder);
                });
            };
        };
    }
}
exports.ControllerMetadataBuilder = ControllerMetadataBuilder;
//# sourceMappingURL=controller-metadata-builder.js.map