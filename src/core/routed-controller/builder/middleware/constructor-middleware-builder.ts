import { ConstantParameterBuilder } from './../parameter/constant-parameter-builder';
import { Handler } from './handler';
import { MiddlewareBuilder } from './middleware-builder';
import { injectable, unmanaged } from 'inversify';
import { Middleware } from "../../middleware";
import { Server } from "../../../../core";
import { ControllerActivator } from "../../activator/controller-activator";

const HANDLE_REQUEST: keyof Handler<any> = "handleRequest";

@injectable()
export abstract class ConstructorMiddlewareBuilder<Information, GenericRouter, RequestHandler> 
       implements MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    public information: Information;
    public target: any;
    public propertyKey: string;
    public arg: number;
    public middlewareConstructor: new (...args: any[]) => Handler<Information>

    protected abstract priority: number;

    constructor(
        @unmanaged() protected activator: ControllerActivator<GenericRouter, RequestHandler>) {
    }

    protected abstract createMiddlewareInstance(): Middleware<Information, RequestHandler>;
    public buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler> {
        var middleware = this.createMiddlewareInstance();
        middleware.information = this.information;
        middleware.priority = this.priority;
        
        this.activator.buildControllerActivationFunction(
            this.middlewareConstructor, 
            HANDLE_REQUEST, router ,
            [new ConstantParameterBuilder(middleware.information, 0)]);

        return middleware;
    }

    public abstract supportsRouter(router: GenericRouter): boolean;
}