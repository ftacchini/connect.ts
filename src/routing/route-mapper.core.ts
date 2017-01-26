import { ControllerRouter } from "./controller-router.core";

export interface RouteMapper {
    mapController(controller: any) : ControllerRouter;
}