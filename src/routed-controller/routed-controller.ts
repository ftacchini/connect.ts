import {Controller} from "../controller";
import {Server} from "../server";
import {Middleware, Route} from "./";

export interface RoutedController<Information, GenericRouter, RequestHandler> extends Controller {

    information: Information;
    middleware: Middleware<any, RequestHandler>[];
    routes: Route<any, GenericRouter, RequestHandler>[];
    router: GenericRouter;

    attachToServer(server: Server): any;
}