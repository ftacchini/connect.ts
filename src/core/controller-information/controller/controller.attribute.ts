import { Attribute } from "../attribute.attribute";
import { ControllerInformation } from "./controller-information.model"
import { ControllerAttributeFactory } from "./controller-attribute.factory";

export class ControllerAttribute implements Attribute<ControllerInformation>{

    constructor(private target: any){
    }

    processInformation(information: ControllerInformation): ControllerInformation {
        information || (information = new ControllerInformation());
        information.name || (information.name = this.target.constructor.name.toLowerCase());
        return information;
    }
}

export var Controller = ControllerAttributeFactory(ControllerAttribute);