"use strict";
class DefaultControllerActivator {
    constructor(hubContainer) {
        this.hubContainer = hubContainer;
    }
    buildControllerActivationFunction(controller, action) {
        var controllerInstance = this.hubContainer.bindAndGet(controller);
        return controllerInstance[action];
    }
}
exports.DefaultControllerActivator = DefaultControllerActivator;
//# sourceMappingURL=default-controller-activator.js.map