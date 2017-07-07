import {Route} from "../";
import {MethodMetadata} from "../../";
import {Server} from "../../../core"

export abstract class RouteBuilder<Information, GenericRouter> implements MethodMetadata<Information> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 

    public constructor(){

    }

    public abstract supportsServer(server: Server): boolean;
    public abstract buildRoute(): Route<GenericRouter>;

}