import { RouteBuilder, MiddlewareReader, RouteReader, ControllerActivator, Middleware } from "../../../core";
import { HttpRouteInformation } from "../information";
import { HttpRouteType } from "../../http-route-type";
import { Router as ExpressRouter, RequestHandler } from "express";
import { HttpRoute } from "../http-route";
import * as _ from "lodash";
import "reflect-metadata";

export abstract class HttpRouteBuilder extends RouteBuilder<HttpRouteInformation, ExpressRouter, RequestHandler> {

    constructor(
        middlewareReader: MiddlewareReader, 
        controllerActivator: ControllerActivator<RequestHandler>) {
        super(middlewareReader, controllerActivator);
    }

    public supportsRouter(router: ExpressRouter): boolean {
        return router instanceof ExpressRouter;
    }

    public abstract getDefaultRouteType(): HttpRouteType;


    public buildRoute(router: ExpressRouter): HttpRoute {

        var information = new HttpRouteInformation();
        this.information = (this.information &&  _.merge(information, this.information)) || information;
        this.information.path || (this.information.path = this.propertyKey);
        this.information.type || (this.information.type = this.getDefaultRouteType());
        
        return super.buildRoute(router);
    }

    protected createRouteInstance(): HttpRoute {
        return new HttpRoute();
    }

    
}