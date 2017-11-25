import { inject } from 'inversify';
import { HubContainer } from './../../../container/hub-container';
import { MiddlewareSupport } from './middleware-support';
import { ConstantParameterBuilder } from './../parameter/constant-parameter-builder';
import { Middleware } from './../../middleware';
import { NotSpecifiedParamException } from './../../../exception/not-specified-param-exception';
import { TsHubLogger } from './../../../logging/ts-hub-logger';
import { Handler } from './handler';
import { ServerSupport } from './../../../server/server-support';
import { injectable, unmanaged } from 'inversify';
import { MiddlewareBuilder } from './middleware-builder';
import { ControllerActivator } from "../../activator/controller-activator";
import { Types } from '../../../container/types';
import { ConstructorMiddlewareBuilder } from '../../../index';

 const HANDLE_REQUEST: keyof Handler<any> = "handleRequest";


@injectable()
export class MultiserverMiddlewareBuilder<Information> implements MiddlewareBuilder<Information, any, any> {
    
    protected information: Information;
    protected target: any;
    protected propertyKey: string;
    protected middlewareConstructor: new (...args: any[]) => Handler<Information>
    protected middlewareSupport: MiddlewareSupport<Information>[] = [];
    protected priority: number;

    constructor(
        @inject(Types.Container) protected container: HubContainer,
        @inject(Types.TsHubLogger) protected tsHubLogger: TsHubLogger) {
            if(!tsHubLogger) { throw new NotSpecifiedParamException("propertyKey", MultiserverMiddlewareBuilder.name) }
    }

    public addMiddlewareSupport(middlewareSupport: MiddlewareSupport<Information>) : this {
        if(!middlewareSupport || !middlewareSupport.activator || !middlewareSupport.support) { 
            throw new NotSpecifiedParamException("middlewareSupport", this.addMiddlewareSupport.name) 
        }   
        this.middlewareSupport.push(middlewareSupport);

        return this;
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


    public buildMiddleware(router: any): Middleware<Information, any> {

        if(!router) { throw new NotSpecifiedParamException("router", this.buildMiddleware.name) }        
        var middlewareSupport = this.middlewareSupport.find(x => x.support.supportsServer(router));

        if(middlewareSupport){
            this.tsHubLogger.debug(`Middleware "${this.middlewareConstructor.prototype.name}" being build.`);

            let activator = this.container.bindAndGet(middlewareSupport.activator);

            let middleware = activator.buildControllerActivationMiddleware(
                this.middlewareConstructor.prototype, 
                HANDLE_REQUEST, router ,
                [new ConstantParameterBuilder(this.information, 0)]);

            middleware.priority = this.priority;
            return middleware;
        }
    }

    public supportsRouter(router: any): boolean {
        return this.middlewareSupport.some(x => x.support.supportsServer(router));
    }

}