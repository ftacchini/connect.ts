import { Route, Middleware } from "../../core"
import { HttpRouteInformation } from "./http-route-information";
import { HttpRouteType } from "../http-route-type";
import { Router as ExpressRouter, RequestHandler } from "express";

export class HttpRoute implements Route<HttpRouteInformation, ExpressRouter> {

    public information: HttpRouteInformation;
    public middleware: Middleware<any, ExpressRouter>[];
    attachToServer(server: ExpressRouter): ExpressRouter {
        var route = server[this.information.type](this.information.path);
        this.middleware.forEach(middleware => middleware.attachToServer(route));

        return route;
    }
}