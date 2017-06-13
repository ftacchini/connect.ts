export interface ContainerExtension {
    getContainerExtension<T>(type: any): T;
}