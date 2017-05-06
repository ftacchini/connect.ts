import {Router, Route, Middleware} from "../../server/server-module";

export class HttpRouteBuilder {

    constructor(private target: any, private property: string, private information: HttpControllerInformation){
        
        this.information || (this.information = {
            name: this.target.constructor.name
        });

    }

    public buildRoute() : Route{
        var route = new Route();
        
        return route;
    }

    private buildControllerActivator(): Middleware {

    }  

    private buildRouteMiddleware(): Middleware[] {

    }
}