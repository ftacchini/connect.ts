"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const controller_metadata_builder_1 = require("./controller-metadata-builder");
class ControllerMiddlewareMetadataBuilder {
    static get instance() {
        return this._instance || (this._instance = new ControllerMiddlewareMetadataBuilder());
    }
    constructor() {
    }
    buildServerSpecificMiddleware(middlewareBuilderConstructor, middlewareConstructor, metadataTags = [index_1.ControllerMetadataKeys.MIDDLEWARE_BUILDER]) {
        return controller_metadata_builder_1.ControllerMetadataBuilder.instance.buildMethodLevelMetadata(middlewareBuilderConstructor, metadataTags, (instance) => {
            instance.middlewareConstructor = middlewareConstructor;
        });
    }
}
exports.ControllerMiddlewareMetadataBuilder = ControllerMiddlewareMetadataBuilder;
//# sourceMappingURL=controller-middleware-metadata-builder.js.map