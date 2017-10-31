import { Middleware } from "../../middleware";
import { Route } from "../../route";
import { Server } from "../../../server"
import { ControllerActivator } from "../../activator/controller-activator";
import { MiddlewareReader } from "../../reader";

export interface RouteBuilder<Information, GenericRouter, RequestHandler> {

    information: Information;
    target: any;
    propertyKey: string;

    supportsRouter(router: GenericRouter): boolean;
    buildRoute(router: GenericRouter): Route<Information, GenericRouter, RequestHandler>;
}