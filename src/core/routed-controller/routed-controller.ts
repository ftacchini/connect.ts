import {Controller} from "../controller";
import {Server} from "../server";
import {Middleware, Route} from "./";

export interface RoutedController<Information, GenericRouter> extends Controller {

    information: Information;
    middleware: Middleware<any, GenericRouter>[];
    routes: Route<any, GenericRouter>[];
    router: GenericRouter;

    attachToServer(server: Server): any;
}