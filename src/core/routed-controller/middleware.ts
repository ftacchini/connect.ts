import {Server} from "../server";

export interface Middleware<GenericRouter> {
    attachToRouter(server: GenericRouter): any;
}