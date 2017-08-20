import {MiddlewareBuilder} from "../builder/middleware-builder";

export interface MiddlewareReader {
    readControllerMiddleware<GenericRouter, RequestHandler>(routerSupport: any, target: Object): MiddlewareBuilder<any, GenericRouter, RequestHandler>[];
    readRouteMiddleware<GenericRouter, RequestHandler>(routerSupport: any, target: Object, property: string): MiddlewareBuilder<any, GenericRouter, RequestHandler>[];
}