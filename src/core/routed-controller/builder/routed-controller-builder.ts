import {ControllerBuilder, ControllerActivator, Controller, Server} from "../../../core";
import {RoutedController} from "../routed-controller";
import {Middleware} from "../middleware";
import {MiddlewareBuilder} from "./middleware-builder";
import {RouteBuilder} from "./route-builder";
import {MiddlewareReader,RouteReader} from "../reader";
import {Route} from "../route";
import * as _ from "lodash";

export abstract class RoutedControllerBuilder<
    Information, 
    GenericRouter,
    GenericRoutedController extends RoutedController<Information, GenericRouter>> {
    
    public information: Information;
    public target: any;
    
    constructor(protected middlewareReader: MiddlewareReader,
                protected routeReader: RouteReader){
    }

    public buildController() : Controller{
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware(controller);
        controller.routes = this.buildControllerRoutes(controller);
        return controller;
    }

    public abstract supportsServer(server: Server) : boolean;
    protected abstract buildRoutedController() : GenericRoutedController;
    
    protected buildControllerMiddleware(controller: GenericRoutedController): Middleware<any, GenericRouter>[] {
        var builders = this.middlewareReader.readControllerMiddleware<GenericRouter>(controller.router, this.target);
        return builders.map((builder) => builder.buildMiddleware());
    }

    protected buildControllerRoutes(controller: GenericRoutedController): Route<any, GenericRouter>[]{
        var builders = this.routeReader.readRoutes<GenericRouter>(controller.router, this.target);
        return builders.map((builder) => builder.buildRoute())
    }
    
}