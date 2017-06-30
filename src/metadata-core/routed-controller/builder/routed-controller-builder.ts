import {ControllerBuilder, ControllerActivator, Controller} from "../../../core";
import {ClassMetadata, ControllerMetadataKeys} from "../../";
import {RoutedController, RouteBuilder} from "../";

export abstract class RoutedControllerBuilder<Information, Handler, RouteBuilder>  
    implements ClassMetadata<Information>, ControllerBuilder {
    
    public information: Information;
    public target: any;   

    constructor(){
    }

    public buildController() : Controller{
        var controller = this.buildRoutedController();
        controller.information = this.information;
        controller.middleware = this.buildControllerMiddleware();
        controller.routes = this.buildControllerRoutes(controllerActivator);

        return router;
    }

    protected abstract buildRoutedController() : RoutedController<Information>;

    protected buildControllerMiddleware(): Handler[] {
        return _.map(Reflect.getMetadata(ControllerMetadataKeys.MIDDLEWARE_BUILDER, this.target), 
            target => {
                var middlewareBuilder = <MiddlewareBuilder>target;
                return middlewareBuilder.buildRequestHandler();
            });
    }

    protected buildControllerRoutes(controllerActivator: ControllerActivator): Route[] {
        return _.map(Reflect.getMetadata(ControllerMetadataKeys.ROUTE_BUILDER, this.target), 
            target => {
                var routeBuilder = <RouteBuilder>target; 
                return routeBuilder.buildRoute(controllerActivator);
            });
    }
    
}