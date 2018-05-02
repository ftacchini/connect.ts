import { injectable, unmanaged } from 'inversify';

import { ControllerActivator } from '../../activator/controller-activator';
import { NotSpecifiedParamException } from './../../../exception/not-specified-param-exception';
import { TsHubLogger } from './../../../logging/ts-hub-logger';
import { Middleware } from './../../middleware';
import { MiddlewareBuilder } from './middleware-builder';
import { DEFAULT_EXECUTION_ORDER, DEFAULT_MIDDLEWARE_PRIORITY, HANDLE_REQUEST } from './middleware-constants';
import { ExecutionOrder } from '../..';

@injectable()
export abstract class ConstructorMiddlewareBuilder<Information, GenericRouter, RequestHandler> 
       implements MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    protected information: Information;
    protected propertyKey: string;
    protected middlewareConstructor: new (...args: any[]) => Object
    protected priority: number;
    protected executionOrder: ExecutionOrder;

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

    public withTarget(middlewareConstructor: new (...args: any[]) => Object): this {
        if(!middlewareConstructor) { 
            throw new NotSpecifiedParamException(
                "middlewareConstructor", 
                ConstructorMiddlewareBuilder.name);
        }
        
        this.middlewareConstructor = middlewareConstructor;
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

    public withExecutionOrder(executionOrder: ExecutionOrder) : this {
        this.executionOrder = executionOrder;
        return this;
    }

    public buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler> {
        if(!router) { throw new NotSpecifiedParamException("router", this.buildMiddleware.name) }        
        this.tsHubLogger.debug(`Middleware "${this.middlewareConstructor.prototype.name}" being build.`);

        var middleware = this.activator.buildControllerActivationMiddleware(
            this.middlewareConstructor.prototype, 
            this.propertyKey || HANDLE_REQUEST, router ,
            { information: this.information } );

        middleware.executionOrder = this.executionOrder || DEFAULT_EXECUTION_ORDER;
        middleware.priority = this.priority || DEFAULT_MIDDLEWARE_PRIORITY;

        return middleware;
    }

    public abstract supportsRouter(router: GenericRouter): boolean;
}