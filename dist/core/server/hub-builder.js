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
    setControllerLoader(controllerLoader) {
        this.controllerLoader = controllerLoader;
        return this;
    }
    setRouteReader(routeReader) {
        this.routeReader = routeReader;
        return this;
    }
    setMiddlewareReader(middlewareReader) {
        this.middlewareReader = middlewareReader;
        return this;
    }
    setServerSupport(server, serverConfigurator) {
        this.supportedServers.push({ server: server, serverConfigurator: serverConfigurator });
        return this;
    }
    buildHub() {
        var container = this.setupCountainer();
        this.setupRouteReader(container);
        this.setupMiddlewareReader(container);
        var controllerLoader = this.controllerLoader || new metadata_core_1.MetadataControllerLoader();
        return new hub_1.Hub(this.supportedServers, container, controllerLoader);
    }
    setupCountainer() {
        this.container = this.container || new _1.InversifyContainer();
        _1.TYPES.Container = Symbol("Container");
        this.container.bind(_1.TYPES.Container).toConstantValue(this.container);
        return this.container;
    }
    setupRouteReader(container) {
        this.routeReader = this.routeReader || new metadata_core_1.MetadataRouteReader();
        _1.TYPES.RouteReader = Symbol("RouteReader");
        this.container.bind(_1.TYPES.RouteReader).toConstantValue(this.routeReader);
    }
    setupMiddlewareReader(container) {
        this.middlewareReader = this.middlewareReader || new metadata_core_1.MetadataMiddlewareReader();
        _1.TYPES.MiddlewareReader = Symbol("MiddlewareReader");
        this.container.bind(_1.TYPES.MiddlewareReader).toConstantValue(this.middlewareReader);
    }
}
exports.HubBuilder = HubBuilder;
//# sourceMappingURL=hub-builder.js.map