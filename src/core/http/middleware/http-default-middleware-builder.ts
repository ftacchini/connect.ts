import {HttpMiddlewareBuilder} from "./http-middleware-builder";
import {RequestHandler, Request, Response, NextFunction} from "express";
import {HttpParametersReader} from "../parameters/http-parameters-reader";
import {HttpPlainParametersReader} from "../parameters/http-plain-parameters-reader";
import {Middleware} from "../../middleware/middleware-module";

export class HttpDefaultMiddlewareBuilder implements HttpMiddlewareBuilder {

    constructor(protected target: Object, protected propertyKey: string){
    }

    protected middleware: Middleware;
    protected paramsReader: HttpParametersReader = new HttpPlainParametersReader();
    public priority: number = 1;

    public setPriority(priority: number) : HttpMiddlewareBuilder {
        this.priority = priority;
        return this;
    }

    public setParamsReader(paramsReader: HttpParametersReader) : HttpMiddlewareBuilder{
        this.paramsReader = paramsReader;
        return this;
    }

    public setMiddleware(middleware: Middleware): HttpMiddlewareBuilder{
        this.middleware = middleware;
        return this;
    }

    public buildRequestHandler(): RequestHandler{
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
        var args = this.paramsReader.readHttpParams(this.middleware.requestHandler, req, res);
        return Object.apply(this.middleware.requestHandler, args);
        
    }

}