import * as _ from "lodash";
import { RouteMapper } from "./route-mapper.core";
import { ControllerRouter } from "./controller-router.core";
import { PropertyRoute } from "./property-route.core";
import * as express from "express";
import { ControllerMetadataBuilder } from "../controller-information/controller-information.module"

export class DefaultRouteMapper implements RouteMapper {

    mapController(controller: any): ControllerRouter {

        let metadata = ControllerMetadataBuilder.instance.controllerInformation(controller);

        let controllerRouter = new ControllerRouter(metadata.name);
        _.each(metadata.properties, (property, key) => {
            controllerRouter.propertyRoutes.push(new PropertyRoute(
                property.name,
                property.type,
                key
            ));
        });

        return controllerRouter;
    }
}