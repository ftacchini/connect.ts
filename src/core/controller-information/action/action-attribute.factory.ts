import { ControllerMetadataBuilder } from "../controller-metadata-builder.service";
import { AttributeConstructor } from "../attribute.constructor"


export function ActionAttributeFactory<T>(informationBuilder: AttributeConstructor<T>) {

    return function attributeDefinition(information?: T) {

        return function(target: any, propertyKey: string){
            var result = new informationBuilder(target).processInformation(information);
            ControllerMetadataBuilder.instance.attachPropertyInformation(target, propertyKey, information);
        }

    }

}