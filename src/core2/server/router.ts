/**
 * Created by Federico on 26/4/2017.
 */

import { Router as ExpressRouter } from "Express";
import { Middleware } from "./middleware";
import { Route } from "./route";
import { Server } from "./server";

export class Router{

    public routerName: string;
    public middleware: Middleware[];
    public routes: Route[];

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