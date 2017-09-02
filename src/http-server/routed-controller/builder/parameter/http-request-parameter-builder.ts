import { HttpRequestParameter } from './../../parameter/http-request-parameter';
import { ParameterReader } from './../../../../core/routed-controller/reader/parameter-reader';
import { unmanaged } from 'inversify';
import { injectable } from 'inversify';
import { Router } from 'express';
import { ParameterBuilder, Parameter } from "../../../../core";
import * as _ from "lodash";

@injectable()
export class HttpRequestParameterBuilder extends ParameterBuilder<undefined, Router> {

    
    constructor(@unmanaged() parameterReader: ParameterReader) {
        super(parameterReader);
    }

    public createParameterInstance(): Parameter<undefined> {
        return new HttpRequestParameter();
    } 

    public supportsRouter(router: Router): boolean {
        return Object.getPrototypeOf(router) == Router;
    }
    

}