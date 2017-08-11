"use strict";
const helper_1 = require("../../helper");
class MetadataMiddlewareReader {
    constructor() {
        this.metadataTags = [];
    }
    readControllerMiddleware(router, target) {
        return this.filterMiddleware(router, helper_1.ControllerMetadataReader.instance.readControllerLevelMetadata(this.metadataTags, target));
    }
    readRouteMiddleware(router, target, property) {
        return this.filterMiddleware(router, helper_1.ControllerMetadataReader.instance.readMethodLevelMetadata(this.metadataTags, target, property));
    }
    filterMiddleware(router, middlewareBuilders) {
        return middlewareBuilders.filter(middlewareBuilder => middlewareBuilder.supportsRouter(router));
    }
}
exports.MetadataMiddlewareReader = MetadataMiddlewareReader;
//# sourceMappingURL=metadata-middleware-reader.js.map