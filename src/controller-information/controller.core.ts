import { ControllerMetadataBuilder } from "./controller-metadata-builder.core";
import { ControllerInformation } from "./controller-information.core";
import { injectable, inject } from "inversify";


export function Controller(information?: ControllerInformation) {

    information || (information = new ControllerInformation());

    return function(target: any){
        information.name || (information.name = target.constructor.name.toLowerCase());
        ControllerMetadataBuilder.instance.attachInformation(target, null, information);
    }
}