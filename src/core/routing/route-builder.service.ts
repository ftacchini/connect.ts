import { ControllerRoutes } from "./controller-routes.model";
import { Application } from "express";
import { Container } from "inversify";

export interface RouteBuilder {
    buildRoutes(
        controllerRouters: ControllerRoutes[], 
        container: Container, 
        application: Application) : void;
}