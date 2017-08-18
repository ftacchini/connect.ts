"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("inversify");
class InversifyContainer extends inversify_1.Container {
    constructor() {
        super();
    }
    bindAndGet(service, serviceIdentifier) {
        serviceIdentifier || (serviceIdentifier = service);
        try {
            this.get(serviceIdentifier) || this.bind(serviceIdentifier).to(service);
        }
        catch (ex) {
            this.bind(serviceIdentifier).to(service);
        }
        return this.get(serviceIdentifier);
    }
}
exports.InversifyContainer = InversifyContainer;
//# sourceMappingURL=inversify-container.js.map