import { Application } from "express";
import { Activator } from "../activator/activator.module";

export interface RouteBuilder {
    buildRoutes(
        controllerMetadata: any,
        activator: Activator,
        application: Application) : void;
}