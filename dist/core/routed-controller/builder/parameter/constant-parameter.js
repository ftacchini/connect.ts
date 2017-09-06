"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConstantParameter {
    constructor(value, index) {
        this.value = value;
        this.index = index;
    }
    getValue(...args) {
        return this.value;
    }
}
exports.ConstantParameter = ConstantParameter;
//# sourceMappingURL=constant-parameter.js.map