import {MiddlewareBuilder} from "../builder/middleware-builder";
import {MiddlewareLevel} from "./middleware-level";

export interface MiddlewareReader {
    readMiddleware<GenericRouter>(routerSupport: GenericRouter, level: MiddlewareLevel, target: Object): MiddlewareBuilder<any, GenericRouter>[]
}