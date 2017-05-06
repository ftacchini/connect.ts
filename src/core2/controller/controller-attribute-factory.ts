/**
 * Created by Federico on 26/4/2017.
 */
import ControllerBuilder from "./controller.builder";

export function ControllerAttributeFactory<T>(controllerBuilder: new(target: any, information?: T) => ControllerBuilder){

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var controllerBuilder = new controllerBuilder(target, information);
        }
    }
}