import { RoutedControllerBuilder, Server, MiddlewareReader, RouteReader } from "../../../core";
import { HttpControllerInformation } from "../http-controller-information";
import { HttpController } from "../http-controller";
import { HttpServer } from "../../server/http-server";
import { Router as ExpressRouter, RequestHandler } from "express";

export class HttpControllerBuilder extends RoutedControllerBuilder<HttpControllerInformation, ExpressRouter, RequestHandler, HttpController> {

    constructor(middlewareReader: MiddlewareReader,
                routeReader: RouteReader){
        super(middlewareReader, routeReader);

    }

    public  buildController() : HttpController {
        this.information || (this.information = new HttpControllerInformation());
        this.information.name || (this.information.name = this.target.constructor.name);
        return super.buildController();
    }

    public supportsServer(server: Server) : boolean {
        return server instanceof HttpServer;
    }

    protected buildRoutedController() : HttpController {
        return new HttpController();
    }
    
}