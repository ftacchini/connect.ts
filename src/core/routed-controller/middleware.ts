import {Server} from "../server";

export interface Middleware<Information, GenericRouter> {
    attachToServer(server: GenericRouter): GenericRouter;
}