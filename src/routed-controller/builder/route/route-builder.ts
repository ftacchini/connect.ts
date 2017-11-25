import { Middleware } from "../../middleware";
import { Route } from "../../route";
import { Server } from "../../../server"
import { ControllerActivator } from "../../activator/controller-activator";
import { MiddlewareReader } from "../../reader";

export interface RouteBuilder<Information, GenericRouter, RequestHandler> {
   
    withInformation(information: Information) : this;
    withTarget(target: any) : this;
    withPropertyKey(propertyKey: string) : this;

    supportsRouter(router: GenericRouter): boolean;
    buildRoute(router: GenericRouter): Route<Information, GenericRouter, RequestHandler>;
}