
export interface FunctionReader { 
    readFunctionFromNewTarget(target: any, propertyKey: string): Function;
    readFunction(target: any, propertyKey: string): Function;
}