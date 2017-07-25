import {MiddlewareBuilder} from "../builder/middleware-builder";

export interface MiddlewareReader {
    readControllerMiddleware<GenericRouter>(routerSupport: GenericRouter, target: Object): MiddlewareBuilder<any, GenericRouter>[];
    readRouteMiddleware<GenericRouter>(routerSupport: GenericRouter, target: Object, property: string): MiddlewareBuilder<any, GenericRouter>[];
}