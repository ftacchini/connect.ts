import {MiddlewareReader, MiddlewareBuilder} from "../../../core";
import {ControllerMetadataReader} from "../../helpers";

export class MetadataMiddlewareReader implements MiddlewareReader{

    private metadataTags: symbol[];

    constructor(){
        this.metadataTags = [];
    }

    readControllerMiddleware<GenericRouter>(router: GenericRouter, target: Object): MiddlewareBuilder<any, GenericRouter>[] {
        return this.filterMiddleware(router, ControllerMetadataReader.instance.readControllerLevelMetadata<MiddlewareBuilder<any, GenericRouter>>(this.metadataTags, target));
    }

    readRouteMiddleware<GenericRouter>(router: GenericRouter, target: Object, property: string): MiddlewareBuilder<any, GenericRouter>[] {
        return this.filterMiddleware(router, ControllerMetadataReader.instance.readMethodLevelMetadata<MiddlewareBuilder<any, GenericRouter>>(this.metadataTags, target, property));
    }

    filterMiddleware<GenericRouter>(router: GenericRouter, middlewareBuilders: MiddlewareBuilder<any, GenericRouter>[]): MiddlewareBuilder<any, GenericRouter>[] {
        return middlewareBuilders.filter(middlewareBuilder => middlewareBuilder.supportsRouter(router));
    }
}