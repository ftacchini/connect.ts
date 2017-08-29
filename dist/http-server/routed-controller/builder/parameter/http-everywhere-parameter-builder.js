"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_everywhere_parameter_1 = require("./../../parameter/http-everywhere-parameter");
const http_named_parameter_builder_1 = require("./http-named-parameter-builder");
class HttpEverywhereParameterBuilder extends http_named_parameter_builder_1.HttpNamedParameterBuilder {
    createParameterInstance() {
        return new http_everywhere_parameter_1.HttpEverywhereParameter();
    }
}
exports.HttpEverywhereParameterBuilder = HttpEverywhereParameterBuilder;
//# sourceMappingURL=http-everywhere-parameter-builder.js.map