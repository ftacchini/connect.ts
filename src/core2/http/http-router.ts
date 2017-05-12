/**
 * Created by Federico on 26/4/2017.
 */

import { Router as ExpressRouter, RequestHandler } from "Express";
import { HttpRoute } from "./http-route";
import { Server } from "../server/server-module";

export class HttpRouter{

    public routerName: string;
    public middleware: RequestHandler[];
    public routes: HttpRoute[];

    public attachToServer(server: Server) : ExpressRouter{

        var router = ExpressRouter();

        router.use(this.middleware);
        server.application.use(this.routerName, router);
        
        this.routes.forEach(route => {
            route.attachToRouter(router);
        });

        return router;
    }

}