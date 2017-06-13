export interface ControllerBuilderFactory{
    createControllerBuilder(controllerBuilderName: string): any;
}