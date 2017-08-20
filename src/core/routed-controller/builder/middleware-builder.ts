import {Middleware} from "../middleware";
import {Server} from "../../../core";

export abstract class MiddlewareBuilder<Information, GenericRouter, RequestHandler> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 
    public arg: number;

    constructor() {

    }

    public abstract buildMiddleware(router: GenericRouter): Middleware<Information, RequestHandler>;

    public abstract supportsRouter(router: GenericRouter): boolean;
}