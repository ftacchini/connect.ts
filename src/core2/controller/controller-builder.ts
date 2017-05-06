/**
 * Created by Federico on 24/4/2017.
 */

import {Router} from "../server/server-module";

export interface ControllerBuilder {

    buildRouter(): Router;

}