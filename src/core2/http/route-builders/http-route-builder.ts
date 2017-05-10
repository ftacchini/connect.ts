import {HttpRouteInformation} from "./http-route-information";
import {ControllerActivator} from "../../controller/controller-module";
import {HttpRoute} from "../http-route";
import {HttpRouteType} from "../http-route-type";
import {HttpMiddleware} from "../middleware/http-middleware";
import {HttpEmptyMiddleware} from "../middleware/http-empty-middleware";
import {HttpDefaultParametersReader} from "../parameters/default-http-parameters-reader";
import * as MetadataKeys from "../http-metadata"
import * as _ from "lodash";

export class HttpRouteBuilder {

    constructor(private target: any, private property: string, private information: HttpRouteInformation){
        
        this.information || (this.information = {
            route: this.target.constructor.name,
            type: "all"
        });

    }

    public buildRoute(controllerActivator: ControllerActivator) : HttpRoute{
        var route = new HttpRoute();
        route.middleware = _.union(
            this.buildRouteMiddleware(), 
            [this.buildControllerActivatorMiddleware(controllerActivator)]);
            
        route.routeName = this.information.route;
        route.routeType = this.information.type;
        return route;
    }

    private buildControllerActivatorMiddleware(controllerActivator: ControllerActivator): HttpMiddleware {
        var activatorFunction = controllerActivator.buildControllerActivationFunction(this.target, this.property);
        var paramsReader = new HttpDefaultParametersReader();
        var middleware = new HttpEmptyMiddleware(activatorFunction, paramsReader, 0);

        return middleware;
    }  

    private buildRouteMiddleware(): HttpMiddleware[] {
        return _.map(Reflect.getMetadata(MetadataKeys.HTTP_ROUTE_MIDDLEWARE, this.target), 
            target => {
                return <HttpMiddleware>target;
            });
    }
}