import { Server } from "../server";

export interface Controller {
    attachToServer(server: Server): any;
}