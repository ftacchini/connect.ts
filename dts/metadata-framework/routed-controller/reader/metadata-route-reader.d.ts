import { RouteReader, RouteBuilder, HubContainer } from "../../../core";
import "reflect-metadata";
export declare class MetadataRouteReader implements RouteReader {
    private container;
    private metadataTags;
    constructor(container: HubContainer);
    readRoutes<GenericRouter, RequestHandler>(router: GenericRouter, target: any): RouteBuilder<any, GenericRouter, RequestHandler>[];
}
