import {ControllerFactory} from "./controller-factory";
import { Container } from "inversify";

export class DefaultControllerFactory implements ControllerFactory {

    private controllerMappings: {[key: string]: symbol} = {};

    constructor(private container: Container){

    }

    public createController(controller: any): any{

        if(!this.controllerMappings[controller.name]){
            this.controllerMappings[controller.name] = Symbol(controller.name);
            this.container.bind(controller.symbol).toProvider(controller);
        }

        return this.container.get(this.controllerMappings[controller.name]);
    }
}