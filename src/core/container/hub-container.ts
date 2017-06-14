import {interfaces} from "inversify";

export interface HubContainer extends interfaces.Container {

    bindAndGet<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): T;
    
}