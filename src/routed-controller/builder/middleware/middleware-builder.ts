import { injectable, unmanaged } from 'inversify';
import { Middleware } from "../../middleware";

export interface MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    withInformation(information: Information) : this;
    withTarget(target: any) : this;
    withPropertyKey(propertyKey: string) : this;

    supportsRouter(router: GenericRouter): boolean;
    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
}