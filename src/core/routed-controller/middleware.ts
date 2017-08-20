import {Server} from "../server";

export interface Middleware<Information, RequestHandler> {
    information: Information;
    priority: number;
    getRequestHandler(): RequestHandler;
}