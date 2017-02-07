"use strict";
const express = require("express");
const configuration_module_1 = require("./configuration/configuration.module");
const routing_module_1 = require("./routing/routing.module");
const inversify_1 = require("inversify");
class Server {
    constructor(configurator, injector) {
        this.configurator = configurator;
        this.injector = injector;
        this.app = express();
        this.container = new inversify_1.Container();
        this.configuration = new configuration_module_1.ApplicationConfiguration();
        this.config();
        this.routes();
        this.app.listen(this.configuration.port);
    }
    static bootstrap(configurator, injector) {
        return new Server(configurator, injector);
    }
    config() {
        this.injector.configure(this.container);
        this.configurator.configure(this.app, this.configuration);
    }
    routes() {
        routing_module_1.RouteLoader.instance.loadRoutes(this.container, this.configuration, this.app);
    }
}
exports.Server = Server;
//# sourceMappingURL=server.core.js.map