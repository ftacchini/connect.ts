export interface FunctionReader {
    readFunction(target: any, propertyKey: string): Function;
}
