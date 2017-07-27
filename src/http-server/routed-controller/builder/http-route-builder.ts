import { RouteBuilder, MiddlewareReader, RouteReader, ControllerActivator, Middleware } from "../../../core";
import { HttpRouteInformation } from "../http-route-information";
import { Router as ExpressRouter, RequestHandler } from "express";
import { HttpRoute } from "../http-route";

export class HttpRouteBuilder extends RouteBuilder<HttpRouteInformation, ExpressRouter, RequestHandler> {

    constructor(middlewareReader: MiddlewareReader, controllerActivator: ControllerActivator) {
        super(middlewareReader, controllerActivator);
    }

    public supportsRouter(router: ExpressRouter): boolean {
        return router instanceof ExpressRouter;
    }

    public buildRoute(): HttpRoute {
        this.information || (this.information = new HttpRouteInformation());
        this.information.path || (this.information.path = this.propertyKey);
        this.information.type || (this.information.type = "all");
        
        return super.buildRoute();
    }

    protected createRouteInstance(): HttpRoute {
        return new HttpRoute();
    }

    protected createActivatorMiddleware(activatorFunction: any): Middleware<any, RequestHandler> {

    } 
    
}