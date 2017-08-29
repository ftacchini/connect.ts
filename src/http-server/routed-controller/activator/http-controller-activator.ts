import { HttpNamedParameterInformation } from './../information/http-named-parameter-information';
import { HttpEverywhereParameterBuilder } from './../builder/parameter/http-everywhere-parameter-builder';
import { HttpActivatorMiddleware } from './http-activator-middleware';
import { inject, injectable } from 'inversify';
import { RequestHandler, Request, Response, Router, NextFunction } from 'express';
import { ControllerActivator, ParameterBuilder, Middleware, FunctionReader, ParameterReader, Types } from "../../../core";
import * as _ from "lodash";

@injectable()
export class HttpControllerActivator extends ControllerActivator<Router, RequestHandler> { 

    constructor(
        @inject(Types.FunctionReader) functionReader: FunctionReader,
        @inject(Types.ParamsReader) paramsReader: ParameterReader) {
        super(functionReader, paramsReader);
    }

    
    protected createDefaultParameterBuilder(target: any, propertyKey: string, name: string, index: number) : ParameterBuilder<any, Router>{
        var builder = new HttpEverywhereParameterBuilder();
        builder.arg = index;
        builder.information = new HttpNamedParameterInformation();
        builder.information.name = name;
        builder.target = target;
        builder.propertyKey = propertyKey;

        return builder;
    }

    protected turnIntoMiddleware(action: Function) : Middleware<any, RequestHandler> { 
        var requestHandler: RequestHandler = (request: Request, response: Response, next: NextFunction): any => {
           return action(request, response);
        };

        return new HttpActivatorMiddleware(requestHandler);
    };

}
