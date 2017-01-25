export interface RouteMapper {
    mapControllers(controllerGetter: () => Object[]) : void;
}