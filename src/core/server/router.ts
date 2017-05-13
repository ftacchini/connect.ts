import { Server } from "./server";

export interface Router {
    attachToServer(server: Server): any;
    supportsServer(server: Server) : boolean;
}