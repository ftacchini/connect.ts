"use strict";
const controller_metadata_builder_core_1 = require("./controller-metadata-builder.core");
const controller_information_core_1 = require("./controller-information.core");
function ControllerInformationResolver(information) {
    return (target) => {
        information || (information = new controller_information_core_1.ControllerInformation());
        information.name || (information.name = target.constructor.name.toLowerCase());
        controller_metadata_builder_core_1.ControllerMetadataBuilder.instance.attachInformation(target.prototype, null, information);
    };
}
exports.ControllerInformationResolver = ControllerInformationResolver;
//# sourceMappingURL=controller-information-resolver.core.js.map