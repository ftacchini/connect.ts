import { ControllerRoutes } from "./controller-routes.model";

export interface RouteMapper {
    mapController(controller: any) : ControllerRoutes;
}