import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../metadata-core";
import { HttpPatchBuilder } from "../routed-controller";
import * as HttpMetadataKeys from "./http-metadata-keys";


export var HttpPatch =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpPatchBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);