import { Container, injectable, interfaces } from 'inversify';

import { HubContainer } from './';
import { Types } from './types';

@injectable()
export class InversifyContainer extends Container implements HubContainer {

    public constructor(){
        super();
    }


    bindAndGet<T>(service: interfaces.Newable<T>): T {
        
        Types[service.name] || (Types[service.name] = Symbol(service.name));

        if(!this.isBound(Types[service.name])) {
            this.bind<T>(Types[service.name]).to(service);
        }

        return this.get<T>(Types[service.name]);
    }
    
}