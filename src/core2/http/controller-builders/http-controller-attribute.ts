/**
 * Created by Federico on 26/4/2017.
 */
import {HttpControllerBuilder} from "./http-controller-builder";
import {ControllerAttributeFactory} from "../http-controller-attribute-factory";

export var HttpController  = ControllerAttributeFactory(HttpControllerBuilder);
