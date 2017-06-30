import {Controller, Server} from "../../core";

export abstract class RoutedController<Information> implements Controller {

    public information: Information;

    abstract attachToServer(server: Server): any;
    abstract supportsServer(server: Server) : boolean;
}