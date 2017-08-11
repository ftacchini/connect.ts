import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../metadata-core";
import { HttpPutBuilder } from "../routed-controller";
import * as HttpMetadataKeys from "./http-metadata-keys";


export var HttpPut =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpPutBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);