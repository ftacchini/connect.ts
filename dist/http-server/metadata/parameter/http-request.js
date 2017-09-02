"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_core_1 = require("../../../metadata-core");
const routed_controller_1 = require("../../routed-controller");
const HttpMetadataKeys = require("../http-metadata-keys");
exports.HttpRequest = metadata_core_1.ControllerMetadataBuilder.instance.buildArgumentLevelMetadata(routed_controller_1.HttpRequestParameterBuilder, [metadata_core_1.ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);
//# sourceMappingURL=http-request.js.map