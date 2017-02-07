"use strict";
const _ = require("lodash");
const controller_router_core_1 = require("./controller-router.core");
const property_route_core_1 = require("./property-route.core");
const controller_information_module_1 = require("../controller-information/controller-information.module");
class DefaultRouteMapper {
    mapController(controller) {
        console.log(controller);
        let metadata = controller_information_module_1.ControllerMetadataBuilder.instance.controllerInformation(controller);
        let controllerRouter = new controller_router_core_1.ControllerRouter(metadata.name);
        _.each(metadata.properties, (property, key) => {
            controllerRouter.propertyRoutes.push(new property_route_core_1.PropertyRoute(property.name, property.type, key));
        });
        return controllerRouter;
    }
}
exports.DefaultRouteMapper = DefaultRouteMapper;
//# sourceMappingURL=default-route-mapper.core.js.map