import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpGetBuilder, HttpRouteInformation } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpGet =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata<HttpRouteInformation, HttpGetBuilder>(
    HttpGetBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);