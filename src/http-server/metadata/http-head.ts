import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../metadata-core";
import { HttpHeadBuilder } from "../routed-controller";
import * as HttpMetadataKeys from "./http-metadata-keys";


export var HttpHead =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpHeadBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);