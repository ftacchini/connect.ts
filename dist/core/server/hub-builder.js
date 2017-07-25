"use strict";
const _1 = require("../");
const metadata_core_1 = require("../../metadata-core");
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
    setControllerLoader(controllerLoader) {
        this.controllerLoader = controllerLoader;
        return this;
    }
    setServerSupport(server, serverConfigurator) {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator });
        return this;
    }
    buildHub() {
        var container = this.container || new _1.InversifyContainer();
        var controllerActivator = this.controllerActivator || new _1.DefaultControllerActivator(container);
        var controllerLoader = this.controllerLoader || new metadata_core_1.MetadataControllerLoader();
        return new hub_1.Hub(this.supportedServers, container, controllerActivator, controllerLoader);
    }
}
exports.HubBuilder = HubBuilder;
//# sourceMappingURL=hub-builder.js.map