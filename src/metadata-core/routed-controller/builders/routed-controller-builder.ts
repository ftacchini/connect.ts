import {ControllerBuilder, ControllerActivator, Controller, Server} from "../../../core";
import {ClassMetadata, ControllerMetadataKeys} from "../../";
import {RoutedController, RouteBuilder, MiddlewareBuilder, Middleware, Route} from "../";
import * as _ from "lodash";

export abstract class RoutedControllerBuilder<
    Information, 
    GenericRouter,
    GenericMiddlewareBuilder extends MiddlewareBuilder<GenericRouter>, 
    GenericRouteBuilder extends RouteBuilder<Information, GenericRouter>> 

    implements ClassMetadata<Information>, ControllerBuilder {
    
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

    protected abstract buildRoutedController() : RoutedController<Information, GenericRouter>;

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