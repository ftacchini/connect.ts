/**
 * Created by Federico on 26/4/2017.
 */

import {ControllerBuilder, ControllerActivator} from "../../controller/controller-module";
import {HttpControllerInformation} from "./http-controller-information";
import {HttpMiddleware} from "../middleware/http-middleware";
import {Router} from "../../server/server-module";
import {HttpRouter} from "../http-router";
import {HttpRoute} from "../http-route";
import {HttpRouteBuilder} from "../route-builders/http-route-builder";
import * as MetadataKeys from "../http-metadata"
import * as _ from "lodash";

export class HttpControllerBuilder implements ControllerBuilder {

    constructor(private target: any, private information: HttpControllerInformation){
        
        this.information || (this.information = {
            name: this.target.constructor.name
        });

    }

    public buildRouter(controllerActivator: ControllerActivator) : Router{
        var router = new HttpRouter();
        router.routerName = this.information.name;
        router.middleware = this.buildControllerMiddleware();
        router.routes = this.buildControllerRoutes(controllerActivator);

        return router;
    }

    private buildControllerMiddleware(): HttpMiddleware[] {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_CONTROLLER_MIDDLEWARE, this.target), 
            target => {
                return <HttpMiddleware>target;
            });
    }

    private buildControllerRoutes(controllerActivator: ControllerActivator): HttpRoute[] {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_ROUTE_BUILDER, this.target), 
            target => {
                var routeBuilder = <HttpRouteBuilder>target; 
                return routeBuilder.buildRoute(controllerActivator);
            });
    }
}