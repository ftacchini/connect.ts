import { ControllerMetadataBuilder } from "./controller-metadata-builder.core";
import { ControllerInformation } from "./controller-information.core";

export function ControllerResolver(information: ControllerInformation){
    return (target: any) => {

        information.name || (information.name = target.constructor.name.toLowerCase());
        ControllerMetadataBuilder.instance.attachInformation(target, null, information);
    }
}