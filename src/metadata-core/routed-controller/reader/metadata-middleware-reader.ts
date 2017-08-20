import { RequestHandler } from 'express';
import {MiddlewareReader, MiddlewareBuilder} from "../../../core";
import {ControllerMetadataReader} from "../../helper";
import {injectable} from "inversify";
import "reflect-metadata";

@injectable()
export class MetadataMiddlewareReader implements MiddlewareReader{

    private metadataTags: symbol[];

    constructor(){
        this.metadataTags = [];
    }

    readControllerMiddleware<GenericRouter, RequestHandler>(router: GenericRouter, target: Object): MiddlewareBuilder<any, GenericRouter, RequestHandler>[] {
        return this.filterMiddleware(router, ControllerMetadataReader.instance.readControllerLevelMetadata<MiddlewareBuilder<any, GenericRouter, RequestHandler>>(this.metadataTags, target));
    }

    readRouteMiddleware<GenericRouter, RequestHandler>(router: GenericRouter, target: Object, property: string): MiddlewareBuilder<any, GenericRouter, RequestHandler>[] {
        return this.filterMiddleware(router, ControllerMetadataReader.instance.readMethodLevelMetadata<MiddlewareBuilder<any, GenericRouter, RequestHandler>>(this.metadataTags, target, property));
    }

    filterMiddleware<GenericRouter, RequestHandler>(router: GenericRouter, middlewareBuilders: MiddlewareBuilder<any, GenericRouter, RequestHandler>[]): MiddlewareBuilder<any, GenericRouter, RequestHandler>[] {
        return middlewareBuilders.filter(middlewareBuilder => middlewareBuilder.supportsRouter(router));
    }
}