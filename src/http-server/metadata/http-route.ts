import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../metadata-core";
import { HttpAllBuilder } from "../routed-controller";
import * as HttpMetadataKeys from "./http-metadata-keys";


export var HttpRoute =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpAllBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);