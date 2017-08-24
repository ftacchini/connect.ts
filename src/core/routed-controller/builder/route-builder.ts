import { unmanaged, injectable } from 'inversify';
import { Middleware } from "../middleware";
import { Route } from "../route";
import { Server } from "../../server"
import { ControllerActivator } from "../activator/controller-activator";
import { MiddlewareReader } from "../reader";

@injectable()
export abstract class RouteBuilder<Information, GenericRouter, RequestHandler> {

    public information: Information;
    public target: any;
    public propertyKey: string;

    public constructor(
        @unmanaged() protected middlewareReader: MiddlewareReader,
        @unmanaged() protected activator: ControllerActivator<RequestHandler>) {

    }

    public abstract supportsRouter(router: GenericRouter): boolean;
    public buildRoute(router: GenericRouter): Route<Information, GenericRouter, RequestHandler> {
        var route = this.createRouteInstance();
        route.middleware = this.buildRouteMiddleware(router);
        route.information = this.information;

        return route;
    }

    protected abstract createRouteInstance(): Route<Information, GenericRouter, RequestHandler>;
    protected buildRouteMiddleware(route: GenericRouter): Middleware<any, RequestHandler>[] {

        var builders = this.middlewareReader.readRouteMiddleware<GenericRouter, RequestHandler>(route, this.target, this.propertyKey);
        var middleware = builders.map((builder) => builder.buildMiddleware(route));

        var activatorMiddleware = this.activator.buildControllerActivationFunction(this.target, this.propertyKey);

        middleware.push(activatorMiddleware);

        return middleware.sort(middleware => middleware.priority);
    }
}