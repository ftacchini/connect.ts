import {Route} from "../";
import {Server} from "../../";

export interface RouteBuilder {

    buildMiddleware(): Route;
    supportsServer(server: Server): boolean;
}