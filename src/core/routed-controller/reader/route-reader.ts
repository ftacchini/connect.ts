import {RouteBuilder} from "../builder/route-builder";

export interface RouteReader {
    readRoutes<GenericRouter, RequestHandler>(routerSupport: GenericRouter, target: Object): RouteBuilder<any, GenericRouter, RequestHandler>[]
}