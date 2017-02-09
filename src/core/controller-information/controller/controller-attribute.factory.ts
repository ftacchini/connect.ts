import { ControllerMetadataBuilder } from "../controller-metadata-builder.service";
import { AttributeConstructor } from "../attribute.constructor"


export function ControllerAttributeFactory<T>(informationBuilder: AttributeConstructor<T>) {

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var result = new informationBuilder(target).processInformation(information);
            ControllerMetadataBuilder.instance.attachControllerInformation(target, information);
        }

    }

}