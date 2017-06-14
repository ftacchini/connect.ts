import {MethodMetadata} from "./";

export interface ArgumentMetadata<Information> extends MethodMetadata<Information>{
    arg: number;
}