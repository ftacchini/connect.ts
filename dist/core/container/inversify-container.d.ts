import { HubContainer } from "./";
import { Container, interfaces } from "inversify";
export declare class InversifyContainer extends Container implements HubContainer {
    constructor();
    bindAndGet<T>(service: interfaces.Newable<T>): T;
}
