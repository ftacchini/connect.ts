import {Controller} from "../controller";
import {Server} from "../server";
import {Middleware, Route} from "./";

export abstract class RoutedController<Information, GenericRouter> implements Controller {

    public information: Information;
    public middleware: Middleware<GenericRouter>[];
    public routes: Route<GenericRouter>[];

    abstract attachToServer(server: Server): any;
}