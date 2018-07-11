import { injectable, unmanaged } from 'inversify';

import { ControllerActivator } from '../../activator/controller-activator';
import { NotSpecifiedParamException } from './../../../exception/not-specified-param-exception';
import { TsHubLogger } from './../../../logging/ts-hub-logger';
import { Middleware } from './../../middleware';
import { MiddlewareBuilder } from './middleware-builder';
import { DEFAULT_EXECUTION_ORDER, DEFAULT_MIDDLEWARE_PRIORITY, HANDLE_REQUEST } from './middleware-constants';
import { ExecutionOrder } from '../..';
import { MiddlewareInformation } from './middleware-information';

@injectable()
export abstract class AbstractMiddlewareBuilder<Information extends MiddlewareInformation, GenericRouter, RequestHandler> 
       implements MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    protected information: Information;
    protected propertyKey: string;
    protected middlewareConstructor: new (...args: any[]) => Object

    constructor(
        @unmanaged() protected activator: ControllerActivator<GenericRouter, RequestHandler>,
        @unmanaged() protected tsHubLogger: TsHubLogger) {
            if(!activator) { throw new NotSpecifiedParamException("activator", AbstractMiddlewareBuilder.name) }
            if(!tsHubLogger) { throw new NotSpecifiedParamException("tsHubLogger", AbstractMiddlewareBuilder.name) }
    }

    
    public withInformation(information: Information) : this {
        this.information = information;
        return this;
    }

    public withTarget(middlewareConstructor: new (...args: any[]) => Object): this {
        if(!middlewareConstructor) { 
            throw new NotSpecifiedParamException(
                "middlewareConstructor", 
                AbstractMiddlewareBuilder.name);
        }
        
        this.middlewareConstructor = middlewareConstructor;
        return this;
    }

    public withPropertyKey(propertyKey: string) : this {
        this.propertyKey = propertyKey;
        return this;
    }

    public buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler> {
        if(!router) { throw new NotSpecifiedParamException("router", this.buildMiddleware.name) }        
        this.tsHubLogger.debug(`Middleware "${this.middlewareConstructor.name}" being built.`);

        var middleware = this.activator.buildControllerActivationMiddleware(
            this.middlewareConstructor.prototype, 
            this.propertyKey || HANDLE_REQUEST, router ,
            { information: this.information } );

        middleware.executionOrder = this.information && this.information.executionOrder || DEFAULT_EXECUTION_ORDER;
        middleware.priority = this.information && this.information.priority || DEFAULT_MIDDLEWARE_PRIORITY;
        middleware.information = this.information;

        return middleware;
    }

    public abstract supportsRouter(router: GenericRouter): boolean;
}