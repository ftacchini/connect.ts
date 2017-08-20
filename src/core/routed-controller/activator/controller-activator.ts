import { injectable } from 'inversify';
import { unmanaged } from 'inversify';
import { ParamsReader } from './../reader/params-reader';
import { FunctionReader } from './../reader/function-reader';
import { Middleware } from "../middleware";

@injectable()
export abstract class ControllerActivator<RequestHandler> {

    constructor(
        @unmanaged() protected functionReader: FunctionReader,
        @unmanaged() protected paramsReader: ParamsReader) {

    }

    protected abstract turnIntoMiddleware(action: Function, params: any) : Middleware<any, RequestHandler>;

    public buildControllerActivationFunction(target: any, propertyKey: string): Middleware<any, RequestHandler> {
        var action = this.functionReader.readFunction(target, propertyKey);
        var params = this.paramsReader.readParams(target, propertyKey);

        return this.turnIntoMiddleware(action, params);
    }
}