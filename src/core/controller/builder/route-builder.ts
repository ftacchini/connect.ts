import {Controller} from "../controller";
import {ControllerActivator} from "../activator";

export interface RouteBuilder<Information> {

    buildRoute(): Controller;
    information: Information;
    target: any;

}