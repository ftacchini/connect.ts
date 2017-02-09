import { Attribute } from "../attribute.attribute";
import { GetActionInformation } from "./get-action-information.model"
import { ActionAttributeFactory } from "./action-attribute.factory";
import { HttpAttribute } from "./http.attribute"; 

export class HttpGetAttribute extends HttpAttribute {

    constructor(target: any, propertyKey: string){
        super(target, propertyKey);
    }

    processInformation(information: GetActionInformation): GetActionInformation {

        information || (information = new GetActionInformation());

        super.processInformation(information);
        return information;
    }
}

export var Get = ActionAttributeFactory(HttpGetAttribute);