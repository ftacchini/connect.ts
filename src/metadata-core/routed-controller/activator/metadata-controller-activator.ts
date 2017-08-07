import {HubContainer, ControllerActivator, Middleware} from "../../../core";

export class MetadataControllerActivator<RequestHandler> implements ControllerActivator<RequestHandler>{
    
    constructor(
        private hubContainer: HubContainer){
    }

    public buildControllerActivationFunction(controller: any, action: string): Middleware<any, RequestHandler> {        
        var controllerInstance = this.hubContainer.bindAndGet<any>(controller);
        return controllerInstance[action];
    }
}