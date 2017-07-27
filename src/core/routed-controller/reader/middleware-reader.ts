import {MiddlewareBuilder} from "../builder/middleware-builder";

export interface MiddlewareReader {
    readControllerMiddleware<RequestHandler>(routerSupport: any, target: Object): MiddlewareBuilder<any, RequestHandler>[];
    readRouteMiddleware<RequestHandler>(routerSupport: any, target: Object, property: string): MiddlewareBuilder<any, RequestHandler>[];
}