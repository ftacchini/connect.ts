"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpNamedParamValueReader {
    constructor(paramName) {
        this.paramName = paramName;
    }
    readParamValue(request, response) {
        console.log(this.paramName);
        console.log(request.query[this.paramName]);
        return request.query[this.paramName];
    }
}
exports.HttpNamedParamValueReader = HttpNamedParamValueReader;
//# sourceMappingURL=http-named-param-value-reader.js.map