import { ExecutionOrder } from "../..";

export interface MiddlewareInformation {
    priority?: number;
    executionOrder?: ExecutionOrder;
}