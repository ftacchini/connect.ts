import {ControllerBuilder, Controller, Server, Types} from "../../";
import {RoutedController} from "../routed-controller";
import {Middleware} from "../middleware";
import {MiddlewareBuilder} from "./middleware/middleware-builder";
import {MiddlewareReader,RouteReader} from "../reader";
import {Route} from "../route";
import { injectable, unmanaged } from "inversify";
import "reflect-metadata";
import * as _ from "lodash";

@injectable()
export abstract class RoutedControllerBuilder<
    Information, 
    GenericRouter,
    RequestHandler,
    GenericRoutedController extends RoutedController<Information, GenericRouter, RequestHandler>> 
    implements ControllerBuilder {
    
    protected information: Information;
    protected target: any;
    
    constructor(@unmanaged() protected middlewareReader: MiddlewareReader,
                @unmanaged() protected routeReader: RouteReader){
    }

    public withInformation(information: Information) : this {
        this.information = information;
        return this;
    }

    public withTarget(target: any) : this {
        this.target = target;
        return this;
    }

    public buildController() : GenericRoutedController{
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware(controller);
        controller.routes = this.buildControllerRoutes(controller);
        return controller;
    }

    public abstract supportsServer(server: Server) : boolean;
    protected abstract buildRoutedController() : GenericRoutedController;
    
    protected buildControllerMiddleware(controller: GenericRoutedController): Middleware<any, RequestHandler>[] {
        var builders = this.middlewareReader.readControllerMiddleware<GenericRouter, RequestHandler>(controller.router, this.target);
        return builders.map((builder) => builder.buildMiddleware(controller.router))
                       .sort(middleware => middleware.priority);
    }

    protected buildControllerRoutes(controller: GenericRoutedController): Route<any, GenericRouter, RequestHandler>[]{
        var builders = this.routeReader.readRoutes<GenericRouter, RequestHandler>(controller.router, this.target);
        return builders.map((builder) => builder.buildRoute(controller.router))
    }
    
}