"use strict";
const helper_1 = require("../../helper");
class MetadataRouteReader {
    constructor() {
        this.metadataTags = [];
    }
    readRoutes(router, target) {
        return helper_1.ControllerMetadataReader.instance
            .readControllerLevelMetadata(this.metadataTags, target)
            .filter(route => route.supportsRouter(router));
    }
}
exports.MetadataRouteReader = MetadataRouteReader;
//# sourceMappingURL=metadata-route-reader.js.map