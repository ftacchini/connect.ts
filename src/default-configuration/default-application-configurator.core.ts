import * as bodyParser from "body-parser";
import { Application } from "express";
import { ApplicationConfiguration } from "../core/configuration/application-configuration.core";
import { DefaultControllerLoader, DefaultRouteBuilder, DefaultRouteMapper } from "../core/routing/routing.module";

export class DefaultApplicationConfigurator {
    configure(app: Application, config: ApplicationConfiguration) {
        app.use(bodyParser());
        config.port = 8080;
        config.routerConfig.controllerLoaders = [DefaultControllerLoader];
        config.routerConfig.routeMappers = [DefaultRouteMapper];
        config.routerConfig.routeBuilder = DefaultRouteBuilder;
    };
}