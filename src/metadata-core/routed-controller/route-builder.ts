import {Route} from "./";
import {MethodMetadata} from "../../";

export abstract class RouteBuilder<Information> implements MethodMetadata<Information> {

    public information: Information;
    public target: any;   
    public propertyKey: string; 

    public constructor(){

    }

    public abstract buildRoute(): Route;

}