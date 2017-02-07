import * as express from "express";
import { ApplicationConfig, TYPES } from "../configuration/configuration.module";
import { Container } from "inversify";
import * as _ from "lodash";
import { ControllerLoader } from "./controller-loader.core";
import { RouteMapper } from "./route-mapper.core";
import { ControllerRouter } from "./controller-router.core";
import { RouteBuilder } from "./route-builder.core";

export class RouteLoader {

    private static _instance: RouteLoader;
    public static get instance(): RouteLoader{
        return this._instance || (this._instance = new RouteLoader());
    }

    
    public loadRoutes(
        container: Container, 
        configuration: ApplicationConfig, 
        application: express.Application): void {

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
                   let controllerRouters: ControllerRouter[] = _.map(routers, (router) => {
                        return router.mapController(controller);
                    });

                    routeBuilder.buildRoutes(controllerRouters, container, application);

                });
            }
    }
}