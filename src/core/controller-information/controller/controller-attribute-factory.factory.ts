import { ControllerMetadataBuilder } from "./controller-metadata-builder.core";

interface ControllerAttribute {
    
    getInformation(): any;
}

interface ControllerAttributeConstructor<T> {
    new(target: any): Attribute<T>;
}

export function controllerAttributeFactory<T>(informationBuilder: ControllerAttributeConstructor<T>) {

    return function attributeDefinition(information: T) {

        return function(target: any){
            var result = new informationBuilder(target).processInformation(information);
            ControllerMetadataBuilder.instance.attachControllerInformation(target, information);
        }

    }

}