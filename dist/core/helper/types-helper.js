"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
class TypesHelper {
    static get instance() {
        return this._instance || (this._instance = new TypesHelper());
    }
    castToType(value, type) {
        switch (type) {
            case String:
            case Number:
            case Boolean:
                return type(value);
            case Object:
            case Function:
            case null:
            case undefined:
                return value;
            default:
                var instance = new type();
                _.merge(instance, value);
                return instance;
        }
    }
}
exports.TypesHelper = TypesHelper;
//# sourceMappingURL=types-helper.js.map