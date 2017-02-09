"use strict";
const express_1 = require("express");
class DefaultRouteBuilder {
    buildRoutes(controllerRouters, container, application) {
        controllerRouters.forEach((controllerRouter) => {
            var router = express_1.Router();
            controllerRouter.propertyRoutes.forEach((property) => {
                let matcher = router[property.type];
                console.log("controller route created: " + property.routePath);
                matcher(property.routePath, (req, res) => {
                    console.log("the controller route was matched correctly");
                });
            });
            console.log("controller route created: " + controllerRouter.controllerPath);
            application.use(controllerRouter.controllerPath, router);
        });
    }
}
exports.DefaultRouteBuilder = DefaultRouteBuilder;
//# sourceMappingURL=default-route-builder.service.js.map