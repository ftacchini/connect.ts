import {Route} from "../";
import {Server} from "../../";

export interface RouteBuilder {

    buildMiddleware(): Route;
    suppertsServer(server: Server): boolean;
}