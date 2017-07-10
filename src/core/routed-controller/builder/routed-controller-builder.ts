import {ControllerBuilder, ControllerActivator, Controller, Server} from "../../../core";
import {RoutedController, Middleware, Route} from "../";
import {RouteBuilder} from "./route-builder";
import {MiddlewareBuilder} from "./middleware-builder";
import * as _ from "lodash";

export abstract class RoutedControllerBuilder<
    Information, 
    GenericRouter,
    GenericRoutedController extends RoutedController<Information, GenericRouter>,
    GenericMiddlewareBuilder extends MiddlewareBuilder<GenericRouter>, 
    GenericRouteBuilder extends RouteBuilder<Information, GenericRouter>> {
    
    public information: Information;
    public target: any;
    
    constructor(){
    }

    public supportsServer(server: Server) : boolean {
        return server.constructor.name === "";
    }

    public buildController() : Controller{
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware();
        controller.routes = this.buildControllerRoutes();

        return controller;
    }

    protected abstract buildRoutedController() : GenericRoutedController;

    protected buildControllerMiddleware(): Middleware<GenericRouter>[] {
        return _.map(Reflect.getMetadata(ControllerMetadataKeys.MIDDLEWARE_BUILDER, this.target), 
            target => {
                var middlewareBuilder = <GenericMiddlewareBuilder>target;
                return middlewareBuilder.buildMiddleware();
            });
    }

    protected buildControllerRoutes(): Route<GenericRouter>[] {
        return _.map(Reflect.getMetadata(ControllerMetadataKeys.ROUTE_BUILDER, this.target), 
            target => {
                var routeBuilder = <GenericRouteBuilder>target; 
                return routeBuilder.buildRoute();
            });
    }
    
}