import { RoutedController, Middleware, Route } from "../../core";
import { HttpServer } from "../server/http-server";
import { HttpControllerInformation } from "./http-controller-information";
import { Router as ExpressRouter, RequestHandler } from "express";

export class HttpController implements RoutedController<HttpControllerInformation, ExpressRouter, RequestHandler> {

    public information: HttpControllerInformation;
    public middleware: Middleware<any, ExpressRouter>[];
    public routes: Route<any, ExpressRouter, RequestHandler>[];
    public router: ExpressRouter;

    constructor() {
        this.router = ExpressRouter(); 
    }

    public attachToServer(server: HttpServer) : ExpressRouter {

        var handlers = this.middleware
            .map(middleware => middleware.getRequestHandler());
        
        this.router.use(handlers);
        
        server.application.use(this.information.name, this.router);
        this.routes.forEach(route => route.attachToServer(this.router));

        return this.router;
    }
}