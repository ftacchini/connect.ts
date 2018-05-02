import { Middleware } from '../../middleware';
import { ExecutionOrder } from '../..';

export interface MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    withInformation(information: Information) : this;
    withTarget(target: any) : this;
    withPropertyKey(propertyKey: string) : this;
    withExecutionOrder(executionOder: ExecutionOrder): this;

    supportsRouter(router: GenericRouter): boolean;
    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
}