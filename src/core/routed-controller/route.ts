import {Server} from "../server";

export interface Route<GenericRouter> {
    attachToServer(server: GenericRouter): any;
}