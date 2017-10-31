import { ParameterBuilder } from './../builder';
import { Middleware } from "../middleware";

export interface ControllerActivator<GenericRouter, RequestHandler> {

    buildControllerActivationMiddleware(
        target: any, 
        propertyKey: string, 
        router: GenericRouter, 
        paramBuilders?: ParameterBuilder<any, GenericRouter>[]): Middleware<any, RequestHandler>;
}