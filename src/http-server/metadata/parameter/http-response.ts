import { ControllerMetadataBuilder, ControllerMetadataKeys } from "../../../metadata-core";
import { HttpResponseParameterBuilder } from "../../routed-controller";
import * as HttpMetadataKeys from "../http-metadata-keys";

export const HttpResponse = ControllerMetadataBuilder.instance.buildArgumentLevelMetadata(
    HttpResponseParameterBuilder, 
    [ControllerMetadataKeys.PARAMETER_BUILDER, HttpMetadataKeys.HTTP_PARAMETER_BUILDER]);