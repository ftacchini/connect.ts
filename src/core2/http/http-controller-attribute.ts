/**
 * Created by Federico on 26/4/2017.
 */
export class HttpController {

    constructor(
        private controllerInformation: HttpControllerInformation,
        private controllerClass: any
    ) {

    }

}


export function ControllerAttributeFactory<T>(informationBuilder: AttributeConstructor<T>) {

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var result = new informationBuilder(target).processInformation(information);
            ControllerMetadataBuilder.instance.attachControllerInformation(target, information);
        }

    }

}