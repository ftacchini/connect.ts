import { ControllerMetadataBuilder } from "./controller-metadata-builder.core";
import { ActionInformation } from "./action-information.core";

export function ActionInformationResolver(information: ActionInformation){
    return (target: any, propertyKey: string) => {

        if(!propertyKey){
            throw "Action Attribute is only applicable to a class method";
        }

        information.name || (information.name = propertyKey.toLowerCase());
        ControllerMetadataBuilder.instance.attachInformation(target, propertyKey, information);
    }
}