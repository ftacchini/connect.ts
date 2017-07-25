import {Route, Middleware} from "../";
import {Server} from "../../../core"
import {MiddlewareReader} from "../reader";

export abstract class RouteBuilder<Information, GenericRouter> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 

    public constructor(protected middlewareReader: MiddlewareReader){

    }

    public abstract supportsRouter(router: GenericRouter): boolean;
    public buildRoute(): Route<Information, GenericRouter> {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(route);
        route.information = this.information;
        
        return route;
    }

    protected abstract createRouteInstance(): Route<Information, GenericRouter>;
    protected buildRouteMiddleware(router: any): Middleware<any, GenericRouter>[] {
        var builders = this.middlewareReader.readRouteMiddleware<GenericRouter>(router, this.target, this.propertyKey);
        return builders.map((builder) => builder.buildMiddleware());
    }
}