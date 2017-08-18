import { HubBuilder } from "../core";
import { HttpServer, HttpControllerBuilder } from "../http-server";
import { Container, inject, injectable, unmanaged } from "inversify";

var httpServer = HttpServer.bootstrap();

var hub = HubBuilder.instance
    .setServerSupport(httpServer)
    .buildHub();

hub.run();