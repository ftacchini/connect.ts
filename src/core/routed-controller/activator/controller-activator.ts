import { Middleware } from "../middleware";

export interface ControllerActivator<RequestHandler> {
    buildControllerActivationFunction(controller: any, action: string): Middleware<any, RequestHandler>;
}