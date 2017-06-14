import {ClassMetadata} from "./";

export interface MethodMetadata<Information> extends ClassMetadata<Information>{
    propertyKey: string;
}