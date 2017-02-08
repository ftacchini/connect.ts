import { Attribute } from "../attribute.attribute";
import { ControllerInformation } from "./controller-information.model"

export class ControllerAttribute implements Attribute<ControllerInformation>{
    getInformation(): ControllerInformation {

    }
}

export var controller = controllerAttributeFactory(ControllerAttribute);