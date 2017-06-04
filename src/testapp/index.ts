import { HubBuilder, HttpServer } from "../core/";

var httpServer = HttpServer.bootstrap();

var hub = HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();

hub.run();