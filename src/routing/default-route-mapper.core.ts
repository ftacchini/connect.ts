import * as _ from "lodash";


export class DefaultRouteMapper implements IRouteMapper{
    mapControllers(controllerMetadata: ControllerMetadata) : void {
        var controllers = controllerGetter();
        _.each(controllers, function(controller){
            
        })
    }
}