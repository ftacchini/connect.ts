"use strict";
const _ = require("lodash");
const controller_routes_model_1 = require("../controller-routes.model");
const property_route_model_1 = require("../property-route.model");
class DefaultRouteMapper {
    mapController(metadata) {
        let controllerRouter = new controller_routes_model_1.ControllerRoutes(metadata.name);
        _.each(metadata.properties, (property, key) => {
            controllerRouter.propertyRoutes.push(new property_route_model_1.PropertyRoute(property.name, property.type, key));
        });
        return controllerRouter;
    }
}
exports.DefaultRouteMapper = DefaultRouteMapper;
//# sourceMappingURL=default-route-mapper.service.js.map