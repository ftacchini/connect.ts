/**
 * Created by Federico on 24/4/2017.
 */

import {Controller} from "../controller";
import {ControllerActivator} from "../activator";

export interface ControllerBuilder {

    buildController(controllerActivator: ControllerActivator): Controller;

}