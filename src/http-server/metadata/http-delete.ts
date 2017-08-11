import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../metadata-core";
import { HttpDeleteBuilder } from "../routed-controller";
import * as HttpMetadataKeys from "./http-metadata-keys";


export var HttpDelete =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpDeleteBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);