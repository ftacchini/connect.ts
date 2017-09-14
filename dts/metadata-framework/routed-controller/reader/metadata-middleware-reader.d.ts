import { MiddlewareReader, MiddlewareBuilder, HubContainer } from "../../../core";
import "reflect-metadata";
export declare class MetadataMiddlewareReader implements MiddlewareReader {
    private container;
    private metadataTags;
    constructor(container: HubContainer);
    readControllerMiddleware<GenericRouter, RequestHandler>(router: GenericRouter, target: Object): MiddlewareBuilder<any, GenericRouter, RequestHandler>[];
    readRouteMiddleware<GenericRouter, RequestHandler>(router: GenericRouter, target: Object, property: string): MiddlewareBuilder<any, GenericRouter, RequestHandler>[];
    filterMiddleware<GenericRouter, RequestHandler>(router: GenericRouter, middlewareBuilders: ((container: HubContainer) => MiddlewareBuilder<any, GenericRouter, RequestHandler>)[]): MiddlewareBuilder<any, GenericRouter, RequestHandler>[];
}
