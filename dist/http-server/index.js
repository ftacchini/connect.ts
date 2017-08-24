"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../core");
core_1.Types.HttpControllerActivator = Symbol("HttpControllerActivator");
__export(require("./server"));
__export(require("./routed-controller"));
__export(require("./metadata"));
//# sourceMappingURL=index.js.map