import { Attribute } from "../attribute.model";


export class ControllerAttribute implements Attribute{
    getInformation(): ControllerInformation;
}

export var controller = controllerAttributeFactory(ControllerAttribute);