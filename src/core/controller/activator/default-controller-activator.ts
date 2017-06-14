import {ControllerActivator} from "./";
import {HubContainer} from "../../";

export class DefaultControllerActivator implements ControllerActivator{
    
    constructor(private hubContainer: HubContainer){

    }

    public buildControllerActivationFunction(controller: any, action: string): () => any {
        var controllerInstance = this.hubContainer.bindAndGet<any>(controller);
        return controllerInstance[action];
    }
}