import { ControllerMetadataBuilder } from "./controller-metadata-builder.core";
import { ActionInformation } from "./action-information.core";

export function ActionResolver(information: ActionInformation){
    return (target: any, propertyKey: string) => {

        if(!propertyKey){
            throw "Action Attribute is only applicable to a class method";
        }

        information.name || (information.name = propertyKey.toLowerCase().replace("controller", ""));
        ControllerMetadataBuilder.instance.attachInformation(target, null, information);
    }
}