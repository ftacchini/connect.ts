import { injectable, unmanaged } from 'inversify';

import { Middleware } from '../middleware';
import { NotSpecifiedParamException } from './../../exception/not-specified-param-exception';
import { JsHelper } from './../../helper/js-helper';
import { TsHubLogger } from './../../logging/ts-hub-logger';
import { ParameterBuilder } from './../builder';
import { Parameter } from './../parameter';
import { ActivationContextProvider } from '../activator/activation-context-provider';
import { ParameterReader } from './../reader/parameter-reader';
import { ControllerActivator } from './controller-activator';

let DEFAULT_ACTIVATOR_PRIORITY: number = 0;

@injectable()
export abstract class AbstractControllerActivator<GenericRouter, RequestHandler> implements ControllerActivator<GenericRouter, RequestHandler> {

    constructor(
        @unmanaged() protected activationContextProvider: ActivationContextProvider,
        @unmanaged() protected paramsReader: ParameterReader,
        @unmanaged() protected tsHubLogger: TsHubLogger) {
            if(!activationContextProvider) { throw new NotSpecifiedParamException("activationContextProvider", AbstractControllerActivator.name) }
            if(!paramsReader) { throw new NotSpecifiedParamException("paramsReader", AbstractControllerActivator.name) }
            if(!tsHubLogger) { throw new NotSpecifiedParamException("tsHubLogger", AbstractControllerActivator.name) }
    }

    protected abstract createDefaultParameterBuilder(target: any, propertyKey: string, name: string, index: number) : ParameterBuilder<any, GenericRouter>;
    protected abstract turnIntoMiddleware(action: () => Promise<any>) : Middleware<any, RequestHandler>;
    protected readActivatorFunction(
        target: any, 
        propertyKey: string,
        ...args: any[]): Function{
            var activationContext = this.activationContextProvider.getActivationContext(target);
            return activationContext.getActivationFunction(propertyKey);
    }

    public buildControllerActivationMiddleware(
        target: any, 
        propertyKey: string, 
        router: GenericRouter, 
        staticData: any = {}): Middleware<any, RequestHandler> {
            
            if(!target) { throw new NotSpecifiedParamException("target", this.buildControllerActivationMiddleware.name) }
            if(!propertyKey) { throw new NotSpecifiedParamException("propertyKey", this.buildControllerActivationMiddleware.name) }
            if(!router) { throw new NotSpecifiedParamException("router", this.buildControllerActivationMiddleware.name) }

            this.tsHubLogger.debug(`Controller activator being built for ${target.constructor.name}.${propertyKey}`);

            var paramBuilders = this.paramsReader.readParameters<GenericRouter>(target, propertyKey, router) || [];
            let paramsBuilderArray: Parameter<any>[] = null;
            
            let middleware = this.turnIntoMiddleware(async (...args: any[]) => {
    
                this.tsHubLogger.debug(`${target.constructor.name}.${propertyKey} being activated`);
                var activatorFunction = this.readActivatorFunction(target, propertyKey, ...args);
                
                if(!paramsBuilderArray){
                    var paramName = JsHelper.instance.readFunctionParamNames(target[propertyKey]);
                    paramsBuilderArray = [];
                    for(let index = 0; index < paramName.length; index++){
                        var paramBuilder = paramBuilders.find(x => x.getArgumentIndex() == index) 
                                            || this.createDefaultParameterBuilder(target, propertyKey, paramName[index], index);
                        paramsBuilderArray[index] = paramBuilder.buildParam();                                            
                    }
                }
                
                var params = await Promise.all(paramsBuilderArray.map(param => param.getValue(staticData, ...args)));

                return activatorFunction(...params); 
            });
            middleware.priority = DEFAULT_ACTIVATOR_PRIORITY;

            return middleware;
    }
}