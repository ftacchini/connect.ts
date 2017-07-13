import {Middleware} from "../";
import {Server} from "../../../core";

export interface MiddlewareBuilder<Information, GenericRouter> {

    buildMiddleware(): Middleware<Information, GenericRouter>;
    supportsRouter(router: GenericRouter): boolean;
}