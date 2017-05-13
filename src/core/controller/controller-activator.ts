export interface ControllerActivator {
    buildControllerActivationFunction(controller: any, action: string): () => any;
}