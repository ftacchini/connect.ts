import { Server } from "../../../core";
import { RoutedController } from "../routed-controller";
import { Middleware } from "../middleware";
import { MiddlewareReader, RouteReader } from "../reader";
import { Route } from "../route";
import "reflect-metadata";
export declare abstract class RoutedControllerBuilder<Information, GenericRouter, RequestHandler, GenericRoutedController extends RoutedController<Information, GenericRouter, RequestHandler>> {
    protected middlewareReader: MiddlewareReader;
    protected routeReader: RouteReader;
    information: Information;
    target: any;
    constructor(middlewareReader: MiddlewareReader, routeReader: RouteReader);
    buildController(): GenericRoutedController;
    abstract supportsServer(server: Server): boolean;
    protected abstract buildRoutedController(): GenericRoutedController;
    protected buildControllerMiddleware(controller: GenericRoutedController): Middleware<any, RequestHandler>[];
    protected buildControllerRoutes(controller: GenericRoutedController): Route<any, GenericRouter, RequestHandler>[];
}
