import { Attribute } from "../attribute.attribute";
import { ActionInformation } from "./action-information.model"
import { ActionAttributeFactory } from "./action-attribute.factory";

export class HttpAttribute implements Attribute<ActionInformation>{

    constructor(protected target: any, protected propertyKey: string){
    }

    processInformation(information: ActionInformation): ActionInformation {
        information || (information = new ActionInformation());

        if(!this.propertyKey){
            throw "Action Attribute is only applicable to a class method";
        }

        information.type || (information.type = "all");
        information.name || (information.name = this.propertyKey.toLowerCase());

        return information;
    }
}

export var Http = ActionAttributeFactory(HttpAttribute);