/**
 * Created by Federico on 26/4/2017.
 */

import { Router as ExpressRouter, RequestHandler } from "Express";
import { HttpRoute } from "./http-route";
import { HttpServer } from "./http-server";
import { Router, Server } from "../server/server-module";

export class HttpRouter implements Router{

    public routerName: string;
    public middleware: RequestHandler[];
    public routes: HttpRoute[];

    public attachToServer(server: HttpServer) : ExpressRouter{
        var router = ExpressRouter();

        router.use(this.middleware);
        server.application.use(this.routerName, router);
        
        this.routes.forEach(route => {
            route.attachToRouter(router);
        });

        return router;
    }

    public supportsServer(server: Server): server is HttpServer{
        return server.application instanceof HttpServer;
    }

}