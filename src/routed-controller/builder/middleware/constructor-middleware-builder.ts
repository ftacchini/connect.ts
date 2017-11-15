import { NotSpecifiedParamException } from './../../../exception/not-specified-param-exception';
import { TsHubLogger } from './../../../logging/ts-hub-logger';
import { ConstantParameterBuilder } from './../parameter/constant-parameter-builder';
import { Handler } from './handler';
import { MiddlewareBuilder } from './middleware-builder';
import { injectable, unmanaged } from 'inversify';
import { Middleware } from "../../middleware";
import { Server } from "../../../server";
import { ControllerActivator } from "../../activator/controller-activator";

const HANDLE_REQUEST: keyof Handler<any> = "handleRequest";

@injectable()
export abstract class ConstructorMiddlewareBuilder<Information, GenericRouter, RequestHandler> 
       implements MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    public information: Information;
    public target: any;
    public propertyKey: string;
    public middlewareConstructor: new (...args: any[]) => Handler<Information>

    protected abstract priority: number;

    constructor(
        @unmanaged() protected activator: ControllerActivator<GenericRouter, RequestHandler>,
        @unmanaged() protected tsHubLogger: TsHubLogger) {
            if(!activator) { throw new NotSpecifiedParamException("target", ConstructorMiddlewareBuilder.name) }
            if(!tsHubLogger) { throw new NotSpecifiedParamException("propertyKey", ConstructorMiddlewareBuilder.name) }
    }

    public buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler> {
        if(!router) { throw new NotSpecifiedParamException("router", this.buildMiddleware.name) }        
        this.tsHubLogger.debug(`Middleware "${this.middlewareConstructor.prototype.name}" being build.`);

        return this.activator.buildControllerActivationMiddleware(
            this.middlewareConstructor.prototype, 
            HANDLE_REQUEST, router ,
            [new ConstantParameterBuilder(this.information, 0)]);
    }

    public abstract supportsRouter(router: GenericRouter): boolean;
}