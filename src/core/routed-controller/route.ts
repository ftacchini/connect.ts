import {Server} from "../server";

export interface Route<Information, GenericRouter> {
    attachToServer(server: GenericRouter): GenericRouter;
}