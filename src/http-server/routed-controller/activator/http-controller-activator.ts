import { HttpNamedParamValueReader } from './../param-reader';
import { HttpActivatorMiddleware } from './http-activator-middleware';
import { inject, injectable } from 'inversify';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { ControllerActivator, Middleware, FunctionReader, ParamsReader, Types, JsHelper } from "../../../core";
import * as _ from "lodash";

@injectable()
export class HttpControllerActivator extends ControllerActivator<RequestHandler> { 

    constructor(
        @inject(Types.FunctionReader) functionReader: FunctionReader,
        @inject(Types.ParamsReader) paramsReader: ParamsReader) {
        super(functionReader, paramsReader);
    }

    protected turnIntoMiddleware(functionFactory: () => Function, params: {[index: number]: Function}) : Middleware<any, RequestHandler> {

        var requestHandler: RequestHandler = (request: Request, response: Response, next: NextFunction): any => {
            
            var activatorFunction = functionFactory();
            var paramName = JsHelper.instance.readFunctionParamNames(activatorFunction);
            var paramsArray: any[] = [];

            for(let index = 0; index < paramName.length; index++){
                paramsArray[index] = params[index] || new HttpNamedParamValueReader(paramName[index]);
            }
            return activatorFunction(...paramsArray.map(param => param.readParamValue(request, response)));
        };

        return new HttpActivatorMiddleware(requestHandler);
    };

}
