import { ExecutionOrder } from "./execution-order";

export interface Middleware<Information, RequestHandler> {
    information: Information;
    priority: number;
    executionOrder: ExecutionOrder;

    getRequestHandler(): RequestHandler;
}