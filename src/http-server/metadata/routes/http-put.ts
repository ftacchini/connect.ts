import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpPutBuilder, HttpRouteInformation } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpPut =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpPutBuilder>(
    HttpPutBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);