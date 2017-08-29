import { Parameter } from './../parameter';
import { ParameterBuilder } from './../builder';
import { JsHelper } from './../../helper/js-helper';
import { injectable } from 'inversify';
import { unmanaged } from 'inversify';
import { ParameterReader } from './../reader/parameter-reader';
import { FunctionReader } from './../reader/function-reader';
import { Middleware } from "../middleware";

@injectable()
export abstract class ControllerActivator<GenericRouter, RequestHandler> {

    constructor(
        @unmanaged() protected functionReader: FunctionReader,
        @unmanaged() protected paramsReader: ParameterReader) {

    }

    protected abstract createDefaultParameterBuilder(target: any, propertyKey: string, name: string, index: number) : ParameterBuilder<any, GenericRouter>;
    protected abstract turnIntoMiddleware(action: Function) : Middleware<any, RequestHandler>;

    public buildControllerActivationFunction(target: any, propertyKey: string, router: GenericRouter): Middleware<any, RequestHandler> {
        return this.turnIntoMiddleware((...args: any[]) => {
            var activatorFunction = this.functionReader.readFunction(target, propertyKey);
            var paramBuilders = this.paramsReader.readParameters<GenericRouter>(target, propertyKey, router);
            
            var paramName = JsHelper.instance.readFunctionParamNames(activatorFunction);
            var paramsArray: ParameterBuilder<any, GenericRouter>[] = [];

            for(let index = 0; index < paramName.length; index++){
                paramsArray[index] = paramBuilders.find(x => x.arg == index) 
                                    || this.createDefaultParameterBuilder(target, propertyKey, paramName[index], index);
            }

            return activatorFunction(...paramsArray.map(param => param.buildParam().getValue(...args))); 
        });
    }
}