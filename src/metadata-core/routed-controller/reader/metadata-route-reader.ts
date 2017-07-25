import {RouteReader, RouteBuilder} from "../../../core";
import {ControllerMetadataReader} from "../../helpers";

export class MetadataRouteReader implements RouteReader{

    private metadataTags: symbol[];

    constructor(){
        this.metadataTags = [];
    }

    readRoutes<GenericRouter>(router: GenericRouter, target: Object): RouteBuilder<any, GenericRouter>[] {
        return ControllerMetadataReader.instance
                .readControllerLevelMetadata<RouteBuilder<any, GenericRouter>>(this.metadataTags, target)
                .filter(route => route.supportsRouter(router));
    }
}