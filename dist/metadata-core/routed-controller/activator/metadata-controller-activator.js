"use strict";
class MetadataControllerActivator {
    constructor(hubContainer) {
        this.hubContainer = hubContainer;
    }
    buildControllerActivationFunction(controller, action) {
        var controllerInstance = this.hubContainer.bindAndGet(controller);
        return controllerInstance[action];
    }
}
exports.MetadataControllerActivator = MetadataControllerActivator;
//# sourceMappingURL=metadata-controller-activator.js.map