import {Controller} from "../controller";
import {Server} from "../server";
import {Middleware, Route} from "./";

export abstract class RoutedController<Information, GenericRouter> implements Controller {

    public information: Information;
    public middleware: Middleware<any, GenericRouter>[];
    public routes: Route<any, GenericRouter>[];

    abstract attachToServer(server: Server): any;
    abstract get router(): GenericRouter;
}