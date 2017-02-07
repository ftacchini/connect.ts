import { ControllerLoader } from "../routing/controller-loader.core";
import { RouteMapper } from "../routing/route-mapper.core";
import { RouteBuilder } from "../routing/route-builder.core";
import { Container } from "inversify";

export class RouterConfiguration {
    routeBuilder: { new(applicationConfig?: RouterConfiguration, injector?: Container): RouteBuilder};
    routeMappers: { new(applicationConfig?: RouterConfiguration, injector?: Container): RouteMapper}[];
    middlewareMappers: { new(applicationConfig?: RouterConfiguration, injector?: Container): ControllerLoader}[];
    controllerLoaders: { new(applicationConfig?: RouterConfiguration, injector?: Container): ControllerLoader}[];
    extraConfig: any;
}