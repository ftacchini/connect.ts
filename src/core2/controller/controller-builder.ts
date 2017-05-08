/**
 * Created by Federico on 24/4/2017.
 */

import {Router} from "../server/server-module";
import {ControllerActivator} from "./controller-activator";

export interface ControllerBuilder {

    buildRouter(controllerActivator: ControllerActivator): Router;

}