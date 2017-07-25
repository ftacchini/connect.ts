import {Server} from "../server";
import {Middleware} from "./";

export interface Route<Information, GenericRouter> {
    
    information: Information;
    middleware: Middleware<any, GenericRouter>[];
    attachToServer(server: GenericRouter): GenericRouter;
}