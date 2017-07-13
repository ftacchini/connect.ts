import {Route} from "../";
import {Server} from "../../../core"

export abstract class RouteBuilder<Information, GenericRouter> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 

    public constructor(){

    }

    public abstract supportsRouter(router: GenericRouter): boolean;
    public abstract buildRoute(): Route<Information, GenericRouter>;

}