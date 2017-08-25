"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
class JsHelper {
    static get instance() {
        return this._instance || (this._instance = new JsHelper());
    }
    readFunctionParamNames(func) {
        var fnStr = func.toString().replace(STRIP_COMMENTS, '');
        var result = fnStr.slice(fnStr.indexOf('(') + 1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
        if (result === null)
            result = [];
        return result;
    }
}
exports.JsHelper = JsHelper;
//# sourceMappingURL=js-helper.js.map