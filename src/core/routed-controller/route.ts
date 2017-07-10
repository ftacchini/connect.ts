import {Server} from "../../core";

export interface Route<GenericRouter> {
    attachToServer(server: GenericRouter): any;
}