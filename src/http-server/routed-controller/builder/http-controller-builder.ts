import { RoutedControllerBuilder, Server, MiddlewareReader, RouteReader, TYPES } from "../../../core";
import { HttpControllerInformation } from "../information";
import { HttpController } from "../http-controller";
import { HttpServer } from "../../server/http-server";
import { Router as ExpressRouter, RequestHandler } from "express";
import { injectable, inject } from "inversify";
import "reflect-metadata";

@injectable()
export class HttpControllerBuilder extends RoutedControllerBuilder<HttpControllerInformation, ExpressRouter, RequestHandler, HttpController> {

    constructor(@inject(TYPES.MiddlewareReader) middlewareReader: MiddlewareReader,
                @inject(TYPES.RouteReader) routeReader: RouteReader){
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