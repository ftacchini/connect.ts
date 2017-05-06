/**
 * Created by Federico on 26/4/2017.
 */
import { ControllerBuilder } from "./http";
import * as ControllerMetadata from "./http-metadata";

export function RouteAttributeFactory<T>(constructor: new(target: any, property: string, information?: T) => HttpRouteBuilder){

    return function attributeDefinition(information?: T) {

        return function(target: any){
            var controllerBuilder = new constructor(target, property, information);
            Reflect.defineMetadata(ControllerMetadata.HTTP_ROUTE_BUILDER, controllerBuilder, target);
        }
    }
}