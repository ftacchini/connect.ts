"use strict";
class Hub {
    constructor(servers, container, controllerActivator, controllerFactory, controllerLoader) {
        this.servers = servers;
        this.container = container;
        this.controllerActivator = controllerActivator;
        this.controllerFactory = controllerFactory;
        this.controllerLoader = controllerLoader;
    }
    run() {
        this.servers.forEach((server) => {
            server.serverConfigurator && server.serverConfigurator.configureServer(server.server);
        });
        var controllerBuilders = this.controllerLoader.loadControllerBuilders();
        var routers = controllerBuilders.map((controllerBuilder) => {
            return controllerBuilder.buildRouter(this.controllerActivator);
        });
        routers.forEach((router) => {
            this.servers.forEach((server) => {
                router.supportsServer(server.server) && router.attachToServer(server.server);
            });
        });
    }
}
exports.Hub = Hub;
//# sourceMappingURL=hub.js.map