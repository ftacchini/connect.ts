import {Middleware} from "../";
import {Server} from "../../../core";

export abstract class MiddlewareBuilder<Information, GenericRouter> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 
    public arg: number;

    public abstract buildMiddleware(): Middleware<Information, GenericRouter>;
    public abstract supportsRouter(router: GenericRouter): boolean;
}