import { ControllerLoader, RouteBuilder } from "../routing/routing.module";
import { Container } from "inversify";

export class RouterConfiguration {
    routeBuilder: { new(applicationConfig?: RouterConfiguration, injector?: Container): RouteBuilder};
    activator: { new(applicationConfig?: RouterConfiguration, injector?: Container): RouteBuilder};
    controllerLoaders: { new(applicationConfig?: RouterConfiguration, injector?: Container): ControllerLoader}[];
    extraConfig: any;
}