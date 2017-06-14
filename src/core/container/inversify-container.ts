import {HubContainer} from "./";
import {Container, interfaces} from "inversify";

export class InversifyContainer extends Container implements HubContainer {

    public constructor(){
        super();
    }


    bindAndGet<T>(service: interfaces.Newable<T>, serviceIdentifier?: interfaces.ServiceIdentifier<T>): T {
        
        serviceIdentifier || (serviceIdentifier = service);
        
        try {
            this.get<T>(serviceIdentifier) || this.bind<T>(serviceIdentifier).to(service);
        }
        catch(ex) {
            this.bind<T>(serviceIdentifier).to(service);
        }

        return this.get<T>(serviceIdentifier);
    }
    
}