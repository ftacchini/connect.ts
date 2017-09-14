import { Middleware } from "../../middleware";
export interface MiddlewareBuilder<Information, GenericRouter, RequestHandler> {
    information: Information;
    target: any;
    propertyKey: string;
    supportsRouter(router: GenericRouter): boolean;
    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
}
