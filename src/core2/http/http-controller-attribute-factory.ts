/**
 * Created by Federico on 26/4/2017.
 */
import { ControllerBuilder, CONTROLLER_BUILDER } from "../controller/controller-module";
import * as HttpControllerMetadata from "./http-metadata";

export function HttpControllerAttributeFactory<T>(constructor: new(target: any, information?: T) => ControllerBuilder){

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var controllerBuilder = new constructor(target, information);
            Reflect.defineMetadata(HttpControllerMetadata.HTTP_CONTROLLER_BUILDER, controllerBuilder, target);
            Reflect.defineMetadata(CONTROLLER_BUILDER, controllerBuilder, target);
        }
    }
}