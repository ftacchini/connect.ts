import * as express from "express";
import { Container } from "inversify";
import { TYPES } from "./types.constant";
import { DefaultRouteMapper, DefaultControllerLoader } from "../routing/routing.module";

export class DefaultInjectorConfigurator {
    configure(container: Container) {
        container.bind<DefaultControllerLoader>(TYPES.ControllerLoader).to(DefaultControllerLoader);
        container.bind<DefaultRouteMapper>(TYPES.DefaultRouteMapper).to(DefaultRouteMapper);    
    };
}