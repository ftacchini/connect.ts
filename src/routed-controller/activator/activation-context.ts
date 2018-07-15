export interface ActivationContext {
    getActivationFunction(propertyKey: string): Function;
}