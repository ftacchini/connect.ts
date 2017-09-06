"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constant_parameter_1 = require("./constant-parameter");
const parameter_builder_1 = require("./parameter-builder");
class ConstantParameterBuilder extends parameter_builder_1.ParameterBuilder {
    constructor(parameterValue, index) {
        super(null);
        this.parameterValue = parameterValue;
        this.index = index;
    }
    createParameterInstance() {
        return new constant_parameter_1.ConstantParameter(this.parameterValue, this.index);
    }
    supportsRouter(router) {
        return true;
    }
}
exports.ConstantParameterBuilder = ConstantParameterBuilder;
//# sourceMappingURL=constant-parameter-builder.js.map