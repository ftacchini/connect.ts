import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpPostBuilder } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";


export var HttpPost =  ControllerMetadataBuilder.instance.buildMethodLevelMetadata(
    HttpPostBuilder, 
    [ControllerMetadataKeys.ROUTE_BUILDER, HttpMetadataKeys.HTTP_ROUTE_BUILDER]);