export interface ControllerFactory{
    createController(controllerName: string): any;
}