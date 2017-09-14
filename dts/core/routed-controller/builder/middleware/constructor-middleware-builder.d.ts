import { Handler } from './handler';
import { MiddlewareBuilder } from './middleware-builder';
import { Middleware } from "../../middleware";
import { ControllerActivator } from "../../activator/controller-activator";
export declare abstract class ConstructorMiddlewareBuilder<Information, GenericRouter, RequestHandler> implements MiddlewareBuilder<Information, GenericRouter, RequestHandler> {
    protected activator: ControllerActivator<GenericRouter, RequestHandler>;
    information: Information;
    target: any;
    propertyKey: string;
    middlewareConstructor: new (...args: any[]) => Handler<Information>;
    protected abstract priority: number;
    constructor(activator: ControllerActivator<GenericRouter, RequestHandler>);
    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
    abstract supportsRouter(router: GenericRouter): boolean;
}
