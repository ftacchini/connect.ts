import {Middleware} from "../";
import {Server} from "../../";

export interface MiddlewareBuilder {

    buildMiddleware(): Middleware;
    suppertsServer(server: Server): boolean;
}