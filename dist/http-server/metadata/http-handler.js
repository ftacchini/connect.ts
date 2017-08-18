"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_core_1 = require("../../metadata-core");
const routed_controller_1 = require("../routed-controller");
const HttpMetadataKeys = require("./http-metadata-keys");
exports.HttpHandler = metadata_core_1.ControllerMetadataBuilder.instance.buildControllerLevelMetadata(routed_controller_1.HttpControllerBuilder, [metadata_core_1.ControllerMetadataKeys.CONTROLLER_BUILDER, HttpMetadataKeys.HTTP_CONTROLLER_BUILDER]);
//# sourceMappingURL=http-handler.js.map