"use strict";
const server_core_1 = require("./server.core");
class ApplicationLoader {
    static get instance() {
        return this._instance || (this._instance = new ApplicationLoader());
    }
    loadApp(config, injector) {
        var server = server_core_1.Server.bootstrap(config, injector);
    }
}
exports.ApplicationLoader = ApplicationLoader;
//# sourceMappingURL=application-loader.core.js.map