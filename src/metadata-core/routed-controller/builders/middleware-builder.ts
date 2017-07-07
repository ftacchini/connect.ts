import {Middleware} from "../";
import {Server} from "../../../core";

export interface MiddlewareBuilder<GenericRouter> {

    buildMiddleware(): Middleware<GenericRouter>;
    supportsServer(server: Server): boolean;
}