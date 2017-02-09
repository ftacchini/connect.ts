import { Application } from "express";
import { ApplicationConfiguration } from "../configuration/configuration.module";
import { Container } from "inversify";
import * as _ from "lodash";
import { ControllerLoader } from "./controller-loader.service";
import { RouteMapper } from "./route-mapper.service";
import { ControllerRoutes } from "./controller-routes.model";
import { RouteBuilder } from "./route-builder.service";
import { ControllerMetadataBuilder } from "../controller-information/controller-information.module"

export class RouteLoader {

    private constructor(){}

    private static _instance: RouteLoader;
    public static get instance(): RouteLoader{
        return this._instance || (this._instance = new RouteLoader());
    }

    
    public loadRoutes(
        container: Container, 
        configuration: ApplicationConfiguration, 
        application: Application): void {

            let controllers: any[] = []; 

            _.each(configuration.routerConfig.controllerLoaders, (loader) => {
                controllers = _.union(controllers, new loader(configuration.routerConfig, container).loadControllers());
            });
            
            if(controllers.length){
                        
                let routers: RouteMapper[] = _.map(configuration.routerConfig.routeMappers, (router) => {
                    return new router(configuration.routerConfig, container);
                });

                let routeBuilder: RouteBuilder = new configuration.routerConfig.routeBuilder(configuration.routerConfig, container);

                _.each(controllers, (controller) => {
                   let controllerRouters: ControllerRoutes[] = _.map(routers, (router) => {
                        let metadata = ControllerMetadataBuilder.instance.controllerInformation(controller.prototype);
                        return router.mapController(metadata);
                    });

                    routeBuilder.buildRoutes(controllerRouters, container, application);

                });
            }
    }
}