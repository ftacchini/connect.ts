"use strict";
const get_action_information_model_1 = require("./get-action-information.model");
const action_attribute_factory_1 = require("./action-attribute.factory");
const http_attribute_1 = require("./http.attribute");
class HttpGetAttribute extends http_attribute_1.HttpAttribute {
    constructor(target, propertyKey) {
        super(target, propertyKey);
    }
    processInformation(information) {
        information || (information = new get_action_information_model_1.GetActionInformation());
        super.processInformation(information);
        return information;
    }
}
exports.HttpGetAttribute = HttpGetAttribute;
exports.Get = action_attribute_factory_1.ActionAttributeFactory(HttpGetAttribute);
//# sourceMappingURL=get.attribute.js.map