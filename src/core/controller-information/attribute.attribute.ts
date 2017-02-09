export interface Attribute<T>{
    processInformation(info: T): T;
}