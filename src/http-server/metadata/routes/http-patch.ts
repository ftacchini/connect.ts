import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpPatchBuilder, HttpRouteInformation } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpPatch =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpPatchBuilder>(
    HttpPatchBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);