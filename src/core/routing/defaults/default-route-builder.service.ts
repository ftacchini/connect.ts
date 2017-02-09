import { RouteBuilder } from "../route-builder.service";
import { ControllerRoutes } from "../controller-routes.model";
import { Application, Router } from "express";
import { Container } from "inversify";

export class DefaultRouteBuilder implements RouteBuilder{

    buildRoutes(
        controllerRouters: ControllerRoutes[],
        //middleware: ControllerMiddleware,
        container: Container, 
        application: Application) : void{
        
        controllerRouters.forEach((controllerRouter) => {
            
            var router = Router();

            controllerRouter.propertyRoutes.forEach((property) => {
                let matcher = router[property.type];     
                
                console.log("controller route created: " + property.routePath);
                matcher(property.routePath, (req, res) => {
                    console.log("the controller route was matched correctly")
                    
                });
            });
            
            console.log("controller route created: " + controllerRouter.controllerPath);
            application.use(controllerRouter.controllerPath, router);
        });

    }

}