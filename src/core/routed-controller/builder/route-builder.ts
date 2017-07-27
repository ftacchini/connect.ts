import {Route, Middleware} from "../";
import {Server} from "../../server"
import {ControllerActivator} from "../../controller";
import {MiddlewareReader} from "../reader";

export abstract class RouteBuilder<Information, GenericRouter, RequestHandler> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 

    public constructor(
        protected middlewareReader: MiddlewareReader, 
        protected activator: ControllerActivator){

    }

    public abstract supportsRouter(router: GenericRouter): boolean;
    public buildRoute(): Route<Information, GenericRouter, RequestHandler> {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(route);
        route.information = this.information;
        
        return route;
    }

    protected abstract createRouteInstance(): Route<Information, GenericRouter, RequestHandler>;
    protected abstract createActivatorMiddleware(activatorFunction: any): Middleware<any, RequestHandler>; 
    protected buildRouteMiddleware(router: any): Middleware<any, RequestHandler>[] {

        var builders = this.middlewareReader.readRouteMiddleware<RequestHandler>(router, this.target, this.propertyKey);
        var middleware = builders.map((builder) => builder.buildMiddleware());

        var activatorFunction = this.activator.buildControllerActivationFunction(this.target, this.propertyKey); 
        middleware.push(this.createActivatorMiddleware(activatorFunction));

        return middleware.sort(middleware => middleware.priority);
    }
}