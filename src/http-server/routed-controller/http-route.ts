import { Route, Middleware } from "../../core"
import { HttpRouteInformation } from "./http-route-information";
import { Router as ExpressRouter, RequestHandler } from "express";

export class HttpRoute implements Route<HttpRouteInformation, ExpressRouter> {

    public information: HttpRouteInformation;
    public middleware: Middleware<any, ExpressRouter>[];
    attachToServer(server: ExpressRouter): ExpressRouter {
        router[this.routeType](this.routeName, this.middleware);
    }
}