import { injectable, unmanaged } from 'inversify';
import { Middleware } from "../../middleware";


@injectable()
export interface MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    information: Information;
    target: any;
    propertyKey: string;
    arg: number;

    buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;
}