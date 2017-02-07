"use strict";
const controller_metadata_builder_core_1 = require("./controller-metadata-builder.core");
const action_information_core_1 = require("./action-information.core");
function ActionInformationResolver(information) {
    return (target, propertyKey) => {
        information || (information = new action_information_core_1.ActionInformation());
        if (!propertyKey) {
            throw "Action Attribute is only applicable to a class method";
        }
        information.name || (information.name = propertyKey.toLowerCase());
        controller_metadata_builder_core_1.ControllerMetadataBuilder.instance.attachInformation(target, propertyKey, information);
    };
}
exports.ActionInformationResolver = ActionInformationResolver;
//# sourceMappingURL=action-information-resolver.core.js.map