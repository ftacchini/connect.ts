"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_1 = require("./../../../core/helper");
class HttpEverywhereParameter {
    getValue(request, response) {
        var value = request.query[this.information.name];
        return helper_1.TypesHelper.instance.castToType(value, this.type);
    }
}
exports.HttpEverywhereParameter = HttpEverywhereParameter;
//# sourceMappingURL=http-everywhere-parameter.js.map