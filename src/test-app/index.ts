import { HubBuilder } from "../core";
import { HttpServer, DefaultHttpServerConfigurator } from "../http-server";
import { Container, inject, injectable, unmanaged } from "inversify";

var httpServer = HttpServer.bootstrap();

var hub = HubBuilder.instance
    .setServerSupport(httpServer, new DefaultHttpServerConfigurator())
    .buildHub();

hub.run();