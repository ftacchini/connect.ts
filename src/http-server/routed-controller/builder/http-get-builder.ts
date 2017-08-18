import { MiddlewareReader, ControllerActivator, Middleware, TYPES } from "../../../core";
import { HttpRouteBuilder } from "./http-route-builder";
import { HttpRouteType } from "../../http-route-type";
import { Router as RequestHandler } from "express";
import { injectable, inject } from "inversify";

@injectable()
export class HttpGetBuilder extends HttpRouteBuilder {

    constructor(
        @inject(TYPES.MiddlewareReader) middlewareReader: MiddlewareReader, 
        controllerActivator: ControllerActivator<RequestHandler>) {
        super(middlewareReader, controllerActivator);
    }

    public getDefaultRouteType(): HttpRouteType {
        return "get";
    }

    
}