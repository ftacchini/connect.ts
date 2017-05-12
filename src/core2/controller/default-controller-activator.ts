import {ControllerActivator} from "./controller-activator";
import {ControllerFactory} from "./controller-factory";

export class DefaultControllerActivator implements ControllerActivator{
    
    constructor(private controllerFactory: ControllerFactory){

    }

    public buildControllerActivationFunction(controller: any, action: string): () => any {
        var controllerInstance = this.controllerFactory.createController(controller);
        return controllerInstance[action];
    }
}