"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpEverywhereParameter {
    getValue(request, response) {
        return request.query[this.information.name];
    }
}
exports.HttpEverywhereParameter = HttpEverywhereParameter;
//# sourceMappingURL=http-everywhere-parameter.js.map