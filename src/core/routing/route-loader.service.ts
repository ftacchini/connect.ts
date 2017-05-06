import { Application } from "express";
import { ApplicationConfiguration } from "../configuration/configuration.module";
import { Container } from "inversify";
import * as _ from "lodash";
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
                controllers = _.union(controllers, new loader(configuration.routerConfig, container).loadControllerBuilders());
            });
            
            if(controllers.length){

                let routeBuilder: RouteBuilder = new configuration.routerConfig.routeBuilder(configuration.routerConfig, container);

                _.each(controllers, (controller) => {
                    var metadata = ControllerMetadataBuilder.instance.controllerInformation(controller);
                    routeBuilder.buildRoutes(metadata, application);

                });
            }
    }
}