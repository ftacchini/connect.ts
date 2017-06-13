import {ControllerBuilderFactory} from "./";
import {Container} from "inversify";
import {ControllerBuilder} from "../builder";

export class DefaultControllerBuilderFactory implements ControllerBuilderFactory {

    private controllerBuilderMappings: {[key: string]: symbol} = {};

    constructor(private container: Container){

    }

    public createControllerBuilder(controllerBuilder: any): ControllerBuilder{

        if(!this.controllerBuilderMappings[controllerBuilder.name]){
            this.controllerBuilderMappings[controllerBuilder.name] = Symbol(controllerBuilder.name);
            this.container.bind(controllerBuilder.symbol).toProvider(controllerBuilder);
        }

        return this.container.get<ControllerBuilder>(this.controllerBuilderMappings[controllerBuilder.name]);
    }
}