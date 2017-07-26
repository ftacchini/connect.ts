"use strict";
const helpers_1 = require("../../helpers");
class MetadataRouteReader {
    constructor() {
        this.metadataTags = [];
    }
    readRoutes(router, target) {
        return helpers_1.ControllerMetadataReader.instance
            .readControllerLevelMetadata(this.metadataTags, target)
            .filter(route => route.supportsRouter(router));
    }
}
exports.MetadataRouteReader = MetadataRouteReader;
//# sourceMappingURL=metadata-route-reader.js.map