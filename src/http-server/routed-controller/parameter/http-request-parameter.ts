import { Response, Request } from 'express';
import { Parameter } from './../../../core';

export class HttpRequestParameter implements Parameter<undefined>{
    
    public information: undefined;
    public index: number;
    public type: any;
    
    public getValue(request: Request, response: Response) : any {
       return request;
    }
}