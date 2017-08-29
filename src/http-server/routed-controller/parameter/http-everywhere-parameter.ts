import { Response, Request } from 'express';
import { Parameter } from './../../../core';
import { HttpNamedParameterInformation } from './../information';

export class HttpEverywhereParameter implements Parameter<HttpNamedParameterInformation>{
    
    public information: HttpNamedParameterInformation;
    public index: number;
    
    public getValue(request: Request, response: Response) : any {
        return request.query[this.information.name];
    }
}