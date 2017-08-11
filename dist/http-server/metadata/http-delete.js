"use strict";
const metadata_core_1 = require("../../metadata-core");
const routed_controller_1 = require("../routed-controller");
const HttpMetadataKeys = require("./http-metadata-keys");
exports.HttpDelete = metadata_core_1.ControllerMetadataBuilder.instance.buildMethodLevelMetadata(routed_controller_1.HttpDeleteBuilder, [metadata_core_1.ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);
//# sourceMappingURL=http-delete.js.map