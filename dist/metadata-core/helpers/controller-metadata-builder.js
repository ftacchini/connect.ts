"use strict";
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
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            };
        };
    }
    buildMethodLevelMetadata(constructor, metadataTags) {
        return function attributeDefinition(information) {
            return function (target, propertyKey) {
                var controllerBuilder = (container) => {
                    var instance = container.bindAndGet(constructor);
                    instance.target = target;
                    instance.information = information;
                    instance.propertyKey = propertyKey;
                    return instance;
                };
                metadataTags && metadataTags.forEach((metadata) => {
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
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
                    Reflect.defineMetadata(metadata, controllerBuilder, target);
                });
            };
        };
    }
}
exports.ControllerMetadataBuilder = ControllerMetadataBuilder;
//# sourceMappingURL=controller-metadata-builder.js.map