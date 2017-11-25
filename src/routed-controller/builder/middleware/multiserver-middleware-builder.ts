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

 const HANDLE_REQUEST: keyof Handler<any> = "handleRequest";


@injectable()
export abstract class MultiserverMiddlewareBuilder<Information> {
    
    public information: Information;
    public target: any;
    public propertyKey: string;
    public middlewareConstructor: new (...args: any[]) => Handler<Information>
    private middlewareSupport: MiddlewareSupport<Information>[] = [];
 
    protected abstract priority: number;

    constructor(
        @inject(Types.Container) protected container: HubContainer,
        @inject(Types.TsHubLogger) protected tsHubLogger: TsHubLogger) {
            if(!tsHubLogger) { throw new NotSpecifiedParamException("propertyKey", MultiserverMiddlewareBuilder.name) }
    }

    public addMiddlewareSupport(middlewareSupport: MiddlewareSupport<Information>) : void {
        if(!middlewareSupport || !middlewareSupport.activator || !middlewareSupport.support) { 
            throw new NotSpecifiedParamException("middlewareSupport", this.addMiddlewareSupport.name) 
        }   
        this.middlewareSupport.push(middlewareSupport);
    }

    public buildMiddleware(router: any): Middleware<Information, any> {

        if(!router) { throw new NotSpecifiedParamException("router", this.buildMiddleware.name) }        
        var middlewareSupport = this.middlewareSupport.find(x => x.support.supportsServer(router));

        if(middlewareSupport){
            this.tsHubLogger.debug(`Middleware "${this.middlewareConstructor.prototype.name}" being build.`);

            let activator = this.container.bindAndGet(middlewareSupport.activator);

            return activator.buildControllerActivationMiddleware(
                this.middlewareConstructor.prototype, 
                HANDLE_REQUEST, router ,
                [new ConstantParameterBuilder(this.information, 0)]);
        }
    }

    public supportsRouter(router: any): boolean {
        return this.middlewareSupport.some(x => x.support.supportsServer(router));
    }

}