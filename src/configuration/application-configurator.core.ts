import * as bodyParser from "body-parser";
import * as express from "express";
import { ApplicationConfig } from "./application-config.core";
import { TYPES } from "./types.core";

export class ApplicationConfigurator {
    configure(app: express.Application, config: ApplicationConfig) {
        app.use(bodyParser());
        config.controllerLoaders = [TYPES.DefaultControllerLoader];
        config.routers = [TYPES.DefaultRouteMapper, TYPES.ApiRouteMapper];
    };
}