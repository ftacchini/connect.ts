"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_core_1 = require("../../metadata-core");
const _1 = require("../");
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
    setFramework(tsFramework) {
        this.tsFramework = tsFramework;
        return this;
    }
    setServerSupport(server, serverConfigurator) {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator });
        return this;
    }
    buildHub() {
        this.initializeContainer()
            .initializeFramework();
        var controllerLoader = this.tsFramework.setupFramework();
        return new hub_1.Hub(this.supportedServers, this.container, controllerLoader);
    }
    initializeFramework() {
        this.tsFramework = this.tsFramework || new metadata_core_1.MetadataFramework(this.container);
        return this;
    }
    initializeContainer() {
        this.container = this.container || new _1.InversifyContainer();
        this.container.bind(_1.Types.Container).toConstantValue(this.container);
        return this;
    }
}
exports.HubBuilder = HubBuilder;
//# sourceMappingURL=hub-builder.js.map