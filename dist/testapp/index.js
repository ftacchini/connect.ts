"use strict";
const _1 = require("../core/");
var httpServer = _1.HttpServer.bootstrap();
var hub = _1.HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();
hub.run();
//# sourceMappingURL=index.js.map