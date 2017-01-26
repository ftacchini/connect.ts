import * as express from "express";
import { ApplicationConfig, TYPES } from "../configuration/configuration.module";
import { Container } from "inversify";
import * as _ from "lodash";
import { ControllerLoader } from "./controller-loader.core";
import { RouteMapper } from "./route-mapper.core";
import { ControllerRouter } from "./controller-router.core";

export class RouteLoader {

    private static _instance: RouteLoader;
    public static get instance(): RouteLoader{
        return this._instance || (this._instance = new RouteLoader());
    }

    
    public loadRoutes(
        container: Container, 
        configuration: ApplicationConfig, 
        application: Express.Application): void {

            let controllers: any[] = []; 

            _.each(configuration.controllerLoaders, (loader) => {
                controllers = _.union(controllers, container.get<ControllerLoader>(loader).loadControllers());
            });
            
            if(controllers.length){
                
                let routers: RouteMapper[] = []; 

                _.each(configuration.routers, (router) => {
                    routers.push(container.get<RouteMapper>(router));
                });

                let controllerRouters: ControllerRouter[] = [];

                _.each(controllers, (controller) => {
                    _.each(routers, (router) => {
                        let controllerRouter = router.mapController(controller)
                        controllerRouter && controllerRouters.push(controllerRouter);
                    });
                });

                _.each(controllerRouters, (controllerRouter) => {
                    
                })
            }
    }
}