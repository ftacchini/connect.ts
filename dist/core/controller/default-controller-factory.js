"use strict";
class DefaultControllerFactory {
    constructor(container) {
        this.container = container;
        this.controllerMappings = {};
    }
    createController(controller) {
        if (!this.controllerMappings[controller.name]) {
            this.controllerMappings[controller.name] = Symbol(controller.name);
            this.container.bind(controller.symbol).toProvider(controller);
        }
        return this.container.get(this.controllerMappings[controller.name]);
    }
}
exports.DefaultControllerFactory = DefaultControllerFactory;
//# sourceMappingURL=default-controller-factory.js.map