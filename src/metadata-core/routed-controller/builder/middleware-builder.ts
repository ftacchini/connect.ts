import {Middleware} from "../";
import {Server} from "../../";

export interface MiddlewareBuilder {

    buildMiddleware(): Middleware;
    supportsServer(server: Server): boolean;
}