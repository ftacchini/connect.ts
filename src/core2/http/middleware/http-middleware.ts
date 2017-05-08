import {RequestHandler} from "express";

export interface HttpMiddleware {
    readonly priority: number;
    readonly requestHandler: RequestHandler;
}