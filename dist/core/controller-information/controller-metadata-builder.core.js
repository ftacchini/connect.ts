"use strict";
const _ = require("lodash");
class ControllerMetadataBuilder {
    constructor() {
    }
    static get instance() {
        return this._instance || new ControllerMetadataBuilder();
    }
    attachInformation(target, propertyKey, information) {
        target.__controllerMetadata || (target.__controllerMetadata = { properties: {} });
        var metadata = propertyKey ?
            (target.__controllerMetadata.properties[propertyKey] || (target.__controllerMetadata.properties[propertyKey] = {})) :
            target.__controllerMetadata;
        _.extend(metadata, information);
    }
    controllerInformation(target) {
        return target.__controllerMetadata;
    }
}
exports.ControllerMetadataBuilder = ControllerMetadataBuilder;
;
//# sourceMappingURL=controller-metadata-builder.core.js.map