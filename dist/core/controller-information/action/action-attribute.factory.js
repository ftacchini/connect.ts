"use strict";
const controller_metadata_builder_service_1 = require("../controller-metadata-builder.service");
function ActionAttributeFactory(informationBuilder) {
    return function attributeDefinition(information) {
        return function (target, propertyKey) {
            var result = new informationBuilder(target, propertyKey).processInformation(information);
            controller_metadata_builder_service_1.ControllerMetadataBuilder.instance.attachPropertyInformation(target, propertyKey, information);
        };
    };
}
exports.ActionAttributeFactory = ActionAttributeFactory;
//# sourceMappingURL=action-attribute.factory.js.map