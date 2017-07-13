import {RouteBuilder} from "../builder/route-builder";

export interface RouteReader {
    readRoutes<GenericRouter>(routerSupport: GenericRouter, target: Object): RouteBuilder<any, GenericRouter>[]
}