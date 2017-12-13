import { NotSpecifiedParamException } from './../../exception/not-specified-param-exception';
import { TsHubLogger } from './../../logging/ts-hub-logger';
import { ControllerActivator } from './controller-activator';
import { Parameter } from './../parameter';
import { ParameterBuilder } from './../builder';
import { JsHelper } from './../../helper/js-helper';
import { injectable } from 'inversify';
import { unmanaged } from 'inversify';
import { ParameterReader } from './../reader/parameter-reader';
import { FunctionReader } from './../reader/function-reader';
import { Middleware } from "../middleware";

let DEFAULT_ACTIVATOR_PRIORITY: number = 0;

@injectable()
export abstract class ClassMethodControllerActivator<GenericRouter, RequestHandler> implements ControllerActivator<GenericRouter, RequestHandler> {

    constructor(
        @unmanaged() protected functionReader: FunctionReader,
        @unmanaged() protected paramsReader: ParameterReader,
        @unmanaged() protected tsHubLogger: TsHubLogger) {
            if(!functionReader) { throw new NotSpecifiedParamException("functionReader", ClassMethodControllerActivator.name) }
            if(!paramsReader) { throw new NotSpecifiedParamException("paramsReader", ClassMethodControllerActivator.name) }
            if(!tsHubLogger) { throw new NotSpecifiedParamException("tsHubLogger", ClassMethodControllerActivator.name) }
    }

    protected abstract createDefaultParameterBuilder(target: any, propertyKey: string, name: string, index: number) : ParameterBuilder<any, GenericRouter>;
    protected abstract turnIntoMiddleware(action: Function) : Middleware<any, RequestHandler>;

    public buildControllerActivationMiddleware(
        target: any, 
        propertyKey: string, 
        router: GenericRouter, 
        paramBuilders: ParameterBuilder<any, GenericRouter>[] = []): Middleware<any, RequestHandler> {
            
            if(!target) { throw new NotSpecifiedParamException("target", this.buildControllerActivationMiddleware.name) }
            if(!propertyKey) { throw new NotSpecifiedParamException("propertyKey", this.buildControllerActivationMiddleware.name) }
            if(!router) { throw new NotSpecifiedParamException("router", this.buildControllerActivationMiddleware.name) }

            this.tsHubLogger.debug(`Controller activator being built for ${target.constructor.name}.${propertyKey}`);

            paramBuilders = paramBuilders.concat(this.paramsReader.readParameters<GenericRouter>(target, propertyKey, router));
            let paramsArray: Parameter<any>[] = null;

            let middleware = this.turnIntoMiddleware((...args: any[]) => {
    
                this.tsHubLogger.debug(`${target.constructor.name}.${propertyKey} being activated`);
                var activatorFunction = this.functionReader.readFunction(target, propertyKey);
                
                if(!paramsArray){
                    var paramName = JsHelper.instance.readFunctionParamNames(target[propertyKey]);
                    paramsArray = [];
                    for(let index = 0; index < paramName.length; index++){
                        var paramBuilder = paramBuilders.find(x => x.getArgumentIndex() == index) 
                                            || this.createDefaultParameterBuilder(target, propertyKey, paramName[index], index);
                        paramsArray[index] = paramBuilder.buildParam();                                            
                    }
                }

                return activatorFunction(...paramsArray.map(param => param.getValue(...args))); 
            });
            middleware.priority = DEFAULT_ACTIVATOR_PRIORITY;

            return middleware;
    }
}