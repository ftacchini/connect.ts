"use strict";
class DefaultControllerActivator {
    constructor(controllerFactory) {
        this.controllerFactory = controllerFactory;
    }
    buildControllerActivationFunction(controller, action) {
        var controllerInstance = this.controllerFactory.createController(controller);
        return controllerInstance[action];
    }
}
exports.DefaultControllerActivator = DefaultControllerActivator;
//# sourceMappingURL=default-controller-activator.js.map