import {HttpMiddleware} from "./http-middleware";
import {RequestHandler, Request, Response, NextFunction} from "express";

export class HttpParamsWriterMiddleware implements HttpMiddleware {

    constructor(target: any, property: any){
        
    }

    readonly priority: number = 10;

    get requestHandler(): RequestHandler{
        return (req: Request, res: Response, next: NextFunction): any => {
            res.locals
        }
    }
}