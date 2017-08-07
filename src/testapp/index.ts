import { HubBuilder } from "../core";
import { HttpServer } from "../http-server";

var httpServer = HttpServer.bootstrap();

var hub = HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();

hub.run();