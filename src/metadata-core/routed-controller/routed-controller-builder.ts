import {ControllerBuilder, ControllerActivator, Controller} from "../../core";
import {ClassMetadata, ControllerMetadataKeys} from "../";

export abstract class RoutedControllerBuilder<Information, Handler, RouteBuilder>  
    implements ClassMetadata<Information>, ControllerBuilder {
    
    public information: Information;
    public target: any;   

    constructor(){
    }

    public buildController() : Controller{
        var router = new HttpRouter();
        router.routerName = this.information.name;
        router.middleware = this.buildControllerMiddleware();
        router.routes = this.buildControllerRoutes(controllerActivator);

        return router;
    }

    protected buildControllerMiddleware(): RequestHandler[] {
        return _.map(Reflect.getMetadata(ControllerMetadataKeys.MIDDLEWARE_BUILDER, this.target), 
            target => {
                var middlewareBuilder = <HttpMiddlewareBuilder>target;
                return middlewareBuilder.buildRequestHandler();
            });
    }

    protected buildControllerRoutes(controllerActivator: ControllerActivator): HttpRoute[] {
        return _.map(Reflect.getMetadata(ControllerMetadataKeys.ROUTE_BUILDER, this.target), 
            target => {
                var routeBuilder = <HttpRouteBuilder>target; 
                return routeBuilder.buildRoute(controllerActivator);
            });
    }
    
}