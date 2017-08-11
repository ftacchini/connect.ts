"use strict";
const core_1 = require("../core");
const http_server_1 = require("../http-server");
var httpServer = http_server_1.HttpServer.bootstrap();
var hub = core_1.HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();
hub.run();
//# sourceMappingURL=index.js.map