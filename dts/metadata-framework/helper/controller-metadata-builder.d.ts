import { ClassMetadata } from "./class-metadata";
import { MethodMetadata } from "./method-metadata";
import { ArgumentMetadata } from "./argument-metadata";
export declare class ControllerMetadataBuilder {
    private static _instance;
    static readonly instance: ControllerMetadataBuilder;
    private constructor();
    buildControllerLevelMetadata<T, Y extends ClassMetadata<T>>(constructor: new (...args: any[]) => Y, metadataTags: symbol[]): (information?: T) => any;
    buildMethodLevelMetadata<T, Y extends MethodMetadata<T>>(constructor: new (...args: any[]) => Y, metadataTags: symbol[], extraSetters?: (instance: Y) => void): (information?: T) => any;
    buildArgumentLevelMetadata<T, Y extends ArgumentMetadata<T>>(constructor: new (...args: any[]) => Y, metadataTags: symbol[]): (information?: T) => any;
}
