import {RequestHandler} from "express";
import {HttpParametersReader} from "../parameters/http-parameters-reader";
import {Middleware} from "../../middleware/middleware-module";

export interface HttpMiddlewareBuilder {
    setPriority(priority: number): HttpMiddlewareBuilder;
    setParamsReader(paramsReader: HttpParametersReader) : HttpMiddlewareBuilder;
    setMiddleware(middleware: Middleware): HttpMiddlewareBuilder;

    buildRequestHandler(): RequestHandler;
}