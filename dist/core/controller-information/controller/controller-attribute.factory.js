"use strict";
const controller_metadata_builder_service_1 = require("../controller-metadata-builder.service");
function ControllerAttributeFactory(informationBuilder) {
    return function attributeDefinition(information) {
        return function (target) {
            var result = new informationBuilder(target).processInformation(information);
            controller_metadata_builder_service_1.ControllerMetadataBuilder.instance.attachControllerInformation(target, information);
        };
    };
}
exports.ControllerAttributeFactory = ControllerAttributeFactory;
//# sourceMappingURL=controller-attribute.factory.js.map