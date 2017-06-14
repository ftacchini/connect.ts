import {Controller} from "../controller";
import {ControllerActivator} from "../activator";

export interface RouteBuiilder<Information> {

    buildRoute(): Controller;
    information: Information;
    target: any;

}