import {Controller} from "../";
import { Server } from "../../server";

export abstract class RoutedController implements Controller {
    abstract attachToServer(server: Server): any;
    abstract supportsServer(server: Server) : boolean;
}