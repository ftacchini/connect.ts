import {HttpMiddlewareBuilder} from "./http-middleware-builder";
import {RequestHandler, Request, Response, NextFunction} from "express";
import {HttpParametersReader} from "../parameters/http-parameters-reader";

export class HttpEmptyMiddleware implements HttpMiddlewareBuilder {
    
    constructor(
        private readonly _requestHandler: Function,
        private readonly _paramsReader?: HttpParametersReader, 
        private readonly _priority?: number){
    }
    
    public get priority(): number {
        return this._priority || 1;    
    };
    public get buildRequestHandler(): RequestHandler{
        return async (req: Request, res: Response, next: NextFunction): Promise<any> => {
            try {
                var result = await this.executeHandlerFunction(req, res);
                next();
            }
            catch(err){
                next(err);   
            }
        }
    };

    private executeHandlerFunction(req: Request, res: Response): any{
        if(this._paramsReader){
            var args = this._paramsReader.readHttpParams(this._requestHandler, req, res);
            return Object.apply(this._requestHandler, args);
        }
        else
        {
            return this._requestHandler(req, res);
        }
    }
}