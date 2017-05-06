import { RouteBuilder } from "../route-builder.service";
import { Application, Router } from "express";
import * as _ from "lodash";
import { Activator } from "../../activator/activator.module";

export class DefaultRouteBuilder implements RouteBuilder{

    constructor(){

    }

    buildRoutes(
        controllerMetadata: any,
        activator: Activator,
        application: Application) : void{

        if(!controllerMetadata.name){
            return;
        }

        var router = Router();

        _.each(controllerMetadata.properties, (property, key) => {
            let matcher = router[property.type] || router["all"];

            matcher(property.name, (req, res) => {
                activator.createActivatorMiddleware(key, req, res);
            });
        });

        console.log("controller route created: " + controllerMetadata.name);
        application.use(controllerMetadata.name, router);

    }

}