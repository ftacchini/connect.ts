import * as express from "express";
import { ApplicationConfig, TYPES } from "../configuration/configuration.module";
import { Container } from "inversify";
import * as _ from "lodash";
import { ControllerLoader } from "./controller-loader.core";
import { RouteMapper } from "./route-mapper.core";

export class RouteLoader {

    private static _instance: RouteLoader;
    public static get instance(): RouteLoader{
        return this._instance || (this._instance = new RouteLoader());
    }

    
    public loadRoutes(
        container: Container, 
        configuration: ApplicationConfig, 
        application: Express.Application): void {

            var controllers: any[] = []; 

            _.each(configuration.controllerLoaders, (loader) => {
                controllers = _.union(controllers, container.get<ControllerLoader>(loader).loadControllers());
            });
            
            if(controllers.length){
                
                var routers: RouteMapper[] = []; 

                _.each(configuration.routers, (router) => {
                    routers.push(container.get<RouteMapper>(router));
                });

                var controllerRoutes: ControllerRoute[] = [];

                _.each(controllers, (controller) => {
                    _.each(routers, (router) => {
                        return router.mapControllers(controller.__controllerMetadata);
                    });
                });
            }
    }
}