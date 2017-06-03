"use strict";
const controller_module_1 = require("../controller/controller-module");
const inversify_1 = require("inversify");
const hub_1 = require("./hub");
class HubBuilder {
    constructor() {
        this.supportedServers = [];
    }
    static get instance() {
        return this._instance || (this._instance = new HubBuilder());
    }
    setContainer(container) {
        this.container = container;
        return this;
    }
    setControllerActivator(controllerActivator) {
        this.controllerActivator = controllerActivator;
        return this;
    }
    setControllerFactory(controllerFactory) {
        this.controllerFactory = controllerFactory;
        return this;
    }
    setControllerLoader(controllerLoader) {
        this.controllerLoader = controllerLoader;
        return this;
    }
    setServerSupport(server, serverConfigurator) {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator });
        return this;
    }
    buildHub() {
        var controllerFactory = this.controllerFactory || new controller_module_1.DefaultControllerFactory(this.container);
        var controllerActivator = this.controllerActivator || new controller_module_1.DefaultControllerActivator(controllerFactory);
        var controllerLoader = this.controllerLoader || new controller_module_1.DefaultControllerLoader();
        var container = this.container || new inversify_1.Container();
        return new hub_1.Hub(this.supportedServers, container, controllerActivator, controllerFactory, controllerLoader);
    }
}
exports.HubBuilder = HubBuilder;
//# sourceMappingURL=hub-builder.js.map