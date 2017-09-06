import { injectable, unmanaged } from 'inversify';
import { Middleware } from "../../middleware";

export interface MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    information: Information;
    target: any;
    propertyKey: string;
    arg: number;

    supportsRouter(router: GenericRouter): boolean;
    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
}