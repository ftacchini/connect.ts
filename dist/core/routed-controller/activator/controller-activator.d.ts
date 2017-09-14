import { ParameterBuilder } from './../builder';
import { ParameterReader } from './../reader/parameter-reader';
import { FunctionReader } from './../reader/function-reader';
import { Middleware } from "../middleware";
export declare abstract class ControllerActivator<GenericRouter, RequestHandler> {
    protected functionReader: FunctionReader;
    protected paramsReader: ParameterReader;
    constructor(functionReader: FunctionReader, paramsReader: ParameterReader);
    protected abstract createDefaultParameterBuilder(target: any, propertyKey: string, name: string, index: number): ParameterBuilder<any, GenericRouter>;
    protected abstract turnIntoMiddleware(action: Function): Middleware<any, RequestHandler>;
    buildControllerActivatonMiddleware(target: any, propertyKey: string, router: GenericRouter, paramBuilders?: ParameterBuilder<any, GenericRouter>[]): Middleware<any, RequestHandler>;
}
