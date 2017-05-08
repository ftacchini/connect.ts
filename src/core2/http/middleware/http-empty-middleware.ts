import {HttpMiddleware} from "./http-middleware";
import {RequestHandler, Request, Response, NextFunction} from "express";
import {HttpParametersReader} from "../parameters/http-parameters-reader";

export class HttpEmptyMiddleware implements HttpMiddleware {
    
    constructor(
        private readonly _requestHandler: Function,
        private readonly _paramsReader: HttpParametersReader, 
        private readonly _priority?: number){
    }
    
    get priority(): number {
        return this._priority || 1;    
    };
    get requestHandler(): RequestHandler{
        return (req: Request, res: Response, next: NextFunction): any => {
            
            var args = this._paramsReader.readHttpParams(this._requestHandler, req, res);
            var result = Object.apply(this._requestHandler, args);
            
        }
    };
}