import * as _ from "lodash";
import { RouteMapper } from "../route-mapper.service";
import { ControllerRoutes } from "../controller-routes.model";
import { PropertyRoute } from "../property-route.model";

export class DefaultRouteMapper implements RouteMapper {

    mapController(metadata: any): ControllerRoutes {
        
        let controllerRouter = new ControllerRoutes(metadata.name);
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