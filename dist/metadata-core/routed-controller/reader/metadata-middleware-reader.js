"use strict";
const helpers_1 = require("../../helpers");
class MetadataMiddlewareReader {
    constructor() {
        this.metadataTags = [];
    }
    readControllerMiddleware(router, target) {
        return helpers_1.ControllerMetadataReader.instance.readControllerLevelMetadata(this.metadataTags, target);
    }
    readRouteMiddleware(router, target, property) {
        return helpers_1.ControllerMetadataReader.instance.readMethodLevelMetadata(this.metadataTags, target, property);
    }
}
exports.MetadataMiddlewareReader = MetadataMiddlewareReader;
//# sourceMappingURL=metadata-middleware-reader.js.map