"use strict";
const core_module_1 = require("../core/core-module");
var httpServer = core_module_1.HttpServer.bootstrap();
var hub = core_module_1.HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();
hub.run();
//# sourceMappingURL=index.js.map