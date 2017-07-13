import {MiddlewareReader} from "../../../core";
import {ControllerMetadataReader} from "../../helpers";

export class MetadataMiddlewareReader implements MiddlewareReader{

    private metadataTags: symbol[];

    constructor(){
        this.metadataTags = [];
    }

    readMiddleware<GenericRouter>(router: GenericRouter, target: Object): Middleware<any, GenericRouter>[] {
        return ControllerMetadataReader.instance.readMethodLevelMetadata(this.metadataTags, target);
    }
}