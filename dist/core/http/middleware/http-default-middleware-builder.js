"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const http_plain_parameters_reader_1 = require("../parameters/http-plain-parameters-reader");
class HttpDefaultMiddlewareBuilder {
    constructor(target, propertyKey) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.paramsReader = new http_plain_parameters_reader_1.HttpPlainParametersReader();
        this.priority = 1;
    }
    setPriority(priority) {
        this.priority = priority;
        return this;
    }
    setParamsReader(paramsReader) {
        this.paramsReader = paramsReader;
        return this;
    }
    setMiddleware(middleware) {
        this.middleware = middleware;
        return this;
    }
    buildRequestHandler() {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                var result = yield this.executeHandlerFunction(req, res);
                next();
            }
            catch (err) {
                next(err);
            }
        });
    }
    ;
    executeHandlerFunction(req, res) {
        var args = this.paramsReader.readHttpParams(this.middleware.requestHandler, req, res);
        return Object.apply(this.middleware.requestHandler, args);
    }
}
exports.HttpDefaultMiddlewareBuilder = HttpDefaultMiddlewareBuilder;
//# sourceMappingURL=http-default-middleware-builder.js.map