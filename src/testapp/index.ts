import { HubBuilder, HttpServer } from "../core/core-module";

var httpServer = HttpServer.bootstrap();

var hub = HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();

hub.run();