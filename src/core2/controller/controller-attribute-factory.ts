import { ControllerBuilder } from "./controller-builder";
import * as ControllerMetadata from "./controller-metadata";

export function ControllerAttributeFactory<T>(constructor: new(target: any, information?: T) => ControllerBuilder){

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var controllerBuilder = new constructor(target, information);
            Reflect.defineMetadata(ControllerMetadata.CONTROLLER_BUILDER, controllerBuilder, target);
        }
    }
}