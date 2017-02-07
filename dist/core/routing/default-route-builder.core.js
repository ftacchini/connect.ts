"use strict";
const express = require("express");
class DefaultRouteBuilder {
    buildRoutes(controllerRouters, container, application) {
        controllerRouters.forEach((controllerRouter) => {
            var router = express.Router();
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
//# sourceMappingURL=default-route-builder.core.js.map