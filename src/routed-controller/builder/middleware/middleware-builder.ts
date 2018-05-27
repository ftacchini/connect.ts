import { Middleware } from '../../middleware';
import { ExecutionOrder, MiddlewareInformation } from '../..';

export interface MiddlewareBuilder<Information extends MiddlewareInformation, GenericRouter, RequestHandler> {

    withInformation(information: Information) : this;
    withTarget(target: any) : this;
    withPropertyKey(propertyKey: string) : this;

    supportsRouter(router: GenericRouter): boolean;
    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
}