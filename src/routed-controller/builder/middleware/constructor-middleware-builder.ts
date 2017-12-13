import { DEFAULT_MIDDLEWARE_PRIORITY, HANDLE_REQUEST } from './middleware-constants';
import { Middleware } from './../../middleware';
import { NotSpecifiedParamException } from './../../../exception/not-specified-param-exception';
import { TsHubLogger } from './../../../logging/ts-hub-logger';
import { ConstantParameterBuilder } from './../parameter/constant-parameter-builder';
import { Handler } from './handler';
import { MiddlewareBuilder } from './middleware-builder';
import { injectable, unmanaged } from 'inversify';
import { Server } from "../../../server";
import { ControllerActivator } from "../../activator/controller-activator";

@injectable()
export abstract class ConstructorMiddlewareBuilder<Information, GenericRouter, RequestHandler> 
       implements MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    protected information: Information;
    protected target: any;
    protected propertyKey: string;
    protected middlewareConstructor: new (...args: any[]) => Handler<Information>
    protected priority: number = DEFAULT_MIDDLEWARE_PRIORITY;

    constructor(
        @unmanaged() protected activator: ControllerActivator<GenericRouter, RequestHandler>,
        @unmanaged() protected tsHubLogger: TsHubLogger) {
            if(!activator) { throw new NotSpecifiedParamException("activator", ConstructorMiddlewareBuilder.name) }
            if(!tsHubLogger) { throw new NotSpecifiedParamException("tsHubLogger", ConstructorMiddlewareBuilder.name) }
    }

    
    public withInformation(information: Information) : this {
        this.information = information;
        return this;
    }

    public withTarget(target: any) : this {
        this.target = target;
        return this;
    }

    public withPropertyKey(propertyKey: string) : this {
        this.propertyKey = propertyKey;
        return this;
    }
    
    public withPriority(priority: number) : this {
        this.priority = priority;
        return this;
    }

    public withMiddlewareConstructor(middlewareConstructor: new (...args: any[]) => Handler<Information>): this {
        if(!middlewareConstructor) { 
            throw new NotSpecifiedParamException(
                "middlewareConstructor", 
                ConstructorMiddlewareBuilder.name);
        }
        
        this.middlewareConstructor = middlewareConstructor;
        return this;
    }


    public buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler> {
        if(!router) { throw new NotSpecifiedParamException("router", this.buildMiddleware.name) }        
        this.tsHubLogger.debug(`Middleware "${this.middlewareConstructor.prototype.name}" being build.`);

        var middleware = this.activator.buildControllerActivationMiddleware(
            this.middlewareConstructor.prototype, 
            HANDLE_REQUEST, router ,
            [new ConstantParameterBuilder(this.information, 0)]);

        middleware.priority = this.priority;

        return middleware;
    }

    public abstract supportsRouter(router: GenericRouter): boolean;
}