"use strict";
const action_information_model_1 = require("./action-information.model");
const action_attribute_factory_1 = require("./action-attribute.factory");
class HttpAttribute {
    constructor(target, propertyKey) {
        this.target = target;
        this.propertyKey = propertyKey;
    }
    processInformation(information) {
        information || (information = new action_information_model_1.ActionInformation());
        if (!this.propertyKey) {
            throw "Action Attribute is only applicable to a class method";
        }
        information.type || (information.type = "all");
        information.name || (information.name = this.propertyKey.toLowerCase());
        return information;
    }
}
exports.HttpAttribute = HttpAttribute;
exports.Http = action_attribute_factory_1.ActionAttributeFactory(HttpAttribute);
//# sourceMappingURL=http.attribute.js.map