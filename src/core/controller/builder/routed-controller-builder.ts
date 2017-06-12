import { ControllerBuilder } from "./controller-builder";
import {ControllerActivator} from "../activator";
import {Controller} from "../controller";


export abstract class RoutedControllerBuilder implements ControllerBuilder {

    constructor(private target: any, private information: HttpControllerInformation){
        
        this.information || (this.information = {
            name: this.target.constructor.name
        });

    }

    public buildController(controllerActivator: ControllerActivator) : Controller{
        var router = new HttpRouter();
        router.routerName = this.information.name;
        router.middleware = this.buildControllerMiddleware();
        router.routes = this.buildControllerRoutes(controllerActivator);

        return router;
    }

    protected buildControllerMiddleware(): RequestHandler[] {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_CONTROLLER_MIDDLEWARE, this.target), 
            target => {
                var middlewareBuilder = <HttpMiddlewareBuilder>target;
                return middlewareBuilder.buildRequestHandler();
            });
    }

    protected buildControllerRoutes(controllerActivator: ControllerActivator): HttpRoute[] {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_ROUTE_BUILDER, this.target), 
            target => {
                var routeBuilder = <HttpRouteBuilder>target; 
                return routeBuilder.buildRoute(controllerActivator);
            });
    }
    
}