/**
 * Created by Federico on 26/4/2017.
 */

import {ControllerBuilder} from "../../controller/controller-module";
import {HttpControllerInformation} from "./http-controller-information";
import {Router, Route, Middleware} from "../../server/server-module";
import {HttpRouteBuilder} from "../route-builders/http-route-builder";
import * as MetadataKeys from "../http-metadata"
import * as _ from "lodash";

export class HttpControllerBuilder implements ControllerBuilder {

    constructor(private target: any, private information: HttpControllerInformation){
        
        this.information || (this.information = {
            name: this.target.constructor.name
        });

    }

    public buildRouter() : Router{
        var router = new Router();
        router.routerName = this.information.name;
        router.middleware = this.buildControllerMiddleware();
        router.routes = this.buildControllerRoutes();

        return router;
    }

    private buildControllerMiddleware(): Middleware[] {
        return null;
    }

    private buildControllerRoutes(): Route[] {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_ROUTE_BUILDER, this.target), 
            target => {
                var routeBuilder = <HttpRouteBuilder>target; 
                return routeBuilder.buildRoute();
            });
    }
}