"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
const types_1 = require("./types");
class InversifyContainer extends inversify_1.Container {
    constructor() {
        super();
    }
    bindAndGet(service) {
        types_1.Types[service.name] || (types_1.Types[service.name] = Symbol(service.name));
        try {
            this.get(types_1.Types[service.name]) || this.bind(types_1.Types[service.name]).to(service);
        }
        catch (ex) {
            this.bind(types_1.Types[service.name]).to(service);
        }
        return this.get(types_1.Types[service.name]);
    }
}
exports.InversifyContainer = InversifyContainer;
//# sourceMappingURL=inversify-container.js.map