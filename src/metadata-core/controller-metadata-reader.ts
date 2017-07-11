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

    public readControllerLevelMetadata<T extends ClassMetadata<Y>, Y>(metadataTags: symbol[], target: Object) : T[] {
        return _.flatten(metadataTags.map<T[]>((key) => { return Reflect.getMetadata(key, target)}));
    }

    public readMethodLevelMetadata<T extends MethodMetadata<Y>, Y>(metadataTags: symbol[], target: Object) : T[] {
        return this.readControllerLevelMetadata(metadataTags, target);   
    }

    public readArgumentLevelMetadata<T extends ArgumentMetadata<Y>, Y>(metadataTags: symbol[], target: Object) : T[] {
        return this.readControllerLevelMetadata(metadataTags, target);
    }
}