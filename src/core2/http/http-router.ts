/**
 * Created by Federico on 26/4/2017.
 */

import { Router as ExpressRouter } from "Express";
import { Middleware } from "./middleware";
import { HttpRoute } from "./route";
import { Server } from "./server";

export class HttpRouter{

    public routerName: string;
    public middleware: HttpMiddleware[];
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