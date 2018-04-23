import { Middleware } from './';

export interface Route<Information, GenericRouter, RequestHandler> {
    
    information: Information;
    middleware: Middleware<any, RequestHandler>[];
    attachToServer(server: GenericRouter): GenericRouter;
}