import { ControllerRouter } from "./controller-router.core";
import * as express from "express";
import { Container } from "inversify";

export interface RouteBuilder {
    buildRoutes(controllerRouters: ControllerRouter[], container: Container, application: express.Application) : void;
}