import { ControllerMetadataBuilder } from "./controller-metadata-builder.core";
import { ControllerInformation } from "./controller-information.core";

export function ControllerInformationResolver(information: ControllerInformation){
    return (target: any) => {
        information || (information = new ControllerInformation());
        information.name || (information.name = target.constructor.name.toLowerCase());
        ControllerMetadataBuilder.instance.attachInformation(target, null, information);
    }
}