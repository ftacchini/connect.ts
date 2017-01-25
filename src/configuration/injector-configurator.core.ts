import * as express from "express";
import { Container } from "inversify";
import { TYPES } from "./types.core";
import { DefaultRouteMapper, DefaultControllerLoader, ApiRouteMapper } from "../routing/routing.module";

export class InjectorConfigurator {
    configure(container: Container) {
        container.bind<DefaultControllerLoader>(TYPES.ControllerLoader).to(DefaultControllerLoader);
        container.bind<DefaultRouteMapper>(TYPES.DefaultRouteMapper).to(DefaultRouteMapper);    
        container.bind<ApiRouteMapper>(TYPES.ApiRouteMapper).to(ApiRouteMapper);    
    };
}