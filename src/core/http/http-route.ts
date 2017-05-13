/**
 * Created by Federico on 26/4/2017.
 */

import { Router as ExpressRouter, RequestHandler } from "Express";
import {HttpRouteType} from "./http-route-type";

export class HttpRoute {

    public routeType: HttpRouteType;
    public routeName: string;
    public middleware: RequestHandler[];

    public attachToRouter(router: ExpressRouter): void {
        router[this.routeType](this.routeName, this.middleware);
    }

}