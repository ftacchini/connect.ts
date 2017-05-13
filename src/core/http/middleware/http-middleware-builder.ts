import {RequestHandler} from "express";

export interface HttpMiddlewareBuilder {
    readonly priority: number;
    buildRequestHandler(): RequestHandler;
}