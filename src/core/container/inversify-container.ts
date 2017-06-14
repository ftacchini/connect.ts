import {HubContainer} from "./";
import {Container, interfaces} from "inversify";

export class InversifyContainer extends Container implements HubContainer {

    public constructor(){
        super();
    }


    bindAndGet<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T {
        try {
            this.get<T>(serviceIdentifier) || this.bind<T>(serviceIdentifier);
        }
        catch(ex) {
            this.bind<T>(serviceIdentifier);
        }

        return this.get<T>(serviceIdentifier);
    }
    
}