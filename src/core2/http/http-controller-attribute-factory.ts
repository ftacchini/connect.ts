/**
 * Created by Federico on 26/4/2017.
 */
import { ControllerBuilder } from "../controller/controller-module";
import * as ControllerMetadata from "./http-metadata";

export function ControllerAttributeFactory<T>(constructor: new(target: any, information?: T) => ControllerBuilder){

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var controllerBuilder = new constructor(target, information);
            Reflect.defineMetadata(ControllerMetadata.HTTP_CONTROLLER_BUILDER, controllerBuilder, target);
        }
    }
}