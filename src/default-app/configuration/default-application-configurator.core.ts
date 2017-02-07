import * as bodyParser from "body-parser";
import { Application } from "express";
import { ApplicationConfiguration } from "./application-configuration.core";
import { TYPES } from "./types.constant";

export class DefaultApplicationConfigurator {
    configure(app: Application, config: ApplicationConfiguration) {
        app.use(bodyParser());
        config.routerConfig.controllerLoaders = [String];
        config.routerConfig.routers = [TYPES.DefaultRouteMapper];
    };
}