export interface ControllerActivator {
    buildControllerActivationFunction(controller: any, action: string): Function;
}