import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpGetBuilder } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpGet =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpGetBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);