import { RouteBuilder } from "./route-builder.core";
import { ControllerRouter } from "./controller-router.core";
import * as express from "express";
import { Container } from "inversify";

export class DefaultRouteBuilder implements RouteBuilder{

    buildRoutes(
        controllerRouters: ControllerRouter[],
        //middleware: ControllerMiddleware,
        container: Container, 
        application: express.Application) : void{
        
        controllerRouters.forEach((controllerRouter) => {
            
            var router = express.Router();

            controllerRouter.propertyRoutes.forEach((property) => {
                let matcher = router[property.type];     
                matcher(property.routePath, (req, res) => {
                    console.log("the controller route was matched correctly")
                    
                });
            });
            
            application.use(controllerRouter.controllerPath, router);
        });

    }

}