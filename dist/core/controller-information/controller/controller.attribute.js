"use strict";
const controller_information_model_1 = require("./controller-information.model");
const controller_attribute_factory_1 = require("./controller-attribute.factory");
class ControllerAttribute {
    constructor(target) {
        this.target = target;
    }
    processInformation(information) {
        information || (information = new controller_information_model_1.ControllerInformation());
        information.name || (information.name = this.target.constructor.name.toLowerCase());
        return information;
    }
}
exports.ControllerAttribute = ControllerAttribute;
exports.Controller = controller_attribute_factory_1.ControllerAttributeFactory(ControllerAttribute);
//# sourceMappingURL=controller.attribute.js.map