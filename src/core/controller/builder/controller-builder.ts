/**
 * Created by Federico on 24/4/2017.
 */

import {Controller} from "../controller";

export interface ControllerBuilder {

    buildController(): Controller;

}