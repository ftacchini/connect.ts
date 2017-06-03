"use strict";
const ControllerMetadata = require("./controller-metadata");
function ControllerAttributeFactory(constructor, extraMetadataTags) {
    return function attributeDefinition(information) {
        return function (target) {
            var controllerBuilder = new constructor(target, information);
            Reflect.defineMetadata(ControllerMetadata.CONTROLLER_BUILDER, controllerBuilder, target);
            extraMetadataTags.forEach((metadata) => {
                Reflect.defineMetadata(metadata, controllerBuilder, target);
            });
        };
    };
}
exports.ControllerAttributeFactory = ControllerAttributeFactory;
//# sourceMappingURL=controller-attribute-factory.js.map