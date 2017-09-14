import { Middleware } from "../middleware";
import { Route } from "../route";
import { ControllerActivator } from "../activator/controller-activator";
import { MiddlewareReader } from "../reader";
export declare abstract class RouteBuilder<Information, GenericRouter, RequestHandler> {
    protected middlewareReader: MiddlewareReader;
    protected activator: ControllerActivator<GenericRouter, RequestHandler>;
    information: Information;
    target: any;
    propertyKey: string;
    constructor(middlewareReader: MiddlewareReader, activator: ControllerActivator<GenericRouter, RequestHandler>);
    abstract supportsRouter(router: GenericRouter): boolean;
    buildRoute(router: GenericRouter): Route<Information, GenericRouter, RequestHandler>;
    protected abstract createRouteInstance(): Route<Information, GenericRouter, RequestHandler>;
    protected buildRouteMiddleware(router: GenericRouter): Middleware<any, RequestHandler>[];
}
