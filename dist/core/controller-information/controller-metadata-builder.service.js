"use strict";
const _ = require("lodash");
class ControllerMetadataBuilder {
    constructor() {
    }
    static get instance() {
        return this._instance || new ControllerMetadataBuilder();
    }
    attachControllerInformation(target, moreInformation) {
        let controllerInformation = this.controllerInformation(target.prototype);
        _.extend(controllerInformation, moreInformation);
    }
    attachPropertyInformation(targetPrototype, propertyKey, moreInformation) {
        let propertyInformation = this.propertyInformation(targetPrototype, propertyKey);
        _.extend(propertyInformation, moreInformation);
    }
    controllerInformation(target) {
        return target.__controllerMetadata || (target.__controllerMetadata = { properties: {} });
    }
    propertyInformation(target, propertyKey) {
        let controllerInformation = this.controllerInformation(target);
        return controllerInformation.properties[propertyKey] || (controllerInformation.properties[propertyKey] = {});
    }
}
exports.ControllerMetadataBuilder = ControllerMetadataBuilder;
;
//# sourceMappingURL=controller-metadata-builder.service.js.map