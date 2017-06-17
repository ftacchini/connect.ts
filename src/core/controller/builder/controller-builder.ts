/**
 * Created by Federico on 24/4/2017.
 */

import {Controller} from "../";
import {Server} from "../../";

export interface ControllerBuilder {

    buildController(): Controller;
    suppertsServer(server: Server): boolean;
}
