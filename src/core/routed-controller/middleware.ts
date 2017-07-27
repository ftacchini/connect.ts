import {Server} from "../server";

export interface Middleware<Information, RequestHandler> {
    priority: number;
    getRequestHandler(): RequestHandler;
}