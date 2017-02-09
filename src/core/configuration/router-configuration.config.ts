import { ControllerLoader, RouteBuilder, RouteMapper } from "../routing/routing.module";
import { Container } from "inversify";

export class RouterConfiguration {
    routeBuilder: { new(applicationConfig?: RouterConfiguration, injector?: Container): RouteBuilder};
    routeMappers: { new(applicationConfig?: RouterConfiguration, injector?: Container): RouteMapper}[];
    middlewareMappers: { new(applicationConfig?: RouterConfiguration, injector?: Container): ControllerLoader}[];
    controllerLoaders: { new(applicationConfig?: RouterConfiguration, injector?: Container): ControllerLoader}[];
    extraConfig: any;
}