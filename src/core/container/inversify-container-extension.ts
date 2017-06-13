import {ContainerExtension} from "./";
import {Container} from "inversify";

export class InversifyContainerExtension implements ContainerExtension {

    private extensions: {[key: string]: symbol} = {};
    private constructor(private container: Container){

    }

    public getContainerExtension<T>(type: any): T{

        if(!this.extensions[type.name]){
            this.extensions[type.name] = Symbol(type.name);
            this.container.bind(type.symbol).toProvider(type);
        }

        return this.container.get<T>(this.extensions[type.name]);
    }
}