"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Hub {
    constructor(serverConfigs, container, controllerLoader) {
        this.serverConfigs = serverConfigs;
        this.container = container;
        this.controllerLoader = controllerLoader;
    }
    run() {
        var controllerBuilders = this.controllerLoader.loadControllerBuilders(this.container);
        this.serverConfigs.forEach((serverConfig) => {
            serverConfig.serverConfigurator && serverConfig.serverConfigurator.configureServer(serverConfig.server, this.container);
            controllerBuilders = controllerBuilders.filter((controllerBuilder) => {
                if (controllerBuilder.supportsServer(serverConfig.server)) {
                    var controller = controllerBuilder.buildController();
                    controller.attachToServer(serverConfig.server);
                    return false;
                }
                return true;
            });
        });
    }
}
exports.Hub = Hub;
//# sourceMappingURL=hub.js.map