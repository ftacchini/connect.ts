import {RouteReader, RouteBuilder} from "../../../core";
import {ControllerMetadataReader} from "../../helpers";

export class MetadataRouteReader implements RouteReader{

    private metadataTags: symbol[];

    constructor(){
        this.metadataTags = [];
    }

    readRoutes<GenericRouter, RequestHandler>(router: GenericRouter, target: Object): RouteBuilder<any, GenericRouter, RequestHandler>[] {
        return ControllerMetadataReader.instance
                .readControllerLevelMetadata<RouteBuilder<any, GenericRouter, RequestHandler>>(this.metadataTags, target)
                .filter(route => route.supportsRouter(router));
    }
}