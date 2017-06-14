/**
 * Created by Federico on 24/4/2017.
 */

import {ControllerBuilder} from "./";
import {ClassMetadata} from "../metadata";

export interface GenericControllerBuilder<Information> extends ClassMetadata<Information>, ControllerBuilder {

}