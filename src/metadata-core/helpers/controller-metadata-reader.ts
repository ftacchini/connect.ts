import {ClassMetadata} from "./class-metadata";
import {MethodMetadata} from "./method-metadata";
import {ArgumentMetadata} from "./argument-metadata";
import * as _ from "lodash";

export class ControllerMetadataReader {

    private static _instance: ControllerMetadataReader;
    public static get instance(): ControllerMetadataReader {
        return this._instance || (this._instance = new ControllerMetadataReader());
    }

    private constructor() {

    }

    public readControllerLevelMetadata<T extends ClassMetadata<any>>(metadataTags: symbol[], target: Object) : T[] {
        return this.readMetadata<T>(metadataTags, target);   
    }

    public readMethodLevelMetadata<T extends MethodMetadata<any>>(metadataTags: symbol[], target: Object, property: string) : T[] {
        return this.readMetadata<T>(metadataTags, target);   
    }

    public readArgumentLevelMetadata<T extends ArgumentMetadata<any>>(metadataTags: symbol[], target: Object) : T[] {
        return this.readMetadata<T>(metadataTags, target);
    }

    public readMetadata<T>(metadataTags: symbol[], target: Object): T[]{
        return _.flatten(metadataTags.map<any[]>((key) => { return Reflect.getMetadata(key, target, "asd")}));

    }
}