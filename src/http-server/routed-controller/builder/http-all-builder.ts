import { MiddlewareReader, ControllerActivator, Middleware } from "../../../core";
import { HttpRouteBuilder } from "./http-route-builder";
import { HttpRouteType } from "../../http-route-type";
import { Router as RequestHandler } from "express";

export class HttpAllBuilder extends HttpRouteBuilder {

    constructor(
        middlewareReader: MiddlewareReader, 
        controllerActivator: ControllerActivator<RequestHandler>) {
        super(middlewareReader, controllerActivator);
    }

    public getDefaultRouteType(): HttpRouteType {
        return "all";
    }

    
}