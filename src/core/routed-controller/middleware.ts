import {Server} from "../../core";

export interface Middleware<GenericRouter> {
    attachToRouter(server: GenericRouter): any;
}