import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpControllerBuilder } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const HttpHandler = ControllerMetadataBuilder.instance.buildControllerLevelMetadata(
    HttpControllerBuilder, 
    [ControllerMetadataKeys.CONTROLLER_BUILDER, HttpMetadataKeys.HTTP_CONTROLLER_BUILDER]);