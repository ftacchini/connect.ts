import {HubContainer} from "./";
import {Container, interfaces} from "inversify";
import { Types } from "./types";

export class InversifyContainer extends Container implements HubContainer {

    public constructor(){
        super();
    }


    bindAndGet<T>(service: interfaces.Newable<T>): T {
        
        Types[service.name] || (Types[service.name] = Symbol(service.name));

        try {
            this.get<T>(Types[service.name]) || this.bind<T>(Types[service.name]).to(service);
        }
        catch(ex) {
            this.bind<T>(Types[service.name]).to(service);
        }

        return this.get<T>(Types[service.name]);
    }
    
}